"""Draws public/arm.gif, the footer loop: a small SO-101-style arm goes for a
cube, the cube walks off, the arm can't reach it, the cube comes back out of
pity, the arm finally lifts it and then drops it. Then it starts over.

Everything is drawn at 160x90, cropped to the 130x70 where things happen,
and scaled 3x with nearest-neighbour, so each logical pixel is a crisp 3x3
block. Black, white and greys like the rest of the site, plus one filament
orange for the cube's core and the arm's question mark.

    python3 scripts/make-arm-gif.py
"""

import math
from pathlib import Path

from PIL import Image, ImageDraw

W, H, SCALE = 160, 90, 3
# the bottom edge is the ground, so the arm stands on the footer rule
CROP = (14, 10, 144, 80)
FRAME_MS = 60

BG = (0, 0, 0)
INK = (255, 255, 255)
SOFT = (212, 212, 216)
FAINT = (143, 143, 151)
# the one colour: filament orange, for the cube's core and the arm's doubts
FILAMENT = (255, 122, 26)

GROUND = 80
SHOULDER = (40, 64)
L1, L2 = 28, 26
CUBE = 7
HOME = (54, 40)

# 3x5 glyphs for the little reactions over the arm and cube.
GLYPHS = {
    "!": ["010", "010", "010", "000", "010"],
    "?": ["111", "001", "011", "000", "010"],
}


def ease(t):
    return t * t * (3 - 2 * t)


def lerp(a, b, t):
    return a + (b - a) * t


def lerp2(p, q, t):
    return (lerp(p[0], q[0], t), lerp(p[1], q[1], t))


def ik(target):
    """Elbow-up two-link IK. Out of reach, the arm just points at the target,
    fully stretched, which is the joke."""
    sx, sy = SHOULDER
    dx, dy = target[0] - sx, target[1] - sy
    d = min(math.hypot(dx, dy), L1 + L2 - 0.01)
    a = math.atan2(dy, dx)
    b = math.acos((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))
    elbow = (sx + L1 * math.cos(a - b), sy + L1 * math.sin(a - b))
    wa = math.atan2(target[1] - elbow[1], target[0] - elbow[0])
    if math.hypot(dx, dy) > L1 + L2:
        wa = a
    wrist = (elbow[0] + L2 * math.cos(wa), elbow[1] + L2 * math.sin(wa))
    return elbow, wrist


def rest_top():
    return GROUND - CUBE


def hop(t, height=4):
    return -height * math.sin(math.pi * t)


def timeline():
    """Yields one state per frame: wrist target, gripper opening, cube
    position (centre x, top y), whether it's held, and a glyph."""
    home, above = HOME, (90, 52)
    grab, far = (90, 68), (106, 68)
    up = (90, 34)
    s = dict(wrist=home, open=1.0, cube=(90, rest_top()), held=False, glyph=None, dust=None)

    def frames(n, fn):
        for i in range(n):
            t = i / max(n - 1, 1)
            fn(t, i)
            yield dict(s)

    # idle
    yield from frames(8, lambda t, i: None)
    # over to the cube, and down
    yield from frames(10, lambda t, i: s.update(wrist=lerp2(home, above, ease(t))))
    yield from frames(6, lambda t, i: s.update(wrist=lerp2(above, (90, 62), ease(t))))
    # the cube is not having it
    yield from frames(6, lambda t, i: s.update(
        cube=(lerp(90, 106, ease(t)), rest_top() + hop(t)),
        glyph=("!", 104, 54) if i < 5 else None,
        dust=(90, GROUND - 1) if i < 3 else None,
    ))
    s.update(dust=None, glyph=None)
    # reach for it anyway
    yield from frames(10, lambda t, i: s.update(wrist=lerp2((90, 62), far, ease(t))))
    # strain, and wonder
    yield from frames(8, lambda t, i: s.update(
        wrist=(far[0] + (1 if i % 2 else -1), far[1]),
        glyph=("?", 64, 22) if i > 1 else None,
    ))
    s.update(glyph=None)
    # it comes back out of pity, while the arm pulls in
    yield from frames(7, lambda t, i: s.update(
        cube=(lerp(106, 90, ease(t)), rest_top() + hop(t)),
        wrist=lerp2(far, (90, 60), ease(t)),
    ))
    # gotcha
    yield from frames(5, lambda t, i: s.update(wrist=lerp2((90, 60), grab, ease(t))))
    yield from frames(4, lambda t, i: s.update(open=1 - ease(t)))
    s.update(held=True)
    yield from frames(10, lambda t, i: s.update(wrist=lerp2(grab, up, ease(t))))
    # victory lap
    yield from frames(8, lambda t, i: s.update(
        wrist=(up[0] + 2 * math.sin(i * math.pi / 2), up[1]),
        glyph=("!", 100, 16) if i < 6 else None,
    ))
    s.update(glyph=None, wrist=up)
    # oops
    yield from frames(2, lambda t, i: s.update(open=ease(t)))
    s.update(held=False)
    top = up[1] + 5
    yield from frames(6, lambda t, i: s.update(cube=(90, lerp(top, rest_top(), t * t))))
    yield from frames(3, lambda t, i: s.update(
        cube=(90, rest_top() + hop(t, 2)),
        dust=(90, GROUND - 1) if i < 2 else None,
    ))
    s.update(dust=None)
    # stare at it, then pretend that was the plan
    yield from frames(6, lambda t, i: s.update(glyph=("?", 80, 16) if i > 1 else None))
    s.update(glyph=None)
    yield from frames(10, lambda t, i: s.update(wrist=lerp2(up, home, ease(t))))


def glyph(d, ch, x, y):
    colour = FILAMENT if ch == "?" else INK
    for r, row in enumerate(GLYPHS[ch]):
        for c, bit in enumerate(row):
            if bit == "1":
                d.rectangle([x + 2 * c, y + 2 * r, x + 2 * c + 1, y + 2 * r + 1], fill=colour)


def draw(state):
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)

    # base
    sx, sy = SHOULDER
    d.polygon([(sx - 8, GROUND - 1), (sx + 8, GROUND - 1), (sx + 5, sy + 4), (sx - 5, sy + 4)], fill=FAINT)
    d.rectangle([sx - 3, sy, sx + 3, sy + 4], fill=FAINT)

    elbow, wrist = ik(state["wrist"])
    r = lambda p: (round(p[0]), round(p[1]))
    d.line([r(SHOULDER), r(elbow)], fill=SOFT, width=3)
    d.line([r(elbow), r(wrist)], fill=SOFT, width=3)
    for j in (SHOULDER, elbow):
        x, y = r(j)
        d.ellipse([x - 2, y - 2, x + 2, y + 2], fill=FAINT)

    # gripper: stem, palm, two fingers, always pointing down
    wx, wy = r(wrist)
    half = round(4 + 3 * state["open"])
    d.line([(wx, wy), (wx, wy + 3)], fill=SOFT)
    d.line([(wx - half, wy + 3), (wx + half, wy + 3)], fill=SOFT)
    d.line([(wx - half, wy + 3), (wx - half, wy + 9)], fill=SOFT)
    d.line([(wx + half, wy + 3), (wx + half, wy + 9)], fill=SOFT)

    if state["held"]:
        cx, top = wx, wy + 5
    else:
        cx, top = r(state["cube"])
    cx = round(cx)
    top = round(top)
    d.rectangle([cx - 3, top, cx + 3, top + CUBE - 1], fill=INK)
    d.rectangle([cx - 1, top + 2, cx + 1, top + 4], fill=FILAMENT)

    if state["dust"]:
        x, y = state["dust"]
        for dx, dy in ((-6, 0), (-8, -2), (6, 0), (8, -2)):
            d.point((x + dx, y + dy), fill=FAINT)

    if state["glyph"]:
        glyph(d, *state["glyph"])

    im = im.crop(CROP)
    return im.resize((im.width * SCALE, im.height * SCALE), Image.NEAREST)


def main():
    # One fixed palette with the background at index 0, which is then marked
    # transparent: the page under the footer has grain on it, and a solid
    # black box would show.
    colours = [BG, INK, SOFT, FAINT, FILAMENT]
    pal = Image.new("P", (1, 1))
    pal.putpalette([v for c in colours for v in c] + [0] * 3 * (256 - len(colours)))
    frames = [draw(s).quantize(palette=pal, dither=Image.Dither.NONE) for s in timeline()]
    out = Path(__file__).resolve().parent.parent / "public" / "arm.gif"
    frames[0].save(
        out,
        save_all=True,
        append_images=frames[1:],
        duration=FRAME_MS,
        loop=0,
        transparency=0,
        disposal=2,
    )
    print(f"{out} · {len(frames)} frames · {out.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
