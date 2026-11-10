import { NoteCallout, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { SectionHero, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function InstallingTypeScript21() {
  return (
    <div>
      <SectionHero
        title="Installing TypeScript."
        subtitle="Deep dive into Installing TypeScript. within TypeScript Setup & Tooling. Covers concepts, full syntax and variations, patterns, many examples, edge cases, and best practices with interactive visuals."
        chips={["TypeScript Setup & Tooling", "Section 1/10", "Installing TypeScript."]}
      />

      <NoteHeading>Concept & mental model</NoteHeading>
      <NoteText>
        <strong>Installing TypeScript.</strong> is a key topic in <strong>TypeScript Setup & Tooling</strong>. Install, configure, and run TypeScript with the tools used in real projects. This section explains what it is, why it exists, how TypeScript treats it, and how it connects to surrounding language features.
      </NoteText>
      <AnimatedFlow steps={[
        { label: "What & why", note: "Understand what Installing TypeScript. is and why it matters in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Learn the core syntax, forms, and required/optional parts." },
        { label: "Variations", note: "Cover alternative patterns, overloads, modifiers, and API shapes." },
        { label: "Examples", note: "Walk through practical typed examples and real-world usage." },
        { label: "Pitfalls & best practices", note: "Handle edge cases, avoid unsafe patterns, and choose idiomatic solutions." },
      ]} />

      <NoteHeading>Syntax, variations & patterns</NoteHeading>
      <NoteText>
        Below are the important syntax forms, variations, and patterns for <strong>Installing TypeScript.</strong>. Use the tabs to explore different aspects including: Global install, Local install, npx.
      </NoteText>
      <SyntaxMatrix rows={[
        { label: "Global install", syntax: "Installing TypeScript. — Global install", note: "Apply Global install in the context of Installing TypeScript. with correct typing." },
        { label: "Local install", syntax: "Installing TypeScript. — Local install", note: "Apply Local install in the context of Installing TypeScript. with correct typing." },
        { label: "npx", syntax: "Installing TypeScript. — npx", note: "Apply npx in the context of Installing TypeScript. with correct typing." },
      ]} />
      <Tabs items={[
        { label: "Global install", code: `// Installing TypeScript.: Global install
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_global_install = null;`, note: "Focus on Global install: syntax, behavior, typing implications, and when to prefer it." },
        { label: "Local install", code: `// Installing TypeScript.: Local install
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_local_install = null;`, note: "Focus on Local install: syntax, behavior, typing implications, and when to prefer it." },
        { label: "npx", code: `// Installing TypeScript.: npx
// Context: TypeScript Setup & Tooling

// 1) Baseline
// Use the canonical TypeScript form for this concept.

// 2) Variation
// Adapt syntax/options based on constraints and APIs.

// 3) Safe pattern
// Keep types explicit at boundaries and validate unknown data.

export const example_1_npx = null;`, note: "Focus on npx: syntax, behavior, typing implications, and when to prefer it." },
      ]} />

      <NoteHeading>Examples & practical usage</NoteHeading>
      <NoteText>Concrete, typed examples showing recommended usage, variations, and combinations relevant to real-world TypeScript code.</NoteText>
      <CodeCards items={[
        { title: "Global install — example", code: `// Installing TypeScript. → Global install
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Global install’ aspect with an explicit example." },
        { title: "Local install — example", code: `// Installing TypeScript. → Local install
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘Local install’ aspect with an explicit example." },
        { title: "npx — example", code: `// Installing TypeScript. → npx
// Show a concrete, typed example for this variation/pattern.
// Include input, expected type behavior, and output/result.`, note: "Covers the ‘npx’ aspect with an explicit example." },
      ]} />

      <ComparePanels
        left={{ title: "Problematic / unsafe pattern", code: `// Anti-pattern: Installing TypeScript.
// - ignores typing/contracts or uses unsafe escape hatches
// - misses edge cases or unclear intent
// Prefer explicit, validated, idiomatic TypeScript.`, note: "Avoid unclear, unsafe, or incomplete patterns." }}
        right={{ title: "Recommended pattern", code: `// Recommended: Installing TypeScript.
// - clear types and constraints
// - covers variations and edge cases
// - safe at runtime boundaries and maintainable in real projects`, note: "Prefer explicit, safe, and maintainable TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "Definition & mental model", body: "Installing TypeScript. in TypeScript Setup & Tooling: what it is, what problem it solves, and how TypeScript models it." },
        { title: "Syntax & variations", body: "Core syntax plus important variations, optional forms, modifiers, generics/overloads, and equivalent patterns." },
        { title: "Correct usage", body: "Use idiomatic, type-safe patterns; keep public APIs explicit and narrow/validate unknown data." },
        { title: "Edge cases & pitfalls", body: "Consider null/undefined, widening/narrowing, inference limits, unions/intersections, and runtime vs type-level behavior." },
        { title: "Real-world patterns", body: "Apply in realistic scenarios relevant to TypeScript Setup & Tooling, including composition with related TypeScript features." },
        { title: "Best practices", body: "Prefer clarity, correctness, and maintainability; avoid unsafe casts and overcomplicated types when simpler options work." },
      ]} />
      <NoteCallout tone="warning">Watch edge cases: null/undefined behavior, inference surprises, excess property checks, union narrowing, assignability, and differences between type-level and runtime behavior.</NoteCallout>
      <NoteCallout tone="tip">Prefer explicit types at module/API boundaries, use narrowing and validation for unknown inputs, and choose the simplest type that models the domain accurately.</NoteCallout>

      <NoteHeading>Practical checklist</NoteHeading>
      <Checklist items={[
        "I understand and can apply: Global install.",
        "I understand and can apply: Local install.",
        "I understand and can apply: npx.",
        "I can explain trade-offs, edge cases, and best practices for Installing TypeScript.."
      ]} />

      <NoteTakeaways items={[
        "Installing TypeScript. is essential in TypeScript Setup & Tooling: understand its purpose, syntax, and behavior.",
        "Master variations and patterns such as Global install, Local install, npx to write flexible, type-safe code.",
        "Account for edge cases and follow best practices to keep TypeScript code correct and maintainable.",
      ]} />
    </div>
  );
}
