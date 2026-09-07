// Bump when the bio changes.
const UPDATED = "Sep 7, 2026";

export default function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Jonathan Adoo
        </h1>
        <p className="text-sm text-muted">Updated {UPDATED}</p>
      </div>

      <div className="space-y-4 text-[15px] leading-relaxed">
        <p>I was born in Accra and still live in Accra.</p>

        <p>
          I just finished my degree in Computer Engineering at{" "}
          <a
            href="https://www.knust.edu.gh"
            target="_blank"
            rel="noopener noreferrer"
          >
            KNUST
          </a>
          .
        </p>

        <p>
          I currently work at{" "}
          <a
            href="https://www.linkedin.com/company/mikrobot-academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mikrobot Academy
          </a>{" "}
          as a Robotics Trainer.
        </p>

        <p>
          I build and maintain open source robotics tools, and write backend and
          systems software &mdash; recently a booking service that cannot
          double-book, and a link checker in Go.
        </p>

        <p>
          You can find me on{" "}
          <a
            href="https://github.com/adoodevv"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://x.com/adoodevv"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/jonathan-adoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , or reach me via{" "}
          <a href="mailto:adoojonathan412@gmail.com">email</a>.
        </p>
      </div>
    </div>
  );
}
