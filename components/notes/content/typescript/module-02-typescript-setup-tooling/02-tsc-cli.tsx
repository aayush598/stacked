import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TscCLI22() {
  return (
    <div>
      <SectionHero
        title="tsc CLI."
        subtitle="Deep dive into tsc CLI. within TypeScript Setup & Tooling. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["TypeScript Setup & Tooling", "Section 2/10", "tsc CLI."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>tsc CLI.</strong> is a key topic in <strong>TypeScript Setup & Tooling</strong>. Install, configure, and run TypeScript with the tools used in real projects. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what tsc CLI. is and why it matters in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>tsc CLI.</strong>. Use the tabs to explore different aspects including: --init, --watch, --noEmit, --project.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "--init", syntax: "tsc CLI. — --init", note: "Apply --init in the context of tsc CLI. with correct typing." },
        { label: "--watch", syntax: "tsc CLI. — --watch", note: "Apply --watch in the context of tsc CLI. with correct typing." },
        { label: "--noEmit", syntax: "tsc CLI. — --noEmit", note: "Apply --noEmit in the context of tsc CLI. with correct typing." },
        { label: "--project", syntax: "tsc CLI. — --project", note: "Apply --project in the context of tsc CLI. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "--init", code: `// tsc CLI.: --init
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_2_init = null;`, note: "Focus on --init: syntax, behavior, typing implications, and when to prefer it." },
        { label: "--watch", code: `// tsc CLI.: --watch
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_2_watch = null;`, note: "Focus on --watch: syntax, behavior, typing implications, and when to prefer it." },
        { label: "--noEmit", code: `// tsc CLI.: --noEmit
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_2_noemit = null;`, note: "Focus on --noEmit: syntax, behavior, typing implications, and when to prefer it." },
        { label: "--project", code: `// tsc CLI.: --project
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_2_project = null;`, note: "Focus on --project: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "--init — example", code: `// tsc CLI. → --init
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘--init’ aspect with an explicit example." },
        { title: "--watch — example", code: `// tsc CLI. → --watch
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘--watch’ aspect with an explicit example." },
        { title: "--noEmit — example", code: `// tsc CLI. → --noEmit
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘--noEmit’ aspect with an explicit example." },
        { title: "--project — example", code: `// tsc CLI. → --project
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘--project’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: tsc CLI.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: tsc CLI.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "tsc CLI. in TypeScript Setup & Tooling: what it is, what problem it solves, and how TypeScript models it." },
        { title: "Syntax & variations", body: "Core syntax plus important variations, optional forms, modifiers, generics/overloads, and equivalent patterns." },
        { title: "Correct usage", body: "Use idiomatic, type-safe patterns; keep public APIs explicit and narrow/validate unknown data." },
        { title: "Edge cases & pitfalls", body: "Consider null/undefined, widening/narrowing, inference limits, unions/intersections, and runtime vs type-level behavior." },
        { title: "Real-world patterns", body: "Apply in realistic scenarios relevant to TypeScript Setup & Tooling, including composition with related TypeScript features." },
        { title: "Best practices", body: "Prefer clarity, correctness, and maintainability; avoid unsafe casts and overcomplicated types when simpler options work." },
      ]} />
      <NoteCallout tone="warning">Watch edge cases: null/undefined behavior, inference surprises, excess property checks, union narrowing, assignability, and differences between type-level and runtime behavior.</NoteCallout>
      <NoteCallout tone="tip">Prefer explicit types at module/API boundaries, use narrowing and validation for unknown inputs, and choose the simplest type that models the domain accurately.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I understand and can apply: --init.",
        "I understand and can apply: --watch.",
        "I understand and can apply: --noEmit.",
        "I understand and can apply: --project.",
        "I can explain trade-offs, edge cases, and best practices for tsc CLI.."
      ]} />

      <NoteTakeaways items={[
        "tsc CLI. is essential in TypeScript Setup & Tooling: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as --init, --watch, --noEmit, --project to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
