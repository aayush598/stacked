import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function CompilationProcess17() {
  return (
    <div>
      <SectionHero
        title="Compilation process."
        subtitle="Quick-scan guide to Compilation process. in Introduction to TypeScript: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Introduction to TypeScript", "Section 7/8", "Compilation process."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Compilation process.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "SOURCE", detail: "Source .ts", tone: "lime" },
        { label: "TYPE", detail: "Type checking", tone: "sky" },
        { label: "EMIT", detail: "Emit .js", tone: "violet" },
        { label: "SOURCE", detail: "Source maps", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Compilation process. is and why it exists in Introduction to TypeScript." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Source .ts", syntax: "Source .ts pattern", note: "Use for source .ts in Compilation process.." },
        { label: "Type checking", syntax: "Type checking pattern", note: "Use for type checking in Compilation process.." },
        { label: "Emit .js", syntax: "Emit .js pattern", note: "Use for emit .js in Compilation process.." },
        { label: "Source maps", syntax: "Source maps pattern", note: "Use for source maps in Compilation process.." },
      ]} />
      <Tabs items={[
        { label: "Source .ts", filename: "01-source-ts.ts", code: `// Compilation process. — Source .ts
// Key idea: Source .ts

// Variation / example
const example_7_source_ts = /* typed value */ null;

// Usage in context
function demo_7_source_ts(input: unknown) {
  // apply Source .ts safely
  return input;
}

console.log(demo_7_source_ts(example_7_source_ts));`, output: `// Result / output (conceptual)
// - Source .ts applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Source .ts — understand syntax, typing, and a practical use." },
        { label: "Type checking", filename: "02-type-checking.ts", code: `// Compilation process. — Type checking
// Key idea: Type checking

// Variation / example
const example_7_type_checking = /* typed value */ null;

// Usage in context
function demo_7_type_checking(input: unknown) {
  // apply Type checking safely
  return input;
}

console.log(demo_7_type_checking(example_7_type_checking));`, output: `// Result / output (conceptual)
// - Type checking applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Type checking — understand syntax, typing, and a practical use." },
        { label: "Emit .js", filename: "03-emit-js.ts", code: `// Compilation process. — Emit .js
// Key idea: Emit .js

// Variation / example
const example_7_emit_js = /* typed value */ null;

// Usage in context
function demo_7_emit_js(input: unknown) {
  // apply Emit .js safely
  return input;
}

console.log(demo_7_emit_js(example_7_emit_js));`, output: `// Result / output (conceptual)
// - Emit .js applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Emit .js — understand syntax, typing, and a practical use." },
        { label: "Source maps", filename: "04-source-maps.ts", code: `// Compilation process. — Source maps
// Key idea: Source maps

// Variation / example
const example_7_source_maps = /* typed value */ null;

// Usage in context
function demo_7_source_maps(input: unknown) {
  // apply Source maps safely
  return input;
}

console.log(demo_7_source_maps(example_7_source_maps));`, output: `// Result / output (conceptual)
// - Source maps applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Source maps — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Source .ts", code: `// Example: Source .ts
// Scenario: use this aspect of Compilation process. in real code.

export function ex_7_1() {
  // implement Source .ts
  return "Source .ts";
}

console.log(ex_7_1());`, output: `Source .ts`, note: "Practical example highlighting Source .ts." },
        { title: "Type checking", code: `// Example: Type checking
// Scenario: use this aspect of Compilation process. in real code.

export function ex_7_2() {
  // implement Type checking
  return "Type checking";
}

console.log(ex_7_2());`, output: `Type checking`, note: "Practical example highlighting Type checking." },
        { title: "Emit .js", code: `// Example: Emit .js
// Scenario: use this aspect of Compilation process. in real code.

export function ex_7_3() {
  // implement Emit .js
  return "Emit .js";
}

console.log(ex_7_3());`, output: `Emit .js`, note: "Practical example highlighting Emit .js." },
        { title: "Source maps", code: `// Example: Source maps
// Scenario: use this aspect of Compilation process. in real code.

export function ex_7_4() {
  // implement Source maps
  return "Source maps";
}

console.log(ex_7_4());`, output: `Source maps`, note: "Practical example highlighting Source maps." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Compilation process.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Compilation process.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Compilation process.: definition and role in Introduction to TypeScript." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Source .ts, Type checking, Emit .js)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Source .ts",
        "Understand: Type checking",
        "Understand: Emit .js",
        "Understand: Source maps",
        "Can write and explain a typed example of Compilation process.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Compilation process. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
