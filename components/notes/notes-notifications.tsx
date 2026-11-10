"use client";

import Link from "next/link";
import { ArrowUpRight, Bell, CheckCheck, Trash2 } from "lucide-react";
import { useNotesHydrated } from "@/lib/hooks/use-notes-hydrated";
import { useNotesStore } from "@/lib/store/notes-store";
import { cn, dayLabel } from "@/lib/utils";

export function NotesNotifications({ compact = false }: { compact?: boolean }) {
  const hydrated = useNotesHydrated();
  const notifications = useNotesStore((state) => state.notifications);
  const markNotificationRead = useNotesStore((state) => state.markNotificationRead);
  const markAllNotificationsRead = useNotesStore((state) => state.markAllNotificationsRead);
  const clearNotifications = useNotesStore((state) => state.clearNotifications);

  const unread = notifications.filter((notification) => notification.readAt === null).length;
  const visible = compact ? notifications.slice(0, 4) : notifications;

  return (
    <section id="notifications" className="scroll-mt-24">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[15px] font-medium text-lime">Review updates</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-mist">
            Notifications
          </h2>
          <p className="mt-1.5 max-w-2xl text-[15px] leading-6 text-muted">
            New human-reviewed sections are compared with the last status snapshot stored in
            this browser. First visits start quietly with no notifications.
          </p>
        </div>
        {notifications.length > 0 ? (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={markAllNotificationsRead}
              disabled={unread === 0}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 text-[13px] font-medium text-muted transition hover:border-line-strong hover:text-mist disabled:cursor-not-allowed disabled:opacity-40"
            >
              <CheckCheck className="size-3.5" aria-hidden />
              Mark all read
            </button>
            <button
              type="button"
              onClick={clearNotifications}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-line bg-surface px-2.5 text-[13px] font-medium text-muted transition hover:border-coral/30 hover:text-coral"
            >
              <Trash2 className="size-3.5" aria-hidden />
              Clear
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-line bg-surface">
        {!hydrated ? (
          <div className="space-y-3 p-4">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-12 rounded-lg bg-raised shimmer" />
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            <span className="grid size-10 place-items-center rounded-full bg-raised text-faint">
              <Bell className="size-4" aria-hidden />
            </span>
            <p className="mt-3 text-[15px] font-semibold text-mist">You are all caught up</p>
            <p className="mt-1 max-w-sm text-[15px] leading-5 text-faint">
              When a section moves from draft to human reviewed, it will appear here on your
              next visit.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-line">
            {visible.map((notification) => {
              const unreadItem = notification.readAt === null;
              return (
                <li key={notification.id}>
                  <Link
                    href={`/notes/${notification.sectionId.startsWith('react-') ? 'react' : notification.sectionId.startsWith('bs-') ? 'bootstrap' : 'typescript'}?section=${encodeURIComponent(notification.sectionId)}`}
                    onClick={() => markNotificationRead(notification.id)}
                    className={cn(
                      "group flex items-start gap-3 px-4 py-3.5 transition hover:bg-canvas",
                      unreadItem && "bg-lime/[0.025]",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-1 size-2 shrink-0 rounded-full",
                        unreadItem ? "bg-lime" : "bg-line-strong",
                      )}
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-[15px] font-medium text-mist">
                          {notification.sectionTitle}
                        </span>
                        {unreadItem ? (
                          <span className="rounded-full bg-lime/10 px-1.5 py-0.5 font-mono text-[13px] uppercase tracking-[0.1em] text-lime">
                            New
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-faint">
                        {notification.phaseTitle} · {notification.moduleTitle}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 pt-0.5 text-[13px] text-faint">
                      {dayLabel(notification.createdAt)}
                      <ArrowUpRight
                        className="size-3.5 text-faint transition group-hover:text-mist"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {compact && notifications.length > visible.length ? (
        <Link
          href="/notes#notifications"
          className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-lime hover:underline"
        >
          View all {notifications.length} updates
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      ) : null}
    </section>
  );
}
