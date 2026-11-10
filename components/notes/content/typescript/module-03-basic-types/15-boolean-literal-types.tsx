import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function BooleanLiteralTypes315() {
  return (
    <div>
      <SectionHero
        title="Boolean literal types."
        subtitle="Quick-scan guide to Boolean literal types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 15/30", "Boolean literal types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Boolean literal types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "TRUE/FALSE", detail: "true/false as types", tone: "lime" },
        { label: "DISCRIMINA", detail: "Discriminated unions", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Boolean literal types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "true/false as types", syntax: "true/false as types pattern", note: "Use for true/false as types in Boolean literal types.." },
        { label: "Discriminated unions", syntax: "Discriminated unions pattern", note: "Use for discriminated unions in Boolean literal types.." },
      ]} />
      <Tabs items={[
        { label: "true/false as types", filename: "01-true-false-as-type.ts", code: `// Boolean literal types. — true/false as types
// Key idea: true/false as types

// Variation / example
const example_15_true_false_as_type = /* typed value */ null;

// Usage in context
function demo_15_true_false_as_type(input: unknown) {
  // apply true/false as types safely
  return input;
}

console.log(demo_15_true_false_as_type(example_15_true_false_as_type));`, output: `// Result / output (conceptual)
// - true/false as types applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: true/false as types — understand syntax, typing, and a practical use." },
        { label: "Discriminated unions", filename: "02-discriminated-unio.ts", code: `// Boolean literal types. — Discriminated unions
// Key idea: Discriminated unions

// Variation / example
const example_15_discriminated_unio = /* typed value */ null;

// Usage in context
function demo_15_discriminated_unio(input: unknown) {
  // apply Discriminated unions safely
  return input;
}

console.log(demo_15_discriminated_unio(example_15_discriminated_unio));`, output: `// Result / output (conceptual)
// - Discriminated unions applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Discriminated unions — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "true/false as types", code: `// Example: true/false as types
// Scenario: use this aspect of Boolean literal types. in real code.

export function ex_15_1() {
  // implement true/false as types
  return "true/false as types";
}

console.log(ex_15_1());`, output: `true/false as types`, note: "Practical example highlighting true/false as types." },
        { title: "Discriminated unions", code: `// Example: Discriminated unions
// Scenario: use this aspect of Boolean literal types. in real code.

export function ex_15_2() {
  // implement Discriminated unions
  return "Discriminated unions";
}

console.log(ex_15_2());`, output: `Discriminated unions`, note: "Practical example highlighting Discriminated unions." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Boolean literal types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Boolean literal types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Boolean literal types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (true/false as types, Discriminated unions)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: true/false as types",
        "Understand: Discriminated unions",
        "Can write and explain a typed example of Boolean literal types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Boolean literal types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
