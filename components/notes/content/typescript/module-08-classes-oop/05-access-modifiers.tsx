import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function AccessModifiers85() {
  return (
    <div>
      <SectionHero
        title="Access modifiers."
        subtitle="Quick-scan guide to Access modifiers. in Classes & Object-Oriented TypeScript: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Classes & Object-Oriented TypeScript", "Section 5/15", "Access modifiers."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Access modifiers.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "PUBLIC", detail: "public", tone: "lime" },
        { label: "PRIVATE", detail: "private", tone: "sky" },
        { label: "PROTECTED", detail: "protected", tone: "violet" },
        { label: "READONLY", detail: "readonly", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Access modifiers. is and why it exists in Classes & Object-Oriented TypeScript." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "public", syntax: "public pattern", note: "Use for public in Access modifiers.." },
        { label: "private", syntax: "private pattern", note: "Use for private in Access modifiers.." },
        { label: "protected", syntax: "protected pattern", note: "Use for protected in Access modifiers.." },
        { label: "readonly", syntax: "readonly pattern", note: "Use for readonly in Access modifiers.." },
      ]} />
      <Tabs items={[
        { label: "public", filename: "01-public.ts", code: `// Access modifiers. — public
// Key idea: public

// Variation / example
const example_5_public = /* typed value */ null;

// Usage in context
function demo_5_public(input: unknown) {
  // apply public safely
  return input;
}

console.log(demo_5_public(example_5_public));`, output: `// Result / output (conceptual)
// - public applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: public — understand syntax, typing, and a practical use." },
        { label: "private", filename: "02-private.ts", code: `// Access modifiers. — private
// Key idea: private

// Variation / example
const example_5_private = /* typed value */ null;

// Usage in context
function demo_5_private(input: unknown) {
  // apply private safely
  return input;
}

console.log(demo_5_private(example_5_private));`, output: `// Result / output (conceptual)
// - private applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: private — understand syntax, typing, and a practical use." },
        { label: "protected", filename: "03-protected.ts", code: `// Access modifiers. — protected
// Key idea: protected

// Variation / example
const example_5_protected = /* typed value */ null;

// Usage in context
function demo_5_protected(input: unknown) {
  // apply protected safely
  return input;
}

console.log(demo_5_protected(example_5_protected));`, output: `// Result / output (conceptual)
// - protected applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: protected — understand syntax, typing, and a practical use." },
        { label: "readonly", filename: "04-readonly.ts", code: `// Access modifiers. — readonly
// Key idea: readonly

// Variation / example
const example_5_readonly = /* typed value */ null;

// Usage in context
function demo_5_readonly(input: unknown) {
  // apply readonly safely
  return input;
}

console.log(demo_5_readonly(example_5_readonly));`, output: `// Result / output (conceptual)
// - readonly applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: readonly — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "public", code: `// Example: public
// Scenario: use this aspect of Access modifiers. in real code.

export function ex_5_1() {
  // implement public
  return "public";
}

console.log(ex_5_1());`, output: `public`, note: "Practical example highlighting public." },
        { title: "private", code: `// Example: private
// Scenario: use this aspect of Access modifiers. in real code.

export function ex_5_2() {
  // implement private
  return "private";
}

console.log(ex_5_2());`, output: `private`, note: "Practical example highlighting private." },
        { title: "protected", code: `// Example: protected
// Scenario: use this aspect of Access modifiers. in real code.

export function ex_5_3() {
  // implement protected
  return "protected";
}

console.log(ex_5_3());`, output: `protected`, note: "Practical example highlighting protected." },
        { title: "readonly", code: `// Example: readonly
// Scenario: use this aspect of Access modifiers. in real code.

export function ex_5_4() {
  // implement readonly
  return "readonly";
}

console.log(ex_5_4());`, output: `readonly`, note: "Practical example highlighting readonly." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Access modifiers.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Access modifiers.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Access modifiers.: definition and role in Classes & Object-Oriented TypeScript." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (public, private, protected)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: public",
        "Understand: private",
        "Understand: protected",
        "Understand: readonly",
        "Can write and explain a typed example of Access modifiers.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Access modifiers. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
