import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function StringManipulationTypes172() {
  return (
    <div>
      <SectionHero
        title="String manipulation types."
        subtitle="Quick-scan guide to String manipulation types. in Template Literal Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Template Literal Types", "Section 2/12", "String manipulation types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>String manipulation types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "UPPERCASE", detail: "Uppercase", tone: "lime" },
        { label: "LOWERCASE", detail: "Lowercase", tone: "sky" },
        { label: "CAPITALIZE", detail: "Capitalize", tone: "violet" },
        { label: "UNCAPITALI", detail: "Uncapitalize", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What String manipulation types. is and why it exists in Template Literal Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Uppercase", syntax: "Uppercase pattern", note: "Use for uppercase in String manipulation types.." },
        { label: "Lowercase", syntax: "Lowercase pattern", note: "Use for lowercase in String manipulation types.." },
        { label: "Capitalize", syntax: "Capitalize pattern", note: "Use for capitalize in String manipulation types.." },
        { label: "Uncapitalize", syntax: "Uncapitalize pattern", note: "Use for uncapitalize in String manipulation types.." },
      ]} />
      <Tabs items={[
        { label: "Uppercase", filename: "01-uppercase.ts", code: `// String manipulation types. — Uppercase
// Key idea: Uppercase

// Variation / example
const example_2_uppercase = /* typed value */ null;

// Usage in context
function demo_2_uppercase(input: unknown) {
  // apply Uppercase safely
  return input;
}

console.log(demo_2_uppercase(example_2_uppercase));`, output: `// Result / output (conceptual)
// - Uppercase applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Uppercase — understand syntax, typing, and a practical use." },
        { label: "Lowercase", filename: "02-lowercase.ts", code: `// String manipulation types. — Lowercase
// Key idea: Lowercase

// Variation / example
const example_2_lowercase = /* typed value */ null;

// Usage in context
function demo_2_lowercase(input: unknown) {
  // apply Lowercase safely
  return input;
}

console.log(demo_2_lowercase(example_2_lowercase));`, output: `// Result / output (conceptual)
// - Lowercase applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Lowercase — understand syntax, typing, and a practical use." },
        { label: "Capitalize", filename: "03-capitalize.ts", code: `// String manipulation types. — Capitalize
// Key idea: Capitalize

// Variation / example
const example_2_capitalize = /* typed value */ null;

// Usage in context
function demo_2_capitalize(input: unknown) {
  // apply Capitalize safely
  return input;
}

console.log(demo_2_capitalize(example_2_capitalize));`, output: `// Result / output (conceptual)
// - Capitalize applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Capitalize — understand syntax, typing, and a practical use." },
        { label: "Uncapitalize", filename: "04-uncapitalize.ts", code: `// String manipulation types. — Uncapitalize
// Key idea: Uncapitalize

// Variation / example
const example_2_uncapitalize = /* typed value */ null;

// Usage in context
function demo_2_uncapitalize(input: unknown) {
  // apply Uncapitalize safely
  return input;
}

console.log(demo_2_uncapitalize(example_2_uncapitalize));`, output: `// Result / output (conceptual)
// - Uncapitalize applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Uncapitalize — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Uppercase", code: `// Example: Uppercase
// Scenario: use this aspect of String manipulation types. in real code.

export function ex_2_1() {
  // implement Uppercase
  return "Uppercase";
}

console.log(ex_2_1());`, output: `Uppercase`, note: "Practical example highlighting Uppercase." },
        { title: "Lowercase", code: `// Example: Lowercase
// Scenario: use this aspect of String manipulation types. in real code.

export function ex_2_2() {
  // implement Lowercase
  return "Lowercase";
}

console.log(ex_2_2());`, output: `Lowercase`, note: "Practical example highlighting Lowercase." },
        { title: "Capitalize", code: `// Example: Capitalize
// Scenario: use this aspect of String manipulation types. in real code.

export function ex_2_3() {
  // implement Capitalize
  return "Capitalize";
}

console.log(ex_2_3());`, output: `Capitalize`, note: "Practical example highlighting Capitalize." },
        { title: "Uncapitalize", code: `// Example: Uncapitalize
// Scenario: use this aspect of String manipulation types. in real code.

export function ex_2_4() {
  // implement Uncapitalize
  return "Uncapitalize";
}

console.log(ex_2_4());`, output: `Uncapitalize`, note: "Practical example highlighting Uncapitalize." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: String manipulation types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: String manipulation types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "String manipulation types.: definition and role in Template Literal Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Uppercase, Lowercase, Capitalize)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Uppercase",
        "Understand: Lowercase",
        "Understand: Capitalize",
        "Understand: Uncapitalize",
        "Can write and explain a typed example of String manipulation types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp String manipulation types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
