import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function NamedTupleElements320() {
  return (
    <div>
      <SectionHero
        title="Named tuple elements."
        subtitle="Quick-scan guide to Named tuple elements. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 20/30", "Named tuple elements."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Named tuple elements.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "LABELS", detail: "Labels", tone: "lime" },
        { label: "READABILIT", detail: "Readability", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Named tuple elements. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Labels", syntax: "Labels pattern", note: "Use for labels in Named tuple elements.." },
        { label: "Readability", syntax: "Readability pattern", note: "Use for readability in Named tuple elements.." },
      ]} />
      <Tabs items={[
        { label: "Labels", filename: "01-labels.ts", code: `// Named tuple elements. — Labels
// Key idea: Labels

// Variation / example
const example_20_labels = /* typed value */ null;

// Usage in context
function demo_20_labels(input: unknown) {
  // apply Labels safely
  return input;
}

console.log(demo_20_labels(example_20_labels));`, output: `// Result / output (conceptual)
// - Labels applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Labels — understand syntax, typing, and a practical use." },
        { label: "Readability", filename: "02-readability.ts", code: `// Named tuple elements. — Readability
// Key idea: Readability

// Variation / example
const example_20_readability = /* typed value */ null;

// Usage in context
function demo_20_readability(input: unknown) {
  // apply Readability safely
  return input;
}

console.log(demo_20_readability(example_20_readability));`, output: `// Result / output (conceptual)
// - Readability applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Readability — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Labels", code: `// Example: Labels
// Scenario: use this aspect of Named tuple elements. in real code.

export function ex_20_1() {
  // implement Labels
  return "Labels";
}

console.log(ex_20_1());`, output: `Labels`, note: "Practical example highlighting Labels." },
        { title: "Readability", code: `// Example: Readability
// Scenario: use this aspect of Named tuple elements. in real code.

export function ex_20_2() {
  // implement Readability
  return "Readability";
}

console.log(ex_20_2());`, output: `Readability`, note: "Practical example highlighting Readability." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Named tuple elements.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Named tuple elements.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Named tuple elements.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Labels, Readability)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Labels",
        "Understand: Readability",
        "Can write and explain a typed example of Named tuple elements.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Named tuple elements. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
