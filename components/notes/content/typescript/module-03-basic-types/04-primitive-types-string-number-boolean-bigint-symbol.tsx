import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function PrimitiveTypesStringNumberBooleanBigintSymbol34() {
  return (
    <div>
      <SectionHero
        title="Primitive types: string, number, boolean, bigint, symbol."
        subtitle="Deep dive into Primitive types: string, number, boolean, bigint, symbol. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 4/30", "Primitive types: string, number, boolean, bigint, symbol."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Primitive types: string, number, boolean, bigint, symbol.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Primitive types: string, number, boolean, bigint, symbol. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Primitive types: string, number, boolean, bigint, symbol.</strong>. Use the tabs to explore different aspects including: Runtime primitives, Operations, Boxed types to avoid, IEEE 754 and BigInt.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Runtime primitives", syntax: "Primitive types: string, number, boolean, bigint, symbol. — Runtime primitives", note: "Apply Runtime primitives in the context of Primitive types: string, number, boolean, bigint, symbol. with correct typing." },
        { label: "Operations", syntax: "Primitive types: string, number, boolean, bigint, symbol. — Operations", note: "Apply Operations in the context of Primitive types: string, number, boolean, bigint, symbol. with correct typing." },
        { label: "Boxed types to avoid", syntax: "Primitive types: string, number, boolean, bigint, symbol. — Boxed types to avoid", note: "Apply Boxed types to avoid in the context of Primitive types: string, number, boolean, bigint, symbol. with correct typing." },
        { label: "IEEE 754 and BigInt", syntax: "Primitive types: string, number, boolean, bigint, symbol. — IEEE 754 and BigInt", note: "Apply IEEE 754 and BigInt in the context of Primitive types: string, number, boolean, bigint, symbol. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Runtime primitives", code: `// Primitive types: string, number, boolean, bigint, symbol.: Runtime primitives
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_4_runtime_primitives = null;`, note: "Focus on Runtime primitives: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Operations", code: `// Primitive types: string, number, boolean, bigint, symbol.: Operations
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_4_operations = null;`, note: "Focus on Operations: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Boxed types to avoid", code: `// Primitive types: string, number, boolean, bigint, symbol.: Boxed types to avoid
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_4_boxed_types_to_avoid = null;`, note: "Focus on Boxed types to avoid: syntax, behavior, typing implications, and when to prefer it." },
        { label: "IEEE 754 and BigInt", code: `// Primitive types: string, number, boolean, bigint, symbol.: IEEE 754 and BigInt
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_4_ieee_754_and_bigint = null;`, note: "Focus on IEEE 754 and BigInt: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Runtime primitives — example", code: `// Primitive types: string, number, boolean, bigint, symbol. → Runtime primitives
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Runtime primitives’ aspect with an explicit example." },
        { title: "Operations — example", code: `// Primitive types: string, number, boolean, bigint, symbol. → Operations
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Operations’ aspect with an explicit example." },
        { title: "Boxed types to avoid — example", code: `// Primitive types: string, number, boolean, bigint, symbol. → Boxed types to avoid
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Boxed types to avoid’ aspect with an explicit example." },
        { title: "IEEE 754 and BigInt — example", code: `// Primitive types: string, number, boolean, bigint, symbol. → IEEE 754 and BigInt
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘IEEE 754 and BigInt’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Primitive types: string, number, boolean, bigint, symbol.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Primitive types: string, number, boolean, bigint, symbol.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Primitive types: string, number, boolean, bigint, symbol. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Runtime primitives.",
        "I understand and can apply: Operations.",
        "I understand and can apply: Boxed types to avoid.",
        "I understand and can apply: IEEE 754 and BigInt.",
        "I can explain trade-offs, edge cases, and best practices for Primitive types: string, number, boolean, bigint, symbol.."
      ]} />

      <NoteTakeaways items={[
        "Primitive types: string, number, boolean, bigint, symbol. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Runtime primitives, Operations, Boxed types to avoid, IEEE 754 and BigInt to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
