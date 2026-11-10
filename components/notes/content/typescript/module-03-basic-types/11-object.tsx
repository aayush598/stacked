import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Object311() {
  return (
    <div>
      <SectionHero
        title="Object."
        subtitle="Deep dive into Object. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 11/30", "Object."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Object.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Object. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Object.</strong>. Use the tabs to explore different aspects including: Non-primitive, object vs {} vs Object, Structured shapes, Index signatures.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Non-primitive", syntax: "Object. — Non-primitive", note: "Apply Non-primitive in the context of Object. with correct typing." },
        { label: "object vs {} vs Object", syntax: "Object. — object vs {} vs Object", note: "Apply object vs {} vs Object in the context of Object. with correct typing." },
        { label: "Structured shapes", syntax: "Object. — Structured shapes", note: "Apply Structured shapes in the context of Object. with correct typing." },
        { label: "Index signatures", syntax: "Object. — Index signatures", note: "Apply Index signatures in the context of Object. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Non-primitive", code: `// Object.: Non-primitive
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_11_non_primitive = null;`, note: "Focus on Non-primitive: syntax, behavior, typing implications, and when to prefer it." },
        { label: "object vs {} vs Object", code: `// Object.: object vs {} vs Object
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_11_object_vs_vs_object = null;`, note: "Focus on object vs {} vs Object: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Structured shapes", code: `// Object.: Structured shapes
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_11_structured_shapes = null;`, note: "Focus on Structured shapes: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Index signatures", code: `// Object.: Index signatures
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_11_index_signatures = null;`, note: "Focus on Index signatures: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Non-primitive — example", code: `// Object. → Non-primitive
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Non-primitive’ aspect with an explicit example." },
        { title: "object vs {} vs Object — example", code: `// Object. → object vs {} vs Object
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘object vs {} vs Object’ aspect with an explicit example." },
        { title: "Structured shapes — example", code: `// Object. → Structured shapes
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Structured shapes’ aspect with an explicit example." },
        { title: "Index signatures — example", code: `// Object. → Index signatures
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Index signatures’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Object.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Object.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Object. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Non-primitive.",
        "I understand and can apply: object vs {} vs Object.",
        "I understand and can apply: Structured shapes.",
        "I understand and can apply: Index signatures.",
        "I can explain trade-offs, edge cases, and best practices for Object.."
      ]} />

      <NoteTakeaways items={[
        "Object. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Non-primitive, object vs {} vs Object, Structured shapes, Index signatures to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
