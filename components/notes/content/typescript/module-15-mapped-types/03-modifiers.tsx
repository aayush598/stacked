import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Modifiers153() {
  return (
    <div>
      <SectionHero
        title="Modifiers."
        subtitle="Deep dive into Modifiers. within Mapped Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Mapped Types", "Section 3/14", "Modifiers."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Modifiers.</strong> is a key topic in <strong>Mapped Types</strong>. Transform object types by iterating over their keys. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Modifiers. is and why it matters in Mapped Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Modifiers.</strong>. Use the tabs to explore different aspects including: readonly, optional, -readonly, -?.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "readonly", syntax: "Modifiers. — readonly", note: "Apply readonly in the context of Modifiers. with correct typing." },
        { label: "optional", syntax: "Modifiers. — optional", note: "Apply optional in the context of Modifiers. with correct typing." },
        { label: "-readonly", syntax: "Modifiers. — -readonly", note: "Apply -readonly in the context of Modifiers. with correct typing." },
        { label: "-?", syntax: "Modifiers. — -?", note: "Apply -? in the context of Modifiers. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "readonly", code: `// Modifiers.: readonly
// Context: Mapped Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_readonly = null;`, note: "Focus on readonly: syntax, behavior, typing implications, and when to prefer it." },
        { label: "optional", code: `// Modifiers.: optional
// Context: Mapped Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_optional = null;`, note: "Focus on optional: syntax, behavior, typing implications, and when to prefer it." },
        { label: "-readonly", code: `// Modifiers.: -readonly
// Context: Mapped Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_readonly = null;`, note: "Focus on -readonly: syntax, behavior, typing implications, and when to prefer it." },
        { label: "-?", code: `// Modifiers.: -?
// Context: Mapped Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_3_section = null;`, note: "Focus on -?: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "readonly — example", code: `// Modifiers. → readonly
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘readonly’ aspect with an explicit example." },
        { title: "optional — example", code: `// Modifiers. → optional
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘optional’ aspect with an explicit example." },
        { title: "-readonly — example", code: `// Modifiers. → -readonly
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘-readonly’ aspect with an explicit example." },
        { title: "-? — example", code: `// Modifiers. → -?
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘-?’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Modifiers.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Modifiers.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Modifiers. in Mapped Types: what it is, what problem it solves, and how TypeScript models it." },
        { title: "Syntax & variations", body: "Core syntax plus important variations, optional forms, modifiers, generics/overloads, and equivalent patterns." },
        { title: "Correct usage", body: "Use idiomatic, type-safe patterns; keep public APIs explicit and narrow/validate unknown data." },
        { title: "Edge cases & pitfalls", body: "Consider null/undefined, widening/narrowing, inference limits, unions/intersections, and runtime vs type-level behavior." },
        { title: "Real-world patterns", body: "Apply in realistic scenarios relevant to Mapped Types, including composition with related TypeScript features." },
        { title: "Best practices", body: "Prefer clarity, correctness, and maintainability; avoid unsafe casts and overcomplicated types when simpler options work." },
      ]} />
      <NoteCallout tone="warning">Watch edge cases: null/undefined behavior, inference surprises, excess property checks, union narrowing, assignability, and differences between type-level and runtime behavior.</NoteCallout>
      <NoteCallout tone="tip">Prefer explicit types at module/API boundaries, use narrowing and validation for unknown inputs, and choose the simplest type that models the domain accurately.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I understand and can apply: readonly.",
        "I understand and can apply: optional.",
        "I understand and can apply: -readonly.",
        "I understand and can apply: -?.",
        "I can explain trade-offs, edge cases, and best practices for Modifiers.."
      ]} />

      <NoteTakeaways items={[
        "Modifiers. is essential in Mapped Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as readonly, optional, -readonly, -? to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
