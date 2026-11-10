import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function SpecialTypesOverview78() {
  return (
    <div>
      <SectionHero
        title="Special types overview."
        subtitle="Quick-scan guide to Special types overview. in Enums & Special Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Enums & Special Types", "Section 8/8", "Special types overview."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Special types overview.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "ANY", detail: "any", tone: "lime" },
        { label: "UNKNOWN", detail: "unknown", tone: "sky" },
        { label: "NEVER", detail: "never", tone: "violet" },
        { label: "VOID", detail: "void", tone: "coral" },
        { label: "OBJECT", detail: "object", tone: "lime" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Special types overview. is and why it exists in Enums & Special Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "any", syntax: "any pattern", note: "Use for any in Special types overview.." },
        { label: "unknown", syntax: "unknown pattern", note: "Use for unknown in Special types overview.." },
        { label: "never", syntax: "never pattern", note: "Use for never in Special types overview.." },
        { label: "void", syntax: "void pattern", note: "Use for void in Special types overview.." },
        { label: "object", syntax: "object pattern", note: "Use for object in Special types overview.." },
      ]} />
      <Tabs items={[
        { label: "any", filename: "01-any.ts", code: `// Special types overview. — any
// Key idea: any

// Variation / example
const example_8_any = /* typed value */ null;

// Usage in context
function demo_8_any(input: unknown) {
  // apply any safely
  return input;
}

console.log(demo_8_any(example_8_any));`, output: `// Result / output (conceptual)
// - any applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: any — understand syntax, typing, and a practical use." },
        { label: "unknown", filename: "02-unknown.ts", code: `// Special types overview. — unknown
// Key idea: unknown

// Variation / example
const example_8_unknown = /* typed value */ null;

// Usage in context
function demo_8_unknown(input: unknown) {
  // apply unknown safely
  return input;
}

console.log(demo_8_unknown(example_8_unknown));`, output: `// Result / output (conceptual)
// - unknown applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: unknown — understand syntax, typing, and a practical use." },
        { label: "never", filename: "03-never.ts", code: `// Special types overview. — never
// Key idea: never

// Variation / example
const example_8_never = /* typed value */ null;

// Usage in context
function demo_8_never(input: unknown) {
  // apply never safely
  return input;
}

console.log(demo_8_never(example_8_never));`, output: `// Result / output (conceptual)
// - never applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: never — understand syntax, typing, and a practical use." },
        { label: "void", filename: "04-void.ts", code: `// Special types overview. — void
// Key idea: void

// Variation / example
const example_8_void = /* typed value */ null;

// Usage in context
function demo_8_void(input: unknown) {
  // apply void safely
  return input;
}

console.log(demo_8_void(example_8_void));`, output: `// Result / output (conceptual)
// - void applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: void — understand syntax, typing, and a practical use." },
        { label: "object", filename: "05-object.ts", code: `// Special types overview. — object
// Key idea: object

// Variation / example
const example_8_object = /* typed value */ null;

// Usage in context
function demo_8_object(input: unknown) {
  // apply object safely
  return input;
}

console.log(demo_8_object(example_8_object));`, output: `// Result / output (conceptual)
// - object applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: object — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "any", code: `// Example: any
// Scenario: use this aspect of Special types overview. in real code.

export function ex_8_1() {
  // implement any
  return "any";
}

console.log(ex_8_1());`, output: `any`, note: "Practical example highlighting any." },
        { title: "unknown", code: `// Example: unknown
// Scenario: use this aspect of Special types overview. in real code.

export function ex_8_2() {
  // implement unknown
  return "unknown";
}

console.log(ex_8_2());`, output: `unknown`, note: "Practical example highlighting unknown." },
        { title: "never", code: `// Example: never
// Scenario: use this aspect of Special types overview. in real code.

export function ex_8_3() {
  // implement never
  return "never";
}

console.log(ex_8_3());`, output: `never`, note: "Practical example highlighting never." },
        { title: "void", code: `// Example: void
// Scenario: use this aspect of Special types overview. in real code.

export function ex_8_4() {
  // implement void
  return "void";
}

console.log(ex_8_4());`, output: `void`, note: "Practical example highlighting void." },
        { title: "object", code: `// Example: object
// Scenario: use this aspect of Special types overview. in real code.

export function ex_8_5() {
  // implement object
  return "object";
}

console.log(ex_8_5());`, output: `object`, note: "Practical example highlighting object." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Special types overview.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Special types overview.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Special types overview.: definition and role in Enums & Special Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (any, unknown, never)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: any",
        "Understand: unknown",
        "Understand: never",
        "Understand: void",
        "Understand: object",
        "Can write and explain a typed example of Special types overview.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Special types overview. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
