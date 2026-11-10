import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TupleTypes316() {
  return (
    <div>
      <SectionHero
        title="Tuple types."
        subtitle="Quick-scan guide to Tuple types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 16/30", "Tuple types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Tuple types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "FIXED", detail: "Fixed positions", tone: "lime" },
        { label: "INFERENCE", detail: "Inference", tone: "sky" },
        { label: "USE", detail: "Use cases", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Tuple types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Fixed positions", syntax: "Fixed positions pattern", note: "Use for fixed positions in Tuple types.." },
        { label: "Inference", syntax: "Inference pattern", note: "Use for inference in Tuple types.." },
        { label: "Use cases", syntax: "Use cases pattern", note: "Use for use cases in Tuple types.." },
      ]} />
      <Tabs items={[
        { label: "Fixed positions", filename: "01-fixed-positions.ts", code: `// Tuple types. — Fixed positions
// Key idea: Fixed positions

// Variation / example
const example_16_fixed_positions = /* typed value */ null;

// Usage in context
function demo_16_fixed_positions(input: unknown) {
  // apply Fixed positions safely
  return input;
}

console.log(demo_16_fixed_positions(example_16_fixed_positions));`, output: `// Result / output (conceptual)
// - Fixed positions applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Fixed positions — understand syntax, typing, and a practical use." },
        { label: "Inference", filename: "02-inference.ts", code: `// Tuple types. — Inference
// Key idea: Inference

// Variation / example
const example_16_inference = /* typed value */ null;

// Usage in context
function demo_16_inference(input: unknown) {
  // apply Inference safely
  return input;
}

console.log(demo_16_inference(example_16_inference));`, output: `// Result / output (conceptual)
// - Inference applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Inference — understand syntax, typing, and a practical use." },
        { label: "Use cases", filename: "03-use-cases.ts", code: `// Tuple types. — Use cases
// Key idea: Use cases

// Variation / example
const example_16_use_cases = /* typed value */ null;

// Usage in context
function demo_16_use_cases(input: unknown) {
  // apply Use cases safely
  return input;
}

console.log(demo_16_use_cases(example_16_use_cases));`, output: `// Result / output (conceptual)
// - Use cases applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Use cases — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Fixed positions", code: `// Example: Fixed positions
// Scenario: use this aspect of Tuple types. in real code.

export function ex_16_1() {
  // implement Fixed positions
  return "Fixed positions";
}

console.log(ex_16_1());`, output: `Fixed positions`, note: "Practical example highlighting Fixed positions." },
        { title: "Inference", code: `// Example: Inference
// Scenario: use this aspect of Tuple types. in real code.

export function ex_16_2() {
  // implement Inference
  return "Inference";
}

console.log(ex_16_2());`, output: `Inference`, note: "Practical example highlighting Inference." },
        { title: "Use cases", code: `// Example: Use cases
// Scenario: use this aspect of Tuple types. in real code.

export function ex_16_3() {
  // implement Use cases
  return "Use cases";
}

console.log(ex_16_3());`, output: `Use cases`, note: "Practical example highlighting Use cases." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Tuple types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Tuple types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Tuple types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Fixed positions, Inference, Use cases)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Fixed positions",
        "Understand: Inference",
        "Understand: Use cases",
        "Can write and explain a typed example of Tuple types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Tuple types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
