import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Unknown310() {
  return (
    <div>
      <SectionHero
        title="Unknown."
        subtitle="Quick-scan guide to Unknown. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 10/30", "Unknown."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Unknown.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "SAFE", detail: "Safe top type", tone: "lime" },
        { label: "NARROWING", detail: "Narrowing required", tone: "sky" },
        { label: "TYPE", detail: "Type guards", tone: "violet" },
        { label: "VALIDATION", detail: "Validation at boundaries", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Unknown. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Safe top type", syntax: "Safe top type pattern", note: "Use for safe top type in Unknown.." },
        { label: "Narrowing required", syntax: "Narrowing required pattern", note: "Use for narrowing required in Unknown.." },
        { label: "Type guards", syntax: "Type guards pattern", note: "Use for type guards in Unknown.." },
        { label: "Validation at boundaries", syntax: "Validation at boundaries pattern", note: "Use for validation at boundaries in Unknown.." },
      ]} />
      <Tabs items={[
        { label: "Safe top type", filename: "01-safe-top-type.ts", code: `// Unknown. — Safe top type
// Key idea: Safe top type

// Variation / example
const example_10_safe_top_type = /* typed value */ null;

// Usage in context
function demo_10_safe_top_type(input: unknown) {
  // apply Safe top type safely
  return input;
}

console.log(demo_10_safe_top_type(example_10_safe_top_type));`, output: `// Result / output (conceptual)
// - Safe top type applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Safe top type — understand syntax, typing, and a practical use." },
        { label: "Narrowing required", filename: "02-narrowing-required.ts", code: `// Unknown. — Narrowing required
// Key idea: Narrowing required

// Variation / example
const example_10_narrowing_required = /* typed value */ null;

// Usage in context
function demo_10_narrowing_required(input: unknown) {
  // apply Narrowing required safely
  return input;
}

console.log(demo_10_narrowing_required(example_10_narrowing_required));`, output: `// Result / output (conceptual)
// - Narrowing required applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Narrowing required — understand syntax, typing, and a practical use." },
        { label: "Type guards", filename: "03-type-guards.ts", code: `// Unknown. — Type guards
// Key idea: Type guards

// Variation / example
const example_10_type_guards = /* typed value */ null;

// Usage in context
function demo_10_type_guards(input: unknown) {
  // apply Type guards safely
  return input;
}

console.log(demo_10_type_guards(example_10_type_guards));`, output: `// Result / output (conceptual)
// - Type guards applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Type guards — understand syntax, typing, and a practical use." },
        { label: "Validation at boundaries", filename: "04-validation-at-boun.ts", code: `// Unknown. — Validation at boundaries
// Key idea: Validation at boundaries

// Variation / example
const example_10_validation_at_boun = /* typed value */ null;

// Usage in context
function demo_10_validation_at_boun(input: unknown) {
  // apply Validation at boundaries safely
  return input;
}

console.log(demo_10_validation_at_boun(example_10_validation_at_boun));`, output: `// Result / output (conceptual)
// - Validation at boundaries applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Validation at boundaries — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Safe top type", code: `// Example: Safe top type
// Scenario: use this aspect of Unknown. in real code.

export function ex_10_1() {
  // implement Safe top type
  return "Safe top type";
}

console.log(ex_10_1());`, output: `Safe top type`, note: "Practical example highlighting Safe top type." },
        { title: "Narrowing required", code: `// Example: Narrowing required
// Scenario: use this aspect of Unknown. in real code.

export function ex_10_2() {
  // implement Narrowing required
  return "Narrowing required";
}

console.log(ex_10_2());`, output: `Narrowing required`, note: "Practical example highlighting Narrowing required." },
        { title: "Type guards", code: `// Example: Type guards
// Scenario: use this aspect of Unknown. in real code.

export function ex_10_3() {
  // implement Type guards
  return "Type guards";
}

console.log(ex_10_3());`, output: `Type guards`, note: "Practical example highlighting Type guards." },
        { title: "Validation at boundaries", code: `// Example: Validation at boundaries
// Scenario: use this aspect of Unknown. in real code.

export function ex_10_4() {
  // implement Validation at boundaries
  return "Validation at boundaries";
}

console.log(ex_10_4());`, output: `Validation at boundaries`, note: "Practical example highlighting Validation at boundaries." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Unknown.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Unknown.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Unknown.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Safe top type, Narrowing required, Type guards)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Safe top type",
        "Understand: Narrowing required",
        "Understand: Type guards",
        "Understand: Validation at boundaries",
        "Can write and explain a typed example of Unknown.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Unknown. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
