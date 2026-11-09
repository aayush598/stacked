"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { useNotesStore } from "@/lib/store/notes-store";

export function NotesBell() {
  const hydrated = useNotesHydrated();
  const notifications = useNotesStore((state) => state.notifications);
  const unread = hydrated
    ? notifications.filter((notification) => notification.readAt === null).length
    : 0;

  return (
    <Link
      href="/notes#notifications"
      className="relative grid size-9 place-items-center rounded-lg border border-line bg-surface text-muted transition hover:border-line-strong hover:bg-raised hover:text-mist"
      aria-label={unread > 0 ? `${unread} unread note updates` : "Note updates"}
    >
      <Bell className="size-4" aria-hidden />
      {unread > 0 ? (
        <span className="absolute -right-1.5 -top-1.5 grid min-w-4 place-items-center rounded-full bg-coral px-1 py-0.5 font-mono text-[9px] font-semibold leading-none text-white">
          {unread > 9 ? "9+" : unread}
        </span>
      ) : null}
    </Link>
  );
}
