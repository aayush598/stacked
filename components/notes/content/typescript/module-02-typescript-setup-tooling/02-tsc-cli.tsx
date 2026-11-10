import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TscCLI22() {
  return (
    <div>
      <SectionHero
        title="tsc CLI."
        subtitle="Quick-scan guide to tsc CLI. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 2/10", "tsc CLI."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>tsc CLI.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "--INIT", detail: "--init", tone: "lime" },
        { label: "--WATCH", detail: "--watch", tone: "sky" },
        { label: "--NOEMIT", detail: "--noEmit", tone: "violet" },
        { label: "--PROJECT", detail: "--project", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What tsc CLI. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "--init", syntax: "--init pattern", note: "Use for --init in tsc CLI.." },
        { label: "--watch", syntax: "--watch pattern", note: "Use for --watch in tsc CLI.." },
        { label: "--noEmit", syntax: "--noEmit pattern", note: "Use for --noemit in tsc CLI.." },
        { label: "--project", syntax: "--project pattern", note: "Use for --project in tsc CLI.." },
      ]} />
      <Tabs items={[
        { label: "--init", filename: "01-init.ts", code: `// tsc CLI. — --init
// Key idea: --init

// Variation / example
const example_2_init = /* typed value */ null;

// Usage in context
function demo_2_init(input: unknown) {
  // apply --init safely
  return input;
}

console.log(demo_2_init(example_2_init));`, output: `// Result / output (conceptual)
// - --init applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: --init — understand syntax, typing, and a practical use." },
        { label: "--watch", filename: "02-watch.ts", code: `// tsc CLI. — --watch
// Key idea: --watch

// Variation / example
const example_2_watch = /* typed value */ null;

// Usage in context
function demo_2_watch(input: unknown) {
  // apply --watch safely
  return input;
}

console.log(demo_2_watch(example_2_watch));`, output: `// Result / output (conceptual)
// - --watch applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: --watch — understand syntax, typing, and a practical use." },
        { label: "--noEmit", filename: "03-noemit.ts", code: `// tsc CLI. — --noEmit
// Key idea: --noEmit

// Variation / example
const example_2_noemit = /* typed value */ null;

// Usage in context
function demo_2_noemit(input: unknown) {
  // apply --noEmit safely
  return input;
}

console.log(demo_2_noemit(example_2_noemit));`, output: `// Result / output (conceptual)
// - --noEmit applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: --noEmit — understand syntax, typing, and a practical use." },
        { label: "--project", filename: "04-project.ts", code: `// tsc CLI. — --project
// Key idea: --project

// Variation / example
const example_2_project = /* typed value */ null;

// Usage in context
function demo_2_project(input: unknown) {
  // apply --project safely
  return input;
}

console.log(demo_2_project(example_2_project));`, output: `// Result / output (conceptual)
// - --project applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: --project — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "--init", code: `// Example: --init
// Scenario: use this aspect of tsc CLI. in real code.

export function ex_2_1() {
  // implement --init
  return "--init";
}

console.log(ex_2_1());`, output: `--init`, note: "Practical example highlighting --init." },
        { title: "--watch", code: `// Example: --watch
// Scenario: use this aspect of tsc CLI. in real code.

export function ex_2_2() {
  // implement --watch
  return "--watch";
}

console.log(ex_2_2());`, output: `--watch`, note: "Practical example highlighting --watch." },
        { title: "--noEmit", code: `// Example: --noEmit
// Scenario: use this aspect of tsc CLI. in real code.

export function ex_2_3() {
  // implement --noEmit
  return "--noEmit";
}

console.log(ex_2_3());`, output: `--noEmit`, note: "Practical example highlighting --noEmit." },
        { title: "--project", code: `// Example: --project
// Scenario: use this aspect of tsc CLI. in real code.

export function ex_2_4() {
  // implement --project
  return "--project";
}

console.log(ex_2_4());`, output: `--project`, note: "Practical example highlighting --project." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: tsc CLI.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: tsc CLI.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "tsc CLI.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (--init, --watch, --noEmit)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: --init",
        "Understand: --watch",
        "Understand: --noEmit",
        "Understand: --project",
        "Can write and explain a typed example of tsc CLI.."
      ]} />

      <NoteTakeaways items={[
        "Grasp tsc CLI. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
