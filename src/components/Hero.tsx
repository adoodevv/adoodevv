import Image from "next/image";

// The one line under the name: handle, then what I actually write code in.
const HANDLE = "adoodevv";
const LANGUAGES = ["python", "c++", "go", "typescript"];

export default function Hero() {
  return (
    <header>
      <div className="mb-7 flex items-center gap-4 sm:gap-5">
        <Image
          src="/avatar.jpg"
          alt="Jonathan Adoo"
          width={156}
          height={156}
          priority
          className="h-[68px] w-[68px] shrink-0 rounded-full object-cover ring-1 ring-rule-strong sm:h-[78px] sm:w-[78px]"
        />

        <div className="min-w-0">
          <h1 className="mb-1.5 text-[30px] leading-none font-semibold tracking-tight text-ink sm:text-[38px]">
            jonathan
          </h1>
          <p className="font-mono text-[12px] tracking-wide text-ink-faint sm:text-[12.5px]">
            {HANDLE} · {LANGUAGES.join(" / ")}
          </p>
        </div>
      </div>

      <div className="max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft sm:text-[16px]">
        <p>
          i love robots and software, so i build them. robotics trainer at{" "}
          <a
            href="https://www.linkedin.com/company/mikrobot-academy"
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-rule-strong underline-offset-4 transition-colors hover:decoration-ink"
          >
            mikrobot
          </a>
          , where i teach robots to move and humans to not blame the robot.
          otherwise: ros 2 stacks, full-stack software, and ai.
        </p>
      </div>
    </header>
  );
}
