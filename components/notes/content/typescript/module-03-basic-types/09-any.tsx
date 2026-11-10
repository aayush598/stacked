import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Any39() {
  return (
    <div>
      <SectionHero
        title="Any."
        subtitle="Deep dive into Any. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 9/30", "Any."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Any.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Any. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Any.</strong>. Use the tabs to explore different aspects including: Escape hatch, Risks, noImplicitAny, Migration boundaries.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Escape hatch", syntax: "Any. — Escape hatch", note: "Apply Escape hatch in the context of Any. with correct typing." },
        { label: "Risks", syntax: "Any. — Risks", note: "Apply Risks in the context of Any. with correct typing." },
        { label: "noImplicitAny", syntax: "Any. — noImplicitAny", note: "Apply noImplicitAny in the context of Any. with correct typing." },
        { label: "Migration boundaries", syntax: "Any. — Migration boundaries", note: "Apply Migration boundaries in the context of Any. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Escape hatch", code: `// Any.: Escape hatch
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_9_escape_hatch = null;`, note: "Focus on Escape hatch: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Risks", code: `// Any.: Risks
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_9_risks = null;`, note: "Focus on Risks: syntax, behavior, typing implications, and when to prefer it." },
        { label: "noImplicitAny", code: `// Any.: noImplicitAny
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_9_noimplicitany = null;`, note: "Focus on noImplicitAny: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Migration boundaries", code: `// Any.: Migration boundaries
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_9_migration_boundaries = null;`, note: "Focus on Migration boundaries: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Escape hatch — example", code: `// Any. → Escape hatch
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Escape hatch’ aspect with an explicit example." },
        { title: "Risks — example", code: `// Any. → Risks
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Risks’ aspect with an explicit example." },
        { title: "noImplicitAny — example", code: `// Any. → noImplicitAny
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘noImplicitAny’ aspect with an explicit example." },
        { title: "Migration boundaries — example", code: `// Any. → Migration boundaries
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Migration boundaries’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Any.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Any.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Any. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
        { title: "Syntax & variations", body: "Core syntax plus important variations, optional forms, modifiers, generics/overloads, and equivalent patterns." },
        { title: "Correct usage", body: "Use idiomatic, type-safe patterns; keep public APIs explicit and narrow/validate unknown data." },
        { title: "Edge cases & pitfalls", body: "Consider null/undefined, widening/narrowing, inference limits, unions/intersections, and runtime vs type-level behavior." },
        { title: "Real-world patterns", body: "Apply in realistic scenarios relevant to Basic Types, including composition with related TypeScript features." },
        { title: "Best practices", body: "Prefer clarity, correctness, and maintainability; avoid unsafe casts and overcomplicated types when simpler options work." },
      ]} />
      <NoteCallout tone="warning">Watch edge cases: null/undefined behavior, inference surprises, excess property checks, union narrowing, assignability, and differences between type-level and runtime behavior.</NoteCallout>
      <NoteCallout tone="tip">Prefer explicit types at module/API boundaries, use narrowing and validation for unknown inputs, and choose the simplest type that models the domain accurately.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I understand and can apply: Escape hatch.",
        "I understand and can apply: Risks.",
        "I understand and can apply: noImplicitAny.",
        "I understand and can apply: Migration boundaries.",
        "I can explain trade-offs, edge cases, and best practices for Any.."
      ]} />

      <NoteTakeaways items={[
        "Any. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Escape hatch, Risks, noImplicitAny, Migration boundaries to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
