import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Strict2212() {
  return (
    <div>
      <SectionHero
        title="strict."
        subtitle="Deep dive into strict. within tsconfig.json Deep Dive. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["tsconfig.json Deep Dive", "Section 12/17", "strict."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>strict.</strong> is a key topic in <strong>tsconfig.json Deep Dive</strong>. Read and tune every important compiler option with confidence. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what strict. is and why it matters in tsconfig.json Deep Dive." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>strict.</strong>. Use the tabs to explore different aspects.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "core concept of strict.", syntax: "strict. — core concept of strict.", note: "Apply core concept of strict. in the context of strict. with correct typing." },
        { label: "syntax and shape", syntax: "strict. — syntax and shape", note: "Apply syntax and shape in the context of strict. with correct typing." },
        { label: "practical usage", syntax: "strict. — practical usage", note: "Apply practical usage in the context of strict. with correct typing." },
        { label: "edge cases", syntax: "strict. — edge cases", note: "Apply edge cases in the context of strict. with correct typing." },
        { label: "best practices", syntax: "strict. — best practices", note: "Apply best practices in the context of strict. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "core concept of strict.", code: `// strict.: core concept of strict.
// Context: tsconfig.json Deep Dive

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_12_core_concept_of_stri = null;`, note: "Focus on core concept of strict.: syntax, behavior, typing implications, and when to prefer it." },
        { label: "syntax and shape", code: `// strict.: syntax and shape
// Context: tsconfig.json Deep Dive

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_12_syntax_and_shape = null;`, note: "Focus on syntax and shape: syntax, behavior, typing implications, and when to prefer it." },
        { label: "practical usage", code: `// strict.: practical usage
// Context: tsconfig.json Deep Dive

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_12_practical_usage = null;`, note: "Focus on practical usage: syntax, behavior, typing implications, and when to prefer it." },
        { label: "edge cases", code: `// strict.: edge cases
// Context: tsconfig.json Deep Dive

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_12_edge_cases = null;`, note: "Focus on edge cases: syntax, behavior, typing implications, and when to prefer it." },
        { label: "best practices", code: `// strict.: best practices
// Context: tsconfig.json Deep Dive

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_12_best_practices = null;`, note: "Focus on best practices: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "core concept of strict. — example", code: `// strict. → core concept of strict.
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘core concept of strict.’ aspect with an explicit example." },
        { title: "syntax and shape — example", code: `// strict. → syntax and shape
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘syntax and shape’ aspect with an explicit example." },
        { title: "practical usage — example", code: `// strict. → practical usage
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘practical usage’ aspect with an explicit example." },
        { title: "edge cases — example", code: `// strict. → edge cases
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘edge cases’ aspect with an explicit example." },
        { title: "best practices — example", code: `// strict. → best practices
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘best practices’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: strict.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: strict.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "strict. in tsconfig.json Deep Dive: what it is, what problem it solves, and how TypeScript models it." },
        { title: "Syntax & variations", body: "Core syntax plus important variations, optional forms, modifiers, generics/overloads, and equivalent patterns." },
        { title: "Correct usage", body: "Use idiomatic, type-safe patterns; keep public APIs explicit and narrow/validate unknown data." },
        { title: "Edge cases & pitfalls", body: "Consider null/undefined, widening/narrowing, inference limits, unions/intersections, and runtime vs type-level behavior." },
        { title: "Real-world patterns", body: "Apply in realistic scenarios relevant to tsconfig.json Deep Dive, including composition with related TypeScript features." },
        { title: "Best practices", body: "Prefer clarity, correctness, and maintainability; avoid unsafe casts and overcomplicated types when simpler options work." },
      ]} />
      <NoteCallout tone="warning">Watch edge cases: null/undefined behavior, inference surprises, excess property checks, union narrowing, assignability, and differences between type-level and runtime behavior.</NoteCallout>
      <NoteCallout tone="tip">Prefer explicit types at module/API boundaries, use narrowing and validation for unknown inputs, and choose the simplest type that models the domain accurately.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I understand and can apply: core concept of strict..",
        "I understand and can apply: syntax and shape.",
        "I understand and can apply: practical usage.",
        "I understand and can apply: edge cases.",
        "I understand and can apply: best practices.",
        "I can explain trade-offs, edge cases, and best practices for strict.."
      ]} />

      <NoteTakeaways items={[
        "strict. is essential in tsconfig.json Deep Dive: understand its purpose, syntax, and behavior.",
        "Master variations and patterns to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
