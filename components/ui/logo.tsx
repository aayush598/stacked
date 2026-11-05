import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative grid size-9 place-items-center rounded-xl bg-lime text-[#12160a] shadow-[0_8px_30px_-10px_rgba(201,249,104,0.8)] transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden>
          <path
            d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z"
            fill="currentColor"
            opacity=".92"
          />
          <path
            d="m4 12.5 8 4.5 8-4.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m4 16.5 8 4.5 8-4.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".55"
          />
        </svg>
      </span>
      {!compact && (
        <span className="font-sans text-[1.05rem] font-semibold tracking-tight text-mist">
          stacked<span className="text-lime">.</span>
        </span>
      )}
    </Link>
  );
}
