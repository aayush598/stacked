import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function DebuggingTypeScript210() {
  return (
    <div>
      <SectionHero
        title="Debugging TypeScript."
        subtitle="Quick-scan guide to Debugging TypeScript. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 10/10", "Debugging TypeScript."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Debugging TypeScript.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "SOURCE", detail: "Source maps", tone: "lime" },
        { label: "BREAKPOINT", detail: "Breakpoints", tone: "sky" },
        { label: "LAUNCH", detail: "Launch configs", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Debugging TypeScript. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Source maps", syntax: "Source maps pattern", note: "Use for source maps in Debugging TypeScript.." },
        { label: "Breakpoints", syntax: "Breakpoints pattern", note: "Use for breakpoints in Debugging TypeScript.." },
        { label: "Launch configs", syntax: "Launch configs pattern", note: "Use for launch configs in Debugging TypeScript.." },
      ]} />
      <Tabs items={[
        { label: "Source maps", filename: "01-source-maps.ts", code: `// Debugging TypeScript. — Source maps
// Key idea: Source maps

// Variation / example
const example_10_source_maps = /* typed value */ null;

// Usage in context
function demo_10_source_maps(input: unknown) {
  // apply Source maps safely
  return input;
}

console.log(demo_10_source_maps(example_10_source_maps));`, output: `// Result / output (conceptual)
// - Source maps applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Source maps — understand syntax, typing, and a practical use." },
        { label: "Breakpoints", filename: "02-breakpoints.ts", code: `// Debugging TypeScript. — Breakpoints
// Key idea: Breakpoints

// Variation / example
const example_10_breakpoints = /* typed value */ null;

// Usage in context
function demo_10_breakpoints(input: unknown) {
  // apply Breakpoints safely
  return input;
}

console.log(demo_10_breakpoints(example_10_breakpoints));`, output: `// Result / output (conceptual)
// - Breakpoints applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Breakpoints — understand syntax, typing, and a practical use." },
        { label: "Launch configs", filename: "03-launch-configs.ts", code: `// Debugging TypeScript. — Launch configs
// Key idea: Launch configs

// Variation / example
const example_10_launch_configs = /* typed value */ null;

// Usage in context
function demo_10_launch_configs(input: unknown) {
  // apply Launch configs safely
  return input;
}

console.log(demo_10_launch_configs(example_10_launch_configs));`, output: `// Result / output (conceptual)
// - Launch configs applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Launch configs — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Source maps", code: `// Example: Source maps
// Scenario: use this aspect of Debugging TypeScript. in real code.

export function ex_10_1() {
  // implement Source maps
  return "Source maps";
}

console.log(ex_10_1());`, output: `Source maps`, note: "Practical example highlighting Source maps." },
        { title: "Breakpoints", code: `// Example: Breakpoints
// Scenario: use this aspect of Debugging TypeScript. in real code.

export function ex_10_2() {
  // implement Breakpoints
  return "Breakpoints";
}

console.log(ex_10_2());`, output: `Breakpoints`, note: "Practical example highlighting Breakpoints." },
        { title: "Launch configs", code: `// Example: Launch configs
// Scenario: use this aspect of Debugging TypeScript. in real code.

export function ex_10_3() {
  // implement Launch configs
  return "Launch configs";
}

console.log(ex_10_3());`, output: `Launch configs`, note: "Practical example highlighting Launch configs." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Debugging TypeScript.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Debugging TypeScript.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Debugging TypeScript.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Source maps, Breakpoints, Launch configs)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Source maps",
        "Understand: Breakpoints",
        "Understand: Launch configs",
        "Can write and explain a typed example of Debugging TypeScript.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Debugging TypeScript. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
