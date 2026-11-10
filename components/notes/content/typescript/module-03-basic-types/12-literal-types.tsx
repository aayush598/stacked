import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function LiteralTypes312() {
  return (
    <div>
      <SectionHero
        title="Literal types."
        subtitle="Quick-scan guide to Literal types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 12/30", "Literal types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Literal types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "EXACT", detail: "Exact values as types", tone: "lime" },
        { label: "UNIONS", detail: "Unions of literals", tone: "sky" },
        { label: "AS", detail: "as const", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Literal types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Exact values as types", syntax: "Exact values as types pattern", note: "Use for exact values as types in Literal types.." },
        { label: "Unions of literals", syntax: "Unions of literals pattern", note: "Use for unions of literals in Literal types.." },
        { label: "as const", syntax: "as const pattern", note: "Use for as const in Literal types.." },
      ]} />
      <Tabs items={[
        { label: "Exact values as types", filename: "01-exact-values-as-ty.ts", code: `// Literal types. — Exact values as types
// Key idea: Exact values as types

// Variation / example
const example_12_exact_values_as_ty = /* typed value */ null;

// Usage in context
function demo_12_exact_values_as_ty(input: unknown) {
  // apply Exact values as types safely
  return input;
}

console.log(demo_12_exact_values_as_ty(example_12_exact_values_as_ty));`, output: `// Result / output (conceptual)
// - Exact values as types applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Exact values as types — understand syntax, typing, and a practical use." },
        { label: "Unions of literals", filename: "02-unions-of-literals.ts", code: `// Literal types. — Unions of literals
// Key idea: Unions of literals

// Variation / example
const example_12_unions_of_literals = /* typed value */ null;

// Usage in context
function demo_12_unions_of_literals(input: unknown) {
  // apply Unions of literals safely
  return input;
}

console.log(demo_12_unions_of_literals(example_12_unions_of_literals));`, output: `// Result / output (conceptual)
// - Unions of literals applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Unions of literals — understand syntax, typing, and a practical use." },
        { label: "as const", filename: "03-as-const.ts", code: `// Literal types. — as const
// Key idea: as const

// Variation / example
const example_12_as_const = /* typed value */ null;

// Usage in context
function demo_12_as_const(input: unknown) {
  // apply as const safely
  return input;
}

console.log(demo_12_as_const(example_12_as_const));`, output: `// Result / output (conceptual)
// - as const applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: as const — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Exact values as types", code: `// Example: Exact values as types
// Scenario: use this aspect of Literal types. in real code.

export function ex_12_1() {
  // implement Exact values as types
  return "Exact values as types";
}

console.log(ex_12_1());`, output: `Exact values as types`, note: "Practical example highlighting Exact values as types." },
        { title: "Unions of literals", code: `// Example: Unions of literals
// Scenario: use this aspect of Literal types. in real code.

export function ex_12_2() {
  // implement Unions of literals
  return "Unions of literals";
}

console.log(ex_12_2());`, output: `Unions of literals`, note: "Practical example highlighting Unions of literals." },
        { title: "as const", code: `// Example: as const
// Scenario: use this aspect of Literal types. in real code.

export function ex_12_3() {
  // implement as const
  return "as const";
}

console.log(ex_12_3());`, output: `as const`, note: "Practical example highlighting as const." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Literal types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Literal types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Literal types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Exact values as types, Unions of literals, as const)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Exact values as types",
        "Understand: Unions of literals",
        "Understand: as const",
        "Can write and explain a typed example of Literal types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Literal types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
