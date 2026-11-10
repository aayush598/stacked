import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function HeterogeneousEnums324() {
  return (
    <div>
      <SectionHero
        title="Heterogeneous enums."
        subtitle="Quick-scan guide to Heterogeneous enums. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 24/30", "Heterogeneous enums."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Heterogeneous enums.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "MIXED", detail: "Mixed members", tone: "lime" },
        { label: "WHY", detail: "Why to avoid", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Heterogeneous enums. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Mixed members", syntax: "Mixed members pattern", note: "Use for mixed members in Heterogeneous enums.." },
        { label: "Why to avoid", syntax: "Why to avoid pattern", note: "Use for why to avoid in Heterogeneous enums.." },
      ]} />
      <Tabs items={[
        { label: "Mixed members", filename: "01-mixed-members.ts", code: `// Heterogeneous enums. — Mixed members
// Key idea: Mixed members

// Variation / example
const example_24_mixed_members = /* typed value */ null;

// Usage in context
function demo_24_mixed_members(input: unknown) {
  // apply Mixed members safely
  return input;
}

console.log(demo_24_mixed_members(example_24_mixed_members));`, output: `// Result / output (conceptual)
// - Mixed members applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Mixed members — understand syntax, typing, and a practical use." },
        { label: "Why to avoid", filename: "02-why-to-avoid.ts", code: `// Heterogeneous enums. — Why to avoid
// Key idea: Why to avoid

// Variation / example
const example_24_why_to_avoid = /* typed value */ null;

// Usage in context
function demo_24_why_to_avoid(input: unknown) {
  // apply Why to avoid safely
  return input;
}

console.log(demo_24_why_to_avoid(example_24_why_to_avoid));`, output: `// Result / output (conceptual)
// - Why to avoid applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Why to avoid — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Mixed members", code: `// Example: Mixed members
// Scenario: use this aspect of Heterogeneous enums. in real code.

export function ex_24_1() {
  // implement Mixed members
  return "Mixed members";
}

console.log(ex_24_1());`, output: `Mixed members`, note: "Practical example highlighting Mixed members." },
        { title: "Why to avoid", code: `// Example: Why to avoid
// Scenario: use this aspect of Heterogeneous enums. in real code.

export function ex_24_2() {
  // implement Why to avoid
  return "Why to avoid";
}

console.log(ex_24_2());`, output: `Why to avoid`, note: "Practical example highlighting Why to avoid." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Heterogeneous enums.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Heterogeneous enums.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Heterogeneous enums.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Mixed members, Why to avoid)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Mixed members",
        "Understand: Why to avoid",
        "Can write and explain a typed example of Heterogeneous enums.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Heterogeneous enums. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
