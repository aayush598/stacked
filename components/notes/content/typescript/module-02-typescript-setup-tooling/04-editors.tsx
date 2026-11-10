import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Editors24() {
  return (
    <div>
      <SectionHero
        title="Editors."
        subtitle="Quick-scan guide to Editors. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 4/10", "Editors."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Editors.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "VS", detail: "VS Code", tone: "lime" },
        { label: "WEBSTORM", detail: "WebStorm", tone: "sky" },
        { label: "NEOVIM", detail: "Neovim", tone: "violet" },
        { label: "TYPESCRIPT", detail: "TypeScript language server", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Editors. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "VS Code", syntax: "VS Code pattern", note: "Use for vs code in Editors.." },
        { label: "WebStorm", syntax: "WebStorm pattern", note: "Use for webstorm in Editors.." },
        { label: "Neovim", syntax: "Neovim pattern", note: "Use for neovim in Editors.." },
        { label: "TypeScript language server", syntax: "TypeScript language server pattern", note: "Use for typescript language server in Editors.." },
      ]} />
      <Tabs items={[
        { label: "VS Code", filename: "01-vs-code.ts", code: `// Editors. — VS Code
// Key idea: VS Code

// Variation / example
const example_4_vs_code = /* typed value */ null;

// Usage in context
function demo_4_vs_code(input: unknown) {
  // apply VS Code safely
  return input;
}

console.log(demo_4_vs_code(example_4_vs_code));`, output: `// Result / output (conceptual)
// - VS Code applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: VS Code — understand syntax, typing, and a practical use." },
        { label: "WebStorm", filename: "02-webstorm.ts", code: `// Editors. — WebStorm
// Key idea: WebStorm

// Variation / example
const example_4_webstorm = /* typed value */ null;

// Usage in context
function demo_4_webstorm(input: unknown) {
  // apply WebStorm safely
  return input;
}

console.log(demo_4_webstorm(example_4_webstorm));`, output: `// Result / output (conceptual)
// - WebStorm applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: WebStorm — understand syntax, typing, and a practical use." },
        { label: "Neovim", filename: "03-neovim.ts", code: `// Editors. — Neovim
// Key idea: Neovim

// Variation / example
const example_4_neovim = /* typed value */ null;

// Usage in context
function demo_4_neovim(input: unknown) {
  // apply Neovim safely
  return input;
}

console.log(demo_4_neovim(example_4_neovim));`, output: `// Result / output (conceptual)
// - Neovim applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Neovim — understand syntax, typing, and a practical use." },
        { label: "TypeScript language server", filename: "04-typescript-languag.ts", code: `// Editors. — TypeScript language server
// Key idea: TypeScript language server

// Variation / example
const example_4_typescript_languag = /* typed value */ null;

// Usage in context
function demo_4_typescript_languag(input: unknown) {
  // apply TypeScript language server safely
  return input;
}

console.log(demo_4_typescript_languag(example_4_typescript_languag));`, output: `// Result / output (conceptual)
// - TypeScript language server applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: TypeScript language server — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "VS Code", code: `// Example: VS Code
// Scenario: use this aspect of Editors. in real code.

export function ex_4_1() {
  // implement VS Code
  return "VS Code";
}

console.log(ex_4_1());`, output: `VS Code`, note: "Practical example highlighting VS Code." },
        { title: "WebStorm", code: `// Example: WebStorm
// Scenario: use this aspect of Editors. in real code.

export function ex_4_2() {
  // implement WebStorm
  return "WebStorm";
}

console.log(ex_4_2());`, output: `WebStorm`, note: "Practical example highlighting WebStorm." },
        { title: "Neovim", code: `// Example: Neovim
// Scenario: use this aspect of Editors. in real code.

export function ex_4_3() {
  // implement Neovim
  return "Neovim";
}

console.log(ex_4_3());`, output: `Neovim`, note: "Practical example highlighting Neovim." },
        { title: "TypeScript language server", code: `// Example: TypeScript language server
// Scenario: use this aspect of Editors. in real code.

export function ex_4_4() {
  // implement TypeScript language server
  return "TypeScript language server";
}

console.log(ex_4_4());`, output: `TypeScript language server`, note: "Practical example highlighting TypeScript language server." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Editors.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Editors.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Editors.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (VS Code, WebStorm, Neovim)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: VS Code",
        "Understand: WebStorm",
        "Understand: Neovim",
        "Understand: TypeScript language server",
        "Can write and explain a typed example of Editors.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Editors. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
