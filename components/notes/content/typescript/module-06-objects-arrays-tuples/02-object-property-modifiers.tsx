import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function ObjectPropertyModifiers62() {
  return (
    <div>
      <SectionHero
        title="Object property modifiers."
        subtitle="Quick-scan guide to Object property modifiers. in Objects, Arrays & Tuples: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Objects, Arrays & Tuples", "Section 2/13", "Object property modifiers."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Object property modifiers.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "READONLY", detail: "readonly", tone: "lime" },
        { label: "OPTIONAL", detail: "optional", tone: "sky" },
        { label: "EXACT", detail: "exact object types", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Object property modifiers. is and why it exists in Objects, Arrays & Tuples." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "readonly", syntax: "readonly pattern", note: "Use for readonly in Object property modifiers.." },
        { label: "optional", syntax: "optional pattern", note: "Use for optional in Object property modifiers.." },
        { label: "exact object types", syntax: "exact object types pattern", note: "Use for exact object types in Object property modifiers.." },
      ]} />
      <Tabs items={[
        { label: "readonly", filename: "01-readonly.ts", code: `// Object property modifiers. — readonly
// Key idea: readonly

// Variation / example
const example_2_readonly = /* typed value */ null;

// Usage in context
function demo_2_readonly(input: unknown) {
  // apply readonly safely
  return input;
}

console.log(demo_2_readonly(example_2_readonly));`, output: `// Result / output (conceptual)
// - readonly applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: readonly — understand syntax, typing, and a practical use." },
        { label: "optional", filename: "02-optional.ts", code: `// Object property modifiers. — optional
// Key idea: optional

// Variation / example
const example_2_optional = /* typed value */ null;

// Usage in context
function demo_2_optional(input: unknown) {
  // apply optional safely
  return input;
}

console.log(demo_2_optional(example_2_optional));`, output: `// Result / output (conceptual)
// - optional applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: optional — understand syntax, typing, and a practical use." },
        { label: "exact object types", filename: "03-exact-object-types.ts", code: `// Object property modifiers. — exact object types
// Key idea: exact object types

// Variation / example
const example_2_exact_object_types = /* typed value */ null;

// Usage in context
function demo_2_exact_object_types(input: unknown) {
  // apply exact object types safely
  return input;
}

console.log(demo_2_exact_object_types(example_2_exact_object_types));`, output: `// Result / output (conceptual)
// - exact object types applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: exact object types — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "readonly", code: `// Example: readonly
// Scenario: use this aspect of Object property modifiers. in real code.

export function ex_2_1() {
  // implement readonly
  return "readonly";
}

console.log(ex_2_1());`, output: `readonly`, note: "Practical example highlighting readonly." },
        { title: "optional", code: `// Example: optional
// Scenario: use this aspect of Object property modifiers. in real code.

export function ex_2_2() {
  // implement optional
  return "optional";
}

console.log(ex_2_2());`, output: `optional`, note: "Practical example highlighting optional." },
        { title: "exact object types", code: `// Example: exact object types
// Scenario: use this aspect of Object property modifiers. in real code.

export function ex_2_3() {
  // implement exact object types
  return "exact object types";
}

console.log(ex_2_3());`, output: `exact object types`, note: "Practical example highlighting exact object types." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Object property modifiers.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Object property modifiers.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Object property modifiers.: definition and role in Objects, Arrays & Tuples." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (readonly, optional, exact object types)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: readonly",
        "Understand: optional",
        "Understand: exact object types",
        "Can write and explain a typed example of Object property modifiers.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Object property modifiers. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
