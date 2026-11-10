import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TsconfigJson23() {
  return (
    <div>
      <SectionHero
        title="tsconfig.json."
        subtitle="Deep dive into tsconfig.json. within TypeScript Setup & Tooling. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["TypeScript Setup & Tooling", "Section 3/10", "tsconfig.json."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>tsconfig.json.</strong> is a key topic in <strong>TypeScript Setup & Tooling</strong>. Install, configure, and run TypeScript with the tools used in real projects. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what tsconfig.json. is and why it matters in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>tsconfig.json.</strong>. Use the tabs to explore different aspects including: Compiler options, Include/exclude, Extends.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Compiler options", syntax: "tsconfig.json. — Compiler options", note: "Apply Compiler options in the context of tsconfig.json. with correct typing." },
        { label: "Include/exclude", syntax: "tsconfig.json. — Include/exclude", note: "Apply Include/exclude in the context of tsconfig.json. with correct typing." },
        { label: "Extends", syntax: "tsconfig.json. — Extends", note: "Apply Extends in the context of tsconfig.json. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Compiler options", code: `// tsconfig.json.: Compiler options
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_compiler_options = null;`, note: "Focus on Compiler options: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Include/exclude", code: `// tsconfig.json.: Include/exclude
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_include_exclude = null;`, note: "Focus on Include/exclude: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Extends", code: `// tsconfig.json.: Extends
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_extends = null;`, note: "Focus on Extends: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Compiler options — example", code: `// tsconfig.json. → Compiler options
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Compiler options’ aspect with an explicit example." },
        { title: "Include/exclude — example", code: `// tsconfig.json. → Include/exclude
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Include/exclude’ aspect with an explicit example." },
        { title: "Extends — example", code: `// tsconfig.json. → Extends
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Extends’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: tsconfig.json.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: tsconfig.json.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "tsconfig.json. in TypeScript Setup & Tooling: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Compiler options.",
        "I understand and can apply: Include/exclude.",
        "I understand and can apply: Extends.",
        "I can explain trade-offs, edge cases, and best practices for tsconfig.json.."
      ]} />

      <NoteTakeaways items={[
        "tsconfig.json. is essential in TypeScript Setup & Tooling: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Compiler options, Include/exclude, Extends to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
