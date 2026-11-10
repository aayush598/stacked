import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeInference32() {
  return (
    <div>
      <SectionHero
        title="Type inference."
        subtitle="Quick-scan guide to Type inference. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 2/30", "Type inference."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Type inference.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "INITIALIZA", detail: "Initialization", tone: "lime" },
        { label: "CONTEXTUAL", detail: "Contextual typing", tone: "sky" },
        { label: "BEST", detail: "Best common type", tone: "violet" },
        { label: "INFERENCE", detail: "Inference limits", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Type inference. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Initialization", syntax: "Initialization pattern", note: "Use for initialization in Type inference.." },
        { label: "Contextual typing", syntax: "Contextual typing pattern", note: "Use for contextual typing in Type inference.." },
        { label: "Best common type", syntax: "Best common type pattern", note: "Use for best common type in Type inference.." },
        { label: "Inference limits", syntax: "Inference limits pattern", note: "Use for inference limits in Type inference.." },
      ]} />
      <Tabs items={[
        { label: "Initialization", filename: "01-initialization.ts", code: `// Type inference. — Initialization
// Key idea: Initialization

// Variation / example
const example_2_initialization = /* typed value */ null;

// Usage in context
function demo_2_initialization(input: unknown) {
  // apply Initialization safely
  return input;
}

console.log(demo_2_initialization(example_2_initialization));`, output: `// Result / output (conceptual)
// - Initialization applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Initialization — understand syntax, typing, and a practical use." },
        { label: "Contextual typing", filename: "02-contextual-typing.ts", code: `// Type inference. — Contextual typing
// Key idea: Contextual typing

// Variation / example
const example_2_contextual_typing = /* typed value */ null;

// Usage in context
function demo_2_contextual_typing(input: unknown) {
  // apply Contextual typing safely
  return input;
}

console.log(demo_2_contextual_typing(example_2_contextual_typing));`, output: `// Result / output (conceptual)
// - Contextual typing applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Contextual typing — understand syntax, typing, and a practical use." },
        { label: "Best common type", filename: "03-best-common-type.ts", code: `// Type inference. — Best common type
// Key idea: Best common type

// Variation / example
const example_2_best_common_type = /* typed value */ null;

// Usage in context
function demo_2_best_common_type(input: unknown) {
  // apply Best common type safely
  return input;
}

console.log(demo_2_best_common_type(example_2_best_common_type));`, output: `// Result / output (conceptual)
// - Best common type applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Best common type — understand syntax, typing, and a practical use." },
        { label: "Inference limits", filename: "04-inference-limits.ts", code: `// Type inference. — Inference limits
// Key idea: Inference limits

// Variation / example
const example_2_inference_limits = /* typed value */ null;

// Usage in context
function demo_2_inference_limits(input: unknown) {
  // apply Inference limits safely
  return input;
}

console.log(demo_2_inference_limits(example_2_inference_limits));`, output: `// Result / output (conceptual)
// - Inference limits applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Inference limits — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Initialization", code: `// Example: Initialization
// Scenario: use this aspect of Type inference. in real code.

export function ex_2_1() {
  // implement Initialization
  return "Initialization";
}

console.log(ex_2_1());`, output: `Initialization`, note: "Practical example highlighting Initialization." },
        { title: "Contextual typing", code: `// Example: Contextual typing
// Scenario: use this aspect of Type inference. in real code.

export function ex_2_2() {
  // implement Contextual typing
  return "Contextual typing";
}

console.log(ex_2_2());`, output: `Contextual typing`, note: "Practical example highlighting Contextual typing." },
        { title: "Best common type", code: `// Example: Best common type
// Scenario: use this aspect of Type inference. in real code.

export function ex_2_3() {
  // implement Best common type
  return "Best common type";
}

console.log(ex_2_3());`, output: `Best common type`, note: "Practical example highlighting Best common type." },
        { title: "Inference limits", code: `// Example: Inference limits
// Scenario: use this aspect of Type inference. in real code.

export function ex_2_4() {
  // implement Inference limits
  return "Inference limits";
}

console.log(ex_2_4());`, output: `Inference limits`, note: "Practical example highlighting Inference limits." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Type inference.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Type inference.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Type inference.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Initialization, Contextual typing, Best common type)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Initialization",
        "Understand: Contextual typing",
        "Understand: Best common type",
        "Understand: Inference limits",
        "Can write and explain a typed example of Type inference.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Type inference. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
