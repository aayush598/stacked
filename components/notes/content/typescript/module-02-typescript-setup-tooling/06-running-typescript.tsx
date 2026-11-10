import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function RunningTypeScript26() {
  return (
    <div>
      <SectionHero
        title="Running TypeScript."
        subtitle="Quick-scan guide to Running TypeScript. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 6/10", "Running TypeScript."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Running TypeScript.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "TSC", detail: "tsc", tone: "lime" },
        { label: "TSX", detail: "tsx", tone: "sky" },
        { label: "TS-NODE", detail: "ts-node", tone: "violet" },
        { label: "BUN", detail: "Bun", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Running TypeScript. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "tsc", syntax: "tsc pattern", note: "Use for tsc in Running TypeScript.." },
        { label: "tsx", syntax: "tsx pattern", note: "Use for tsx in Running TypeScript.." },
        { label: "ts-node", syntax: "ts-node pattern", note: "Use for ts-node in Running TypeScript.." },
        { label: "Bun", syntax: "Bun pattern", note: "Use for bun in Running TypeScript.." },
      ]} />
      <Tabs items={[
        { label: "tsc", filename: "01-tsc.ts", code: `// Running TypeScript. — tsc
// Key idea: tsc

// Variation / example
const example_6_tsc = /* typed value */ null;

// Usage in context
function demo_6_tsc(input: unknown) {
  // apply tsc safely
  return input;
}

console.log(demo_6_tsc(example_6_tsc));`, output: `// Result / output (conceptual)
// - tsc applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: tsc — understand syntax, typing, and a practical use." },
        { label: "tsx", filename: "02-tsx.ts", code: `// Running TypeScript. — tsx
// Key idea: tsx

// Variation / example
const example_6_tsx = /* typed value */ null;

// Usage in context
function demo_6_tsx(input: unknown) {
  // apply tsx safely
  return input;
}

console.log(demo_6_tsx(example_6_tsx));`, output: `// Result / output (conceptual)
// - tsx applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: tsx — understand syntax, typing, and a practical use." },
        { label: "ts-node", filename: "03-ts-node.ts", code: `// Running TypeScript. — ts-node
// Key idea: ts-node

// Variation / example
const example_6_ts_node = /* typed value */ null;

// Usage in context
function demo_6_ts_node(input: unknown) {
  // apply ts-node safely
  return input;
}

console.log(demo_6_ts_node(example_6_ts_node));`, output: `// Result / output (conceptual)
// - ts-node applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: ts-node — understand syntax, typing, and a practical use." },
        { label: "Bun", filename: "04-bun.ts", code: `// Running TypeScript. — Bun
// Key idea: Bun

// Variation / example
const example_6_bun = /* typed value */ null;

// Usage in context
function demo_6_bun(input: unknown) {
  // apply Bun safely
  return input;
}

console.log(demo_6_bun(example_6_bun));`, output: `// Result / output (conceptual)
// - Bun applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Bun — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "tsc", code: `// Example: tsc
// Scenario: use this aspect of Running TypeScript. in real code.

export function ex_6_1() {
  // implement tsc
  return "tsc";
}

console.log(ex_6_1());`, output: `tsc`, note: "Practical example highlighting tsc." },
        { title: "tsx", code: `// Example: tsx
// Scenario: use this aspect of Running TypeScript. in real code.

export function ex_6_2() {
  // implement tsx
  return "tsx";
}

console.log(ex_6_2());`, output: `tsx`, note: "Practical example highlighting tsx." },
        { title: "ts-node", code: `// Example: ts-node
// Scenario: use this aspect of Running TypeScript. in real code.

export function ex_6_3() {
  // implement ts-node
  return "ts-node";
}

console.log(ex_6_3());`, output: `ts-node`, note: "Practical example highlighting ts-node." },
        { title: "Bun", code: `// Example: Bun
// Scenario: use this aspect of Running TypeScript. in real code.

export function ex_6_4() {
  // implement Bun
  return "Bun";
}

console.log(ex_6_4());`, output: `Bun`, note: "Practical example highlighting Bun." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Running TypeScript.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Running TypeScript.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Running TypeScript.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (tsc, tsx, ts-node)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: tsc",
        "Understand: tsx",
        "Understand: ts-node",
        "Understand: Bun",
        "Can write and explain a typed example of Running TypeScript.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Running TypeScript. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
