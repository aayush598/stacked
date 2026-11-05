import { Award, Flame, Sparkles, Target, Zap } from "lucide-react";
import { BADGES } from "@/lib/badges";
import { cn } from "@/lib/utils";

const ICONS = [Sparkles, Flame, Zap, Award, Target];

export function BadgeShelf({
  earned,
  compact = false,
}: {
  earned: string[];
  compact?: boolean;
}) {
  return (
    <div className={cn("grid gap-2", compact ? "grid-cols-5" : "grid-cols-2 sm:grid-cols-5")}>
      {BADGES.map((badge, index) => {
        const Icon = ICONS[index % ICONS.length];
        const unlocked = earned.includes(badge.id);
        return (
          <div
            key={badge.id}
            title={badge.description}
            className={cn(
              "relative flex flex-col items-center rounded-xl border px-2 py-3 text-center transition",
              unlocked
                ? "border-lime/20 bg-lime/[0.05] text-lime"
                : "border-line bg-white/[0.02] text-faint opacity-60",
            )}
          >
            <Icon className="size-4" aria-hidden />
            <span className={cn("mt-1.5 text-[9px] font-medium", unlocked ? "text-mist" : "text-faint")}>
              {badge.name}
            </span>
            {!compact && (
              <span className="mt-0.5 hidden text-[8px] leading-3 text-faint sm:block">
                {badge.description}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
