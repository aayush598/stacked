import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function ReadonlyTuples317() {
  return (
    <div>
      <SectionHero
        title="Readonly tuples."
        subtitle="Quick-scan guide to Readonly tuples. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 17/30", "Readonly tuples."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Readonly tuples.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "AS", detail: "as const", tone: "lime" },
        { label: "IMMUTABLE", detail: "Immutable fixed data", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Readonly tuples. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "as const", syntax: "as const pattern", note: "Use for as const in Readonly tuples.." },
        { label: "Immutable fixed data", syntax: "Immutable fixed data pattern", note: "Use for immutable fixed data in Readonly tuples.." },
      ]} />
      <Tabs items={[
        { label: "as const", filename: "01-as-const.ts", code: `// Readonly tuples. — as const
// Key idea: as const

// Variation / example
const example_17_as_const = /* typed value */ null;

// Usage in context
function demo_17_as_const(input: unknown) {
  // apply as const safely
  return input;
}

console.log(demo_17_as_const(example_17_as_const));`, output: `// Result / output (conceptual)
// - as const applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: as const — understand syntax, typing, and a practical use." },
        { label: "Immutable fixed data", filename: "02-immutable-fixed-da.ts", code: `// Readonly tuples. — Immutable fixed data
// Key idea: Immutable fixed data

// Variation / example
const example_17_immutable_fixed_da = /* typed value */ null;

// Usage in context
function demo_17_immutable_fixed_da(input: unknown) {
  // apply Immutable fixed data safely
  return input;
}

console.log(demo_17_immutable_fixed_da(example_17_immutable_fixed_da));`, output: `// Result / output (conceptual)
// - Immutable fixed data applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Immutable fixed data — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "as const", code: `// Example: as const
// Scenario: use this aspect of Readonly tuples. in real code.

export function ex_17_1() {
  // implement as const
  return "as const";
}

console.log(ex_17_1());`, output: `as const`, note: "Practical example highlighting as const." },
        { title: "Immutable fixed data", code: `// Example: Immutable fixed data
// Scenario: use this aspect of Readonly tuples. in real code.

export function ex_17_2() {
  // implement Immutable fixed data
  return "Immutable fixed data";
}

console.log(ex_17_2());`, output: `Immutable fixed data`, note: "Practical example highlighting Immutable fixed data." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Readonly tuples.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Readonly tuples.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Readonly tuples.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (as const, Immutable fixed data)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: as const",
        "Understand: Immutable fixed data",
        "Can write and explain a typed example of Readonly tuples.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Readonly tuples. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
