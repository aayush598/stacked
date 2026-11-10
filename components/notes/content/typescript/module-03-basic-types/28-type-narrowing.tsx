import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeNarrowing328() {
  return (
    <div>
      <SectionHero
        title="Type narrowing."
        subtitle="Quick-scan guide to Type narrowing. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 28/30", "Type narrowing."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Type narrowing.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "TYPEOF", detail: "typeof", tone: "lime" },
        { label: "TRUTHINESS", detail: "truthiness", tone: "sky" },
        { label: "EQUALITY", detail: "equality", tone: "violet" },
        { label: "IN", detail: "in", tone: "coral" },
        { label: "INSTANCEOF", detail: "instanceof", tone: "lime" },
        { label: "PREDICATES", detail: "predicates", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Type narrowing. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "typeof", syntax: "typeof pattern", note: "Use for typeof in Type narrowing.." },
        { label: "truthiness", syntax: "truthiness pattern", note: "Use for truthiness in Type narrowing.." },
        { label: "equality", syntax: "equality pattern", note: "Use for equality in Type narrowing.." },
        { label: "in", syntax: "in pattern", note: "Use for in in Type narrowing.." },
        { label: "instanceof", syntax: "instanceof pattern", note: "Use for instanceof in Type narrowing.." },
        { label: "predicates", syntax: "predicates pattern", note: "Use for predicates in Type narrowing.." },
      ]} />
      <Tabs items={[
        { label: "typeof", filename: "01-typeof.ts", code: `// Type narrowing. — typeof
// Key idea: typeof

// Variation / example
const example_28_typeof = /* typed value */ null;

// Usage in context
function demo_28_typeof(input: unknown) {
  // apply typeof safely
  return input;
}

console.log(demo_28_typeof(example_28_typeof));`, output: `// Result / output (conceptual)
// - typeof applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: typeof — understand syntax, typing, and a practical use." },
        { label: "truthiness", filename: "02-truthiness.ts", code: `// Type narrowing. — truthiness
// Key idea: truthiness

// Variation / example
const example_28_truthiness = /* typed value */ null;

// Usage in context
function demo_28_truthiness(input: unknown) {
  // apply truthiness safely
  return input;
}

console.log(demo_28_truthiness(example_28_truthiness));`, output: `// Result / output (conceptual)
// - truthiness applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: truthiness — understand syntax, typing, and a practical use." },
        { label: "equality", filename: "03-equality.ts", code: `// Type narrowing. — equality
// Key idea: equality

// Variation / example
const example_28_equality = /* typed value */ null;

// Usage in context
function demo_28_equality(input: unknown) {
  // apply equality safely
  return input;
}

console.log(demo_28_equality(example_28_equality));`, output: `// Result / output (conceptual)
// - equality applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: equality — understand syntax, typing, and a practical use." },
        { label: "in", filename: "04-in.ts", code: `// Type narrowing. — in
// Key idea: in

// Variation / example
const example_28_in = /* typed value */ null;

// Usage in context
function demo_28_in(input: unknown) {
  // apply in safely
  return input;
}

console.log(demo_28_in(example_28_in));`, output: `// Result / output (conceptual)
// - in applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: in — understand syntax, typing, and a practical use." },
        { label: "instanceof", filename: "05-instanceof.ts", code: `// Type narrowing. — instanceof
// Key idea: instanceof

// Variation / example
const example_28_instanceof = /* typed value */ null;

// Usage in context
function demo_28_instanceof(input: unknown) {
  // apply instanceof safely
  return input;
}

console.log(demo_28_instanceof(example_28_instanceof));`, output: `// Result / output (conceptual)
// - instanceof applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: instanceof — understand syntax, typing, and a practical use." },
        { label: "predicates", filename: "06-predicates.ts", code: `// Type narrowing. — predicates
// Key idea: predicates

// Variation / example
const example_28_predicates = /* typed value */ null;

// Usage in context
function demo_28_predicates(input: unknown) {
  // apply predicates safely
  return input;
}

console.log(demo_28_predicates(example_28_predicates));`, output: `// Result / output (conceptual)
// - predicates applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: predicates — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "typeof", code: `// Example: typeof
// Scenario: use this aspect of Type narrowing. in real code.

export function ex_28_1() {
  // implement typeof
  return "typeof";
}

console.log(ex_28_1());`, output: `typeof`, note: "Practical example highlighting typeof." },
        { title: "truthiness", code: `// Example: truthiness
// Scenario: use this aspect of Type narrowing. in real code.

export function ex_28_2() {
  // implement truthiness
  return "truthiness";
}

console.log(ex_28_2());`, output: `truthiness`, note: "Practical example highlighting truthiness." },
        { title: "equality", code: `// Example: equality
// Scenario: use this aspect of Type narrowing. in real code.

export function ex_28_3() {
  // implement equality
  return "equality";
}

console.log(ex_28_3());`, output: `equality`, note: "Practical example highlighting equality." },
        { title: "in", code: `// Example: in
// Scenario: use this aspect of Type narrowing. in real code.

export function ex_28_4() {
  // implement in
  return "in";
}

console.log(ex_28_4());`, output: `in`, note: "Practical example highlighting in." },
        { title: "instanceof", code: `// Example: instanceof
// Scenario: use this aspect of Type narrowing. in real code.

export function ex_28_5() {
  // implement instanceof
  return "instanceof";
}

console.log(ex_28_5());`, output: `instanceof`, note: "Practical example highlighting instanceof." },
        { title: "predicates", code: `// Example: predicates
// Scenario: use this aspect of Type narrowing. in real code.

export function ex_28_6() {
  // implement predicates
  return "predicates";
}

console.log(ex_28_6());`, output: `predicates`, note: "Practical example highlighting predicates." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Type narrowing.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Type narrowing.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Type narrowing.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (typeof, truthiness, equality)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: typeof",
        "Understand: truthiness",
        "Understand: equality",
        "Understand: in",
        "Understand: instanceof",
        "Understand: predicates",
        "Can write and explain a typed example of Type narrowing.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Type narrowing. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
