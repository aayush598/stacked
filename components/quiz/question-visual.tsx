import {
  ArrowDown,
  ArrowRight,
  Braces,
  Box,
  Check,
  CircleDot,
  Code2,
  Layers,
  Link2,
  MousePointerClick,
  Package,
  RotateCw,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Question } from "@/lib/content/schema";
import { cn } from "@/lib/utils";

function Tone({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "lime" | "coral" | "sky" | "violet";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 font-mono text-[11px]",
        tone === "default" && "border-line bg-white/[0.03] text-mist",
        tone === "lime" && "border-lime/25 bg-lime/[0.08] text-lime",
        tone === "coral" && "border-coral/25 bg-coral/[0.08] text-coral",
        tone === "sky" && "border-sky/25 bg-sky/[0.08] text-sky",
        tone === "violet" && "border-violet/25 bg-violet/[0.08] text-violet",
        className,
      )}
    >
      {children}
    </span>
  );
}

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return <ArrowDown className="mx-auto size-3.5 shrink-0 text-faint" aria-hidden />;
  }
  return <ArrowRight className="size-3.5 shrink-0 text-faint" aria-hidden />;
}

function VisualFrame({
  children,
  title,
  caption,
}: {
  children: ReactNode;
  title: string;
  caption: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#080b11]">
      <div className="flex items-center justify-between border-b border-line/70 px-3.5 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-faint">
          Visual
        </span>
        <span className="text-[10px] font-medium text-muted">{title}</span>
      </div>
      <div className="p-4">
        <div className="grid-lines rounded-xl border border-line/70 bg-white/[0.015] p-3.5">
          {children}
        </div>
        <p className="mt-2.5 text-[10px] leading-4 text-faint">{caption}</p>
      </div>
    </div>
  );
}

export function QuestionVisual({ question }: { question: Question }) {
  const { visual } = question;

  return (
    <VisualFrame title={visual.title} caption={visual.caption}>
      <VisualBody kind={visual.kind} />
    </VisualFrame>
  );
}

function VisualBody({ kind }: { kind: Question["visual"]["kind"] }) {
  switch (kind) {
    case "jsx-expression":
      return (
        <div className="space-y-2.5">
          <div className="rounded-lg border border-line bg-black/30 p-2.5 font-mono text-[11px] leading-6">
            <span className="text-sky">&lt;h1&gt;</span>
            <span className="text-mist/80">Hello, </span>
            <span className="rounded bg-lime/15 px-1 text-lime">{"{ learner.name }"}</span>
            <span className="text-sky">&lt;/h1&gt;</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-faint">
            <Braces className="size-3 text-lime" aria-hidden />
            braces run JavaScript
            <FlowArrow />
            <Tone tone="lime">learner.name → &quot;Ada&quot;</Tone>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-lime/15 bg-lime/[0.04] px-2.5 py-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-lime/70">
              output
            </span>
            <span className="text-xs text-mist">Hello, Ada!</span>
          </div>
        </div>
      );

    case "attribute-map":
      return (
        <div className="space-y-1.5">
          <div className="mb-2 grid grid-cols-[1fr_auto_1fr] gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
            <span>HTML</span>
            <span />
            <span>JSX</span>
          </div>
          {[
            ["class", "className"],
            ["for", "htmlFor"],
            ["onclick", "onClick"],
            ["tabindex", "tabIndex"],
          ].map(([html, jsx]) => (
            <div key={html} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <Tone tone="coral">{html}</Tone>
              <FlowArrow />
              <Tone tone="lime">{jsx}</Tone>
            </div>
          ))}
        </div>
      );

    case "self-closing":
      return (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 rounded-lg border border-coral/20 bg-coral/[0.05] px-2.5 py-2">
            <span className="grid size-5 place-items-center rounded-full bg-coral/15 text-coral">
              <X className="size-3" aria-hidden />
            </span>
            <code className="font-mono text-[11px] text-coral">&lt;img src=&quot;hero.png&quot;&gt;</code>
            <span className="ml-auto text-[9px] text-coral/70">never closed</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-lime/20 bg-lime/[0.05] px-2.5 py-2">
            <span className="grid size-5 place-items-center rounded-full bg-lime/15 text-lime">
              <Check className="size-3" aria-hidden />
            </span>
            <code className="font-mono text-[11px] text-lime">&lt;img src=&quot;hero.png&quot; /&gt;</code>
            <span className="ml-auto text-[9px] text-lime/70">self-closed</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-[10px] text-faint">
            <Code2 className="size-3" aria-hidden />
            no children → close inline
          </div>
        </div>
      );

    case "fragment-shell":
      return (
        <div className="space-y-3">
          <div className="rounded-xl border border-dashed border-lime/30 bg-lime/[0.03] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-lime/80">
                &lt;Fragment&gt;
              </span>
              <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[8px] text-faint">
                no DOM node
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 rounded-lg border border-line bg-white/[0.04] px-2 py-2 text-center font-mono text-[10px] text-mist">
                &lt;Header /&gt;
              </div>
              <div className="flex-1 rounded-lg border border-line bg-white/[0.04] px-2 py-2 text-center font-mono text-[10px] text-mist">
                &lt;Main /&gt;
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-[10px] text-faint">
            <Layers className="size-3 text-lime" aria-hidden />
            siblings stay siblings in the DOM
          </div>
        </div>
      );

    case "comment-token":
      return (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <Tone tone="violet">{"{"}</Tone>
            <Tone tone="lime">{"/*"}</Tone>
            <span className="rounded-md border border-line bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-muted">
              hidden text
            </span>
            <Tone tone="lime">{"*/"}</Tone>
            <Tone tone="violet">{"}"}</Tone>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="rounded-lg border border-line bg-black/20 px-1.5 py-1.5">
              <div className="font-mono text-[9px] text-violet">braces</div>
              <div className="mt-0.5 text-[8px] text-faint">enter JS</div>
            </div>
            <div className="rounded-lg border border-line bg-black/20 px-1.5 py-1.5">
              <div className="font-mono text-[9px] text-lime">block</div>
              <div className="mt-0.5 text-[8px] text-faint">ignored</div>
            </div>
            <div className="rounded-lg border border-line bg-black/20 px-1.5 py-1.5">
              <div className="font-mono text-[9px] text-mist">result</div>
              <div className="mt-0.5 text-[8px] text-faint">nothing</div>
            </div>
          </div>
        </div>
      );

    case "event-flow":
      return (
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-1.5">
            {[
              { icon: MousePointerClick, label: "click", tone: "sky" as const },
              { icon: Code2, label: "handleSave", tone: "violet" as const },
              { icon: RotateCw, label: "update", tone: "lime" as const },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-1 items-center gap-1.5">
                  <div className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-lg border border-line bg-black/20 px-1.5 py-2">
                    <Icon
                      className={cn(
                        "size-3.5",
                        step.tone === "sky" && "text-sky",
                        step.tone === "violet" && "text-violet",
                        step.tone === "lime" && "text-lime",
                      )}
                      aria-hidden
                    />
                    <span className="truncate font-mono text-[9px] text-mist">{step.label}</span>
                  </div>
                  {index < 2 && <FlowArrow />}
                </div>
              );
            })}
          </div>
          <div className="rounded-lg border border-line bg-white/[0.02] px-2.5 py-2 text-center font-mono text-[10px] text-faint">
            onClick={"{"}
            <span className="text-lime">handleSave</span>
            {"}"} <span className="text-faint/60">← function reference</span>
          </div>
        </div>
      );

    case "hook-anatomy":
      return (
        <div className="space-y-3">
          <div className="rounded-lg border border-line bg-black/30 p-2.5 text-center font-mono text-[11px] leading-6">
            <span className="text-violet">const</span>{" "}
            <span className="rounded bg-sky/15 px-1 text-sky">[count, setCount]</span>{" "}
            <span className="text-faint">=</span>{" "}
            <span className="rounded bg-lime/15 px-1 text-lime">useState(0)</span>
            <span className="text-faint">;</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "current state", value: "count", tone: "sky" as const },
              { label: "setter", value: "setCount", tone: "sky" as const },
              { label: "initial", value: "0", tone: "lime" as const },
            ].map((part) => (
              <div
                key={part.label}
                className="rounded-lg border border-line bg-white/[0.02] px-1.5 py-1.5 text-center"
              >
                <Tone tone={part.tone} className="border-0 bg-transparent px-0 py-0 text-[10px]">
                  {part.value}
                </Tone>
                <div className="mt-1 text-[8px] uppercase tracking-[0.1em] text-faint">
                  {part.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "state-cycle":
      return (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "event", detail: "click", tone: "sky" as const },
              { label: "setter", detail: "setCount(n + 1)", tone: "violet" as const },
              { label: "re-render", detail: "React runs it", tone: "coral" as const },
              { label: "new UI", detail: "count = n + 1", tone: "lime" as const },
            ].map((step, index) => (
              <div
                key={step.label}
                className={cn(
                  "relative rounded-lg border bg-black/20 px-2.5 py-2",
                  step.tone === "lime" ? "border-lime/25" : "border-line",
                )}
              >
                <div className="flex items-center gap-1.5">
                  <CircleDot
                    className={cn(
                      "size-3",
                      step.tone === "sky" && "text-sky",
                      step.tone === "violet" && "text-violet",
                      step.tone === "coral" && "text-coral",
                      step.tone === "lime" && "text-lime",
                    )}
                    aria-hidden
                  />
                  <span className="text-[10px] font-medium text-mist">{step.label}</span>
                  <span className="ml-auto font-mono text-[8px] text-faint">
                    {index + 1}
                  </span>
                </div>
                <div className="mt-1 truncate font-mono text-[9px] text-faint">{step.detail}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <RotateCw className="size-3 text-lime" aria-hidden />
            state is a snapshot that becomes the next render
          </div>
        </div>
      );

    case "condition-branch":
      return (
        <div className="space-y-2">
          <div className="mx-auto w-fit rounded-lg border border-violet/25 bg-violet/[0.07] px-3 py-1.5 font-mono text-[10px] text-violet">
            condition
          </div>
          <div className="mx-auto flex w-40 items-start justify-center">
            <span className="h-3 w-px bg-line" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-lime/25 bg-lime/[0.06] px-2.5 py-2 text-center">
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-lime/70">
                true
              </div>
              <div className="mt-1 font-mono text-[10px] text-lime">Welcome back</div>
            </div>
            <div className="rounded-lg border border-line bg-black/20 px-2.5 py-2 text-center opacity-60">
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                false
              </div>
              <div className="mt-1 font-mono text-[10px] text-faint">Please sign in</div>
            </div>
          </div>
          <p className="text-center text-[9px] text-faint">only one branch is rendered</p>
        </div>
      );

    case "list-map":
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-1.5">
            <div className="flex-1 space-y-1">
              {["{ id: 1 }", "{ id: 2 }"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-line bg-black/20 px-2 py-1 font-mono text-[9px] text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-0.5 px-1">
              <span className="font-mono text-[8px] text-lime">.map()</span>
              <FlowArrow />
            </div>
            <div className="flex-1 space-y-1">
              {["<li key={1}>", "<li key={2}>"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-lime/20 bg-lime/[0.05] px-2 py-1 font-mono text-[9px] text-lime"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Link2 className="size-3 text-lime" aria-hidden />
            data → JSX elements + identity
          </div>
        </div>
      );

    case "key-list":
      return (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                before
              </div>
              {["Ada", "Linus", "Grace"].map((name, index) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-md border border-line bg-black/20 px-2 py-1.5"
                >
                  <span className="text-[10px] text-mist">{name}</span>
                  <span className="rounded bg-sky/10 px-1 font-mono text-[8px] text-sky">
                    key {index + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-faint">
                after reorder
              </div>
              {["Grace", "Ada", "Linus"].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-md border border-lime/20 bg-lime/[0.04] px-2 py-1.5"
                >
                  <span className="text-[10px] text-mist">{name}</span>
                  <span className="rounded bg-lime/10 px-1 font-mono text-[8px] text-lime">
                    key {["3", "1", "2"][["Grace", "Ada", "Linus"].indexOf(name)]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-[9px] text-faint">React follows the key, not the position</p>
        </div>
      );

    case "style-object":
      return (
        <div className="space-y-2">
          <div className="rounded-lg border border-line bg-black/30 p-2.5 text-center font-mono text-[10px] leading-5">
            style=<span className="rounded bg-violet/15 px-1 text-violet">{"{"}</span>
            <span className="rounded bg-lime/15 px-1 text-lime">
              {'{ color: "coral" }'}
            </span>
            <span className="rounded bg-violet/15 px-1 text-violet">{"}"}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-violet/20 bg-violet/[0.04] px-2 py-1.5">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-violet">
                outer braces
              </div>
              <div className="mt-0.5 text-[9px] text-faint">enter JavaScript</div>
            </div>
            <div className="rounded-lg border border-lime/20 bg-lime/[0.04] px-2 py-1.5">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-lime">
                inner braces
              </div>
              <div className="mt-0.5 text-[9px] text-faint">create an object</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-[9px] text-faint">
            <Box className="size-3 text-lime" aria-hidden />
            camelCase keys: backgroundColor
          </div>
        </div>
      );

    case "props-flow":
      return (
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-lg border border-sky/20 bg-sky/[0.05] px-2.5 py-2.5">
            <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-sky/80">
              parent
            </div>
            <div className="mt-1 font-mono text-[10px] text-mist">&lt;Card /&gt;</div>
            <div className="mt-1.5 flex flex-wrap gap-1">
              <Tone tone="sky" className="text-[9px]">
                title=&quot;React&quot;
              </Tone>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-mono text-[8px] text-faint">props</span>
            <FlowArrow />
          </div>
          <div className="flex-1 rounded-lg border border-lime/20 bg-lime/[0.04] px-2.5 py-2.5">
            <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-lime/80">
              child
            </div>
            <div className="mt-1 font-mono text-[10px] text-mist">Card({"{ title }"})</div>
            <div className="mt-1.5 text-[9px] text-faint">
              reads <span className="font-mono text-lime">title</span>
            </div>
          </div>
        </div>
      );

    case "component-tree":
      return (
        <div className="space-y-2">
          <div className="rounded-lg border border-sky/20 bg-sky/[0.04] px-2.5 py-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-sky">&lt;Panel&gt;</span>
              <span className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[8px] text-faint">
                wrapper
              </span>
            </div>
            <div className="mt-2 rounded-md border border-dashed border-lime/30 bg-lime/[0.04] px-2.5 py-2">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-lime/70">
                children slot
              </div>
              <div className="mt-1 font-mono text-[10px] text-mist">&lt;span&gt;Hello&lt;/span&gt;</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Layers className="size-3 text-lime" aria-hidden />
            content between tags becomes children
          </div>
        </div>
      );

    case "controlled-input":
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border border-sky/20 bg-sky/[0.05] px-2 py-2 text-center">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-sky/70">
                state
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-mist">name</div>
            </div>
            <div className="flex flex-col items-center gap-0.5 px-1">
              <span className="font-mono text-[8px] text-lime">value</span>
              <FlowArrow />
            </div>
            <div className="flex-1 rounded-lg border border-line bg-black/20 px-2 py-2 text-center">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                input
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-mist">value={"{"}name{"}"}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-lime/20 bg-lime/[0.04] px-2.5 py-1.5">
            <RotateCw className="size-3 shrink-0 text-lime" aria-hidden />
            <span className="font-mono text-[9px] text-mist">onChange</span>
            <FlowArrow />
            <span className="font-mono text-[9px] text-lime">setName(e.target.value)</span>
          </div>
          <p className="text-center text-[9px] text-faint">state is the single source of truth</p>
        </div>
      );

    case "module-map":
      return (
        <div className="flex items-center gap-2">
          <div className="rounded-lg border border-sky/20 bg-sky/[0.05] px-2.5 py-3 text-center">
            <Package className="mx-auto size-4 text-sky" aria-hidden />
            <div className="mt-1 font-mono text-[10px] text-mist">react</div>
            <div className="text-[8px] text-faint">package</div>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-mono text-[8px] text-faint">named</span>
            <FlowArrow />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            {["useState", "useEffect", "useRef"].map((hook) => (
              <div
                key={hook}
                className="flex items-center gap-1.5 rounded-md border border-lime/20 bg-lime/[0.04] px-2 py-1"
              >
                <Braces className="size-2.5 text-lime" aria-hidden />
                <span className="font-mono text-[9px] text-lime">{hook}</span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
