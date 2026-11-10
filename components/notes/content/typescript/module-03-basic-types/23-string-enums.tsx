import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function StringEnums323() {
  return (
    <div>
      <SectionHero
        title="String enums."
        subtitle="Quick-scan guide to String enums. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 23/30", "String enums."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>String enums.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "EXPLICIT", detail: "Explicit values", tone: "lime" },
        { label: "SERIALIZAT", detail: "Serialization", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What String enums. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Explicit values", syntax: "Explicit values pattern", note: "Use for explicit values in String enums.." },
        { label: "Serialization", syntax: "Serialization pattern", note: "Use for serialization in String enums.." },
      ]} />
      <Tabs items={[
        { label: "Explicit values", filename: "01-explicit-values.ts", code: `// String enums. — Explicit values
// Key idea: Explicit values

// Variation / example
const example_23_explicit_values = /* typed value */ null;

// Usage in context
function demo_23_explicit_values(input: unknown) {
  // apply Explicit values safely
  return input;
}

console.log(demo_23_explicit_values(example_23_explicit_values));`, output: `// Result / output (conceptual)
// - Explicit values applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Explicit values — understand syntax, typing, and a practical use." },
        { label: "Serialization", filename: "02-serialization.ts", code: `// String enums. — Serialization
// Key idea: Serialization

// Variation / example
const example_23_serialization = /* typed value */ null;

// Usage in context
function demo_23_serialization(input: unknown) {
  // apply Serialization safely
  return input;
}

console.log(demo_23_serialization(example_23_serialization));`, output: `// Result / output (conceptual)
// - Serialization applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Serialization — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Explicit values", code: `// Example: Explicit values
// Scenario: use this aspect of String enums. in real code.

export function ex_23_1() {
  // implement Explicit values
  return "Explicit values";
}

console.log(ex_23_1());`, output: `Explicit values`, note: "Practical example highlighting Explicit values." },
        { title: "Serialization", code: `// Example: Serialization
// Scenario: use this aspect of String enums. in real code.

export function ex_23_2() {
  // implement Serialization
  return "Serialization";
}

console.log(ex_23_2());`, output: `Serialization`, note: "Practical example highlighting Serialization." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: String enums.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: String enums.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "String enums.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Explicit values, Serialization)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Explicit values",
        "Understand: Serialization",
        "Can write and explain a typed example of String enums.."
      ]} />

      <NoteTakeaways items={[
        "Grasp String enums. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
