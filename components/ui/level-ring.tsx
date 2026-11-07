"use client";

import { levelProgress } from "@/lib/utils";

export function LevelRing({ xp, size = 88 }: { xp: number; size?: number }) {
  const progress = levelProgress(xp);
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress.percent / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#dfe4dc"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2149e8"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-[9px] font-medium uppercase tracking-[0.12em] text-faint">
            Level
          </div>
          <div className="text-xl font-semibold leading-none text-mist">
            {progress.level}
          </div>
        </div>
      </div>
    </div>
  );
}
