import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TheTypeScriptCompilerTsc18() {
  return (
    <div>
      <SectionHero
        title="The TypeScript compiler (tsc)."
        subtitle="Quick-scan guide to The TypeScript compiler (tsc). in Introduction to TypeScript: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Introduction to TypeScript", "Section 8/8", "The TypeScript compiler (tsc)."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>The TypeScript compiler (tsc).</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "CLI", detail: "CLI", tone: "lime" },
        { label: "WATCH", detail: "Watch mode", tone: "sky" },
        { label: "PROJECT", detail: "Project references", tone: "violet" },
        { label: "INCREMENTA", detail: "Incremental builds", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What The TypeScript compiler (tsc). is and why it exists in Introduction to TypeScript." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "CLI", syntax: "CLI pattern", note: "Use for cli in The TypeScript compiler (tsc).." },
        { label: "Watch mode", syntax: "Watch mode pattern", note: "Use for watch mode in The TypeScript compiler (tsc).." },
        { label: "Project references", syntax: "Project references pattern", note: "Use for project references in The TypeScript compiler (tsc).." },
        { label: "Incremental builds", syntax: "Incremental builds pattern", note: "Use for incremental builds in The TypeScript compiler (tsc).." },
      ]} />
      <Tabs items={[
        { label: "CLI", filename: "01-cli.ts", code: `// The TypeScript compiler (tsc). — CLI
// Key idea: CLI

// Variation / example
const example_8_cli = /* typed value */ null;

// Usage in context
function demo_8_cli(input: unknown) {
  // apply CLI safely
  return input;
}

console.log(demo_8_cli(example_8_cli));`, output: `// Result / output (conceptual)
// - CLI applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: CLI — understand syntax, typing, and a practical use." },
        { label: "Watch mode", filename: "02-watch-mode.ts", code: `// The TypeScript compiler (tsc). — Watch mode
// Key idea: Watch mode

// Variation / example
const example_8_watch_mode = /* typed value */ null;

// Usage in context
function demo_8_watch_mode(input: unknown) {
  // apply Watch mode safely
  return input;
}

console.log(demo_8_watch_mode(example_8_watch_mode));`, output: `// Result / output (conceptual)
// - Watch mode applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Watch mode — understand syntax, typing, and a practical use." },
        { label: "Project references", filename: "03-project-references.ts", code: `// The TypeScript compiler (tsc). — Project references
// Key idea: Project references

// Variation / example
const example_8_project_references = /* typed value */ null;

// Usage in context
function demo_8_project_references(input: unknown) {
  // apply Project references safely
  return input;
}

console.log(demo_8_project_references(example_8_project_references));`, output: `// Result / output (conceptual)
// - Project references applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Project references — understand syntax, typing, and a practical use." },
        { label: "Incremental builds", filename: "04-incremental-builds.ts", code: `// The TypeScript compiler (tsc). — Incremental builds
// Key idea: Incremental builds

// Variation / example
const example_8_incremental_builds = /* typed value */ null;

// Usage in context
function demo_8_incremental_builds(input: unknown) {
  // apply Incremental builds safely
  return input;
}

console.log(demo_8_incremental_builds(example_8_incremental_builds));`, output: `// Result / output (conceptual)
// - Incremental builds applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Incremental builds — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "CLI", code: `// Example: CLI
// Scenario: use this aspect of The TypeScript compiler (tsc). in real code.

export function ex_8_1() {
  // implement CLI
  return "CLI";
}

console.log(ex_8_1());`, output: `CLI`, note: "Practical example highlighting CLI." },
        { title: "Watch mode", code: `// Example: Watch mode
// Scenario: use this aspect of The TypeScript compiler (tsc). in real code.

export function ex_8_2() {
  // implement Watch mode
  return "Watch mode";
}

console.log(ex_8_2());`, output: `Watch mode`, note: "Practical example highlighting Watch mode." },
        { title: "Project references", code: `// Example: Project references
// Scenario: use this aspect of The TypeScript compiler (tsc). in real code.

export function ex_8_3() {
  // implement Project references
  return "Project references";
}

console.log(ex_8_3());`, output: `Project references`, note: "Practical example highlighting Project references." },
        { title: "Incremental builds", code: `// Example: Incremental builds
// Scenario: use this aspect of The TypeScript compiler (tsc). in real code.

export function ex_8_4() {
  // implement Incremental builds
  return "Incremental builds";
}

console.log(ex_8_4());`, output: `Incremental builds`, note: "Practical example highlighting Incremental builds." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: The TypeScript compiler (tsc).
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: The TypeScript compiler (tsc).
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "The TypeScript compiler (tsc).: definition and role in Introduction to TypeScript." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (CLI, Watch mode, Project references)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: CLI",
        "Understand: Watch mode",
        "Understand: Project references",
        "Understand: Incremental builds",
        "Can write and explain a typed example of The TypeScript compiler (tsc).."
      ]} />

      <NoteTakeaways items={[
        "Grasp The TypeScript compiler (tsc). fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
