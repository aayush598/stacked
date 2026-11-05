"use client";

import { levelProgress } from "@/lib/utils";

export function LevelRing({ xp, size = 92 }: { xp: number; size?: number }) {
  const progress = levelProgress(xp);
  const stroke = 7;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress.percent / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#levelGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
        <defs>
          <linearGradient id="levelGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9f968" />
            <stop offset="100%" stopColor="#7cb8ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
            Lvl
          </div>
          <div className="text-xl font-semibold leading-none text-mist">
            {progress.level}
          </div>
        </div>
      </div>
    </div>
  );
}
