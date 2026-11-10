import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function Null35() {
  return (
    <div>
      <SectionHero
        title="Null."
        subtitle="Quick-scan guide to Null. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 5/30", "Null."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Null.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "INTENTIONA", detail: "Intentional absence", tone: "lime" },
        { label: "STRICTNULL", detail: "strictNullChecks", tone: "sky" },
        { label: "NULLABLE", detail: "Nullable unions", tone: "violet" },
        { label: "??", detail: "?? and ?.", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Null. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Intentional absence", syntax: "Intentional absence pattern", note: "Use for intentional absence in Null.." },
        { label: "strictNullChecks", syntax: "strictNullChecks pattern", note: "Use for strictnullchecks in Null.." },
        { label: "Nullable unions", syntax: "Nullable unions pattern", note: "Use for nullable unions in Null.." },
        { label: "?? and ?.", syntax: "?? and ?. pattern", note: "Use for ?? and ?. in Null.." },
      ]} />
      <Tabs items={[
        { label: "Intentional absence", filename: "01-intentional-absenc.ts", code: `// Null. — Intentional absence
// Key idea: Intentional absence

// Variation / example
const example_5_intentional_absenc = /* typed value */ null;

// Usage in context
function demo_5_intentional_absenc(input: unknown) {
  // apply Intentional absence safely
  return input;
}

console.log(demo_5_intentional_absenc(example_5_intentional_absenc));`, output: `// Result / output (conceptual)
// - Intentional absence applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Intentional absence — understand syntax, typing, and a practical use." },
        { label: "strictNullChecks", filename: "02-strictnullchecks.ts", code: `// Null. — strictNullChecks
// Key idea: strictNullChecks

// Variation / example
const example_5_strictnullchecks = /* typed value */ null;

// Usage in context
function demo_5_strictnullchecks(input: unknown) {
  // apply strictNullChecks safely
  return input;
}

console.log(demo_5_strictnullchecks(example_5_strictnullchecks));`, output: `// Result / output (conceptual)
// - strictNullChecks applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: strictNullChecks — understand syntax, typing, and a practical use." },
        { label: "Nullable unions", filename: "03-nullable-unions.ts", code: `// Null. — Nullable unions
// Key idea: Nullable unions

// Variation / example
const example_5_nullable_unions = /* typed value */ null;

// Usage in context
function demo_5_nullable_unions(input: unknown) {
  // apply Nullable unions safely
  return input;
}

console.log(demo_5_nullable_unions(example_5_nullable_unions));`, output: `// Result / output (conceptual)
// - Nullable unions applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Nullable unions — understand syntax, typing, and a practical use." },
        { label: "?? and ?.", filename: "04-and.ts", code: `// Null. — ?? and ?.
// Key idea: ?? and ?.

// Variation / example
const example_5_and = /* typed value */ null;

// Usage in context
function demo_5_and(input: unknown) {
  // apply ?? and ?. safely
  return input;
}

console.log(demo_5_and(example_5_and));`, output: `// Result / output (conceptual)
// - ?? and ?. applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: ?? and ?. — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Intentional absence", code: `// Example: Intentional absence
// Scenario: use this aspect of Null. in real code.

export function ex_5_1() {
  // implement Intentional absence
  return "Intentional absence";
}

console.log(ex_5_1());`, output: `Intentional absence`, note: "Practical example highlighting Intentional absence." },
        { title: "strictNullChecks", code: `// Example: strictNullChecks
// Scenario: use this aspect of Null. in real code.

export function ex_5_2() {
  // implement strictNullChecks
  return "strictNullChecks";
}

console.log(ex_5_2());`, output: `strictNullChecks`, note: "Practical example highlighting strictNullChecks." },
        { title: "Nullable unions", code: `// Example: Nullable unions
// Scenario: use this aspect of Null. in real code.

export function ex_5_3() {
  // implement Nullable unions
  return "Nullable unions";
}

console.log(ex_5_3());`, output: `Nullable unions`, note: "Practical example highlighting Nullable unions." },
        { title: "?? and ?.", code: `// Example: ?? and ?.
// Scenario: use this aspect of Null. in real code.

export function ex_5_4() {
  // implement ?? and ?.
  return "?? and ?.";
}

console.log(ex_5_4());`, output: `?? and ?.`, note: "Practical example highlighting ?? and ?.." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Null.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Null.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Null.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Intentional absence, strictNullChecks, Nullable unions)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Intentional absence",
        "Understand: strictNullChecks",
        "Understand: Nullable unions",
        "Understand: ?? and ?.",
        "Can write and explain a typed example of Null.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Null. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
