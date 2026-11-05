"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Zap } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { currentStreak, useProgressStore } from "@/lib/store/progress-store";
import { cn, levelProgress } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/learn/react", label: "React path" },
  { href: "/play/react/easy", label: "Play easy" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const profile = useProgressStore((state) => state.profile);
  const streak = hydrated ? currentStreak(profile) : null;
  const level = levelProgress(profile.xp);

  return (
    <header className="glass sticky top-0 z-50 border-b border-line/70">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-white/[0.06] text-mist"
                      : "text-muted hover:bg-white/[0.04] hover:text-mist",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-muted sm:flex">
            <Flame className="size-3.5 text-coral" aria-hidden />
            <span className="font-mono text-[11px] text-mist">
              {streak === null ? "—" : streak}
            </span>
            <span className="hidden lg:inline">day streak</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-lime/20 bg-lime/[0.07] px-3 py-1.5 text-xs text-lime">
            <Zap className="size-3.5" aria-hidden />
            <span className="font-mono text-[11px]">{hydrated ? profile.xp : "—"}</span>
            <span className="hidden lg:inline">XP</span>
          </div>
          <Link
            href="/play/react/easy"
            className="group flex items-center gap-2 rounded-full bg-lime px-3.5 py-2 text-xs font-semibold text-[#111609] transition hover:bg-lime-soft sm:px-4"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#111609]/40" />
              <span className="relative inline-flex size-2 rounded-full bg-[#111609]" />
            </span>
            <span className="hidden sm:inline">Quick play</span>
            <span className="sm:hidden">Play</span>
            <span className="hidden items-center gap-1 border-l border-[#111609]/20 pl-2 font-mono text-[10px] md:flex">
              Lv {hydrated ? level.level : "—"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
