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
        tone === "default" && "border-line bg-canvas text-mist",
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
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between border-b border-line bg-canvas/50 px-3.5 py-2">
        <span className="text-[10px] font-medium text-faint">Visual</span>
        <span className="text-[10px] font-medium text-muted">{title}</span>
      </div>
      <div className="p-4">
        <div className="grid-lines rounded-lg border border-line bg-surface p-3.5">
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
          <div className="rounded-lg border border-line bg-canvas p-2.5 font-mono text-[11px] leading-6">
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
              <span className="rounded-full bg-raised px-2 py-0.5 text-[8px] text-faint">
                no DOM node
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 rounded-lg border border-line bg-raised px-2 py-2 text-center font-mono text-[10px] text-mist">
                &lt;Header /&gt;
              </div>
              <div className="flex-1 rounded-lg border border-line bg-raised px-2 py-2 text-center font-mono text-[10px] text-mist">
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
            <span className="rounded-md border border-line bg-raised px-2 py-1 font-mono text-[10px] text-muted">
              hidden text
            </span>
            <Tone tone="lime">{"*/"}</Tone>
            <Tone tone="violet">{"}"}</Tone>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="rounded-lg border border-line bg-canvas px-1.5 py-1.5">
              <div className="font-mono text-[9px] text-violet">braces</div>
              <div className="mt-0.5 text-[8px] text-faint">enter JS</div>
            </div>
            <div className="rounded-lg border border-line bg-canvas px-1.5 py-1.5">
              <div className="font-mono text-[9px] text-lime">block</div>
              <div className="mt-0.5 text-[8px] text-faint">ignored</div>
            </div>
            <div className="rounded-lg border border-line bg-canvas px-1.5 py-1.5">
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
                  <div className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-lg border border-line bg-canvas px-1.5 py-2">
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
          <div className="rounded-lg border border-line bg-canvas px-2.5 py-2 text-center font-mono text-[10px] text-faint">
            onClick={"{"}
            <span className="text-lime">handleSave</span>
            {"}"} <span className="text-faint/60">← function reference</span>
          </div>
        </div>
      );

    case "hook-anatomy":
      return (
        <div className="space-y-3">
          <div className="rounded-lg border border-line bg-canvas p-2.5 text-center font-mono text-[11px] leading-6">
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
                className="rounded-lg border border-line bg-canvas px-1.5 py-1.5 text-center"
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
                  "relative rounded-lg border bg-canvas px-2.5 py-2",
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
            <div className="rounded-lg border border-line bg-canvas px-2.5 py-2 text-center opacity-60">
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
                  className="rounded-md border border-line bg-canvas px-2 py-1 font-mono text-[9px] text-muted"
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
                  className="flex items-center justify-between rounded-md border border-line bg-canvas px-2 py-1.5"
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
          <div className="rounded-lg border border-line bg-canvas p-2.5 text-center font-mono text-[10px] leading-5">
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
              <span className="rounded bg-raised px-1.5 py-0.5 text-[8px] text-faint">
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
            <div className="flex-1 rounded-lg border border-line bg-canvas px-2 py-2 text-center">
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

    case "dependency-grid":
      return (
        <div className="space-y-2.5">
          <div className="rounded-lg border border-line bg-canvas p-2.5 font-mono text-[10px]">
            <span className="text-violet">useEffect</span>
            <span className="text-faint">(callback, </span>
            <span className="rounded bg-lime/15 px-1 text-lime">[userId, theme]</span>
            <span className="text-faint">)</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "userId", value: "42", tone: "sky" as const },
              { label: "theme", value: '"dark"', tone: "violet" as const },
              { label: "compare", value: "changed?", tone: "lime" as const },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-line bg-canvas px-2 py-1.5 text-center"
              >
                <Tone tone={item.tone} className="border-0 bg-transparent px-0 py-0 text-[9px]">
                  {item.value}
                </Tone>
                <div className="mt-1 font-mono text-[8px] text-faint">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <RotateCw className="size-3 text-lime" aria-hidden />
            any changed value schedules the effect again
          </div>
        </div>
      );

    case "ref-box":
      return (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border border-sky/20 bg-sky/[0.05] px-2 py-2 text-center">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-sky/70">
                render 1
              </div>
              <div className="mt-1 font-mono text-[10px] text-mist">useRef(null)</div>
            </div>
            <FlowArrow />
            <div className="flex-1 rounded-lg border border-lime/25 bg-lime/[0.06] px-2 py-2 text-center">
              <Box className="mx-auto size-3.5 text-lime" aria-hidden />
              <div className="mt-1 font-mono text-[9px] text-lime">{"{ current }"}</div>
            </div>
            <FlowArrow />
            <div className="flex-1 rounded-lg border border-line bg-canvas px-2 py-2 text-center">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                render 2
              </div>
              <div className="mt-1 font-mono text-[10px] text-mist">same box</div>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-canvas px-2.5 py-2 text-center font-mono text-[9px] text-faint">
            ref.current changes → <span className="text-lime">no re-render</span>
          </div>
        </div>
      );

    case "context-tree":
      return (
        <div className="space-y-2">
          <div className="mx-auto w-fit rounded-lg border border-violet/25 bg-violet/[0.07] px-3 py-1.5 font-mono text-[10px] text-violet">
            &lt;ThemeProvider value&gt;
          </div>
          <div className="mx-auto h-2 w-px bg-line" />
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Header", value: "theme" },
              { name: "Button", value: "theme" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-lime/20 bg-lime/[0.04] px-2 py-2 text-center"
              >
                <div className="font-mono text-[10px] text-mist">&lt;{item.name} /&gt;</div>
                <div className="mt-1 font-mono text-[8px] text-lime">useContext → {item.value}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[9px] text-faint">
            descendants read the nearest provider above them
          </p>
        </div>
      );

    case "async-lifecycle":
      return (
        <div className="space-y-2.5">
          <div className="grid grid-cols-3 gap-1.5">
            {[
              {
                label: "pending",
                detail: "loading = true",
                icon: RotateCw,
                tone: "sky" as const,
              },
              {
                label: "success",
                detail: "data = response",
                icon: Check,
                tone: "lime" as const,
              },
              {
                label: "failure",
                detail: "error = reason",
                icon: X,
                tone: "coral" as const,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className={cn(
                    "rounded-lg border px-2 py-2 text-center",
                    step.tone === "lime"
                      ? "border-lime/25 bg-lime/[0.05]"
                      : step.tone === "coral"
                        ? "border-coral/25 bg-coral/[0.05]"
                        : "border-sky/20 bg-sky/[0.04]",
                  )}
                >
                  <Icon
                    className={cn(
                      "mx-auto size-3.5",
                      step.tone === "lime" && "text-lime",
                      step.tone === "coral" && "text-coral",
                      step.tone === "sky" && "text-sky",
                    )}
                    aria-hidden
                  />
                  <div className="mt-1 text-[9px] font-medium text-mist">{step.label}</div>
                  <div className="mt-0.5 font-mono text-[8px] text-faint">{step.detail}</div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <CircleDot className="size-3 text-sky" aria-hidden />
            every request settles into exactly one outcome
          </div>
        </div>
      );

    case "route-tree":
      return (
        <div className="space-y-2">
          <div className="rounded-lg border border-sky/25 bg-sky/[0.05] px-2.5 py-1.5 text-center font-mono text-[10px] text-sky">
            &lt;BrowserRouter&gt;
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { path: "/", label: "Home" },
              { path: "/courses", label: "Courses" },
              { path: "/courses/:id", label: "Detail" },
            ].map((route) => (
              <div
                key={route.path}
                className="rounded-lg border border-line bg-canvas px-1.5 py-2 text-center"
              >
                <Link2 className="mx-auto size-3 text-lime" aria-hidden />
                <div className="mt-1 font-mono text-[8px] text-lime">{route.path}</div>
                <div className="mt-0.5 text-[8px] text-faint">{route.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[9px] text-faint">
            the URL selects which route element renders
          </p>
        </div>
      );

    case "type-contract":
      return (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border border-violet/25 bg-violet/[0.05] px-2 py-2">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-violet/80">
                parent
              </div>
              <div className="mt-1 font-mono text-[9px] text-mist">
                {'title: string'}
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-[8px] text-faint">type</span>
              <FlowArrow />
            </div>
            <div className="flex-1 rounded-lg border border-lime/25 bg-lime/[0.05] px-2 py-2">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-lime/80">
                child
              </div>
              <div className="mt-1 font-mono text-[9px] text-mist">
                {": { title: string }"}
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-canvas px-2.5 py-2 text-center font-mono text-[9px] text-faint">
            wrong shape → <span className="text-coral">type error</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Braces className="size-3 text-violet" aria-hidden />
            types document what may cross the boundary
          </div>
        </div>
      );

    case "layer-stack":
      return (
        <div className="space-y-1.5">
          {[
            { label: "UI components", detail: "render JSX", tone: "lime" as const },
            { label: "hooks", detail: "state + effects", tone: "sky" as const },
            { label: "domain logic", detail: "rules + transforms", tone: "violet" as const },
            { label: "API layer", detail: "fetch + DTOs", tone: "coral" as const },
          ].map((layer, index) => (
            <div
              key={layer.label}
              className={cn(
                "flex items-center justify-between rounded-lg border px-2.5 py-1.5",
                layer.tone === "lime" && "border-lime/20 bg-lime/[0.04]",
                layer.tone === "sky" && "border-sky/20 bg-sky/[0.04]",
                layer.tone === "violet" && "border-violet/20 bg-violet/[0.04]",
                layer.tone === "coral" && "border-coral/20 bg-coral/[0.04]",
              )}
            >
              <span className="font-mono text-[9px] text-mist">{layer.label}</span>
              <span className="font-mono text-[8px] text-faint">{layer.detail}</span>
              <span className="font-mono text-[8px] text-faint">{index + 1}</span>
            </div>
          ))}
          <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[9px] text-faint">
            <Layers className="size-3 text-lime" aria-hidden />
            boundaries keep each layer replaceable
          </div>
        </div>
      );

    case "test-pyramid":
      return (
        <div className="space-y-1.5">
          {[
            { label: "E2E", detail: "few, slow, real flows", width: "55%", tone: "coral" as const },
            { label: "Integration", detail: "some, realistic", width: "75%", tone: "sky" as const },
            { label: "Unit", detail: "many, fast, focused", width: "100%", tone: "lime" as const },
          ].map((level) => (
            <div key={level.label} className="mx-auto" style={{ width: level.width }}>
              <div
                className={cn(
                  "flex items-center justify-between rounded-lg border px-2.5 py-1.5",
                  level.tone === "lime" && "border-lime/20 bg-lime/[0.05]",
                  level.tone === "sky" && "border-sky/20 bg-sky/[0.05]",
                  level.tone === "coral" && "border-coral/20 bg-coral/[0.05]",
                )}
              >
                <span className="font-mono text-[9px] text-mist">{level.label}</span>
                <span className="font-mono text-[8px] text-faint">{level.detail}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[9px] text-faint">
            <Check className="size-3 text-lime" aria-hidden />
            fast feedback at the base, confidence at the top
          </div>
        </div>
      );

    case "markup-tree":
      return (
        <div className="space-y-2">
          <div className="rounded-lg border border-coral/20 bg-coral/[0.05] px-3 py-2 text-center font-mono text-[10px] text-coral">
            &lt;html&gt;
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-line bg-canvas px-2 py-2 text-center font-mono text-[9px] text-mist">
              &lt;head&gt;
              <div className="mt-1 text-[8px] text-faint">metadata</div>
            </div>
            <div className="rounded-lg border border-lime/20 bg-lime/[0.04] px-2 py-2 text-center font-mono text-[9px] text-lime">
              &lt;body&gt;
              <div className="mt-1 text-[8px] text-faint">visible tree</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {["header", "main", "footer"].map((node) => (
              <div key={node} className="rounded-md border border-line bg-canvas py-1.5 text-center font-mono text-[8px] text-muted">
                &lt;{node}&gt;
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Layers className="size-3 text-coral" aria-hidden />
            the document is a tree, not a flat file
          </div>
        </div>
      );

    case "box-model":
      return (
        <div className="space-y-1">
          <div className="rounded-xl border border-coral/20 bg-coral/[0.04] p-2">
            <div className="mb-1 text-[8px] uppercase tracking-[0.14em] text-coral">margin</div>
            <div className="rounded-lg border border-violet/25 bg-violet/[0.05] p-2">
              <div className="mb-1 text-[8px] uppercase tracking-[0.14em] text-violet">border</div>
              <div className="rounded-md border border-sky/25 bg-sky/[0.06] p-2">
                <div className="mb-1 text-[8px] uppercase tracking-[0.14em] text-sky">padding</div>
                <div className="rounded border border-lime/25 bg-lime/[0.08] px-3 py-2 text-center font-mono text-[9px] text-lime">
                  content
                </div>
              </div>
            </div>
          </div>
          <div className="pt-1 text-center font-mono text-[8px] text-faint">
            width + padding + border + margin
          </div>
        </div>
      );

    case "selector-map":
      return (
        <div className="space-y-2">
          <div className="rounded-lg border border-sky/25 bg-sky/[0.06] px-3 py-2 text-center font-mono text-[11px] text-sky">
            .card h2
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <span className="rounded-lg border border-line bg-canvas px-2 py-1.5 text-center font-mono text-[9px] text-mist">
              .card
            </span>
            <FlowArrow />
            <span className="rounded-lg border border-lime/20 bg-lime/[0.06] px-2 py-1.5 text-center font-mono text-[9px] text-lime">
              h2
            </span>
          </div>
          <div className="space-y-1.5">
            {[
              ["h2 inside card", true],
              ["h2 outside card", false],
              ["h2 nested deeper", true],
            ].map(([label, match]) => (
              <div key={String(label)} className="flex items-center gap-2 rounded-md border border-line/70 bg-canvas px-2 py-1.5">
                <span className={cn("grid size-4 place-items-center rounded-full", match ? "bg-lime/15 text-lime" : "bg-coral/15 text-coral")}>
                  {match ? <Check className="size-2.5" aria-hidden /> : <X className="size-2.5" aria-hidden />}
                </span>
                <span className="font-mono text-[9px] text-muted">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Code2 className="size-3 text-sky" aria-hidden />
            descendant selectors match at any depth
          </div>
        </div>
      );

    case "event-loop":
      return (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-lime/20 bg-lime/[0.05] p-2">
              <div className="text-[8px] uppercase tracking-[0.12em] text-lime">call stack</div>
              <div className="mt-1 font-mono text-[9px] text-mist">sync code</div>
            </div>
            <div className="rounded-lg border border-sky/20 bg-sky/[0.05] p-2">
              <div className="text-[8px] uppercase tracking-[0.12em] text-sky">web APIs</div>
              <div className="mt-1 font-mono text-[9px] text-mist">timers · fetch</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-violet/20 bg-violet/[0.05] p-2">
              <div className="text-[8px] uppercase tracking-[0.12em] text-violet">microtasks</div>
              <div className="mt-1 font-mono text-[9px] text-mist">promises</div>
            </div>
            <div className="rounded-lg border border-coral/20 bg-coral/[0.05] p-2">
              <div className="text-[8px] uppercase tracking-[0.12em] text-coral">tasks</div>
              <div className="mt-1 font-mono text-[9px] text-mist">setTimeout</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <RotateCw className="size-3 text-lime" aria-hidden />
            stack → microtasks → tasks → render
          </div>
        </div>
      );

    case "bootstrap-grid":
      return (
        <div className="space-y-2">
          <div className="flex overflow-hidden rounded-lg border border-line">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-7 flex-1 border-r border-line/60 last:border-r-0",
                  index < 8 ? "bg-lime/[0.12]" : "bg-sky/[0.08]",
                )}
              />
            ))}
          </div>
          <div className="flex justify-between font-mono text-[8px] text-faint">
            <span className="text-lime">col-8</span>
            <span className="text-sky">col-4</span>
          </div>
          <div className="rounded-lg border border-line bg-canvas px-2.5 py-2 text-center font-mono text-[9px] text-muted">
            row = 12 columns
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Layers className="size-3 text-violet" aria-hidden />
            breakpoint classes opt in at their width
          </div>
        </div>
      );

    case "scope-chain":
      return (
        <div className="space-y-2">
          {[
            { label: "outer scope", value: "let count = 0", tone: "violet" as const },
            { label: "closure", value: "() => ++count", tone: "lime" as const },
            { label: "call", value: "count → 1, 2, 3", tone: "sky" as const },
          ].map((step, index) => (
            <div key={step.label}>
              <div
                className={cn(
                  "flex items-center justify-between rounded-lg border px-2.5 py-2",
                  step.tone === "violet" && "border-violet/20 bg-violet/[0.05]",
                  step.tone === "lime" && "border-lime/20 bg-lime/[0.05]",
                  step.tone === "sky" && "border-sky/20 bg-sky/[0.05]",
                )}
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-faint">
                  {step.label}
                </span>
                <span className="font-mono text-[9px] text-mist">{step.value}</span>
              </div>
              {index < 2 && <div className="py-0.5"><FlowArrow vertical /></div>}
            </div>
          ))}
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Link2 className="size-3 text-lime" aria-hidden />
            the inner function keeps the binding alive
          </div>
        </div>
      );

    case "utility-stack":
      return (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {["d-flex", "align-items-center", "gap-2", "p-3"].map((token) => (
              <Tone key={token} tone="violet">
                {token}
              </Tone>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-2.5">
            <span className="grid size-7 place-items-center rounded-lg bg-violet/10 text-violet">
              <Box className="size-3.5" aria-hidden />
            </span>
            <span className="text-xs text-mist">one element, composed behavior</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[9px] text-faint">
            <Package className="size-3 text-violet" aria-hidden />
            utilities stack without custom CSS
          </div>
        </div>
      );

    default:
      return null;
  }
}
