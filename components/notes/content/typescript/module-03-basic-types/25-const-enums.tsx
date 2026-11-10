import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function ConstEnums325() {
  return (
    <div>
      <SectionHero
        title="Const enums."
        subtitle="Quick-scan guide to Const enums. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 25/30", "Const enums."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Const enums.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "INLINING", detail: "Inlining", tone: "lime" },
        { label: "ISOLATEDMO", detail: "isolatedModules concerns", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Const enums. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Inlining", syntax: "Inlining pattern", note: "Use for inlining in Const enums.." },
        { label: "isolatedModules concerns", syntax: "isolatedModules concerns pattern", note: "Use for isolatedmodules concerns in Const enums.." },
      ]} />
      <Tabs items={[
        { label: "Inlining", filename: "01-inlining.ts", code: `// Const enums. — Inlining
// Key idea: Inlining

// Variation / example
const example_25_inlining = /* typed value */ null;

// Usage in context
function demo_25_inlining(input: unknown) {
  // apply Inlining safely
  return input;
}

console.log(demo_25_inlining(example_25_inlining));`, output: `// Result / output (conceptual)
// - Inlining applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Inlining — understand syntax, typing, and a practical use." },
        { label: "isolatedModules concerns", filename: "02-isolatedmodules-co.ts", code: `// Const enums. — isolatedModules concerns
// Key idea: isolatedModules concerns

// Variation / example
const example_25_isolatedmodules_co = /* typed value */ null;

// Usage in context
function demo_25_isolatedmodules_co(input: unknown) {
  // apply isolatedModules concerns safely
  return input;
}

console.log(demo_25_isolatedmodules_co(example_25_isolatedmodules_co));`, output: `// Result / output (conceptual)
// - isolatedModules concerns applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: isolatedModules concerns — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Inlining", code: `// Example: Inlining
// Scenario: use this aspect of Const enums. in real code.

export function ex_25_1() {
  // implement Inlining
  return "Inlining";
}

console.log(ex_25_1());`, output: `Inlining`, note: "Practical example highlighting Inlining." },
        { title: "isolatedModules concerns", code: `// Example: isolatedModules concerns
// Scenario: use this aspect of Const enums. in real code.

export function ex_25_2() {
  // implement isolatedModules concerns
  return "isolatedModules concerns";
}

console.log(ex_25_2());`, output: `isolatedModules concerns`, note: "Practical example highlighting isolatedModules concerns." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Const enums.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Const enums.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Const enums.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Inlining, isolatedModules concerns)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Inlining",
        "Understand: isolatedModules concerns",
        "Can write and explain a typed example of Const enums.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Const enums. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
