import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeScriptVsJavaScript15() {
  return (
    <div>
      <SectionHero
        title="TypeScript vs JavaScript."
        subtitle="Deep dive into TypeScript vs JavaScript. within Introduction to TypeScript. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Introduction to TypeScript", "Section 5/8", "TypeScript vs JavaScript."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>TypeScript vs JavaScript.</strong> is a key topic in <strong>Introduction to TypeScript</strong>. Understand the language, its relationship to JavaScript, and the mental model behind type checking. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what TypeScript vs JavaScript. is and why it matters in Introduction to TypeScript." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>TypeScript vs JavaScript.</strong>. Use the tabs to explore different aspects.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "core concept of TypeScript vs JavaScript.", syntax: "TypeScript vs JavaScript. — core concept of TypeScript vs JavaScript.", note: "Apply core concept of TypeScript vs JavaScript. in the context of TypeScript vs JavaScript. with correct typing." },
        { label: "syntax and shape", syntax: "TypeScript vs JavaScript. — syntax and shape", note: "Apply syntax and shape in the context of TypeScript vs JavaScript. with correct typing." },
        { label: "practical usage", syntax: "TypeScript vs JavaScript. — practical usage", note: "Apply practical usage in the context of TypeScript vs JavaScript. with correct typing." },
        { label: "edge cases", syntax: "TypeScript vs JavaScript. — edge cases", note: "Apply edge cases in the context of TypeScript vs JavaScript. with correct typing." },
        { label: "best practices", syntax: "TypeScript vs JavaScript. — best practices", note: "Apply best practices in the context of TypeScript vs JavaScript. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "core concept of TypeScript vs JavaScript.", code: `// TypeScript vs JavaScript.: core concept of TypeScript vs JavaScript.
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_core_concept_of_type = null;`, note: "Focus on core concept of TypeScript vs JavaScript.: syntax, behavior, typing implications, and when to prefer it." },
        { label: "syntax and shape", code: `// TypeScript vs JavaScript.: syntax and shape
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_syntax_and_shape = null;`, note: "Focus on syntax and shape: syntax, behavior, typing implications, and when to prefer it." },
        { label: "practical usage", code: `// TypeScript vs JavaScript.: practical usage
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_practical_usage = null;`, note: "Focus on practical usage: syntax, behavior, typing implications, and when to prefer it." },
        { label: "edge cases", code: `// TypeScript vs JavaScript.: edge cases
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_edge_cases = null;`, note: "Focus on edge cases: syntax, behavior, typing implications, and when to prefer it." },
        { label: "best practices", code: `// TypeScript vs JavaScript.: best practices
// Context: Introduction to TypeScript

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_5_best_practices = null;`, note: "Focus on best practices: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "core concept of TypeScript vs JavaScript. — example", code: `// TypeScript vs JavaScript. → core concept of TypeScript vs JavaScript.
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘core concept of TypeScript vs JavaScript.’ aspect with an explicit example." },
        { title: "syntax and shape — example", code: `// TypeScript vs JavaScript. → syntax and shape
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘syntax and shape’ aspect with an explicit example." },
        { title: "practical usage — example", code: `// TypeScript vs JavaScript. → practical usage
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘practical usage’ aspect with an explicit example." },
        { title: "edge cases — example", code: `// TypeScript vs JavaScript. → edge cases
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘edge cases’ aspect with an explicit example." },
        { title: "best practices — example", code: `// TypeScript vs JavaScript. → best practices
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘best practices’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: TypeScript vs JavaScript.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: TypeScript vs JavaScript.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "TypeScript vs JavaScript. in Introduction to TypeScript: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: core concept of TypeScript vs JavaScript..",
        "I understand and can apply: syntax and shape.",
        "I understand and can apply: practical usage.",
        "I understand and can apply: edge cases.",
        "I understand and can apply: best practices.",
        "I can explain trade-offs, edge cases, and best practices for TypeScript vs JavaScript.."
      ]} />

      <NoteTakeaways items={[
        "TypeScript vs JavaScript. is essential in Introduction to TypeScript: understand its purpose, syntax, and behavior.",
        "Master variations and patterns to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
