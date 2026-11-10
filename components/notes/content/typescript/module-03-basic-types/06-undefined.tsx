import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Undefined36() {
  return (
    <div>
      <SectionHero
        title="Undefined."
        subtitle="Quick-scan guide to Undefined. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 6/30", "Undefined."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Undefined.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "MISSING/UN", detail: "Missing/uninitialized", tone: "lime" },
        { label: "OPTIONAL", detail: "Optional values", tone: "sky" },
        { label: "EXACTOPTIO", detail: "exactOptionalPropertyTypes", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Undefined. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Missing/uninitialized", syntax: "Missing/uninitialized pattern", note: "Use for missing/uninitialized in Undefined.." },
        { label: "Optional values", syntax: "Optional values pattern", note: "Use for optional values in Undefined.." },
        { label: "exactOptionalPropertyTypes", syntax: "exactOptionalPropertyTypes pattern", note: "Use for exactoptionalpropertytypes in Undefined.." },
      ]} />
      <Tabs items={[
        { label: "Missing/uninitialized", filename: "01-missing-uninitiali.ts", code: `// Undefined. — Missing/uninitialized
// Key idea: Missing/uninitialized

// Variation / example
const example_6_missing_uninitiali = /* typed value */ null;

// Usage in context
function demo_6_missing_uninitiali(input: unknown) {
  // apply Missing/uninitialized safely
  return input;
}

console.log(demo_6_missing_uninitiali(example_6_missing_uninitiali));`, output: `// Result / output (conceptual)
// - Missing/uninitialized applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Missing/uninitialized — understand syntax, typing, and a practical use." },
        { label: "Optional values", filename: "02-optional-values.ts", code: `// Undefined. — Optional values
// Key idea: Optional values

// Variation / example
const example_6_optional_values = /* typed value */ null;

// Usage in context
function demo_6_optional_values(input: unknown) {
  // apply Optional values safely
  return input;
}

console.log(demo_6_optional_values(example_6_optional_values));`, output: `// Result / output (conceptual)
// - Optional values applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Optional values — understand syntax, typing, and a practical use." },
        { label: "exactOptionalPropertyTypes", filename: "03-exactoptionalprope.ts", code: `// Undefined. — exactOptionalPropertyTypes
// Key idea: exactOptionalPropertyTypes

// Variation / example
const example_6_exactoptionalprope = /* typed value */ null;

// Usage in context
function demo_6_exactoptionalprope(input: unknown) {
  // apply exactOptionalPropertyTypes safely
  return input;
}

console.log(demo_6_exactoptionalprope(example_6_exactoptionalprope));`, output: `// Result / output (conceptual)
// - exactOptionalPropertyTypes applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: exactOptionalPropertyTypes — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Missing/uninitialized", code: `// Example: Missing/uninitialized
// Scenario: use this aspect of Undefined. in real code.

export function ex_6_1() {
  // implement Missing/uninitialized
  return "Missing/uninitialized";
}

console.log(ex_6_1());`, output: `Missing/uninitialized`, note: "Practical example highlighting Missing/uninitialized." },
        { title: "Optional values", code: `// Example: Optional values
// Scenario: use this aspect of Undefined. in real code.

export function ex_6_2() {
  // implement Optional values
  return "Optional values";
}

console.log(ex_6_2());`, output: `Optional values`, note: "Practical example highlighting Optional values." },
        { title: "exactOptionalPropertyTypes", code: `// Example: exactOptionalPropertyTypes
// Scenario: use this aspect of Undefined. in real code.

export function ex_6_3() {
  // implement exactOptionalPropertyTypes
  return "exactOptionalPropertyTypes";
}

console.log(ex_6_3());`, output: `exactOptionalPropertyTypes`, note: "Practical example highlighting exactOptionalPropertyTypes." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Undefined.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Undefined.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Undefined.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Missing/uninitialized, Optional values, exactOptionalPropertyTypes)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Missing/uninitialized",
        "Understand: Optional values",
        "Understand: exactOptionalPropertyTypes",
        "Can write and explain a typed example of Undefined.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Undefined. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
