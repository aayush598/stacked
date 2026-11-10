import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist } from "./shared/visuals";

export function TypeAnnotations31() {
  return (
    <div>
      <SectionHero
        title="Type annotations."
        subtitle="Quick-scan guide to Type annotations. in Basic Types: key ideas, highlighted syntax, code vs output, differences, and visual flow."
        chips={["Basic Types", "Section 1/30", "Type annotations."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Type annotations.</Highlight> explained with visuals and typed examples so you can grasp it quickly. Focus on <Highlight>syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code</Highlight> vs <Highlight>output</Highlight>, and <Highlight>safe patterns</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "SYNTAX", detail: "Syntax", tone: "lime" },
        { label: "VARIABLES", detail: "Variables", tone: "sky" },
        { label: "PARAMETERS", detail: "Parameters", tone: "violet" },
        { label: "PROPERTIES", detail: "Properties", tone: "coral" },
        { label: "RETURN", detail: "Return types", tone: "lime" },
        { label: "WHEN", detail: "When to annotate", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Type annotations. is and why it exists in Basic Types." },
        { label: "Syntax", note: "Core forms and valid TypeScript syntax." },
        { label: "Variations", note: "Different patterns/options and when each fits." },
        { label: "Example", note: "Typed code with clear input/output behavior." },
        { label: "Gotchas", note: "Edge cases, pitfalls, and safe best practices." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "Syntax", syntax: "Syntax pattern", note: "Use for syntax in Type annotations.." },
        { label: "Variables", syntax: "Variables pattern", note: "Use for variables in Type annotations.." },
        { label: "Parameters", syntax: "Parameters pattern", note: "Use for parameters in Type annotations.." },
        { label: "Properties", syntax: "Properties pattern", note: "Use for properties in Type annotations.." },
        { label: "Return types", syntax: "Return types pattern", note: "Use for return types in Type annotations.." },
        { label: "When to annotate", syntax: "When to annotate pattern", note: "Use for when to annotate in Type annotations.." },
      ]} />
      <Tabs items={[
        { label: "Syntax", filename: "01-syntax.ts", code: `// Type annotations. — Syntax
// Key idea: Syntax

// Variation / example
const example_1_syntax = /* typed value */ null;

// Usage in context
function demo_1_syntax(input: unknown) {
  // apply Syntax safely
  return input;
}

console.log(demo_1_syntax(example_1_syntax));`, output: `// Result / output (conceptual)
// - Syntax applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Syntax — understand syntax, typing, and a practical use." },
        { label: "Variables", filename: "02-variables.ts", code: `// Type annotations. — Variables
// Key idea: Variables

// Variation / example
const example_1_variables = /* typed value */ null;

// Usage in context
function demo_1_variables(input: unknown) {
  // apply Variables safely
  return input;
}

console.log(demo_1_variables(example_1_variables));`, output: `// Result / output (conceptual)
// - Variables applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Variables — understand syntax, typing, and a practical use." },
        { label: "Parameters", filename: "03-parameters.ts", code: `// Type annotations. — Parameters
// Key idea: Parameters

// Variation / example
const example_1_parameters = /* typed value */ null;

// Usage in context
function demo_1_parameters(input: unknown) {
  // apply Parameters safely
  return input;
}

console.log(demo_1_parameters(example_1_parameters));`, output: `// Result / output (conceptual)
// - Parameters applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Parameters — understand syntax, typing, and a practical use." },
        { label: "Properties", filename: "04-properties.ts", code: `// Type annotations. — Properties
// Key idea: Properties

// Variation / example
const example_1_properties = /* typed value */ null;

// Usage in context
function demo_1_properties(input: unknown) {
  // apply Properties safely
  return input;
}

console.log(demo_1_properties(example_1_properties));`, output: `// Result / output (conceptual)
// - Properties applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Properties — understand syntax, typing, and a practical use." },
        { label: "Return types", filename: "05-return-types.ts", code: `// Type annotations. — Return types
// Key idea: Return types

// Variation / example
const example_1_return_types = /* typed value */ null;

// Usage in context
function demo_1_return_types(input: unknown) {
  // apply Return types safely
  return input;
}

console.log(demo_1_return_types(example_1_return_types));`, output: `// Result / output (conceptual)
// - Return types applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: Return types — understand syntax, typing, and a practical use." },
        { label: "When to annotate", filename: "06-when-to-annotate.ts", code: `// Type annotations. — When to annotate
// Key idea: When to annotate

// Variation / example
const example_1_when_to_annotate = /* typed value */ null;

// Usage in context
function demo_1_when_to_annotate(input: unknown) {
  // apply When to annotate safely
  return input;
}

console.log(demo_1_when_to_annotate(example_1_when_to_annotate));`, output: `// Result / output (conceptual)
// - When to annotate applied correctly
// - types checked at compile time
// - clear, predictable behavior`, note: "Key point: When to annotate — understand syntax, typing, and a practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "Syntax", code: `// Example: Syntax
// Scenario: use this aspect of Type annotations. in real code.

export function ex_1_1() {
  // implement Syntax
  return "Syntax";
}

console.log(ex_1_1());`, output: `Syntax`, note: "Practical example highlighting Syntax." },
        { title: "Variables", code: `// Example: Variables
// Scenario: use this aspect of Type annotations. in real code.

export function ex_1_2() {
  // implement Variables
  return "Variables";
}

console.log(ex_1_2());`, output: `Variables`, note: "Practical example highlighting Variables." },
        { title: "Parameters", code: `// Example: Parameters
// Scenario: use this aspect of Type annotations. in real code.

export function ex_1_3() {
  // implement Parameters
  return "Parameters";
}

console.log(ex_1_3());`, output: `Parameters`, note: "Practical example highlighting Parameters." },
        { title: "Properties", code: `// Example: Properties
// Scenario: use this aspect of Type annotations. in real code.

export function ex_1_4() {
  // implement Properties
  return "Properties";
}

console.log(ex_1_4());`, output: `Properties`, note: "Practical example highlighting Properties." },
        { title: "Return types", code: `// Example: Return types
// Scenario: use this aspect of Type annotations. in real code.

export function ex_1_5() {
  // implement Return types
  return "Return types";
}

console.log(ex_1_5());`, output: `Return types`, note: "Practical example highlighting Return types." },
        { title: "When to annotate", code: `// Example: When to annotate
// Scenario: use this aspect of Type annotations. in real code.

export function ex_1_6() {
  // implement When to annotate
  return "When to annotate";
}

console.log(ex_1_6());`, output: `When to annotate`, note: "Practical example highlighting When to annotate." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / risky", code: `// ❌ Problematic: Type annotations.
let value: any = getInput();
value.doThing(); // unsafe, unclear, hides bugs
// Missing: proper types, validation, and clear intent`, output: `// Possible issues: runtime error, hidden bug, or weak typing`, note: "Harder to read, unsafe, or missing important checks/types." }}
        right={{ title: "Clear / type-safe", code: `// ✅ Better: Type annotations.
const value: unknown = getInput();
if (typeof value === "string") {
  console.log(value.toUpperCase());
} // explicit, type-safe, easy to scan`, output: `// Predictable output with safer, explicit behavior`, note: "Highlighted differences show safer, clearer TypeScript." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Type annotations.: definition and role in Basic Types." },
        { title: "Syntax", body: "Learn core syntax/forms and read them quickly." },
        { title: "Variations", body: "Know alternatives and patterns (Syntax, Variables, Parameters)." },
        { title: "Examples", body: "Practice multiple typed examples and inspect output/behavior." },
        { title: "Edge cases", body: "Handle null/undefined, inference limits, unions, and runtime boundaries." },
        { title: "Best practice", body: "Prefer explicit, safe, readable TypeScript over clever shortcuts." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>null/undefined</Highlight>, <Highlight>widening/narrowing</Highlight>, <Highlight>union handling</Highlight>, inference limits, and runtime vs compile-time behavior.</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted keywords, compare code vs output blocks, and practice the variations to learn fast.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: Syntax",
        "Understand: Variables",
        "Understand: Parameters",
        "Understand: Properties",
        "Understand: Return types",
        "Understand: When to annotate",
        "Can write and explain a typed example of Type annotations.."
      ]} />

      <NoteTakeaways items={[
        "Grasp Type annotations. fast via key points, visuals, and highlighted syntax.",
        "Study multiple code examples and separate code from output/results.",
        "Use safe variations and best practices; watch edge cases.",
      ]} />
    </div>
  );
}
