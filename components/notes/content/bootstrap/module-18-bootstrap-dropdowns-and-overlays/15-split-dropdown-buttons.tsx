import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist, ClassGallery, ClassVisualGrid } from "./shared/visuals";

export function SplitDropdownButtonsB1815() {
  return (
    <div>
      <SectionHero
        title="Split dropdown buttons."
        subtitle="Quick-scan guide to Split dropdown buttons. in Bootstrap dropdowns and overlays: key ideas, syntax/classes, variations, code vs visual output, and best practices."
        chips={["Bootstrap dropdowns and overlays", "Section 15/21", "Split dropdown buttons."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Split dropdown buttons.</Highlight> explained with visuals and examples. Focus on <Highlight>classes/syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code vs output</Highlight>, and <Highlight>accessibility</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "CORE", detail: "core concept of Split dropdown buttons.", tone: "violet" },
        { label: "SYNTAX/CLA", detail: "syntax/classes and structure", tone: "sky" },
        { label: "VARIATIONS", detail: "variations and options", tone: "lime" },
        { label: "PRACTICAL", detail: "practical example", tone: "coral" },
        { label: "EDGE", detail: "edge cases and accessibility", tone: "violet" },
        { label: "BEST", detail: "best practices", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Split dropdown buttons. is and why it matters in Bootstrap dropdowns and overlays." },
        { label: "Syntax", note: "Core Bootstrap classes/markup or API and correct structure." },
        { label: "Variations", note: "Options, responsive/modifier classes, and patterns." },
        { label: "Example", note: "Code with clear visual/output behavior." },
        { label: "Best use", note: "Accessibility, consistency, and production tips." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "core concept of Split dropdown buttons.", syntax: "Split dropdown buttons. — core concept of Split dropdown buttons.", note: "Apply core concept of Split dropdown buttons. for Split dropdown buttons.." },
        { label: "syntax/classes and structure", syntax: "Split dropdown buttons. — syntax/classes and structure", note: "Apply syntax/classes and structure for Split dropdown buttons.." },
        { label: "variations and options", syntax: "Split dropdown buttons. — variations and options", note: "Apply variations and options for Split dropdown buttons.." },
        { label: "practical example", syntax: "Split dropdown buttons. — practical example", note: "Apply practical example for Split dropdown buttons.." },
        { label: "edge cases and accessibility", syntax: "Split dropdown buttons. — edge cases and accessibility", note: "Apply edge cases and accessibility for Split dropdown buttons.." },
        { label: "best practices", syntax: "Split dropdown buttons. — best practices", note: "Apply best practices for Split dropdown buttons.." },
      ]} />
      <NoteHeading>Each class → its visual output</NoteHeading>
      <ClassVisualGrid title="Classname and visual (1 class = 1 visual)" classes={["container", "py-3", "p-3", "border", "rounded", "mb-1", "fw-semibold", "mb-0", "d-block", "dropdown", "and", "structure", "variations", "options", "practical", "example", "edge", "cases", "accessibility", "best", "practices"]} />

      <Tabs items={[
        { label: "core concept of Split dropdown buttons.", filename: "01-core-concept-of-sp.html", code: `<!-- Split dropdown buttons.: core concept of Split dropdown buttons. -->
<div class="container py-3">
  <!-- Key idea: core concept of Split dropdown buttons. -->
  <div class="example-core_concept_of_">Example for Split dropdown buttons.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: core concept of Split dropdown buttons. applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: core concept of Split dropdown buttons. — syntax, variation, and practical use." },
        { label: "syntax/classes and structure", filename: "02-syntax-classes-and.html", code: `<!-- Split dropdown buttons.: syntax/classes and structure -->
<div class="container py-3">
  <!-- Key idea: syntax/classes and structure -->
  <div class="example-syntax_classes_a">Example for Split dropdown buttons.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: syntax/classes and structure applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: syntax/classes and structure — syntax, variation, and practical use." },
        { label: "variations and options", filename: "03-variations-and-opt.html", code: `<!-- Split dropdown buttons.: variations and options -->
<div class="container py-3">
  <!-- Key idea: variations and options -->
  <div class="example-variations_and_o">Example for Split dropdown buttons.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: variations and options applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: variations and options — syntax, variation, and practical use." },
        { label: "practical example", filename: "04-practical-example.html", code: `<!-- Split dropdown buttons.: practical example -->
<div class="container py-3">
  <!-- Key idea: practical example -->
  <div class="example-practical_exampl">Example for Split dropdown buttons.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: practical example applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: practical example — syntax, variation, and practical use." },
        { label: "edge cases and accessibility", filename: "05-edge-cases-and-acc.html", code: `<!-- Split dropdown buttons.: edge cases and accessibility -->
<div class="container py-3">
  <!-- Key idea: edge cases and accessibility -->
  <div class="example-edge_cases_and_a">Example for Split dropdown buttons.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: edge cases and accessibility applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: edge cases and accessibility — syntax, variation, and practical use." },
        { label: "best practices", filename: "06-best-practices.html", code: `<!-- Split dropdown buttons.: best practices -->
<div class="container py-3">
  <!-- Key idea: best practices -->
  <div class="example-best_practices">Example for Split dropdown buttons.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: best practices applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: best practices — syntax, variation, and practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "core concept of Split dropdown buttons.", code: `<!-- Example: core concept of Split dropdown buttons. -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Split dropdown buttons.</p>
  <p class="mb-0">core concept of Split dropdown buttons.</p>
</div>`, output: `Result: demonstrates core concept of Split dropdown buttons. clearly.`, note: "Practical example for core concept of Split dropdown buttons.." },
        { title: "syntax/classes and structure", code: `<!-- Example: syntax/classes and structure -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Split dropdown buttons.</p>
  <p class="mb-0">syntax/classes and structure</p>
</div>`, output: `Result: demonstrates syntax/classes and structure clearly.`, note: "Practical example for syntax/classes and structure." },
        { title: "variations and options", code: `<!-- Example: variations and options -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Split dropdown buttons.</p>
  <p class="mb-0">variations and options</p>
</div>`, output: `Result: demonstrates variations and options clearly.`, note: "Practical example for variations and options." },
        { title: "practical example", code: `<!-- Example: practical example -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Split dropdown buttons.</p>
  <p class="mb-0">practical example</p>
</div>`, output: `Result: demonstrates practical example clearly.`, note: "Practical example for practical example." },
        { title: "edge cases and accessibility", code: `<!-- Example: edge cases and accessibility -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Split dropdown buttons.</p>
  <p class="mb-0">edge cases and accessibility</p>
</div>`, output: `Result: demonstrates edge cases and accessibility clearly.`, note: "Practical example for edge cases and accessibility." },
        { title: "best practices", code: `<!-- Example: best practices -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Split dropdown buttons.</p>
  <p class="mb-0">best practices</p>
</div>`, output: `Result: demonstrates best practices clearly.`, note: "Practical example for best practices." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / inconsistent", code: `<!-- ❌ Problematic: Split dropdown buttons. -->
<div>
  <!-- inconsistent classes, missing responsive/accessibility considerations -->
  <span>Content</span>
</div>`, output: `Issues: unclear structure, weak responsiveness/accessibility, or inconsistent styling.`, note: "Harder to maintain and can break behavior." }}
        right={{ title: "Clear / Bootstrap-correct", code: `<!-- ✅ Better: Split dropdown buttons. -->
<div class="container py-3">
  <!-- clear Bootstrap structure/classes, responsive and accessible -->
  <span class="d-block">Content</span>
</div>`, output: `Predictable, responsive, accessible result with consistent Bootstrap usage.`, note: "Highlighted differences show the recommended approach." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Split dropdown buttons.: definition and role in Bootstrap dropdowns and overlays." },
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
        "Understand: core concept of Split dropdown buttons.",
        "Understand: syntax/classes and structure",
        "Understand: variations and options",
        "Understand: practical example",
        "Understand: edge cases and accessibility",
        "Understand: best practices",
        "Can build and explain a correct example of Split dropdown buttons.."
      ]} />

      <NoteTakeaways items={[
        "Understand Split dropdown buttons. via key points, syntax/classes, and visual behavior.",
        "Use correct variations and responsive patterns with clear code and output.",
        "Apply accessible, maintainable Bootstrap best practices.",
      ]} />
    </div>
  );
}
