import { NoteCallout, NoteHeading, NoteTakeaways, NoteText, Highlight } from "@/components/notes/note-blocks";
import { SectionHero, KeyPoints, AnimatedFlow, Tabs, ComparePanels, RuleGrid, SyntaxMatrix, CodeCards, Checklist, ClassGallery, ClassVisualGrid } from "./shared/visuals";

export function AlternativeTextConventionsB1216() {
  return (
    <div>
      <SectionHero
        title="Alternative text conventions."
        subtitle="Quick-scan guide to Alternative text conventions. in Bootstrap images, figures, and media: key ideas, syntax/classes, variations, code vs visual output, and best practices."
        chips={["Bootstrap images, figures, and media", "Section 16/18", "Alternative text conventions."]}
      />

      <NoteHeading>Key points (scan fast)</NoteHeading>
      <NoteText>
        <Highlight>Alternative text conventions.</Highlight> explained with visuals and examples. Focus on <Highlight>classes/syntax</Highlight>, <Highlight>variations</Highlight>, <Highlight>code vs output</Highlight>, and <Highlight>accessibility</Highlight>.
      </NoteText>
      <KeyPoints items={[
        { label: "CORE", detail: "core concept of Alternative text conventions.", tone: "violet" },
        { label: "SYNTAX/CLA", detail: "syntax/classes and structure", tone: "sky" },
        { label: "VARIATIONS", detail: "variations and options", tone: "lime" },
        { label: "PRACTICAL", detail: "practical example", tone: "coral" },
        { label: "EDGE", detail: "edge cases and accessibility", tone: "violet" },
        { label: "BEST", detail: "best practices", tone: "sky" }
      ]} />

      <AnimatedFlow steps={[
        { label: "Idea", note: "What Alternative text conventions. is and why it matters in Bootstrap images, figures, and media." },
        { label: "Syntax", note: "Core Bootstrap classes/markup or API and correct structure." },
        { label: "Variations", note: "Options, responsive/modifier classes, and patterns." },
        { label: "Example", note: "Code with clear visual/output behavior." },
        { label: "Best use", note: "Accessibility, consistency, and production tips." },
      ]} />

      <NoteHeading>Syntax, variations & highlighted examples</NoteHeading>
      <SyntaxMatrix rows={[
        { label: "core concept of Alternative text conventions.", syntax: "Alternative text conventions. — core concept of Alternative text conventions.", note: "Apply core concept of Alternative text conventions. for Alternative text conventions.." },
        { label: "syntax/classes and structure", syntax: "Alternative text conventions. — syntax/classes and structure", note: "Apply syntax/classes and structure for Alternative text conventions.." },
        { label: "variations and options", syntax: "Alternative text conventions. — variations and options", note: "Apply variations and options for Alternative text conventions.." },
        { label: "practical example", syntax: "Alternative text conventions. — practical example", note: "Apply practical example for Alternative text conventions.." },
        { label: "edge cases and accessibility", syntax: "Alternative text conventions. — edge cases and accessibility", note: "Apply edge cases and accessibility for Alternative text conventions.." },
        { label: "best practices", syntax: "Alternative text conventions. — best practices", note: "Apply best practices for Alternative text conventions.." },
      ]} />
      <NoteHeading>Each class → its visual output</NoteHeading>
      <ClassVisualGrid title="Classname and visual (1 class = 1 visual)" classes={["container", "py-3", "p-3", "border", "rounded", "mb-1", "fw-semibold", "mb-0", "d-block", "text", "and", "structure", "variations", "options", "practical", "example", "edge", "cases", "accessibility", "best", "practices"]} />

      <Tabs items={[
        { label: "core concept of Alternative text conventions.", filename: "01-core-concept-of-al.html", code: `<!-- Alternative text conventions.: core concept of Alternative text conventions. -->
<div class="container py-3">
  <!-- Key idea: core concept of Alternative text conventions. -->
  <div class="example-core_concept_of_">Example for Alternative text conventions.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: core concept of Alternative text conventions. applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: core concept of Alternative text conventions. — syntax, variation, and practical use." },
        { label: "syntax/classes and structure", filename: "02-syntax-classes-and.html", code: `<!-- Alternative text conventions.: syntax/classes and structure -->
<div class="container py-3">
  <!-- Key idea: syntax/classes and structure -->
  <div class="example-syntax_classes_a">Example for Alternative text conventions.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: syntax/classes and structure applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: syntax/classes and structure — syntax, variation, and practical use." },
        { label: "variations and options", filename: "03-variations-and-opt.html", code: `<!-- Alternative text conventions.: variations and options -->
<div class="container py-3">
  <!-- Key idea: variations and options -->
  <div class="example-variations_and_o">Example for Alternative text conventions.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: variations and options applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: variations and options — syntax, variation, and practical use." },
        { label: "practical example", filename: "04-practical-example.html", code: `<!-- Alternative text conventions.: practical example -->
<div class="container py-3">
  <!-- Key idea: practical example -->
  <div class="example-practical_exampl">Example for Alternative text conventions.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: practical example applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: practical example — syntax, variation, and practical use." },
        { label: "edge cases and accessibility", filename: "05-edge-cases-and-acc.html", code: `<!-- Alternative text conventions.: edge cases and accessibility -->
<div class="container py-3">
  <!-- Key idea: edge cases and accessibility -->
  <div class="example-edge_cases_and_a">Example for Alternative text conventions.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: edge cases and accessibility applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: edge cases and accessibility — syntax, variation, and practical use." },
        { label: "best practices", filename: "06-best-practices.html", code: `<!-- Alternative text conventions.: best practices -->
<div class="container py-3">
  <!-- Key idea: best practices -->
  <div class="example-best_practices">Example for Alternative text conventions.</div>
  <!-- Use Bootstrap classes/structure appropriate to this concept -->
</div>`, output: `Visual/output: best practices applied — layout/behavior updates as expected (responsive, accessible).`, note: "Key point: best practices — syntax, variation, and practical use." },
      ]} />

      <NoteHeading>More code examples (with output)</NoteHeading>
      <CodeCards items={[
        { title: "core concept of Alternative text conventions.", code: `<!-- Example: core concept of Alternative text conventions. -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Alternative text conventions.</p>
  <p class="mb-0">core concept of Alternative text conventions.</p>
</div>`, output: `Result: demonstrates core concept of Alternative text conventions. clearly.`, note: "Practical example for core concept of Alternative text conventions.." },
        { title: "syntax/classes and structure", code: `<!-- Example: syntax/classes and structure -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Alternative text conventions.</p>
  <p class="mb-0">syntax/classes and structure</p>
</div>`, output: `Result: demonstrates syntax/classes and structure clearly.`, note: "Practical example for syntax/classes and structure." },
        { title: "variations and options", code: `<!-- Example: variations and options -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Alternative text conventions.</p>
  <p class="mb-0">variations and options</p>
</div>`, output: `Result: demonstrates variations and options clearly.`, note: "Practical example for variations and options." },
        { title: "practical example", code: `<!-- Example: practical example -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Alternative text conventions.</p>
  <p class="mb-0">practical example</p>
</div>`, output: `Result: demonstrates practical example clearly.`, note: "Practical example for practical example." },
        { title: "edge cases and accessibility", code: `<!-- Example: edge cases and accessibility -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Alternative text conventions.</p>
  <p class="mb-0">edge cases and accessibility</p>
</div>`, output: `Result: demonstrates edge cases and accessibility clearly.`, note: "Practical example for edge cases and accessibility." },
        { title: "best practices", code: `<!-- Example: best practices -->
<div class="p-3 border rounded">
  <p class="mb-1 fw-semibold">Alternative text conventions.</p>
  <p class="mb-0">best practices</p>
</div>`, output: `Result: demonstrates best practices clearly.`, note: "Practical example for best practices." },
      ]} />

      <NoteHeading>Difference: problematic vs better (highlighted)</NoteHeading>
      <ComparePanels
        left={{ title: "Problematic / inconsistent", code: `<!-- ❌ Problematic: Alternative text conventions. -->
<div>
  <!-- inconsistent classes, missing responsive/accessibility considerations -->
  <span>Content</span>
</div>`, output: `Issues: unclear structure, weak responsiveness/accessibility, or inconsistent styling.`, note: "Harder to maintain and can break behavior." }}
        right={{ title: "Clear / Bootstrap-correct", code: `<!-- ✅ Better: Alternative text conventions. -->
<div class="container py-3">
  <!-- clear Bootstrap structure/classes, responsive and accessible -->
  <span class="d-block">Content</span>
</div>`, output: `Predictable, responsive, accessible result with consistent Bootstrap usage.`, note: "Highlighted differences show the recommended approach." }}
      />

      <NoteHeading>Rules, edge cases & best practices</NoteHeading>
      <RuleGrid rules={[
        { title: "What", body: "Alternative text conventions.: definition and role in Bootstrap images, figures, and media." },
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
        "Understand: core concept of Alternative text conventions.",
        "Understand: syntax/classes and structure",
        "Understand: variations and options",
        "Understand: practical example",
        "Understand: edge cases and accessibility",
        "Understand: best practices",
        "Can build and explain a correct example of Alternative text conventions.."
      ]} />

      <NoteTakeaways items={[
        "Understand Alternative text conventions. via key points, syntax/classes, and visual behavior.",
        "Use correct variations and responsive patterns with clear code and output.",
        "Apply accessible, maintainable Bootstrap best practices.",
      ]} />
    </div>
  );
}
