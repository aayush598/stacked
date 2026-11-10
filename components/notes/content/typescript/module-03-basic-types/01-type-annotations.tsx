import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeAnnotations31() {
  return (
    <div>
      <SectionHero
        title="Type annotations."
        subtitle="Deep dive into Type annotations. within Basic Types. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["Basic Types", "Section 1/30", "Type annotations."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Type annotations.</strong> is a key topic in <strong>Basic Types</strong>. Master annotations, inference, primitives, special types, literals, arrays, tuples, enums, and the core rules of widening, narrowing, compatibility, and assignability. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Type annotations. is and why it matters in Basic Types." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Type annotations.</strong>. Use the tabs to explore different aspects including: Syntax, Variables, Parameters, Properties, Return types, When to annotate.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Syntax", syntax: "Type annotations. — Syntax", note: "Apply Syntax in the context of Type annotations. with correct typing." },
        { label: "Variables", syntax: "Type annotations. — Variables", note: "Apply Variables in the context of Type annotations. with correct typing." },
        { label: "Parameters", syntax: "Type annotations. — Parameters", note: "Apply Parameters in the context of Type annotations. with correct typing." },
        { label: "Properties", syntax: "Type annotations. — Properties", note: "Apply Properties in the context of Type annotations. with correct typing." },
        { label: "Return types", syntax: "Type annotations. — Return types", note: "Apply Return types in the context of Type annotations. with correct typing." },
        { label: "When to annotate", syntax: "Type annotations. — When to annotate", note: "Apply When to annotate in the context of Type annotations. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Syntax", code: `// Type annotations.: Syntax
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_syntax = null;`, note: "Focus on Syntax: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Variables", code: `// Type annotations.: Variables
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_variables = null;`, note: "Focus on Variables: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Parameters", code: `// Type annotations.: Parameters
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_parameters = null;`, note: "Focus on Parameters: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Properties", code: `// Type annotations.: Properties
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_properties = null;`, note: "Focus on Properties: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Return types", code: `// Type annotations.: Return types
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_return_types = null;`, note: "Focus on Return types: syntax, behavior, typing implications, and when to prefer it." },
        { label: "When to annotate", code: `// Type annotations.: When to annotate
// Context: Basic Types

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_when_to_annotate = null;`, note: "Focus on When to annotate: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Syntax — example", code: `// Type annotations. → Syntax
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Syntax’ aspect with an explicit example." },
        { title: "Variables — example", code: `// Type annotations. → Variables
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Variables’ aspect with an explicit example." },
        { title: "Parameters — example", code: `// Type annotations. → Parameters
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Parameters’ aspect with an explicit example." },
        { title: "Properties — example", code: `// Type annotations. → Properties
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Properties’ aspect with an explicit example." },
        { title: "Return types — example", code: `// Type annotations. → Return types
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Return types’ aspect with an explicit example." },
        { title: "When to annotate — example", code: `// Type annotations. → When to annotate
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘When to annotate’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Type annotations.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Type annotations.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Type annotations. in Basic Types: what it is, what problem it solves, and how TypeScript models it." },
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
        "I understand and can apply: Syntax.",
        "I understand and can apply: Variables.",
        "I understand and can apply: Parameters.",
        "I understand and can apply: Properties.",
        "I understand and can apply: Return types.",
        "I understand and can apply: When to annotate.",
        "I can explain trade-offs, edge cases, and best practices for Type annotations.."
      ]} />

      <NoteTakeaways items={[
        "Type annotations. is essential in Basic Types: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Syntax, Variables, Parameters, Properties to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
