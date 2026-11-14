"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Flame, Zap } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NotesBell } from "@/components/notes/notes-bell";
import { useHydrated } from "@/lib/hooks/use-hydrated";
import { currentStreak, useProgressStore } from "@/lib/store/progress-store";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Courses" },
  { href: "/notes", label: "Notes" },
  { href: "/lab", label: "Lab" },
  { href: "/play/html/easy", label: "Play" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const profile = useProgressStore((state) => state.profile);
  const activeSession = useProgressStore((state) => state.activeSession);
  const streak = hydrated ? currentStreak(profile) : null;
  const playHref = `/play/${activeSession?.courseId ?? "html"}/${activeSession?.tier ?? "easy"}`;

  return (
    <header className="glass sticky top-0 z-50 border-b border-line">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-7">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/play")
                    ? pathname.startsWith("/play")
                    : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-raised text-mist"
                      : "text-muted hover:bg-raised/70 hover:text-mist",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/learn"
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted transition hover:text-mist md:hidden"
          >
            Courses
          </Link>
          <Link
            href="/notes"
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted transition hover:text-mist md:hidden"
          >
            Notes
          </Link>
          <Link
            href="/lab"
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted transition hover:text-mist md:hidden"
          >
            Lab
          </Link>
          <NotesBell />
          <div className="hidden items-center gap-1.5 text-xs text-muted sm:flex">
            <Flame className="size-3.5 text-coral" aria-hidden />
            <span className="font-mono text-[11px] text-mist">
              {streak === null ? "—" : streak}
            </span>
            <span className="hidden lg:inline">day streak</span>
          </div>
          <div className="hidden items-center gap-1.5 border-l border-line pl-3 text-xs text-muted sm:flex">
            <Zap className="size-3.5 text-lime" aria-hidden />
            <span className="font-mono text-[11px] text-mist">
              {hydrated ? profile.xp : "—"}
            </span>
            <span className="hidden lg:inline">XP</span>
          </div>
          <Link
            href={playHref}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-mist px-3.5 text-xs font-semibold text-canvas transition hover:bg-lime hover:text-white sm:px-4"
          >
            Play
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}
