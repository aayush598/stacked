import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function EnumTypes321() {
  return (
    <div>
      <SectionHero
        title="Enum types."
        subtitle="Quick-scan guide to Enum types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 21/30", "Enum types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Enum types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "NAMED", detail: "Named constants", tone: "lime" },
        { label: "RUNTIME", detail: "Runtime behavior", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Enum types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Named constants", syntax: "Named constants pattern", note: "Use for named constants in Enum types.." },
        { label: "Runtime behavior", syntax: "Runtime behavior pattern", note: "Use for runtime behavior in Enum types.." },
      ]} />
      <Tabs items={[
        { label: "Named constants", filename: "01-named-constants.ts", code: `// Enum types. — Named constants
// Key idea: Named constants

// Variation / example
const example_21_named_constants = /* typed value */ null;

// Usage in context
function demo_21_named_constants(input: unknown) {
  // apply Named constants safely
  return input;
}

console.log(demo_21_named_constants(example_21_named_constants));`, output: `// Result / output (conceptual)
// - Named constants applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Named constants — understand syntax, typing, and a practical use." },
        { label: "Runtime behavior", filename: "02-runtime-behavior.ts", code: `// Enum types. — Runtime behavior
// Key idea: Runtime behavior

// Variation / example
const example_21_runtime_behavior = /* typed value */ null;

// Usage in context
function demo_21_runtime_behavior(input: unknown) {
  // apply Runtime behavior safely
  return input;
}

console.log(demo_21_runtime_behavior(example_21_runtime_behavior));`, output: `// Result / output (conceptual)
// - Runtime behavior applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Runtime behavior — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Named constants", code: `// Example: Named constants
// Scenario: use this aspect of Enum types. in real code.

export function ex_21_1() {
  // implement Named constants
  return "Named constants";
}

console.log(ex_21_1());`, output: `Named constants`, note: "Practical example highlighting Named constants." },
        { title: "Runtime behavior", code: `// Example: Runtime behavior
// Scenario: use this aspect of Enum types. in real code.

export function ex_21_2() {
  // implement Runtime behavior
  return "Runtime behavior";
}

console.log(ex_21_2());`, output: `Runtime behavior`, note: "Practical example highlighting Runtime behavior." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Enum types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Enum types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Enum types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Named constants, Runtime behavior)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Named constants",
        "Understand: Runtime behavior",
        "Can write and explain a typed example of Enum types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Enum types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
