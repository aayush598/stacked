import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function StringLiteralTypes314() {
  return (
    <div>
      <SectionHero
        title="String literal types."
        subtitle="Quick-scan guide to String literal types. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 14/30", "String literal types."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>String literal types.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "ROLES", detail: "Roles", tone: "lime" },
        { label: "HTTP", detail: "HTTP methods", tone: "sky" },
        { label: "DISCRIMINA", detail: "Discriminants", tone: "violet" },
        { label: "TEMPLATE", detail: "Template literals preview", tone: "coral" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What String literal types. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Roles", syntax: "Roles pattern", note: "Use for roles in String literal types.." },
        { label: "HTTP methods", syntax: "HTTP methods pattern", note: "Use for http methods in String literal types.." },
        { label: "Discriminants", syntax: "Discriminants pattern", note: "Use for discriminants in String literal types.." },
        { label: "Template literals preview", syntax: "Template literals preview pattern", note: "Use for template literals preview in String literal types.." },
      ]} />
      <Tabs items={[
        { label: "Roles", filename: "01-roles.ts", code: `// String literal types. — Roles
// Key idea: Roles

// Variation / example
const example_14_roles = /* typed value */ null;

// Usage in context
function demo_14_roles(input: unknown) {
  // apply Roles safely
  return input;
}

console.log(demo_14_roles(example_14_roles));`, output: `// Result / output (conceptual)
// - Roles applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Roles — understand syntax, typing, and a practical use." },
        { label: "HTTP methods", filename: "02-http-methods.ts", code: `// String literal types. — HTTP methods
// Key idea: HTTP methods

// Variation / example
const example_14_http_methods = /* typed value */ null;

// Usage in context
function demo_14_http_methods(input: unknown) {
  // apply HTTP methods safely
  return input;
}

console.log(demo_14_http_methods(example_14_http_methods));`, output: `// Result / output (conceptual)
// - HTTP methods applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: HTTP methods — understand syntax, typing, and a practical use." },
        { label: "Discriminants", filename: "03-discriminants.ts", code: `// String literal types. — Discriminants
// Key idea: Discriminants

// Variation / example
const example_14_discriminants = /* typed value */ null;

// Usage in context
function demo_14_discriminants(input: unknown) {
  // apply Discriminants safely
  return input;
}

console.log(demo_14_discriminants(example_14_discriminants));`, output: `// Result / output (conceptual)
// - Discriminants applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Discriminants — understand syntax, typing, and a practical use." },
        { label: "Template literals preview", filename: "04-template-literals-.ts", code: `// String literal types. — Template literals preview
// Key idea: Template literals preview

// Variation / example
const example_14_template_literals_ = /* typed value */ null;

// Usage in context
function demo_14_template_literals_(input: unknown) {
  // apply Template literals preview safely
  return input;
}

console.log(demo_14_template_literals_(example_14_template_literals_));`, output: `// Result / output (conceptual)
// - Template literals preview applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Template literals preview — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Roles", code: `// Example: Roles
// Scenario: use this aspect of String literal types. in real code.

export function ex_14_1() {
  // implement Roles
  return "Roles";
}

console.log(ex_14_1());`, output: `Roles`, note: "Practical example highlighting Roles." },
        { title: "HTTP methods", code: `// Example: HTTP methods
// Scenario: use this aspect of String literal types. in real code.

export function ex_14_2() {
  // implement HTTP methods
  return "HTTP methods";
}

console.log(ex_14_2());`, output: `HTTP methods`, note: "Practical example highlighting HTTP methods." },
        { title: "Discriminants", code: `// Example: Discriminants
// Scenario: use this aspect of String literal types. in real code.

export function ex_14_3() {
  // implement Discriminants
  return "Discriminants";
}

console.log(ex_14_3());`, output: `Discriminants`, note: "Practical example highlighting Discriminants." },
        { title: "Template literals preview", code: `// Example: Template literals preview
// Scenario: use this aspect of String literal types. in real code.

export function ex_14_4() {
  // implement Template literals preview
  return "Template literals preview";
}

console.log(ex_14_4());`, output: `Template literals preview`, note: "Practical example highlighting Template literals preview." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: String literal types.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: String literal types.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "String literal types.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Roles, HTTP methods, Discriminants)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Roles",
        "Understand: HTTP methods",
        "Understand: Discriminants",
        "Understand: Template literals preview",
        "Can write and explain a typed example of String literal types.."
      ]} />

      <NoteTakeaways items={[
        "Grasp String literal types. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
