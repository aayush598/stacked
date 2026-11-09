"use client";

import { useState, type ComponentType } from "react";
import { ArrowRight, Check, FileCode2, ShieldCheck, WandSparkles } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import {
  InlineCode,
  NoteCallout,
  NoteCardGrid,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteList,
  NoteTakeaways,
  NoteText,
} from "@/components/notes/note-blocks";
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

function TypeErasureDemo() {
  const [view, setView] = useState<"source" | "output">("source");
  const source = view === "source";

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex flex-col gap-3 border-b border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-mist">See what the browser receives</p>
          <p className="mt-0.5 text-xs text-faint">
            Types are checked before runtime, then removed from the emitted JavaScript.
          </p>
        </div>
        <div className="flex shrink-0 rounded-lg border border-line bg-raised p-0.5">
          <button
            type="button"
            onClick={() => setView("source")}
            className={cn(
              "rounded-md px-2.5 py-1.5 font-mono text-[10px] transition",
              source ? "bg-surface text-mist shadow-sm" : "text-muted hover:text-mist",
            )}
          >
            TypeScript
          </button>
          <button
            type="button"
            onClick={() => setView("output")}
            className={cn(
              "rounded-md px-2.5 py-1.5 font-mono text-[10px] transition",
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
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
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
                  "flex items-center gap-2 rounded-lg border px-2.5 py-2 font-mono text-[10px]",
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

function TypeAnatomyDiagram() {
  return (
    <div className="mt-6 rounded-xl border border-line bg-canvas/60 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] sm:text-[13px]">
        <span className="rounded-md border border-line bg-surface px-2 py-1 text-violet">
          const
        </span>
        <span className="rounded-md border border-line bg-surface px-2 py-1 text-mist">
          user
        </span>
        <span className="text-faint">:</span>
        <span className="rounded-md border border-lime/25 bg-lime/[0.07] px-2 py-1 text-lime">
          User
        </span>
        <span className="text-faint">=</span>
        <span className="rounded-md border border-line bg-surface px-2 py-1 text-mist">
          {"{ ... }"}
        </span>
      </div>
      <div className="mt-4 grid gap-2 text-[11px] sm:grid-cols-4">
        {[
          ["keyword", "value declaration"],
          ["name", "the variable"],
          ["annotation", "the contract"],
          ["value", "the runtime data"],
        ].map(([label, hint]) => (
          <div key={label} className="rounded-lg border border-line bg-surface px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
              {label}
            </p>
            <p className="mt-1 text-muted">{hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatIsTypeScriptNote() {
  return (
    <div>
      <NoteLead>
        TypeScript is JavaScript with a type checker layered on top. You write familiar
        JavaScript, add optional type information, and the compiler tells you when the pieces
        do not fit — before the browser ever runs the code.
      </NoteLead>

      <TypeAnatomyDiagram />

      <NoteCallout tone="insight" title="The one-sentence version">
        TypeScript is a <strong className="text-mist">compile-time safety net</strong> for
        JavaScript. It catches mistakes early, then gets out of the way at runtime.
      </NoteCallout>

      <NoteHeading eyebrow="The core idea">Types are erased, behavior remains</NoteHeading>
      <NoteText>
        Type annotations do not exist in the JavaScript that ships to users. The compiler uses
        them to check your program, then emits plain JavaScript. That is why TypeScript can
        adopt existing JavaScript codebases without changing how the browser works.
      </NoteText>

      <TypeErasureDemo />

      <NoteHeading eyebrow="A useful mental model">Think in two timelines</NoteHeading>
      <NoteCardGrid
        items={[
          {
            title: "Compile time",
            body: (
              <>
                The compiler reads your types, checks relationships and reports errors. This is
                where TypeScript adds most of its value.
              </>
            ),
            accent: "lime",
          },
          {
            title: "Runtime",
            body: (
              <>
                Your JavaScript runs with the same objects, functions and browser APIs as
                before. Types are gone.
              </>
            ),
            accent: "sky",
          },
          {
            title: "Source of truth",
            body: (
              <>
                Values still decide behavior. Types describe what you intend those values to
                be.
              </>
            ),
            accent: "violet",
          },
          {
            title: "Safety boundary",
            body: (
              <>
                At the edges of your app — user input, network data, local storage — runtime
                validation still matters.
              </>
            ),
            accent: "coral",
          },
        ]}
      />

      <NoteHeading eyebrow="First example">A tiny typed function</NoteHeading>
      <NoteText>
        This example is intentionally small. The important part is not the syntax — it is the
        contract: <InlineCode>greet</InlineCode> promises to receive a{" "}
        <InlineCode>User</InlineCode>, so every call site is checked against that shape.
      </NoteText>
      <NoteCode
        filename="greet.ts"
        code={`type User = {
  id: number;
  name: string;
};

function greet(user: User) {
  return \`Hello, \${user.name}\`;
}

greet({ id: 1, name: "Ada" });
greet({ id: 2 }); // Error: name is missing`}
      />

      <NoteCallout tone="warning">
        TypeScript is not a replacement for runtime validation. If data comes from a form, an
        API response or local storage, it can still be malformed when it reaches your app.
      </NoteCallout>

      <NoteTakeaways
        items={[
          "TypeScript is JavaScript plus a compile-time type checker.",
          "Types describe intent; values still control runtime behavior.",
          "Annotations are erased from the JavaScript that ships.",
          "Use runtime validation at every untrusted boundary.",
        ]}
      />
    </div>
  );
}

function PurposeOfTypeScriptNote() {
  return (
    <div>
      <NoteLead>
        TypeScript exists to make large JavaScript programs easier to change safely. It gives
        editors and teammates a shared, executable description of how the code is supposed to
        fit together.
      </NoteLead>

      <NoteHeading eyebrow="Three jobs">What TypeScript is actually doing</NoteHeading>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Catch mistakes",
            body: "Wrong property names, missing arguments and impossible states are reported before runtime.",
          },
          {
            icon: WandSparkles,
            title: "Improve tooling",
            body: "Editors can autocomplete, rename and navigate code because they understand the types.",
          },
          {
            icon: FileCode2,
            title: "Document intent",
            body: "A good type signature explains the contract without a paragraph of prose.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-xl border border-line bg-surface p-4">
              <Icon className="size-4 text-lime" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-mist">{item.title}</p>
              <p className="mt-1.5 text-[13px] leading-6 text-muted">{item.body}</p>
            </div>
          );
        })}
      </div>

      <NoteHeading eyebrow="Before and after">A missing property caught early</NoteHeading>
      <NoteText>
        Without types, this bug waits until a user opens the profile page. With types, the
        editor flags it while you are still writing the call.
      </NoteText>
      <NoteCode
        filename="profile.ts"
        code={`type Profile = {
  name: string;
  avatarUrl: string;
};

function renderProfile(profile: Profile) {
  return profile.name.toUpperCase();
}

renderProfile({ name: "Ada" });
// Error: avatarUrl is missing`}
      />

      <NoteCallout tone="tip">
        The goal is not to annotate everything. The goal is to put useful contracts around the
        parts of your app that change often or are shared by many people.
      </NoteCallout>

      <NoteTakeaways
        items={[
          "TypeScript makes intent machine-checkable.",
          "Better editor support is a first-class benefit, not a side effect.",
          "Start with boundaries and shared contracts, not every local variable.",
        ]}
      />
    </div>
  );
}

function DesignGoalsNote() {
  return (
    <div>
      <NoteLead>
        TypeScript&apos;s design goals explain many of its tradeoffs. It is intentionally
        gradual, JavaScript-first, and focused on tooling rather than runtime features.
      </NoteLead>

      <NoteHeading eyebrow="The design brief">What the language optimizes for</NoteHeading>
      <NoteList
        items={[
          "Stay a superset of JavaScript, so existing code can be adopted incrementally.",
          "Add optional static typing without changing runtime behavior.",
          "Emit clean, idiomatic JavaScript that resembles the source.",
          "Provide excellent editor and tooling support.",
          "Scale from small scripts to large applications and teams.",
        ]}
      />

      <NoteHeading eyebrow="Tradeoff">Gradual by design</NoteHeading>
      <NoteText>
        You can add TypeScript one file at a time. That flexibility is powerful, but it also
        means the type system is only as strong as the boundaries you choose to enforce. Strict
        mode and runtime validation are how teams turn a gradual system into a reliable one.
      </NoteText>

      <NoteCallout tone="insight" title="A useful shortcut">
        If you are unsure whether TypeScript can do something, ask: does it need to exist at
        runtime? If yes, it is JavaScript. If it only describes the shape of JavaScript, it is
        probably a type-level feature.
      </NoteCallout>

      <NoteTakeaways
        items={[
          "TypeScript is a superset of JavaScript.",
          "It adds compile-time checking, not runtime behavior.",
          "Adoption is incremental by design.",
          "Strictness and validation are deliberate team choices.",
        ]}
      />
    </div>
  );
}

export const typescriptNoteContent: Record<string, ComponentType> = {
  "ts-m01-s01": WhatIsTypeScriptNote,
  "ts-m01-s02": PurposeOfTypeScriptNote,
  "ts-m01-s03": DesignGoalsNote,
};

export function TypeScriptNotesLegend() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] text-faint">
      <span className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-coral" />
        Needs review
      </span>
      <span className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-success" />
        Human reviewed
      </span>
      <span className="flex items-center gap-1.5">
        <ArrowRight className="size-3" />
        Mark read at the end
      </span>
    </div>
  );
}
