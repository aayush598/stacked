import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeCompatibility329() {
  return (
    <div>
      <SectionHero
        title="Type compatibility."
        subtitle="Quick-scan guide to Type compatibility. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 29/30", "Type compatibility."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Type compatibility.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "STRUCTURAL", detail: "Structural typing", tone: "lime" },
        { label: "EXCESS", detail: "Excess property checks", tone: "sky" },
        { label: "FUNCTION", detail: "Function compatibility", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Type compatibility. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Structural typing", syntax: "Structural typing pattern", note: "Use for structural typing in Type compatibility.." },
        { label: "Excess property checks", syntax: "Excess property checks pattern", note: "Use for excess property checks in Type compatibility.." },
        { label: "Function compatibility", syntax: "Function compatibility pattern", note: "Use for function compatibility in Type compatibility.." },
      ]} />
      <Tabs items={[
        { label: "Structural typing", filename: "01-structural-typing.ts", code: `// Type compatibility. — Structural typing
// Key idea: Structural typing

// Variation / example
const example_29_structural_typing = /* typed value */ null;

// Usage in context
function demo_29_structural_typing(input: unknown) {
  // apply Structural typing safely
  return input;
}

console.log(demo_29_structural_typing(example_29_structural_typing));`, output: `// Result / output (conceptual)
// - Structural typing applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Structural typing — understand syntax, typing, and a practical use." },
        { label: "Excess property checks", filename: "02-excess-property-ch.ts", code: `// Type compatibility. — Excess property checks
// Key idea: Excess property checks

// Variation / example
const example_29_excess_property_ch = /* typed value */ null;

// Usage in context
function demo_29_excess_property_ch(input: unknown) {
  // apply Excess property checks safely
  return input;
}

console.log(demo_29_excess_property_ch(example_29_excess_property_ch));`, output: `// Result / output (conceptual)
// - Excess property checks applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Excess property checks — understand syntax, typing, and a practical use." },
        { label: "Function compatibility", filename: "03-function-compatibi.ts", code: `// Type compatibility. — Function compatibility
// Key idea: Function compatibility

// Variation / example
const example_29_function_compatibi = /* typed value */ null;

// Usage in context
function demo_29_function_compatibi(input: unknown) {
  // apply Function compatibility safely
  return input;
}

console.log(demo_29_function_compatibi(example_29_function_compatibi));`, output: `// Result / output (conceptual)
// - Function compatibility applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Function compatibility — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Structural typing", code: `// Example: Structural typing
// Scenario: use this aspect of Type compatibility. in real code.

export function ex_29_1() {
  // implement Structural typing
  return "Structural typing";
}

console.log(ex_29_1());`, output: `Structural typing`, note: "Practical example highlighting Structural typing." },
        { title: "Excess property checks", code: `// Example: Excess property checks
// Scenario: use this aspect of Type compatibility. in real code.

export function ex_29_2() {
  // implement Excess property checks
  return "Excess property checks";
}

console.log(ex_29_2());`, output: `Excess property checks`, note: "Practical example highlighting Excess property checks." },
        { title: "Function compatibility", code: `// Example: Function compatibility
// Scenario: use this aspect of Type compatibility. in real code.

export function ex_29_3() {
  // implement Function compatibility
  return "Function compatibility";
}

console.log(ex_29_3());`, output: `Function compatibility`, note: "Practical example highlighting Function compatibility." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Type compatibility.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Type compatibility.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Type compatibility.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Structural typing, Excess property checks, Function compatibility)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Structural typing",
        "Understand: Excess property checks",
        "Understand: Function compatibility",
        "Can write and explain a typed example of Type compatibility.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Type compatibility. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
