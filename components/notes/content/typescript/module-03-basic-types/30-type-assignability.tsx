import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeAssignability330() {
  return (
    <div>
      <SectionHero
        title="Type assignability."
        subtitle="Quick-scan guide to Type assignability. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 30/30", "Type assignability."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Type assignability.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "VALUE-TO-T", detail: "Value-to-target rules", tone: "lime" },
        { label: "ANY/UNKNOW", detail: "any/unknown/never", tone: "sky" },
        { label: "SAFE", detail: "Safe assignments", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Type assignability. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Value-to-target rules", syntax: "Value-to-target rules pattern", note: "Use for value-to-target rules in Type assignability.." },
        { label: "any/unknown/never", syntax: "any/unknown/never pattern", note: "Use for any/unknown/never in Type assignability.." },
        { label: "Safe assignments", syntax: "Safe assignments pattern", note: "Use for safe assignments in Type assignability.." },
      ]} />
      <Tabs items={[
        { label: "Value-to-target rules", filename: "01-value-to-target-ru.ts", code: `// Type assignability. — Value-to-target rules
// Key idea: Value-to-target rules

// Variation / example
const example_30_value_to_target_ru = /* typed value */ null;

// Usage in context
function demo_30_value_to_target_ru(input: unknown) {
  // apply Value-to-target rules safely
  return input;
}

console.log(demo_30_value_to_target_ru(example_30_value_to_target_ru));`, output: `// Result / output (conceptual)
// - Value-to-target rules applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Value-to-target rules — understand syntax, typing, and a practical use." },
        { label: "any/unknown/never", filename: "02-any-unknown-never.ts", code: `// Type assignability. — any/unknown/never
// Key idea: any/unknown/never

// Variation / example
const example_30_any_unknown_never = /* typed value */ null;

// Usage in context
function demo_30_any_unknown_never(input: unknown) {
  // apply any/unknown/never safely
  return input;
}

console.log(demo_30_any_unknown_never(example_30_any_unknown_never));`, output: `// Result / output (conceptual)
// - any/unknown/never applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: any/unknown/never — understand syntax, typing, and a practical use." },
        { label: "Safe assignments", filename: "03-safe-assignments.ts", code: `// Type assignability. — Safe assignments
// Key idea: Safe assignments

// Variation / example
const example_30_safe_assignments = /* typed value */ null;

// Usage in context
function demo_30_safe_assignments(input: unknown) {
  // apply Safe assignments safely
  return input;
}

console.log(demo_30_safe_assignments(example_30_safe_assignments));`, output: `// Result / output (conceptual)
// - Safe assignments applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Safe assignments — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Value-to-target rules", code: `// Example: Value-to-target rules
// Scenario: use this aspect of Type assignability. in real code.

export function ex_30_1() {
  // implement Value-to-target rules
  return "Value-to-target rules";
}

console.log(ex_30_1());`, output: `Value-to-target rules`, note: "Practical example highlighting Value-to-target rules." },
        { title: "any/unknown/never", code: `// Example: any/unknown/never
// Scenario: use this aspect of Type assignability. in real code.

export function ex_30_2() {
  // implement any/unknown/never
  return "any/unknown/never";
}

console.log(ex_30_2());`, output: `any/unknown/never`, note: "Practical example highlighting any/unknown/never." },
        { title: "Safe assignments", code: `// Example: Safe assignments
// Scenario: use this aspect of Type assignability. in real code.

export function ex_30_3() {
  // implement Safe assignments
  return "Safe assignments";
}

console.log(ex_30_3());`, output: `Safe assignments`, note: "Practical example highlighting Safe assignments." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Type assignability.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Type assignability.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Type assignability.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Value-to-target rules, any/unknown/never, Safe assignments)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Value-to-target rules",
        "Understand: any/unknown/never",
        "Understand: Safe assignments",
        "Can write and explain a typed example of Type assignability.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Type assignability. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
