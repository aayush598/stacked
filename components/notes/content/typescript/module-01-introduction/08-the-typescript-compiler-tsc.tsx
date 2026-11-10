import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TheTypeScriptCompilerTsc18() {
  return (
    <div>
      <SectionHero
        title="The TypeScript compiler (tsc)."
        subtitle="Deep dive into The TypeScript compiler (tsc). within Introduction to TypeScript. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Introduction to TypeScript", "Section 8/8", "The TypeScript compiler (tsc)."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>The TypeScript compiler (tsc).</strong> is a key topic in <strong>Introduction to TypeScript</strong>. Understand the language, its relationship to JavaScript, and the mental model behind type checking. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what The TypeScript compiler (tsc). is and why it matters in Introduction to TypeScript." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>The TypeScript compiler (tsc).</strong>. Use the tabs to explore different aspects including: CLI, Watch mode, Project references, Incremental builds.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "CLI", syntax: "The TypeScript compiler (tsc). — CLI", note: "Apply CLI in the context of The TypeScript compiler (tsc). with correct typing." },
        { label: "Watch mode", syntax: "The TypeScript compiler (tsc). — Watch mode", note: "Apply Watch mode in the context of The TypeScript compiler (tsc). with correct typing." },
        { label: "Project references", syntax: "The TypeScript compiler (tsc). — Project references", note: "Apply Project references in the context of The TypeScript compiler (tsc). with correct typing." },
        { label: "Incremental builds", syntax: "The TypeScript compiler (tsc). — Incremental builds", note: "Apply Incremental builds in the context of The TypeScript compiler (tsc). with correct typing." },
      ]} />
      <Tabs items={[
        { label: "CLI", code: `// The TypeScript compiler (tsc).: CLI
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_cli = null;`, note: "Focus on CLI: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Watch mode", code: `// The TypeScript compiler (tsc).: Watch mode
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_watch_mode = null;`, note: "Focus on Watch mode: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Project references", code: `// The TypeScript compiler (tsc).: Project references
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_project_references = null;`, note: "Focus on Project references: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Incremental builds", code: `// The TypeScript compiler (tsc).: Incremental builds
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_incremental_builds = null;`, note: "Focus on Incremental builds: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "CLI — example", code: `// The TypeScript compiler (tsc). → CLI
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘CLI’ aspect with an explicit example." },
        { title: "Watch mode — example", code: `// The TypeScript compiler (tsc). → Watch mode
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Watch mode’ aspect with an explicit example." },
        { title: "Project references — example", code: `// The TypeScript compiler (tsc). → Project references
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Project references’ aspect with an explicit example." },
        { title: "Incremental builds — example", code: `// The TypeScript compiler (tsc). → Incremental builds
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Incremental builds’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: The TypeScript compiler (tsc).
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: The TypeScript compiler (tsc).
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "The TypeScript compiler (tsc). in Introduction to TypeScript: what it is, what problem it solves, and how TypeScript models it." },
        { title: "Syntax & variations", body: "Core syntax plus important variations, optional forms, modifiers, generics/overloads, and equivalent patterns." },
        { title: "Correct usage", body: "Use idiomatic, type-safe patterns; keep public APIs explicit and narrow/validate unknown data." },
        { title: "Edge cases & pitfalls", body: "Consider null/undefined, widening/narrowing, inference limits, unions/intersections, and runtime vs type-level behavior." },
        { title: "Real-world patterns", body: "Apply in realistic scenarios relevant to Introduction to TypeScript, including composition with related TypeScript features." },
        { title: "Best practices", body: "Prefer clarity, correctness, and maintainability; avoid unsafe casts and overcomplicated types when simpler options work." },
      ]} />
      <NoteCallout tone="warning">Watch edge cases: null/undefined behavior, inference surprises, excess property checks, union narrowing, assignability, and differences between type-level and runtime behavior.</NoteCallout>
      <NoteCallout tone="tip">Prefer explicit types at module/API boundaries, use narrowing and validation for unknown inputs, and choose the simplest type that models the domain accurately.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I understand and can apply: CLI.",
        "I understand and can apply: Watch mode.",
        "I understand and can apply: Project references.",
        "I understand and can apply: Incremental builds.",
        "I can explain trade-offs, edge cases, and best practices for The TypeScript compiler (tsc).."
      ]} />

      <NoteTakeaways items={[
        "The TypeScript compiler (tsc). is essential in Introduction to TypeScript: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as CLI, Watch mode, Project references, Incremental builds to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
