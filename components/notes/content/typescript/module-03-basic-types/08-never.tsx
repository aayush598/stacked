import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Never38() {
  return (
    <div>
      <SectionHero
        title="Never."
        subtitle="Deep dive into Never. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 8/30", "Never."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Never.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Never. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Never.</strong>. Use the tabs to explore different aspects including: Unreachable code, Exhaustiveness, Bottom type, never in conditionals.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Unreachable code", syntax: "Never. — Unreachable code", note: "Apply Unreachable code in the context of Never. with correct typing." },
        { label: "Exhaustiveness", syntax: "Never. — Exhaustiveness", note: "Apply Exhaustiveness in the context of Never. with correct typing." },
        { label: "Bottom type", syntax: "Never. — Bottom type", note: "Apply Bottom type in the context of Never. with correct typing." },
        { label: "never in conditionals", syntax: "Never. — never in conditionals", note: "Apply never in conditionals in the context of Never. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Unreachable code", code: `// Never.: Unreachable code
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_unreachable_code = null;`, note: "Focus on Unreachable code: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Exhaustiveness", code: `// Never.: Exhaustiveness
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_exhaustiveness = null;`, note: "Focus on Exhaustiveness: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Bottom type", code: `// Never.: Bottom type
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_bottom_type = null;`, note: "Focus on Bottom type: syntax, behavior, typing implications, and when to prefer it." },
        { label: "never in conditionals", code: `// Never.: never in conditionals
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_8_never_in_conditional = null;`, note: "Focus on never in conditionals: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Unreachable code — example", code: `// Never. → Unreachable code
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Unreachable code’ aspect with an explicit example." },
        { title: "Exhaustiveness — example", code: `// Never. → Exhaustiveness
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Exhaustiveness’ aspect with an explicit example." },
        { title: "Bottom type — example", code: `// Never. → Bottom type
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Bottom type’ aspect with an explicit example." },
        { title: "never in conditionals — example", code: `// Never. → never in conditionals
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘never in conditionals’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Never.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Never.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Never. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Unreachable code.",
        "I understand and can apply: Exhaustiveness.",
        "I understand and can apply: Bottom type.",
        "I understand and can apply: never in conditionals.",
        "I can explain trade-offs, edge cases, and best practices for Never.."
      ]} />

      <NoteTakeaways items={[
        "Never. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Unreachable code, Exhaustiveness, Bottom type, never in conditionals to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
