import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Modifiers153() {
  return (
    <div>
      <SectionHero
        title="Modifiers."
        subtitle="Quick-scan guide to Modifiers. in Mapped Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Mapped Types", "Section 3/14", "Modifiers."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Modifiers.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "READONLY", detail: "readonly", tone: "lime" },
        { label: "OPTIONAL", detail: "optional", tone: "sky" },
        { label: "-READONLY", detail: "-readonly", tone: "violet" },
        { label: "-?", detail: "-?", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Modifiers. is and why it exists in Mapped Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "readonly", syntax: "readonly pattern", note: "Use for readonly in Modifiers.." },
        { label: "optional", syntax: "optional pattern", note: "Use for optional in Modifiers.." },
        { label: "-readonly", syntax: "-readonly pattern", note: "Use for -readonly in Modifiers.." },
        { label: "-?", syntax: "-? pattern", note: "Use for -? in Modifiers.." },
      ]} />
      <Tabs items={[
        { label: "readonly", filename: "01-readonly.ts", code: `// Modifiers. — readonly
// Key idea: readonly

// Variation / example
const example_3_readonly = /* typed value */ null;

// Usage in context
function demo_3_readonly(input: unknown) {
  // apply readonly safely
  return input;
}

console.log(demo_3_readonly(example_3_readonly));`, output: `// Result / output (conceptual)
// - readonly applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: readonly — understand syntax, typing, and a practical use." },
        { label: "optional", filename: "02-optional.ts", code: `// Modifiers. — optional
// Key idea: optional

// Variation / example
const example_3_optional = /* typed value */ null;

// Usage in context
function demo_3_optional(input: unknown) {
  // apply optional safely
  return input;
}

console.log(demo_3_optional(example_3_optional));`, output: `// Result / output (conceptual)
// - optional applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: optional — understand syntax, typing, and a practical use." },
        { label: "-readonly", filename: "03-readonly.ts", code: `// Modifiers. — -readonly
// Key idea: -readonly

// Variation / example
const example_3_readonly = /* typed value */ null;

// Usage in context
function demo_3_readonly(input: unknown) {
  // apply -readonly safely
  return input;
}

console.log(demo_3_readonly(example_3_readonly));`, output: `// Result / output (conceptual)
// - -readonly applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: -readonly — understand syntax, typing, and a practical use." },
        { label: "-?", filename: "04-section.ts", code: `// Modifiers. — -?
// Key idea: -?

// Variation / example
const example_3_section = /* typed value */ null;

// Usage in context
function demo_3_section(input: unknown) {
  // apply -? safely
  return input;
}

console.log(demo_3_section(example_3_section));`, output: `// Result / output (conceptual)
// - -? applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: -? — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "readonly", code: `// Example: readonly
// Scenario: use this aspect of Modifiers. in real code.

export function ex_3_1() {
  // implement readonly
  return "readonly";
}

console.log(ex_3_1());`, output: `readonly`, note: "Practical example highlighting readonly." },
        { title: "optional", code: `// Example: optional
// Scenario: use this aspect of Modifiers. in real code.

export function ex_3_2() {
  // implement optional
  return "optional";
}

console.log(ex_3_2());`, output: `optional`, note: "Practical example highlighting optional." },
        { title: "-readonly", code: `// Example: -readonly
// Scenario: use this aspect of Modifiers. in real code.

export function ex_3_3() {
  // implement -readonly
  return "-readonly";
}

console.log(ex_3_3());`, output: `-readonly`, note: "Practical example highlighting -readonly." },
        { title: "-?", code: `// Example: -?
// Scenario: use this aspect of Modifiers. in real code.

export function ex_3_4() {
  // implement -?
  return "-?";
}

console.log(ex_3_4());`, output: `-?`, note: "Practical example highlighting -?." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Modifiers.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Modifiers.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Modifiers.: definition and role in Mapped Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (readonly, optional, -readonly)." },
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
        "Understand: -readonly",
        "Understand: -?",
        "Can write and explain a typed example of Modifiers.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Modifiers. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
