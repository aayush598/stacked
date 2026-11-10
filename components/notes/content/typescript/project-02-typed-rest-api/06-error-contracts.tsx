import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function ErrorContracts26() {
  return (
    <div>
      <SectionHero
        title="Error contracts."
        subtitle="Quick-scan guide to Error contracts. in Typed REST API: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Typed REST API", "Section 6/11", "Error contracts."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Error contracts.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "CORE", detail: "core concept", tone: "lime" },
        { label: "SYNTAX", detail: "syntax", tone: "sky" },
        { label: "VARIATIONS", detail: "variations", tone: "violet" },
        { label: "PRACTICAL", detail: "practical usage", tone: "coral" },
        { label: "EDGE", detail: "edge cases", tone: "lime" },
        { label: "BEST", detail: "best practices", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Error contracts. is and why it exists in Typed REST API." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "core concept", syntax: "core concept pattern", note: "Use for core concept in Error contracts.." },
        { label: "syntax", syntax: "syntax pattern", note: "Use for syntax in Error contracts.." },
        { label: "variations", syntax: "variations pattern", note: "Use for variations in Error contracts.." },
        { label: "practical usage", syntax: "practical usage pattern", note: "Use for practical usage in Error contracts.." },
        { label: "edge cases", syntax: "edge cases pattern", note: "Use for edge cases in Error contracts.." },
        { label: "best practices", syntax: "best practices pattern", note: "Use for best practices in Error contracts.." },
      ]} />
      <Tabs items={[
        { label: "core concept", filename: "01-core-concept.ts", code: `// Error contracts. — core concept
// Key idea: core concept

// Variation / example
const example_6_core_concept = /* typed value */ null;

// Usage in context
function demo_6_core_concept(input: unknown) {
  // apply core concept safely
  return input;
}

console.log(demo_6_core_concept(example_6_core_concept));`, output: `// Result / output (conceptual)
// - core concept applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: core concept — understand syntax, typing, and a practical use." },
        { label: "syntax", filename: "02-syntax.ts", code: `// Error contracts. — syntax
// Key idea: syntax

// Variation / example
const example_6_syntax = /* typed value */ null;

// Usage in context
function demo_6_syntax(input: unknown) {
  // apply syntax safely
  return input;
}

console.log(demo_6_syntax(example_6_syntax));`, output: `// Result / output (conceptual)
// - syntax applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: syntax — understand syntax, typing, and a practical use." },
        { label: "variations", filename: "03-variations.ts", code: `// Error contracts. — variations
// Key idea: variations

// Variation / example
const example_6_variations = /* typed value */ null;

// Usage in context
function demo_6_variations(input: unknown) {
  // apply variations safely
  return input;
}

console.log(demo_6_variations(example_6_variations));`, output: `// Result / output (conceptual)
// - variations applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: variations — understand syntax, typing, and a practical use." },
        { label: "practical usage", filename: "04-practical-usage.ts", code: `// Error contracts. — practical usage
// Key idea: practical usage

// Variation / example
const example_6_practical_usage = /* typed value */ null;

// Usage in context
function demo_6_practical_usage(input: unknown) {
  // apply practical usage safely
  return input;
}

console.log(demo_6_practical_usage(example_6_practical_usage));`, output: `// Result / output (conceptual)
// - practical usage applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: practical usage — understand syntax, typing, and a practical use." },
        { label: "edge cases", filename: "05-edge-cases.ts", code: `// Error contracts. — edge cases
// Key idea: edge cases

// Variation / example
const example_6_edge_cases = /* typed value */ null;

// Usage in context
function demo_6_edge_cases(input: unknown) {
  // apply edge cases safely
  return input;
}

console.log(demo_6_edge_cases(example_6_edge_cases));`, output: `// Result / output (conceptual)
// - edge cases applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: edge cases — understand syntax, typing, and a practical use." },
        { label: "best practices", filename: "06-best-practices.ts", code: `// Error contracts. — best practices
// Key idea: best practices

// Variation / example
const example_6_best_practices = /* typed value */ null;

// Usage in context
function demo_6_best_practices(input: unknown) {
  // apply best practices safely
  return input;
}

console.log(demo_6_best_practices(example_6_best_practices));`, output: `// Result / output (conceptual)
// - best practices applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: best practices — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "core concept", code: `// Example: core concept
// Scenario: use this aspect of Error contracts. in real code.

export function ex_6_1() {
  // implement core concept
  return "core concept";
}

console.log(ex_6_1());`, output: `core concept`, note: "Practical example highlighting core concept." },
        { title: "syntax", code: `// Example: syntax
// Scenario: use this aspect of Error contracts. in real code.

export function ex_6_2() {
  // implement syntax
  return "syntax";
}

console.log(ex_6_2());`, output: `syntax`, note: "Practical example highlighting syntax." },
        { title: "variations", code: `// Example: variations
// Scenario: use this aspect of Error contracts. in real code.

export function ex_6_3() {
  // implement variations
  return "variations";
}

console.log(ex_6_3());`, output: `variations`, note: "Practical example highlighting variations." },
        { title: "practical usage", code: `// Example: practical usage
// Scenario: use this aspect of Error contracts. in real code.

export function ex_6_4() {
  // implement practical usage
  return "practical usage";
}

console.log(ex_6_4());`, output: `practical usage`, note: "Practical example highlighting practical usage." },
        { title: "edge cases", code: `// Example: edge cases
// Scenario: use this aspect of Error contracts. in real code.

export function ex_6_5() {
  // implement edge cases
  return "edge cases";
}

console.log(ex_6_5());`, output: `edge cases`, note: "Practical example highlighting edge cases." },
        { title: "best practices", code: `// Example: best practices
// Scenario: use this aspect of Error contracts. in real code.

export function ex_6_6() {
  // implement best practices
  return "best practices";
}

console.log(ex_6_6());`, output: `best practices`, note: "Practical example highlighting best practices." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Error contracts.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Error contracts.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Error contracts.: definition and role in Typed REST API." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: core concept",
        "Understand: syntax",
        "Understand: variations",
        "Understand: practical usage",
        "Understand: edge cases",
        "Understand: best practices",
        "Can write and explain a typed example of Error contracts.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Error contracts. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
