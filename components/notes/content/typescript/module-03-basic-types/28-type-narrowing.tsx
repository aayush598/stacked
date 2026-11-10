import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeNarrowing328() {
  return (
    <div>
      <SectionHero
        title="Type narrowing."
        subtitle="Deep dive into Type narrowing. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 28/30", "Type narrowing."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Type narrowing.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Type narrowing. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Type narrowing.</strong>. Use the tabs to explore different aspects including: typeof, truthiness, equality, in, instanceof, predicates.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "typeof", syntax: "Type narrowing. — typeof", note: "Apply typeof in the context of Type narrowing. with correct typing." },
        { label: "truthiness", syntax: "Type narrowing. — truthiness", note: "Apply truthiness in the context of Type narrowing. with correct typing." },
        { label: "equality", syntax: "Type narrowing. — equality", note: "Apply equality in the context of Type narrowing. with correct typing." },
        { label: "in", syntax: "Type narrowing. — in", note: "Apply in in the context of Type narrowing. with correct typing." },
        { label: "instanceof", syntax: "Type narrowing. — instanceof", note: "Apply instanceof in the context of Type narrowing. with correct typing." },
        { label: "predicates", syntax: "Type narrowing. — predicates", note: "Apply predicates in the context of Type narrowing. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "typeof", code: `// Type narrowing.: typeof
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_28_typeof = null;`, note: "Focus on typeof: syntax, behavior, typing implications, and when to prefer it." },
        { label: "truthiness", code: `// Type narrowing.: truthiness
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_28_truthiness = null;`, note: "Focus on truthiness: syntax, behavior, typing implications, and when to prefer it." },
        { label: "equality", code: `// Type narrowing.: equality
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_28_equality = null;`, note: "Focus on equality: syntax, behavior, typing implications, and when to prefer it." },
        { label: "in", code: `// Type narrowing.: in
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_28_in = null;`, note: "Focus on in: syntax, behavior, typing implications, and when to prefer it." },
        { label: "instanceof", code: `// Type narrowing.: instanceof
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_28_instanceof = null;`, note: "Focus on instanceof: syntax, behavior, typing implications, and when to prefer it." },
        { label: "predicates", code: `// Type narrowing.: predicates
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_28_predicates = null;`, note: "Focus on predicates: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "typeof — example", code: `// Type narrowing. → typeof
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘typeof’ aspect with an explicit example." },
        { title: "truthiness — example", code: `// Type narrowing. → truthiness
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘truthiness’ aspect with an explicit example." },
        { title: "equality — example", code: `// Type narrowing. → equality
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘equality’ aspect with an explicit example." },
        { title: "in — example", code: `// Type narrowing. → in
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘in’ aspect with an explicit example." },
        { title: "instanceof — example", code: `// Type narrowing. → instanceof
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘instanceof’ aspect with an explicit example." },
        { title: "predicates — example", code: `// Type narrowing. → predicates
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘predicates’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Type narrowing.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Type narrowing.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Type narrowing. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: typeof.",
        "I understand and can apply: truthiness.",
        "I understand and can apply: equality.",
        "I understand and can apply: in.",
        "I understand and can apply: instanceof.",
        "I understand and can apply: predicates.",
        "I can explain trade-offs, edge cases, and best practices for Type narrowing.."
      ]} />

      <NoteTakeaways items={[
        "Type narrowing. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as typeof, truthiness, equality, in to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
