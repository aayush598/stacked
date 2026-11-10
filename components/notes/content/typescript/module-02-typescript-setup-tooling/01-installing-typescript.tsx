import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function InstallingTypeScript21() {
  return (
    <div>
      <SectionHero
        title="Installing TypeScript."
        subtitle="Quick-scan guide to Installing TypeScript. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 1/10", "Installing TypeScript."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Installing TypeScript.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "GLOBAL", detail: "Global install", tone: "lime" },
        { label: "LOCAL", detail: "Local install", tone: "sky" },
        { label: "NPX", detail: "npx", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Installing TypeScript. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Global install", syntax: "Global install pattern", note: "Use for global install in Installing TypeScript.." },
        { label: "Local install", syntax: "Local install pattern", note: "Use for local install in Installing TypeScript.." },
        { label: "npx", syntax: "npx pattern", note: "Use for npx in Installing TypeScript.." },
      ]} />
      <Tabs items={[
        { label: "Global install", filename: "01-global-install.ts", code: `// Installing TypeScript. — Global install
// Key idea: Global install

// Variation / example
const example_1_global_install = /* typed value */ null;

// Usage in context
function demo_1_global_install(input: unknown) {
  // apply Global install safely
  return input;
}

console.log(demo_1_global_install(example_1_global_install));`, output: `// Result / output (conceptual)
// - Global install applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Global install — understand syntax, typing, and a practical use." },
        { label: "Local install", filename: "02-local-install.ts", code: `// Installing TypeScript. — Local install
// Key idea: Local install

// Variation / example
const example_1_local_install = /* typed value */ null;

// Usage in context
function demo_1_local_install(input: unknown) {
  // apply Local install safely
  return input;
}

console.log(demo_1_local_install(example_1_local_install));`, output: `// Result / output (conceptual)
// - Local install applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Local install — understand syntax, typing, and a practical use." },
        { label: "npx", filename: "03-npx.ts", code: `// Installing TypeScript. — npx
// Key idea: npx

// Variation / example
const example_1_npx = /* typed value */ null;

// Usage in context
function demo_1_npx(input: unknown) {
  // apply npx safely
  return input;
}

console.log(demo_1_npx(example_1_npx));`, output: `// Result / output (conceptual)
// - npx applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: npx — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Global install", code: `// Example: Global install
// Scenario: use this aspect of Installing TypeScript. in real code.

export function ex_1_1() {
  // implement Global install
  return "Global install";
}

console.log(ex_1_1());`, output: `Global install`, note: "Practical example highlighting Global install." },
        { title: "Local install", code: `// Example: Local install
// Scenario: use this aspect of Installing TypeScript. in real code.

export function ex_1_2() {
  // implement Local install
  return "Local install";
}

console.log(ex_1_2());`, output: `Local install`, note: "Practical example highlighting Local install." },
        { title: "npx", code: `// Example: npx
// Scenario: use this aspect of Installing TypeScript. in real code.

export function ex_1_3() {
  // implement npx
  return "npx";
}

console.log(ex_1_3());`, output: `npx`, note: "Practical example highlighting npx." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Installing TypeScript.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Installing TypeScript.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Installing TypeScript.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Global install, Local install, npx)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Global install",
        "Understand: Local install",
        "Understand: npx",
        "Can write and explain a typed example of Installing TypeScript.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Installing TypeScript. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
