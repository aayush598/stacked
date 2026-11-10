import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TsconfigJson23() {
  return (
    <div>
      <SectionHero
        title="tsconfig.json."
        subtitle="Quick-scan guide to tsconfig.json. in TypeScript Setup & Tooling: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["TypeScript Setup & Tooling", "Section 3/10", "tsconfig.json."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>tsconfig.json.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "COMPILER", detail: "Compiler options", tone: "lime" },
        { label: "INCLUDE/EX", detail: "Include/exclude", tone: "sky" },
        { label: "EXTENDS", detail: "Extends", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What tsconfig.json. is and why it exists in TypeScript Setup & Tooling." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Compiler options", syntax: "Compiler options pattern", note: "Use for compiler options in tsconfig.json.." },
        { label: "Include/exclude", syntax: "Include/exclude pattern", note: "Use for include/exclude in tsconfig.json.." },
        { label: "Extends", syntax: "Extends pattern", note: "Use for extends in tsconfig.json.." },
      ]} />
      <Tabs items={[
        { label: "Compiler options", filename: "01-compiler-options.ts", code: `// tsconfig.json. — Compiler options
// Key idea: Compiler options

// Variation / example
const example_3_compiler_options = /* typed value */ null;

// Usage in context
function demo_3_compiler_options(input: unknown) {
  // apply Compiler options safely
  return input;
}

console.log(demo_3_compiler_options(example_3_compiler_options));`, output: `// Result / output (conceptual)
// - Compiler options applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Compiler options — understand syntax, typing, and a practical use." },
        { label: "Include/exclude", filename: "02-include-exclude.ts", code: `// tsconfig.json. — Include/exclude
// Key idea: Include/exclude

// Variation / example
const example_3_include_exclude = /* typed value */ null;

// Usage in context
function demo_3_include_exclude(input: unknown) {
  // apply Include/exclude safely
  return input;
}

console.log(demo_3_include_exclude(example_3_include_exclude));`, output: `// Result / output (conceptual)
// - Include/exclude applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Include/exclude — understand syntax, typing, and a practical use." },
        { label: "Extends", filename: "03-extends.ts", code: `// tsconfig.json. — Extends
// Key idea: Extends

// Variation / example
const example_3_extends = /* typed value */ null;

// Usage in context
function demo_3_extends(input: unknown) {
  // apply Extends safely
  return input;
}

console.log(demo_3_extends(example_3_extends));`, output: `// Result / output (conceptual)
// - Extends applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Extends — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Compiler options", code: `// Example: Compiler options
// Scenario: use this aspect of tsconfig.json. in real code.

export function ex_3_1() {
  // implement Compiler options
  return "Compiler options";
}

console.log(ex_3_1());`, output: `Compiler options`, note: "Practical example highlighting Compiler options." },
        { title: "Include/exclude", code: `// Example: Include/exclude
// Scenario: use this aspect of tsconfig.json. in real code.

export function ex_3_2() {
  // implement Include/exclude
  return "Include/exclude";
}

console.log(ex_3_2());`, output: `Include/exclude`, note: "Practical example highlighting Include/exclude." },
        { title: "Extends", code: `// Example: Extends
// Scenario: use this aspect of tsconfig.json. in real code.

export function ex_3_3() {
  // implement Extends
  return "Extends";
}

console.log(ex_3_3());`, output: `Extends`, note: "Practical example highlighting Extends." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: tsconfig.json.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: tsconfig.json.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "tsconfig.json.: definition and role in TypeScript Setup & Tooling." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Compiler options, Include/exclude, Extends)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Compiler options",
        "Understand: Include/exclude",
        "Understand: Extends",
        "Can write and explain a typed example of tsconfig.json.."
      ]} />

      <NoteTakeaways items={[
        "Grasp tsconfig.json. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
