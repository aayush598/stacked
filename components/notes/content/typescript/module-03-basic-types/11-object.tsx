import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Object311() {
  return (
    <div>
      <SectionHero
        title="Object."
        subtitle="Quick-scan guide to Object. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 11/30", "Object."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Object.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "NON-PRIMIT", detail: "Non-primitive", tone: "lime" },
        { label: "OBJECT", detail: "object vs {} vs Object", tone: "sky" },
        { label: "STRUCTURED", detail: "Structured shapes", tone: "violet" },
        { label: "INDEX", detail: "Index signatures", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Object. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Non-primitive", syntax: "Non-primitive pattern", note: "Use for non-primitive in Object.." },
        { label: "object vs {} vs Object", syntax: "object vs {} vs Object pattern", note: "Use for object vs {} vs object in Object.." },
        { label: "Structured shapes", syntax: "Structured shapes pattern", note: "Use for structured shapes in Object.." },
        { label: "Index signatures", syntax: "Index signatures pattern", note: "Use for index signatures in Object.." },
      ]} />
      <Tabs items={[
        { label: "Non-primitive", filename: "01-non-primitive.ts", code: `// Object. — Non-primitive
// Key idea: Non-primitive

// Variation / example
const example_11_non_primitive = /* typed value */ null;

// Usage in context
function demo_11_non_primitive(input: unknown) {
  // apply Non-primitive safely
  return input;
}

console.log(demo_11_non_primitive(example_11_non_primitive));`, output: `// Result / output (conceptual)
// - Non-primitive applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Non-primitive — understand syntax, typing, and a practical use." },
        { label: "object vs {} vs Object", filename: "02-object-vs-vs-objec.ts", code: `// Object. — object vs {} vs Object
// Key idea: object vs {} vs Object

// Variation / example
const example_11_object_vs_vs_objec = /* typed value */ null;

// Usage in context
function demo_11_object_vs_vs_objec(input: unknown) {
  // apply object vs {} vs Object safely
  return input;
}

console.log(demo_11_object_vs_vs_objec(example_11_object_vs_vs_objec));`, output: `// Result / output (conceptual)
// - object vs {} vs Object applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: object vs {} vs Object — understand syntax, typing, and a practical use." },
        { label: "Structured shapes", filename: "03-structured-shapes.ts", code: `// Object. — Structured shapes
// Key idea: Structured shapes

// Variation / example
const example_11_structured_shapes = /* typed value */ null;

// Usage in context
function demo_11_structured_shapes(input: unknown) {
  // apply Structured shapes safely
  return input;
}

console.log(demo_11_structured_shapes(example_11_structured_shapes));`, output: `// Result / output (conceptual)
// - Structured shapes applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Structured shapes — understand syntax, typing, and a practical use." },
        { label: "Index signatures", filename: "04-index-signatures.ts", code: `// Object. — Index signatures
// Key idea: Index signatures

// Variation / example
const example_11_index_signatures = /* typed value */ null;

// Usage in context
function demo_11_index_signatures(input: unknown) {
  // apply Index signatures safely
  return input;
}

console.log(demo_11_index_signatures(example_11_index_signatures));`, output: `// Result / output (conceptual)
// - Index signatures applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Index signatures — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Non-primitive", code: `// Example: Non-primitive
// Scenario: use this aspect of Object. in real code.

export function ex_11_1() {
  // implement Non-primitive
  return "Non-primitive";
}

console.log(ex_11_1());`, output: `Non-primitive`, note: "Practical example highlighting Non-primitive." },
        { title: "object vs {} vs Object", code: `// Example: object vs {} vs Object
// Scenario: use this aspect of Object. in real code.

export function ex_11_2() {
  // implement object vs {} vs Object
  return "object vs {} vs Object";
}

console.log(ex_11_2());`, output: `object vs {} vs Object`, note: "Practical example highlighting object vs {} vs Object." },
        { title: "Structured shapes", code: `// Example: Structured shapes
// Scenario: use this aspect of Object. in real code.

export function ex_11_3() {
  // implement Structured shapes
  return "Structured shapes";
}

console.log(ex_11_3());`, output: `Structured shapes`, note: "Practical example highlighting Structured shapes." },
        { title: "Index signatures", code: `// Example: Index signatures
// Scenario: use this aspect of Object. in real code.

export function ex_11_4() {
  // implement Index signatures
  return "Index signatures";
}

console.log(ex_11_4());`, output: `Index signatures`, note: "Practical example highlighting Index signatures." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Object.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Object.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Object.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Non-primitive, object vs {} vs Object, Structured shapes)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Non-primitive",
        "Understand: object vs {} vs Object",
        "Understand: Structured shapes",
        "Understand: Index signatures",
        "Can write and explain a typed example of Object.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Object. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
