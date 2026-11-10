import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeAssignability330() {
  return (
    <div>
      <SectionHero
        title="Type assignability."
        subtitle="Deep dive into Type assignability. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 30/30", "Type assignability."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Type assignability.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Type assignability. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Type assignability.</strong>. Use the tabs to explore different aspects including: Value-to-target rules, any/unknown/never, Safe assignments.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Value-to-target rules", syntax: "Type assignability. — Value-to-target rules", note: "Apply Value-to-target rules in the context of Type assignability. with correct typing." },
        { label: "any/unknown/never", syntax: "Type assignability. — any/unknown/never", note: "Apply any/unknown/never in the context of Type assignability. with correct typing." },
        { label: "Safe assignments", syntax: "Type assignability. — Safe assignments", note: "Apply Safe assignments in the context of Type assignability. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Value-to-target rules", code: `// Type assignability.: Value-to-target rules
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_30_value_to_target_rule = null;`, note: "Focus on Value-to-target rules: syntax, behavior, typing implications, and when to prefer it." },
        { label: "any/unknown/never", code: `// Type assignability.: any/unknown/never
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_30_any_unknown_never = null;`, note: "Focus on any/unknown/never: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Safe assignments", code: `// Type assignability.: Safe assignments
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_30_safe_assignments = null;`, note: "Focus on Safe assignments: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Value-to-target rules — example", code: `// Type assignability. → Value-to-target rules
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Value-to-target rules’ aspect with an explicit example." },
        { title: "any/unknown/never — example", code: `// Type assignability. → any/unknown/never
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘any/unknown/never’ aspect with an explicit example." },
        { title: "Safe assignments — example", code: `// Type assignability. → Safe assignments
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Safe assignments’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Type assignability.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Type assignability.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Type assignability. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Value-to-target rules.",
        "I understand and can apply: any/unknown/never.",
        "I understand and can apply: Safe assignments.",
        "I can explain trade-offs, edge cases, and best practices for Type assignability.."
      ]} />

      <NoteTakeaways items={[
        "Type assignability. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Value-to-target rules, any/unknown/never, Safe assignments to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
