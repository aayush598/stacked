import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function NumericLiteralTypes313() {
  return (
    <div>
      <SectionHero
        title="Numeric literal types."
        subtitle="Quick-scan guide to Numeric literal types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 13/30", "Numeric literal types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Numeric literal types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "STATUS", detail: "Status codes", tone: "lime" },
        { label: "LEVELS", detail: "Levels", tone: "sky" },
        { label: "WIDENING", detail: "Widening", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Numeric literal types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Status codes", syntax: "Status codes pattern", note: "Use for status codes in Numeric literal types.." },
        { label: "Levels", syntax: "Levels pattern", note: "Use for levels in Numeric literal types.." },
        { label: "Widening", syntax: "Widening pattern", note: "Use for widening in Numeric literal types.." },
      ]} />
      <Tabs items={[
        { label: "Status codes", filename: "01-status-codes.ts", code: `// Numeric literal types. — Status codes
// Key idea: Status codes

// Variation / example
const example_13_status_codes = /* typed value */ null;

// Usage in context
function demo_13_status_codes(input: unknown) {
  // apply Status codes safely
  return input;
}

console.log(demo_13_status_codes(example_13_status_codes));`, output: `// Result / output (conceptual)
// - Status codes applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Status codes — understand syntax, typing, and a practical use." },
        { label: "Levels", filename: "02-levels.ts", code: `// Numeric literal types. — Levels
// Key idea: Levels

// Variation / example
const example_13_levels = /* typed value */ null;

// Usage in context
function demo_13_levels(input: unknown) {
  // apply Levels safely
  return input;
}

console.log(demo_13_levels(example_13_levels));`, output: `// Result / output (conceptual)
// - Levels applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Levels — understand syntax, typing, and a practical use." },
        { label: "Widening", filename: "03-widening.ts", code: `// Numeric literal types. — Widening
// Key idea: Widening

// Variation / example
const example_13_widening = /* typed value */ null;

// Usage in context
function demo_13_widening(input: unknown) {
  // apply Widening safely
  return input;
}

console.log(demo_13_widening(example_13_widening));`, output: `// Result / output (conceptual)
// - Widening applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Widening — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Status codes", code: `// Example: Status codes
// Scenario: use this aspect of Numeric literal types. in real code.

export function ex_13_1() {
  // implement Status codes
  return "Status codes";
}

console.log(ex_13_1());`, output: `Status codes`, note: "Practical example highlighting Status codes." },
        { title: "Levels", code: `// Example: Levels
// Scenario: use this aspect of Numeric literal types. in real code.

export function ex_13_2() {
  // implement Levels
  return "Levels";
}

console.log(ex_13_2());`, output: `Levels`, note: "Practical example highlighting Levels." },
        { title: "Widening", code: `// Example: Widening
// Scenario: use this aspect of Numeric literal types. in real code.

export function ex_13_3() {
  // implement Widening
  return "Widening";
}

console.log(ex_13_3());`, output: `Widening`, note: "Practical example highlighting Widening." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Numeric literal types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Numeric literal types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Numeric literal types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Status codes, Levels, Widening)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Status codes",
        "Understand: Levels",
        "Understand: Widening",
        "Can write and explain a typed example of Numeric literal types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Numeric literal types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
