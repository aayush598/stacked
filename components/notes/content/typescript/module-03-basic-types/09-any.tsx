import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Any39() {
  return (
    <div>
      <SectionHero
        title="Any."
        subtitle="Quick-scan guide to Any. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 9/30", "Any."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Any.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "ESCAPE", detail: "Escape hatch", tone: "lime" },
        { label: "RISKS", detail: "Risks", tone: "sky" },
        { label: "NOIMPLICIT", detail: "noImplicitAny", tone: "violet" },
        { label: "MIGRATION", detail: "Migration boundaries", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Any. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Escape hatch", syntax: "Escape hatch pattern", note: "Use for escape hatch in Any.." },
        { label: "Risks", syntax: "Risks pattern", note: "Use for risks in Any.." },
        { label: "noImplicitAny", syntax: "noImplicitAny pattern", note: "Use for noimplicitany in Any.." },
        { label: "Migration boundaries", syntax: "Migration boundaries pattern", note: "Use for migration boundaries in Any.." },
      ]} />
      <Tabs items={[
        { label: "Escape hatch", filename: "01-escape-hatch.ts", code: `// Any. — Escape hatch
// Key idea: Escape hatch

// Variation / example
const example_9_escape_hatch = /* typed value */ null;

// Usage in context
function demo_9_escape_hatch(input: unknown) {
  // apply Escape hatch safely
  return input;
}

console.log(demo_9_escape_hatch(example_9_escape_hatch));`, output: `// Result / output (conceptual)
// - Escape hatch applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Escape hatch — understand syntax, typing, and a practical use." },
        { label: "Risks", filename: "02-risks.ts", code: `// Any. — Risks
// Key idea: Risks

// Variation / example
const example_9_risks = /* typed value */ null;

// Usage in context
function demo_9_risks(input: unknown) {
  // apply Risks safely
  return input;
}

console.log(demo_9_risks(example_9_risks));`, output: `// Result / output (conceptual)
// - Risks applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Risks — understand syntax, typing, and a practical use." },
        { label: "noImplicitAny", filename: "03-noimplicitany.ts", code: `// Any. — noImplicitAny
// Key idea: noImplicitAny

// Variation / example
const example_9_noimplicitany = /* typed value */ null;

// Usage in context
function demo_9_noimplicitany(input: unknown) {
  // apply noImplicitAny safely
  return input;
}

console.log(demo_9_noimplicitany(example_9_noimplicitany));`, output: `// Result / output (conceptual)
// - noImplicitAny applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: noImplicitAny — understand syntax, typing, and a practical use." },
        { label: "Migration boundaries", filename: "04-migration-boundari.ts", code: `// Any. — Migration boundaries
// Key idea: Migration boundaries

// Variation / example
const example_9_migration_boundari = /* typed value */ null;

// Usage in context
function demo_9_migration_boundari(input: unknown) {
  // apply Migration boundaries safely
  return input;
}

console.log(demo_9_migration_boundari(example_9_migration_boundari));`, output: `// Result / output (conceptual)
// - Migration boundaries applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Migration boundaries — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Escape hatch", code: `// Example: Escape hatch
// Scenario: use this aspect of Any. in real code.

export function ex_9_1() {
  // implement Escape hatch
  return "Escape hatch";
}

console.log(ex_9_1());`, output: `Escape hatch`, note: "Practical example highlighting Escape hatch." },
        { title: "Risks", code: `// Example: Risks
// Scenario: use this aspect of Any. in real code.

export function ex_9_2() {
  // implement Risks
  return "Risks";
}

console.log(ex_9_2());`, output: `Risks`, note: "Practical example highlighting Risks." },
        { title: "noImplicitAny", code: `// Example: noImplicitAny
// Scenario: use this aspect of Any. in real code.

export function ex_9_3() {
  // implement noImplicitAny
  return "noImplicitAny";
}

console.log(ex_9_3());`, output: `noImplicitAny`, note: "Practical example highlighting noImplicitAny." },
        { title: "Migration boundaries", code: `// Example: Migration boundaries
// Scenario: use this aspect of Any. in real code.

export function ex_9_4() {
  // implement Migration boundaries
  return "Migration boundaries";
}

console.log(ex_9_4());`, output: `Migration boundaries`, note: "Practical example highlighting Migration boundaries." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Any.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Any.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Any.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Escape hatch, Risks, noImplicitAny)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Escape hatch",
        "Understand: Risks",
        "Understand: noImplicitAny",
        "Understand: Migration boundaries",
        "Can write and explain a typed example of Any.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Any. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
