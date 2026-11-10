import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Null35() {
  return (
    <div>
      <SectionHero
        title="Null."
        subtitle="Deep dive into Null. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 5/30", "Null."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Null.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Null. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Null.</strong>. Use the tabs to explore different aspects including: Intentional absence, strictNullChecks, Nullable unions, ?? and ?..
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Intentional absence", syntax: "Null. — Intentional absence", note: "Apply Intentional absence in the context of Null. with correct typing." },
        { label: "strictNullChecks", syntax: "Null. — strictNullChecks", note: "Apply strictNullChecks in the context of Null. with correct typing." },
        { label: "Nullable unions", syntax: "Null. — Nullable unions", note: "Apply Nullable unions in the context of Null. with correct typing." },
        { label: "?? and ?.", syntax: "Null. — ?? and ?.", note: "Apply ?? and ?. in the context of Null. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Intentional absence", code: `// Null.: Intentional absence
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_intentional_absence = null;`, note: "Focus on Intentional absence: syntax, behavior, typing implications, and when to prefer it." },
        { label: "strictNullChecks", code: `// Null.: strictNullChecks
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_strictnullchecks = null;`, note: "Focus on strictNullChecks: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Nullable unions", code: `// Null.: Nullable unions
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_nullable_unions = null;`, note: "Focus on Nullable unions: syntax, behavior, typing implications, and when to prefer it." },
        { label: "?? and ?.", code: `// Null.: ?? and ?.
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_and = null;`, note: "Focus on ?? and ?.: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Intentional absence — example", code: `// Null. → Intentional absence
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Intentional absence’ aspect with an explicit example." },
        { title: "strictNullChecks — example", code: `// Null. → strictNullChecks
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘strictNullChecks’ aspect with an explicit example." },
        { title: "Nullable unions — example", code: `// Null. → Nullable unions
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Nullable unions’ aspect with an explicit example." },
        { title: "?? and ?. — example", code: `// Null. → ?? and ?.
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘?? and ?.’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Null.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Null.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Null. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Intentional absence.",
        "I understand and can apply: strictNullChecks.",
        "I understand and can apply: Nullable unions.",
        "I understand and can apply: ?? and ?..",
        "I can explain trade-offs, edge cases, and best practices for Null.."
      ]} />

      <NoteTakeaways items={[
        "Null. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Intentional absence, strictNullChecks, Nullable unions, ?? and ?. to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
