import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function StringLiteralTypes314() {
  return (
    <div>
      <SectionHero
        title="String literal types."
        subtitle="Deep dive into String literal types. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 14/30", "String literal types."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>String literal types.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what String literal types. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>String literal types.</strong>. Use the tabs to explore different aspects including: Roles, HTTP methods, Discriminants, Template literals preview.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Roles", syntax: "String literal types. — Roles", note: "Apply Roles in the context of String literal types. with correct typing." },
        { label: "HTTP methods", syntax: "String literal types. — HTTP methods", note: "Apply HTTP methods in the context of String literal types. with correct typing." },
        { label: "Discriminants", syntax: "String literal types. — Discriminants", note: "Apply Discriminants in the context of String literal types. with correct typing." },
        { label: "Template literals preview", syntax: "String literal types. — Template literals preview", note: "Apply Template literals preview in the context of String literal types. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Roles", code: `// String literal types.: Roles
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_14_roles = null;`, note: "Focus on Roles: syntax, behavior, typing implications, and when to prefer it." },
        { label: "HTTP methods", code: `// String literal types.: HTTP methods
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_14_http_methods = null;`, note: "Focus on HTTP methods: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Discriminants", code: `// String literal types.: Discriminants
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_14_discriminants = null;`, note: "Focus on Discriminants: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Template literals preview", code: `// String literal types.: Template literals preview
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_14_template_literals_pr = null;`, note: "Focus on Template literals preview: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Roles — example", code: `// String literal types. → Roles
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Roles’ aspect with an explicit example." },
        { title: "HTTP methods — example", code: `// String literal types. → HTTP methods
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘HTTP methods’ aspect with an explicit example." },
        { title: "Discriminants — example", code: `// String literal types. → Discriminants
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Discriminants’ aspect with an explicit example." },
        { title: "Template literals preview — example", code: `// String literal types. → Template literals preview
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Template literals preview’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: String literal types.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: String literal types.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "String literal types. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Roles.",
        "I understand and can apply: HTTP methods.",
        "I understand and can apply: Discriminants.",
        "I understand and can apply: Template literals preview.",
        "I can explain trade-offs, edge cases, and best practices for String literal types.."
      ]} />

      <NoteTakeaways items={[
        "String literal types. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Roles, HTTP methods, Discriminants, Template literals preview to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
