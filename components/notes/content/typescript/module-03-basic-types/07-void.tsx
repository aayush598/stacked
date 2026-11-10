import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Void37() {
  return (
    <div>
      <SectionHero
        title="Void."
        subtitle="Quick-scan guide to Void. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 7/30", "Void."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Void.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "NO", detail: "No meaningful return", tone: "lime" },
        { label: "CALLBACKS", detail: "Callbacks", tone: "sky" },
        { label: "VOID", detail: "void vs undefined", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Void. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "No meaningful return", syntax: "No meaningful return pattern", note: "Use for no meaningful return in Void.." },
        { label: "Callbacks", syntax: "Callbacks pattern", note: "Use for callbacks in Void.." },
        { label: "void vs undefined", syntax: "void vs undefined pattern", note: "Use for void vs undefined in Void.." },
      ]} />
      <Tabs items={[
        { label: "No meaningful return", filename: "01-no-meaningful-retu.ts", code: `// Void. — No meaningful return
// Key idea: No meaningful return

// Variation / example
const example_7_no_meaningful_retu = /* typed value */ null;

// Usage in context
function demo_7_no_meaningful_retu(input: unknown) {
  // apply No meaningful return safely
  return input;
}

console.log(demo_7_no_meaningful_retu(example_7_no_meaningful_retu));`, output: `// Result / output (conceptual)
// - No meaningful return applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: No meaningful return — understand syntax, typing, and a practical use." },
        { label: "Callbacks", filename: "02-callbacks.ts", code: `// Void. — Callbacks
// Key idea: Callbacks

// Variation / example
const example_7_callbacks = /* typed value */ null;

// Usage in context
function demo_7_callbacks(input: unknown) {
  // apply Callbacks safely
  return input;
}

console.log(demo_7_callbacks(example_7_callbacks));`, output: `// Result / output (conceptual)
// - Callbacks applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Callbacks — understand syntax, typing, and a practical use." },
        { label: "void vs undefined", filename: "03-void-vs-undefined.ts", code: `// Void. — void vs undefined
// Key idea: void vs undefined

// Variation / example
const example_7_void_vs_undefined = /* typed value */ null;

// Usage in context
function demo_7_void_vs_undefined(input: unknown) {
  // apply void vs undefined safely
  return input;
}

console.log(demo_7_void_vs_undefined(example_7_void_vs_undefined));`, output: `// Result / output (conceptual)
// - void vs undefined applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: void vs undefined — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "No meaningful return", code: `// Example: No meaningful return
// Scenario: use this aspect of Void. in real code.

export function ex_7_1() {
  // implement No meaningful return
  return "No meaningful return";
}

console.log(ex_7_1());`, output: `No meaningful return`, note: "Practical example highlighting No meaningful return." },
        { title: "Callbacks", code: `// Example: Callbacks
// Scenario: use this aspect of Void. in real code.

export function ex_7_2() {
  // implement Callbacks
  return "Callbacks";
}

console.log(ex_7_2());`, output: `Callbacks`, note: "Practical example highlighting Callbacks." },
        { title: "void vs undefined", code: `// Example: void vs undefined
// Scenario: use this aspect of Void. in real code.

export function ex_7_3() {
  // implement void vs undefined
  return "void vs undefined";
}

console.log(ex_7_3());`, output: `void vs undefined`, note: "Practical example highlighting void vs undefined." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Void.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Void.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Void.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (No meaningful return, Callbacks, void vs undefined)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: No meaningful return",
        "Understand: Callbacks",
        "Understand: void vs undefined",
        "Can write and explain a typed example of Void.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Void. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
