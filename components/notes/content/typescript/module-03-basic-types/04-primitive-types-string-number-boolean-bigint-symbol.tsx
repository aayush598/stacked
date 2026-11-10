import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function PrimitiveTypesStringNumberBooleanBigintSymbol34() {
  return (
    <div>
      <SectionHero
        title="Primitive types: string, number, boolean, bigint, symbol."
        subtitle="Quick-scan guide to Primitive types: string, number, boolean, bigint, symbol. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 4/30", "Primitive types: string, number, boolean, bigint, symbol."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Primitive types: string, number, boolean, bigint, symbol.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "RUNTIME", detail: "Runtime primitives", tone: "lime" },
        { label: "OPERATIONS", detail: "Operations", tone: "sky" },
        { label: "BOXED", detail: "Boxed types to avoid", tone: "violet" },
        { label: "IEEE", detail: "IEEE 754 and BigInt", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Primitive types: string, number, boolean, bigint, symbol. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Runtime primitives", syntax: "Runtime primitives pattern", note: "Use for runtime primitives in Primitive types: string, number, boolean, bigint, symbol.." },
        { label: "Operations", syntax: "Operations pattern", note: "Use for operations in Primitive types: string, number, boolean, bigint, symbol.." },
        { label: "Boxed types to avoid", syntax: "Boxed types to avoid pattern", note: "Use for boxed types to avoid in Primitive types: string, number, boolean, bigint, symbol.." },
        { label: "IEEE 754 and BigInt", syntax: "IEEE 754 and BigInt pattern", note: "Use for ieee 754 and bigint in Primitive types: string, number, boolean, bigint, symbol.." },
      ]} />
      <Tabs items={[
        { label: "Runtime primitives", filename: "01-runtime-primitives.ts", code: `// Primitive types: string, number, boolean, bigint, symbol. — Runtime primitives
// Key idea: Runtime primitives

// Variation / example
const example_4_runtime_primitives = /* typed value */ null;

// Usage in context
function demo_4_runtime_primitives(input: unknown) {
  // apply Runtime primitives safely
  return input;
}

console.log(demo_4_runtime_primitives(example_4_runtime_primitives));`, output: `// Result / output (conceptual)
// - Runtime primitives applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Runtime primitives — understand syntax, typing, and a practical use." },
        { label: "Operations", filename: "02-operations.ts", code: `// Primitive types: string, number, boolean, bigint, symbol. — Operations
// Key idea: Operations

// Variation / example
const example_4_operations = /* typed value */ null;

// Usage in context
function demo_4_operations(input: unknown) {
  // apply Operations safely
  return input;
}

console.log(demo_4_operations(example_4_operations));`, output: `// Result / output (conceptual)
// - Operations applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Operations — understand syntax, typing, and a practical use." },
        { label: "Boxed types to avoid", filename: "03-boxed-types-to-avo.ts", code: `// Primitive types: string, number, boolean, bigint, symbol. — Boxed types to avoid
// Key idea: Boxed types to avoid

// Variation / example
const example_4_boxed_types_to_avo = /* typed value */ null;

// Usage in context
function demo_4_boxed_types_to_avo(input: unknown) {
  // apply Boxed types to avoid safely
  return input;
}

console.log(demo_4_boxed_types_to_avo(example_4_boxed_types_to_avo));`, output: `// Result / output (conceptual)
// - Boxed types to avoid applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Boxed types to avoid — understand syntax, typing, and a practical use." },
        { label: "IEEE 754 and BigInt", filename: "04-ieee-754-and-bigin.ts", code: `// Primitive types: string, number, boolean, bigint, symbol. — IEEE 754 and BigInt
// Key idea: IEEE 754 and BigInt

// Variation / example
const example_4_ieee_754_and_bigin = /* typed value */ null;

// Usage in context
function demo_4_ieee_754_and_bigin(input: unknown) {
  // apply IEEE 754 and BigInt safely
  return input;
}

console.log(demo_4_ieee_754_and_bigin(example_4_ieee_754_and_bigin));`, output: `// Result / output (conceptual)
// - IEEE 754 and BigInt applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: IEEE 754 and BigInt — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Runtime primitives", code: `// Example: Runtime primitives
// Scenario: use this aspect of Primitive types: string, number, boolean, bigint, symbol. in real code.

export function ex_4_1() {
  // implement Runtime primitives
  return "Runtime primitives";
}

console.log(ex_4_1());`, output: `Runtime primitives`, note: "Practical example highlighting Runtime primitives." },
        { title: "Operations", code: `// Example: Operations
// Scenario: use this aspect of Primitive types: string, number, boolean, bigint, symbol. in real code.

export function ex_4_2() {
  // implement Operations
  return "Operations";
}

console.log(ex_4_2());`, output: `Operations`, note: "Practical example highlighting Operations." },
        { title: "Boxed types to avoid", code: `// Example: Boxed types to avoid
// Scenario: use this aspect of Primitive types: string, number, boolean, bigint, symbol. in real code.

export function ex_4_3() {
  // implement Boxed types to avoid
  return "Boxed types to avoid";
}

console.log(ex_4_3());`, output: `Boxed types to avoid`, note: "Practical example highlighting Boxed types to avoid." },
        { title: "IEEE 754 and BigInt", code: `// Example: IEEE 754 and BigInt
// Scenario: use this aspect of Primitive types: string, number, boolean, bigint, symbol. in real code.

export function ex_4_4() {
  // implement IEEE 754 and BigInt
  return "IEEE 754 and BigInt";
}

console.log(ex_4_4());`, output: `IEEE 754 and BigInt`, note: "Practical example highlighting IEEE 754 and BigInt." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Primitive types: string, number, boolean, bigint, symbol.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Primitive types: string, number, boolean, bigint, symbol.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Primitive types: string, number, boolean, bigint, symbol.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Runtime primitives, Operations, Boxed types to avoid)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Runtime primitives",
        "Understand: Operations",
        "Understand: Boxed types to avoid",
        "Understand: IEEE 754 and BigInt",
        "Can write and explain a typed example of Primitive types: string, number, boolean, bigint, symbol.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Primitive types: string, number, boolean, bigint, symbol. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
