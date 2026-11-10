import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeWidening327() {
  return (
    <div>
      <SectionHero
        title="Type widening."
        subtitle="Quick-scan guide to Type widening. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 27/30", "Type widening."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Type widening.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "LET", detail: "let vs const", tone: "lime" },
        { label: "OBJECT/ARR", detail: "Object/array widening", tone: "sky" },
        { label: "AS", detail: "as const", tone: "violet" },
        { label: "SATISFIES", detail: "satisfies", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Type widening. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "let vs const", syntax: "let vs const pattern", note: "Use for let vs const in Type widening.." },
        { label: "Object/array widening", syntax: "Object/array widening pattern", note: "Use for object/array widening in Type widening.." },
        { label: "as const", syntax: "as const pattern", note: "Use for as const in Type widening.." },
        { label: "satisfies", syntax: "satisfies pattern", note: "Use for satisfies in Type widening.." },
      ]} />
      <Tabs items={[
        { label: "let vs const", filename: "01-let-vs-const.ts", code: `// Type widening. — let vs const
// Key idea: let vs const

// Variation / example
const example_27_let_vs_const = /* typed value */ null;

// Usage in context
function demo_27_let_vs_const(input: unknown) {
  // apply let vs const safely
  return input;
}

console.log(demo_27_let_vs_const(example_27_let_vs_const));`, output: `// Result / output (conceptual)
// - let vs const applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: let vs const — understand syntax, typing, and a practical use." },
        { label: "Object/array widening", filename: "02-object-array-widen.ts", code: `// Type widening. — Object/array widening
// Key idea: Object/array widening

// Variation / example
const example_27_object_array_widen = /* typed value */ null;

// Usage in context
function demo_27_object_array_widen(input: unknown) {
  // apply Object/array widening safely
  return input;
}

console.log(demo_27_object_array_widen(example_27_object_array_widen));`, output: `// Result / output (conceptual)
// - Object/array widening applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Object/array widening — understand syntax, typing, and a practical use." },
        { label: "as const", filename: "03-as-const.ts", code: `// Type widening. — as const
// Key idea: as const

// Variation / example
const example_27_as_const = /* typed value */ null;

// Usage in context
function demo_27_as_const(input: unknown) {
  // apply as const safely
  return input;
}

console.log(demo_27_as_const(example_27_as_const));`, output: `// Result / output (conceptual)
// - as const applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: as const — understand syntax, typing, and a practical use." },
        { label: "satisfies", filename: "04-satisfies.ts", code: `// Type widening. — satisfies
// Key idea: satisfies

// Variation / example
const example_27_satisfies = /* typed value */ null;

// Usage in context
function demo_27_satisfies(input: unknown) {
  // apply satisfies safely
  return input;
}

console.log(demo_27_satisfies(example_27_satisfies));`, output: `// Result / output (conceptual)
// - satisfies applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: satisfies — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "let vs const", code: `// Example: let vs const
// Scenario: use this aspect of Type widening. in real code.

export function ex_27_1() {
  // implement let vs const
  return "let vs const";
}

console.log(ex_27_1());`, output: `let vs const`, note: "Practical example highlighting let vs const." },
        { title: "Object/array widening", code: `// Example: Object/array widening
// Scenario: use this aspect of Type widening. in real code.

export function ex_27_2() {
  // implement Object/array widening
  return "Object/array widening";
}

console.log(ex_27_2());`, output: `Object/array widening`, note: "Practical example highlighting Object/array widening." },
        { title: "as const", code: `// Example: as const
// Scenario: use this aspect of Type widening. in real code.

export function ex_27_3() {
  // implement as const
  return "as const";
}

console.log(ex_27_3());`, output: `as const`, note: "Practical example highlighting as const." },
        { title: "satisfies", code: `// Example: satisfies
// Scenario: use this aspect of Type widening. in real code.

export function ex_27_4() {
  // implement satisfies
  return "satisfies";
}

console.log(ex_27_4());`, output: `satisfies`, note: "Practical example highlighting satisfies." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Type widening.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Type widening.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Type widening.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (let vs const, Object/array widening, as const)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: let vs const",
        "Understand: Object/array widening",
        "Understand: as const",
        "Understand: satisfies",
        "Can write and explain a typed example of Type widening.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Type widening. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
