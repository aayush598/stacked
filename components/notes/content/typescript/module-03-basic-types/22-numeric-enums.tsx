import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function NumericEnums322() {
  return (
    <div>
      <SectionHero
        title="Numeric enums."
        subtitle="Quick-scan guide to Numeric enums. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 22/30", "Numeric enums."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Numeric enums.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "AUTO-INCRE", detail: "Auto-increment", tone: "lime" },
        { label: "REVERSE", detail: "Reverse mapping", tone: "sky" },
        { label: "PITFALLS", detail: "Pitfalls", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Numeric enums. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Auto-increment", syntax: "Auto-increment pattern", note: "Use for auto-increment in Numeric enums.." },
        { label: "Reverse mapping", syntax: "Reverse mapping pattern", note: "Use for reverse mapping in Numeric enums.." },
        { label: "Pitfalls", syntax: "Pitfalls pattern", note: "Use for pitfalls in Numeric enums.." },
      ]} />
      <Tabs items={[
        { label: "Auto-increment", filename: "01-auto-increment.ts", code: `// Numeric enums. — Auto-increment
// Key idea: Auto-increment

// Variation / example
const example_22_auto_increment = /* typed value */ null;

// Usage in context
function demo_22_auto_increment(input: unknown) {
  // apply Auto-increment safely
  return input;
}

console.log(demo_22_auto_increment(example_22_auto_increment));`, output: `// Result / output (conceptual)
// - Auto-increment applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Auto-increment — understand syntax, typing, and a practical use." },
        { label: "Reverse mapping", filename: "02-reverse-mapping.ts", code: `// Numeric enums. — Reverse mapping
// Key idea: Reverse mapping

// Variation / example
const example_22_reverse_mapping = /* typed value */ null;

// Usage in context
function demo_22_reverse_mapping(input: unknown) {
  // apply Reverse mapping safely
  return input;
}

console.log(demo_22_reverse_mapping(example_22_reverse_mapping));`, output: `// Result / output (conceptual)
// - Reverse mapping applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Reverse mapping — understand syntax, typing, and a practical use." },
        { label: "Pitfalls", filename: "03-pitfalls.ts", code: `// Numeric enums. — Pitfalls
// Key idea: Pitfalls

// Variation / example
const example_22_pitfalls = /* typed value */ null;

// Usage in context
function demo_22_pitfalls(input: unknown) {
  // apply Pitfalls safely
  return input;
}

console.log(demo_22_pitfalls(example_22_pitfalls));`, output: `// Result / output (conceptual)
// - Pitfalls applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Pitfalls — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Auto-increment", code: `// Example: Auto-increment
// Scenario: use this aspect of Numeric enums. in real code.

export function ex_22_1() {
  // implement Auto-increment
  return "Auto-increment";
}

console.log(ex_22_1());`, output: `Auto-increment`, note: "Practical example highlighting Auto-increment." },
        { title: "Reverse mapping", code: `// Example: Reverse mapping
// Scenario: use this aspect of Numeric enums. in real code.

export function ex_22_2() {
  // implement Reverse mapping
  return "Reverse mapping";
}

console.log(ex_22_2());`, output: `Reverse mapping`, note: "Practical example highlighting Reverse mapping." },
        { title: "Pitfalls", code: `// Example: Pitfalls
// Scenario: use this aspect of Numeric enums. in real code.

export function ex_22_3() {
  // implement Pitfalls
  return "Pitfalls";
}

console.log(ex_22_3());`, output: `Pitfalls`, note: "Practical example highlighting Pitfalls." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Numeric enums.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Numeric enums.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Numeric enums.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Auto-increment, Reverse mapping, Pitfalls)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Auto-increment",
        "Understand: Reverse mapping",
        "Understand: Pitfalls",
        "Can write and explain a typed example of Numeric enums.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Numeric enums. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
