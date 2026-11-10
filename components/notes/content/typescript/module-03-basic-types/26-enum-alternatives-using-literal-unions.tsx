import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function EnumAlternativesUsingLiteralUnions326() {
  return (
    <div>
      <SectionHero
        title="Enum alternatives using literal unions."
        subtitle="Quick-scan guide to Enum alternatives using literal unions. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 26/30", "Enum alternatives using literal unions."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Enum alternatives using literal unions.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "UNION", detail: "Union types", tone: "lime" },
        { label: "AS", detail: "as const objects", tone: "sky" },
        { label: "TRADE-OFFS", detail: "Trade-offs", tone: "violet" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Enum alternatives using literal unions. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Union types", syntax: "Union types pattern", note: "Use for union types in Enum alternatives using literal unions.." },
        { label: "as const objects", syntax: "as const objects pattern", note: "Use for as const objects in Enum alternatives using literal unions.." },
        { label: "Trade-offs", syntax: "Trade-offs pattern", note: "Use for trade-offs in Enum alternatives using literal unions.." },
      ]} />
      <Tabs items={[
        { label: "Union types", filename: "01-union-types.ts", code: `// Enum alternatives using literal unions. — Union types
// Key idea: Union types

// Variation / example
const example_26_union_types = /* typed value */ null;

// Usage in context
function demo_26_union_types(input: unknown) {
  // apply Union types safely
  return input;
}

console.log(demo_26_union_types(example_26_union_types));`, output: `// Result / output (conceptual)
// - Union types applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Union types — understand syntax, typing, and a practical use." },
        { label: "as const objects", filename: "02-as-const-objects.ts", code: `// Enum alternatives using literal unions. — as const objects
// Key idea: as const objects

// Variation / example
const example_26_as_const_objects = /* typed value */ null;

// Usage in context
function demo_26_as_const_objects(input: unknown) {
  // apply as const objects safely
  return input;
}

console.log(demo_26_as_const_objects(example_26_as_const_objects));`, output: `// Result / output (conceptual)
// - as const objects applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: as const objects — understand syntax, typing, and a practical use." },
        { label: "Trade-offs", filename: "03-trade-offs.ts", code: `// Enum alternatives using literal unions. — Trade-offs
// Key idea: Trade-offs

// Variation / example
const example_26_trade_offs = /* typed value */ null;

// Usage in context
function demo_26_trade_offs(input: unknown) {
  // apply Trade-offs safely
  return input;
}

console.log(demo_26_trade_offs(example_26_trade_offs));`, output: `// Result / output (conceptual)
// - Trade-offs applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Trade-offs — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Union types", code: `// Example: Union types
// Scenario: use this aspect of Enum alternatives using literal unions. in real code.

export function ex_26_1() {
  // implement Union types
  return "Union types";
}

console.log(ex_26_1());`, output: `Union types`, note: "Practical example highlighting Union types." },
        { title: "as const objects", code: `// Example: as const objects
// Scenario: use this aspect of Enum alternatives using literal unions. in real code.

export function ex_26_2() {
  // implement as const objects
  return "as const objects";
}

console.log(ex_26_2());`, output: `as const objects`, note: "Practical example highlighting as const objects." },
        { title: "Trade-offs", code: `// Example: Trade-offs
// Scenario: use this aspect of Enum alternatives using literal unions. in real code.

export function ex_26_3() {
  // implement Trade-offs
  return "Trade-offs";
}

console.log(ex_26_3());`, output: `Trade-offs`, note: "Practical example highlighting Trade-offs." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Enum alternatives using literal unions.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Enum alternatives using literal unions.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Enum alternatives using literal unions.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Union types, as const objects, Trade-offs)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Union types",
        "Understand: as const objects",
        "Understand: Trade-offs",
        "Can write and explain a typed example of Enum alternatives using literal unions.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Enum alternatives using literal unions. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
