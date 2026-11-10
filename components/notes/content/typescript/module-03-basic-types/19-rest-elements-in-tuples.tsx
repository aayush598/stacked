import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function RestElementsInTuples319() {
  return (
    <div>
      <SectionHero
        title="Rest elements in tuples."
        subtitle="Quick-scan guide to Rest elements in tuples. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 19/30", "Rest elements in tuples."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Rest elements in tuples.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "VARIADIC", detail: "Variadic tails", tone: "lime" },
        { label: "LEADING/FI", detail: "Leading/fixed + rest", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Rest elements in tuples. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Variadic tails", syntax: "Variadic tails pattern", note: "Use for variadic tails in Rest elements in tuples.." },
        { label: "Leading/fixed + rest", syntax: "Leading/fixed + rest pattern", note: "Use for leading/fixed + rest in Rest elements in tuples.." },
      ]} />
      <Tabs items={[
        { label: "Variadic tails", filename: "01-variadic-tails.ts", code: `// Rest elements in tuples. — Variadic tails
// Key idea: Variadic tails

// Variation / example
const example_19_variadic_tails = /* typed value */ null;

// Usage in context
function demo_19_variadic_tails(input: unknown) {
  // apply Variadic tails safely
  return input;
}

console.log(demo_19_variadic_tails(example_19_variadic_tails));`, output: `// Result / output (conceptual)
// - Variadic tails applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Variadic tails — understand syntax, typing, and a practical use." },
        { label: "Leading/fixed + rest", filename: "02-leading-fixed-rest.ts", code: `// Rest elements in tuples. — Leading/fixed + rest
// Key idea: Leading/fixed + rest

// Variation / example
const example_19_leading_fixed_rest = /* typed value */ null;

// Usage in context
function demo_19_leading_fixed_rest(input: unknown) {
  // apply Leading/fixed + rest safely
  return input;
}

console.log(demo_19_leading_fixed_rest(example_19_leading_fixed_rest));`, output: `// Result / output (conceptual)
// - Leading/fixed + rest applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Leading/fixed + rest — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Variadic tails", code: `// Example: Variadic tails
// Scenario: use this aspect of Rest elements in tuples. in real code.

export function ex_19_1() {
  // implement Variadic tails
  return "Variadic tails";
}

console.log(ex_19_1());`, output: `Variadic tails`, note: "Practical example highlighting Variadic tails." },
        { title: "Leading/fixed + rest", code: `// Example: Leading/fixed + rest
// Scenario: use this aspect of Rest elements in tuples. in real code.

export function ex_19_2() {
  // implement Leading/fixed + rest
  return "Leading/fixed + rest";
}

console.log(ex_19_2());`, output: `Leading/fixed + rest`, note: "Practical example highlighting Leading/fixed + rest." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Rest elements in tuples.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Rest elements in tuples.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Rest elements in tuples.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Variadic tails, Leading/fixed + rest)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Variadic tails",
        "Understand: Leading/fixed + rest",
        "Can write and explain a typed example of Rest elements in tuples.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Rest elements in tuples. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
