import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-mist text-canvas transition-colors group-hover:bg-lime">
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" aria-hidden>
          <path
            d="M5 7.25h14M5 12h14M5 16.75h9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="text-[17px] font-semibold tracking-[-0.035em] text-mist">
          Stacked<span className="text-lime">.</span>
        </span>
      )}
    </Link>
  );
}
