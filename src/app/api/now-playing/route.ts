import { NextResponse } from "next/server";

// Three secrets, set in .env.local and in the host's dashboard. SETUP.md walks
// through where each one comes from.
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENT_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

// Nothing here is worth a stale answer, and a cached "now playing" is just a lie.
export const dynamic = "force-dynamic";
export const revalidate = 0;

type Track = {
  name?: string;
  external_urls?: { spotify?: string };
  artists?: { name?: string }[];
};

// Refresh tokens do not expire; access tokens last an hour. Rather than cache
// one, we trade the refresh token for a fresh access token per request — this
// route is called once every 30s at most, and a stale access token is a far
// more annoying bug than an extra round trip.
async function accessToken(): Promise<string | null> {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN as string,
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("spotify token refresh failed:", res.status, await res.text());
    return null;
  }

  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

function payload(track: Track | undefined, isPlaying: boolean) {
  if (!track?.name) return { configured: true, isPlaying: false, title: null };

  return {
    configured: true,
    isPlaying,
    title: track.name,
    artist: track.artists?.map((a) => a.name).filter(Boolean).join(", ") ?? null,
    songUrl: track.external_urls?.spotify ?? null,
  };
}

export async function GET() {
  // Before the secrets are set the widget should simply not be there, so this
  // is a 200 with `configured: false` rather than an error the client has to
  // special-case.
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return NextResponse.json({ configured: false }, { status: 200 });
  }

  try {
    const token = await accessToken();
    if (!token) return NextResponse.json({ configured: true, isPlaying: false });

    const auth = { Authorization: `Bearer ${token}` };

    // Spotify answers 204 with an empty body when nothing is playing — not an
    // error, just silence — so anything other than a 200 falls through to the
    // last played track.
    const now = await fetch(NOW_PLAYING_URL, { headers: auth, cache: "no-store" });
    if (now.status === 200) {
      const data = (await now.json()) as { is_playing?: boolean; item?: Track };
      if (data.item) return NextResponse.json(payload(data.item, data.is_playing === true));
    }

    const recent = await fetch(RECENT_URL, { headers: auth, cache: "no-store" });
    if (!recent.ok) return NextResponse.json({ configured: true, isPlaying: false });

    const data = (await recent.json()) as { items?: { track?: Track }[] };
    return NextResponse.json(payload(data.items?.[0]?.track, false));
  } catch (err) {
    console.error("spotify request failed:", err);
    return NextResponse.json({ configured: true, isPlaying: false }, { status: 200 });
  }
}
