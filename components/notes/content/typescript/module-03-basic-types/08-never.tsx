import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Never38() {
  return (
    <div>
      <SectionHero
        title="Never."
        subtitle="Quick-scan guide to Never. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 8/30", "Never."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Never.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "UNREACHABL", detail: "Unreachable code", tone: "lime" },
        { label: "EXHAUSTIVE", detail: "Exhaustiveness", tone: "sky" },
        { label: "BOTTOM", detail: "Bottom type", tone: "violet" },
        { label: "NEVER", detail: "never in conditionals", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Never. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Unreachable code", syntax: "Unreachable code pattern", note: "Use for unreachable code in Never.." },
        { label: "Exhaustiveness", syntax: "Exhaustiveness pattern", note: "Use for exhaustiveness in Never.." },
        { label: "Bottom type", syntax: "Bottom type pattern", note: "Use for bottom type in Never.." },
        { label: "never in conditionals", syntax: "never in conditionals pattern", note: "Use for never in conditionals in Never.." },
      ]} />
      <Tabs items={[
        { label: "Unreachable code", filename: "01-unreachable-code.ts", code: `// Never. — Unreachable code
// Key idea: Unreachable code

// Variation / example
const example_8_unreachable_code = /* typed value */ null;

// Usage in context
function demo_8_unreachable_code(input: unknown) {
  // apply Unreachable code safely
  return input;
}

console.log(demo_8_unreachable_code(example_8_unreachable_code));`, output: `// Result / output (conceptual)
// - Unreachable code applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Unreachable code — understand syntax, typing, and a practical use." },
        { label: "Exhaustiveness", filename: "02-exhaustiveness.ts", code: `// Never. — Exhaustiveness
// Key idea: Exhaustiveness

// Variation / example
const example_8_exhaustiveness = /* typed value */ null;

// Usage in context
function demo_8_exhaustiveness(input: unknown) {
  // apply Exhaustiveness safely
  return input;
}

console.log(demo_8_exhaustiveness(example_8_exhaustiveness));`, output: `// Result / output (conceptual)
// - Exhaustiveness applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Exhaustiveness — understand syntax, typing, and a practical use." },
        { label: "Bottom type", filename: "03-bottom-type.ts", code: `// Never. — Bottom type
// Key idea: Bottom type

// Variation / example
const example_8_bottom_type = /* typed value */ null;

// Usage in context
function demo_8_bottom_type(input: unknown) {
  // apply Bottom type safely
  return input;
}

console.log(demo_8_bottom_type(example_8_bottom_type));`, output: `// Result / output (conceptual)
// - Bottom type applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Bottom type — understand syntax, typing, and a practical use." },
        { label: "never in conditionals", filename: "04-never-in-condition.ts", code: `// Never. — never in conditionals
// Key idea: never in conditionals

// Variation / example
const example_8_never_in_condition = /* typed value */ null;

// Usage in context
function demo_8_never_in_condition(input: unknown) {
  // apply never in conditionals safely
  return input;
}

console.log(demo_8_never_in_condition(example_8_never_in_condition));`, output: `// Result / output (conceptual)
// - never in conditionals applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: never in conditionals — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Unreachable code", code: `// Example: Unreachable code
// Scenario: use this aspect of Never. in real code.

export function ex_8_1() {
  // implement Unreachable code
  return "Unreachable code";
}

console.log(ex_8_1());`, output: `Unreachable code`, note: "Practical example highlighting Unreachable code." },
        { title: "Exhaustiveness", code: `// Example: Exhaustiveness
// Scenario: use this aspect of Never. in real code.

export function ex_8_2() {
  // implement Exhaustiveness
  return "Exhaustiveness";
}

console.log(ex_8_2());`, output: `Exhaustiveness`, note: "Practical example highlighting Exhaustiveness." },
        { title: "Bottom type", code: `// Example: Bottom type
// Scenario: use this aspect of Never. in real code.

export function ex_8_3() {
  // implement Bottom type
  return "Bottom type";
}

console.log(ex_8_3());`, output: `Bottom type`, note: "Practical example highlighting Bottom type." },
        { title: "never in conditionals", code: `// Example: never in conditionals
// Scenario: use this aspect of Never. in real code.

export function ex_8_4() {
  // implement never in conditionals
  return "never in conditionals";
}

console.log(ex_8_4());`, output: `never in conditionals`, note: "Practical example highlighting never in conditionals." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Never.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Never.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Never.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Unreachable code, Exhaustiveness, Bottom type)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Unreachable code",
        "Understand: Exhaustiveness",
        "Understand: Bottom type",
        "Understand: never in conditionals",
        "Can write and explain a typed example of Never.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Never. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
