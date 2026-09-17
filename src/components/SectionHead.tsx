import Link from "next/link";

export default function SectionHead({
  label,
  href,
  cta,
}: {
  label: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-rule pb-2">
      <h2 className="font-mono text-[12.5px] font-normal tracking-wide text-ink-faint">
        {label}
      </h2>

      {href && cta ? (
        <Link
          href={href}
          className="shrink-0 font-mono text-[12px] text-ink-faint no-underline transition-colors hover:text-ink"
        >
          {cta} →
        </Link>
      ) : null}
    </div>
  );
}
