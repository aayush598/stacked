"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

const sourceCode = `type User = {
  id: number;
  name: string;
};

function greet(user: User) {
  return \`Hello, \${user.name}\`;
}

greet({ id: 1, name: "Ada" });`;

const outputCode = `function greet(user) {
  return \`Hello, \${user.name}\`;
}

greet({ id: 1, name: "Ada" });`;

export function TypeErasureDemo() {
  const [view, setView] = useState<"source" | "output">("source");
  const source = view === "source";

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[15px] font-semibold text-mist">See what the browser receives</p>
          <p className="mt-0.5 text-[15px] text-faint">
            Types are checked before runtime, then removed from the emitted JavaScript.
          </p>
        </div>
        <div className="flex shrink-0 rounded-lg border border-line bg-raised p-0.5">
          <button
            type="button"
            onClick={() => setView("source")}
            className={cn(
              "rounded-md px-2.5 py-1.5 font-mono text-[13px] transition",
              source ? "bg-surface text-mist shadow-sm" : "text-muted hover:text-mist",
            )}
          >
            TypeScript
          </button>
          <button
            type="button"
            onClick={() => setView("output")}
            className={cn(
              "rounded-md px-2.5 py-1.5 font-mono text-[13px] transition",
              !source ? "bg-surface text-mist shadow-sm" : "text-muted hover:text-mist",
            )}
          >
            JavaScript
          </button>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_170px]">
        <div className="min-w-0 p-3 sm:p-4">
          <CodeBlock
            code={source ? sourceCode : outputCode}
            filename={source ? "greet.ts" : "greet.js"}
            compact
          />
        </div>
        <div className="border-t border-line bg-canvas/70 p-4 lg:border-l lg:border-t-0">
          <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-faint">
            Compile pipeline
          </p>
          <div className="mt-3 space-y-2">
            {[
              { label: ".ts source", active: source },
              { label: "type check", active: source },
              { label: ".js output", active: !source },
              { label: "browser runs", active: !source },
            ].map((step) => (
              <div
                key={step.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-2.5 py-2 font-mono text-[13px]",
                  step.active
                    ? "border-lime/25 bg-lime/[0.06] text-mist"
                    : "border-line bg-surface text-faint",
                )}
              >
                <span
                  className={cn(
                    "grid size-4 place-items-center rounded-full border",
                    step.active
                      ? "border-lime/30 bg-lime text-white"
                      : "border-line text-transparent",
                  )}
                >
                  <Check className="size-2.5" aria-hidden />
                </span>
                {step.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
