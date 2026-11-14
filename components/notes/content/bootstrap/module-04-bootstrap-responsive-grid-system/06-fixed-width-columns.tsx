import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist, ClassGallery, ClassVisualGrid } from "./shared/visuals";

export function FixedWidthColumnsB46() {
  return (
    <div>
      <SectionHero
        title="Fixed-width columns."
        subtitle="Quick-scan guide to Fixed-width columns. in Bootstrap responsive grid system: key ideas, syntax/classes, variations, code vs visual output, and best practices."
        chips={["Bootstrap responsive grid system", "Section 6/32", "Fixed-width columns."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Fixed-width columns.</Highlight> explained with visuals and examples. Focus on <Highlight>classes/syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code vs output</Highlight>, and <Highlight>accessibility</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "CORE", detail: "core concept of Fixed-width columns.", tone: "violet" },
        { label: "SYNTAX/CLA", detail: "syntax/classes and structure", tone: "sky" },
        { label: "VARIATIONS", detail: "variations and options", tone: "lime" },
        { label: "PRACTICAL", detail: "practical example", tone: "coral" },
        { label: "EDGE", detail: "edge cases and accessibility", tone: "violet" },
        { label: "BEST", detail: "best practices", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Fixed-width columns. is and why it matters in Bootstrap responsive grid system." },
        { label: "Syntax", note: "Core Bootstrap classes/markup or API and correct structure." },
        { label: "Variations", note: "Options, responsive/modifier classes, and patterns." },
        { label: "Example", note: "Code with clear visual/output behavior." },
        { label: "Best use", note: "Accessibility, consistency, and production tips." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "core concept of Fixed-width columns.", syntax: "Fixed-width columns. — core concept of Fixed-width columns.", note: "Apply core concept of Fixed-width columns. for Fixed-width columns.." },
        { label: "syntax/classes and structure", syntax: "Fixed-width columns. — syntax/classes and structure", note: "Apply syntax/classes and structure for Fixed-width columns.." },
        { label: "variations and options", syntax: "Fixed-width columns. — variations and options", note: "Apply variations and options for Fixed-width columns.." },
        { label: "practical example", syntax: "Fixed-width columns. — practical example", note: "Apply practical example for Fixed-width columns.." },
        { label: "edge cases and accessibility", syntax: "Fixed-width columns. — edge cases and accessibility", note: "Apply edge cases and accessibility for Fixed-width columns.." },
        { label: "best practices", syntax: "Fixed-width columns. — best practices", note: "Apply best practices for Fixed-width columns.." },
      ]} />
      <NoteHeading>Each class → its visual output</NoteHeading>
      <ClassVisualGrid title="Classname and visual (1 class = 1 visual)" classes={["container", "py-3", "p-3", "border", "rounded", "mb-1", "fw-semibold", "mb-0", "d-block", "and", "structure", "variations", "options", "practical", "example", "edge", "cases", "accessibility", "best", "practices"]} />

      <Tabs items={[
        { label: "core concept of Fixed-width columns.", filename: "01-core-concept-of-fi.html", code: `<!-- Fixed-width columns.: core concept of Fixed-width columns. -->
<div class="container py-3">
  <!-- Key idea: core concept of Fixed-width columns. -->
  <div class="example-core_concept_of_">Example for Fixed-width columns.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: core concept of Fixed-width columns. applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: core concept of Fixed-width columns. — syntax, variation, and practical use." },
        { label: "syntax/classes and structure", filename: "02-syntax-classes-and.html", code: `<!-- Fixed-width columns.: syntax/classes and structure -->
<div class="container py-3">
  <!-- Key idea: syntax/classes and structure -->
  <div class="example-syntax_classes_a">Example for Fixed-width columns.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: syntax/classes and structure applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: syntax/classes and structure — syntax, variation, and practical use." },
        { label: "variations and options", filename: "03-variations-and-opt.html", code: `<!-- Fixed-width columns.: variations and options -->
<div class="container py-3">
  <!-- Key idea: variations and options -->
  <div class="example-variations_and_o">Example for Fixed-width columns.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: variations and options applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: variations and options — syntax, variation, and practical use." },
        { label: "practical example", filename: "04-practical-example.html", code: `<!-- Fixed-width columns.: practical example -->
<div class="container py-3">
  <!-- Key idea: practical example -->
  <div class="example-practical_exampl">Example for Fixed-width columns.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: practical example applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: practical example — syntax, variation, and practical use." },
        { label: "edge cases and accessibility", filename: "05-edge-cases-and-acc.html", code: `<!-- Fixed-width columns.: edge cases and accessibility -->
<div class="container py-3">
  <!-- Key idea: edge cases and accessibility -->
  <div class="example-edge_cases_and_a">Example for Fixed-width columns.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: edge cases and accessibility applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: edge cases and accessibility — syntax, variation, and practical use." },
        { label: "best practices", filename: "06-best-practices.html", code: `<!-- Fixed-width columns.: best practices -->
<div class="container py-3">
  <!-- Key idea: best practices -->
  <div class="example-best_practices">Example for Fixed-width columns.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: best practices applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: best practices — syntax, variation, and practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "core concept of Fixed-width columns.", code: `<!-- Example: core concept of Fixed-width columns. -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Fixed-width columns.</p>
  <p class="mb-0">core concept of Fixed-width columns.</p>
</div>`, output: `Result: demonstrates core concept of Fixed-width columns. clearly.`, note: "Practical example for core concept of Fixed-width columns.." },
        { title: "syntax/classes and structure", code: `<!-- Example: syntax/classes and structure -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Fixed-width columns.</p>
  <p class="mb-0">syntax/classes and structure</p>
</div>`, output: `Result: demonstrates syntax/classes and structure clearly.`, note: "Practical example for syntax/classes and structure." },
        { title: "variations and options", code: `<!-- Example: variations and options -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Fixed-width columns.</p>
  <p class="mb-0">variations and options</p>
</div>`, output: `Result: demonstrates variations and options clearly.`, note: "Practical example for variations and options." },
        { title: "practical example", code: `<!-- Example: practical example -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Fixed-width columns.</p>
  <p class="mb-0">practical example</p>
</div>`, output: `Result: demonstrates practical example clearly.`, note: "Practical example for practical example." },
        { title: "edge cases and accessibility", code: `<!-- Example: edge cases and accessibility -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Fixed-width columns.</p>
  <p class="mb-0">edge cases and accessibility</p>
</div>`, output: `Result: demonstrates edge cases and accessibility clearly.`, note: "Practical example for edge cases and accessibility." },
        { title: "best practices", code: `<!-- Example: best practices -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Fixed-width columns.</p>
  <p class="mb-0">best practices</p>
</div>`, output: `Result: demonstrates best practices clearly.`, note: "Practical example for best practices." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / inconsistent", code: `<!-- ❌ Problematic: Fixed-width columns. -->
<div>
  <!-- inconsistent classes, missing responsive/accessibility considerations -->
  <span>Content</span>
</div>`, output: `Issues: unclear structure, weak responsiveness/accessibility, or inconsistent styling.`, note: "Harder to maintain and can break behavior." }}
        right={{ title: "Clear / Bootstrap-correct", code: `<!-- ✅ Better: Fixed-width columns. -->
<div class="container py-3">
  <!-- clear Bootstrap structure/classes, responsive and accessible -->
  <span class="d-block">Content</span>
</div>`, output: `Predictable, responsive, accessible result with consistent Bootstrap usage.`, note: "Highlighted differences show the recommended approach." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Fixed-width columns.: definition and role in Bootstrap responsive grid system." },
        { title: "Syntax/classes", body: "Core markup/classes or API with correct structure." },
        { title: "Variations", body: "Responsive options, modifiers, and alternative patterns." },
        { title: "Examples", body: "Multiple practical examples with visual/output behavior." },
        { title: "Accessibility", body: "Semantics, keyboard/focus/ARIA and contrast where relevant." },
        { title: "Best practice", body: "Consistent, maintainable, production-ready usage." },
      ]} />
      <NoteCallout tone="warning">Edge cases: <Highlight>breakpoints</Highlight>, specificity/overrides, nesting, component state/JS behavior, and accessibility (focus/ARIA/contrast).</NoteCallout>
      <NoteCallout tone="tip">Scan highlighted classes/syntax, compare code vs visual output, and prefer consistent, responsive, accessible patterns.</NoteCallout>

      <NoteHeading>Quick checklist</NoteHeading>
      <Checklist items={[
        "Understand: core concept of Fixed-width columns.",
        "Understand: syntax/classes and structure",
        "Understand: variations and options",
        "Understand: practical example",
        "Understand: edge cases and accessibility",
        "Understand: best practices",
        "Can build and explain a correct example of Fixed-width columns.."
      ]} />

      <NoteTakeaways items={[
        "Understand Fixed-width columns. via key points, syntax/classes, and visual behavior.",
        "Use correct variations and responsive patterns with clear code and output.",
        "Apply accessible, maintainable Bootstrap best practices.",
      ]} />
    </div>
  );
}
