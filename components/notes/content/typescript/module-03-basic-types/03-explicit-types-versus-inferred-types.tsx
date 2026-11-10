import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function ExplicitTypesVersusInferredTypes33() {
  return (
    <div>
      <SectionHero
        title="Explicit types versus inferred types."
        subtitle="Quick-scan guide to Explicit types versus inferred types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 3/30", "Explicit types versus inferred types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Explicit types versus inferred types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "READABILIT", detail: "Readability", tone: "lime" },
        { label: "PUBLIC", detail: "Public APIs", tone: "sky" },
        { label: "WIDENING", detail: "Widening control", tone: "violet" },
        { label: "TRADE-OFFS", detail: "Trade-offs", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Explicit types versus inferred types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Readability", syntax: "Readability pattern", note: "Use for readability in Explicit types versus inferred types.." },
        { label: "Public APIs", syntax: "Public APIs pattern", note: "Use for public apis in Explicit types versus inferred types.." },
        { label: "Widening control", syntax: "Widening control pattern", note: "Use for widening control in Explicit types versus inferred types.." },
        { label: "Trade-offs", syntax: "Trade-offs pattern", note: "Use for trade-offs in Explicit types versus inferred types.." },
      ]} />
      <Tabs items={[
        { label: "Readability", filename: "01-readability.ts", code: `// Explicit types versus inferred types. — Readability
// Key idea: Readability

// Variation / example
const example_3_readability = /* typed value */ null;

// Usage in context
function demo_3_readability(input: unknown) {
  // apply Readability safely
  return input;
}

console.log(demo_3_readability(example_3_readability));`, output: `// Result / output (conceptual)
// - Readability applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Readability — understand syntax, typing, and a practical use." },
        { label: "Public APIs", filename: "02-public-apis.ts", code: `// Explicit types versus inferred types. — Public APIs
// Key idea: Public APIs

// Variation / example
const example_3_public_apis = /* typed value */ null;

// Usage in context
function demo_3_public_apis(input: unknown) {
  // apply Public APIs safely
  return input;
}

console.log(demo_3_public_apis(example_3_public_apis));`, output: `// Result / output (conceptual)
// - Public APIs applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Public APIs — understand syntax, typing, and a practical use." },
        { label: "Widening control", filename: "03-widening-control.ts", code: `// Explicit types versus inferred types. — Widening control
// Key idea: Widening control

// Variation / example
const example_3_widening_control = /* typed value */ null;

// Usage in context
function demo_3_widening_control(input: unknown) {
  // apply Widening control safely
  return input;
}

console.log(demo_3_widening_control(example_3_widening_control));`, output: `// Result / output (conceptual)
// - Widening control applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Widening control — understand syntax, typing, and a practical use." },
        { label: "Trade-offs", filename: "04-trade-offs.ts", code: `// Explicit types versus inferred types. — Trade-offs
// Key idea: Trade-offs

// Variation / example
const example_3_trade_offs = /* typed value */ null;

// Usage in context
function demo_3_trade_offs(input: unknown) {
  // apply Trade-offs safely
  return input;
}

console.log(demo_3_trade_offs(example_3_trade_offs));`, output: `// Result / output (conceptual)
// - Trade-offs applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Trade-offs — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Readability", code: `// Example: Readability
// Scenario: use this aspect of Explicit types versus inferred types. in real code.

export function ex_3_1() {
  // implement Readability
  return "Readability";
}

console.log(ex_3_1());`, output: `Readability`, note: "Practical example highlighting Readability." },
        { title: "Public APIs", code: `// Example: Public APIs
// Scenario: use this aspect of Explicit types versus inferred types. in real code.

export function ex_3_2() {
  // implement Public APIs
  return "Public APIs";
}

console.log(ex_3_2());`, output: `Public APIs`, note: "Practical example highlighting Public APIs." },
        { title: "Widening control", code: `// Example: Widening control
// Scenario: use this aspect of Explicit types versus inferred types. in real code.

export function ex_3_3() {
  // implement Widening control
  return "Widening control";
}

console.log(ex_3_3());`, output: `Widening control`, note: "Practical example highlighting Widening control." },
        { title: "Trade-offs", code: `// Example: Trade-offs
// Scenario: use this aspect of Explicit types versus inferred types. in real code.

export function ex_3_4() {
  // implement Trade-offs
  return "Trade-offs";
}

console.log(ex_3_4());`, output: `Trade-offs`, note: "Practical example highlighting Trade-offs." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Explicit types versus inferred types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Explicit types versus inferred types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Explicit types versus inferred types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Readability, Public APIs, Widening control)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Readability",
        "Understand: Public APIs",
        "Understand: Widening control",
        "Understand: Trade-offs",
        "Can write and explain a typed example of Explicit types versus inferred types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Explicit types versus inferred types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
