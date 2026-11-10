import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function VSCodeSetup25() {
  return (
    <div>
      <SectionHero
        title="VS Code setup."
        subtitle="Quick-scan guide to VS Code setup. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 5/10", "VS Code setup."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>VS Code setup.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "WORKSPACE", detail: "Workspace version", tone: "lime" },
        { label: "FORMAT", detail: "Format on save", tone: "sky" },
        { label: "INLAY", detail: "Inlay hints", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What VS Code setup. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Workspace version", syntax: "Workspace version pattern", note: "Use for workspace version in VS Code setup.." },
        { label: "Format on save", syntax: "Format on save pattern", note: "Use for format on save in VS Code setup.." },
        { label: "Inlay hints", syntax: "Inlay hints pattern", note: "Use for inlay hints in VS Code setup.." },
      ]} />
      <Tabs items={[
        { label: "Workspace version", filename: "01-workspace-version.ts", code: `// VS Code setup. — Workspace version
// Key idea: Workspace version

// Variation / example
const example_5_workspace_version = /* typed value */ null;

// Usage in context
function demo_5_workspace_version(input: unknown) {
  // apply Workspace version safely
  return input;
}

console.log(demo_5_workspace_version(example_5_workspace_version));`, output: `// Result / output (conceptual)
// - Workspace version applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Workspace version — understand syntax, typing, and a practical use." },
        { label: "Format on save", filename: "02-format-on-save.ts", code: `// VS Code setup. — Format on save
// Key idea: Format on save

// Variation / example
const example_5_format_on_save = /* typed value */ null;

// Usage in context
function demo_5_format_on_save(input: unknown) {
  // apply Format on save safely
  return input;
}

console.log(demo_5_format_on_save(example_5_format_on_save));`, output: `// Result / output (conceptual)
// - Format on save applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Format on save — understand syntax, typing, and a practical use." },
        { label: "Inlay hints", filename: "03-inlay-hints.ts", code: `// VS Code setup. — Inlay hints
// Key idea: Inlay hints

// Variation / example
const example_5_inlay_hints = /* typed value */ null;

// Usage in context
function demo_5_inlay_hints(input: unknown) {
  // apply Inlay hints safely
  return input;
}

console.log(demo_5_inlay_hints(example_5_inlay_hints));`, output: `// Result / output (conceptual)
// - Inlay hints applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Inlay hints — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Workspace version", code: `// Example: Workspace version
// Scenario: use this aspect of VS Code setup. in real code.

export function ex_5_1() {
  // implement Workspace version
  return "Workspace version";
}

console.log(ex_5_1());`, output: `Workspace version`, note: "Practical example highlighting Workspace version." },
        { title: "Format on save", code: `// Example: Format on save
// Scenario: use this aspect of VS Code setup. in real code.

export function ex_5_2() {
  // implement Format on save
  return "Format on save";
}

console.log(ex_5_2());`, output: `Format on save`, note: "Practical example highlighting Format on save." },
        { title: "Inlay hints", code: `// Example: Inlay hints
// Scenario: use this aspect of VS Code setup. in real code.

export function ex_5_3() {
  // implement Inlay hints
  return "Inlay hints";
}

console.log(ex_5_3());`, output: `Inlay hints`, note: "Practical example highlighting Inlay hints." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: VS Code setup.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: VS Code setup.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "VS Code setup.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Workspace version, Format on save, Inlay hints)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Workspace version",
        "Understand: Format on save",
        "Understand: Inlay hints",
        "Can write and explain a typed example of VS Code setup.."
      ]} />

      <NoteTakeaways items={[
        "Grasp VS Code setup. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
