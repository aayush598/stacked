import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxLimitationsR3S22() {
  return (
    <div>
      <SectionHero
        title="JSX Limitations"
        subtitle="JSX is powerful syntax sugar, but it has rules and boundaries. Knowing its limitations — syntax constraints, runtime realities, security/accessibility considerations, and what JSX does NOT do — helps you write correct, maintainable React code."
        chips={["Expression-only { }", "One root", "Not HTML", "No logic statements", "Not auto-safe"]}
      />

      <NoteHeading>Syntax limitations and rules</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Statements in { }", example: "{if (x) return <A/>}", note: "Invalid: if/for/while/switch/try/let/const are statements, not expressions.", valid: false },
        { syntax: "Expressions in { }", example: "{x ? <A/> : <B/>}", note: "Valid: ternary, logical ops, calls, map, literals, JSX.", valid: true },
        { syntax: "Multiple root elements", example: "return (<A/><B/>)", note: "Invalid: must return one root; use fragment or wrapper.", valid: false },
        { syntax: "Single root / fragment", example: "return (<><A/><B/></>)", note: "Valid grouping.", valid: true },
        { syntax: "Unclosed tags", example: "<div><p></div>", note: "Invalid JSX/HTML nesting/closing.", valid: false },
        { syntax: "Attribute names", example: 'class="x" for="y"', note: "Use className, htmlFor (and camelCased DOM props).", valid: false },
        { syntax: "String event handlers", example: 'onClick="do()"', note: "Invalid in React; pass function: onClick={do}.", valid: false },
        { syntax: "JS reserved words as props", example: "class, for", note: "JSX is in JS context; React provides alternatives (className, htmlFor)." },
        { syntax: "Object as child", example: "<div>{{a:1}}</div>", note: "Invalid: plain objects are not renderable children.", valid: false },
        { syntax: "Comments in tags area", example: "<div // no>", note: "Use {/* comment */} in JSX child positions appropriately.", valid: false },
      ]} />

      <Tabs items={[
        { label: "Statements workaround", code: `// Not allowed: {if (ok) <A/>}\n// Patterns:\n{ok ? <A/> : <B/>}\n{ok && <A/>}\n{items.map(i => <Row key={i.id} />)}\n\nlet body;\nif (ok) body = <A/>; else body = <B/>;\nreturn <main>{body}</main>;` , note: "Move control flow to JS around JSX or use expressions." },
        { label: "Single root", code: `// Invalid\n// return (<h1/><p/>);\n\nreturn (\n  <>\n    <h1>Title</h1>\n    <p>Text</p>\n  </>\n);\n\n// or <div> / semantic wrapper when needed` , note: "Fragments avoid extra DOM nodes." },
        { label: "HTML differences", code: `// HTML: <label for="x" class="c">\n// JSX:\n<label htmlFor="x" className="c">Name</label>\n<input tabIndex={0} readOnly />\n<div style={{ backgroundColor: "red" }} />\n{/* comment */}` , note: "JSX uses JS/DOM property conventions." },
        { label: "Non-renderable values", code: `const obj = { a: 1 };\n// <div>{obj}</div>  // runtime error\n<div>{JSON.stringify(obj)}</div>\n<div>{obj.a}</div>\n\n// Functions as children: only if component expects render-prop\n<div>{() => "hi"}</div> // not auto-called as text` , note: "Render strings/numbers/elements/arrays or transform data first." },
      ]} />

      <NoteHeading>What JSX does NOT do (conceptual limitations)</NoteHeading>
      <RuleGrid rules={[
        { title: "Not a templating engine with directives", body: "No built-in ng-if/ng-for/v-if; use JavaScript expressions and array methods." },
        { title: "Not HTML strings", body: "JSX creates element descriptions; it doesn’t insert raw HTML unless you explicitly use dangerouslySetInnerHTML." },
        { title: "No automatic reactivity in syntax", body: "Writing {count} doesn’t track dependencies by itself; React state/props updates drive re-renders." },
        { title: "No implicit two-way binding", body: "Inputs need value + onChange (controlled) or refs/defaultValue patterns — not magic binding." },
        { title: "Not a styling system", body: "style prop is limited; no pseudo-classes/media queries in inline objects." },
        { title: "Not runtime type checking", body: "TypeScript/PropTypes are tooling/dev aids; JSX syntax alone doesn’t validate data at runtime." },
      ]} />

      <NoteHeading>Rendering and behavior limitations/pitfalls</NoteHeading>
      <ComparePanels
        left={{ title: "Common pitfalls", tone: "bad", code: `{count && <X/>}          // renders 0\n{items.length && <L/>}  // renders 0\n<div class="a" />      // wrong prop\n<button onClick={fn()}> // called in render\n<li>{item}</li>        // missing key in map` }}
        right={{ title: "Correct patterns", tone: "good", code: `{count > 0 && <X/>}\n{items.length > 0 && <L/>}\n<div className="a" />\n<button onClick={fn}>\n<li key={item.id}>{item.name}</li>` }}
      />
      <SyntaxMatrix rows={[
        { syntax: "Whitespace handling", example: "newlines/indentation in JSX text", note: "Whitespace collapsing can be surprising inline; use {' '} or explicit layout." },
        { syntax: "Adjacent text expressions", example: "{a}{b} vs {a} {b}", note: "Spacing in source and JSX text rules affect output." },
        { syntax: "Dynamic tag names", example: "<{Comp} /> invalid", note: "Assign to capitalized variable: const C = Comp; <C/>" },
        { syntax: "if inside child", example: "<div>{if ...}</div>", note: "Not allowed; compute before or use ternary/IIFE." },
        { syntax: "Spread order", example: "{...a} override behavior", note: "Last prop wins — can unintentionally override className/handlers." },
        { syntax: "Large inline logic", example: "complex maps/conditions inline", note: "Hurts readability/maintainability; extract helpers/components." },
      ]} />

      <NoteHeading>Security, accessibility, and platform boundaries</NoteHeading>
      <AnimatedFlow steps={[
        { label: "JSX escapes text", note: "String children are escaped by default, reducing XSS risk." },
        { label: "dangerouslySetInnerHTML", note: "Opt-in raw HTML — you must sanitize untrusted content." },
        { label: "Event/URL attrs", note: "javascript: URLs or unsanitized href/src can be risky; validate inputs." },
        { label: "Accessibility not automatic", note: "Correct semantics, labels, focus, keyboard support are developer responsibilities." },
      ]} />
      <RuleGrid rules={[
        { title: "XSS-safe by default for text", body: "Rendering {userInput} as text is escaped; raw HTML insertion is explicit and dangerous." },
        { title: "dangerouslySetInnerHTML", body: "Use only with trusted/sanitized HTML; never pass unsanitized user content." },
        { title: "Accessibility", body: "JSX won’t ensure semantic HTML, ARIA correctness, focus management, or keyboard support." },
        { title: "Browser/DOM rules still apply", body: "Invalid HTML nesting, missing form labels, or non-interactive click targets remain issues." },
        { title: "Performance not automatic", body: "JSX structure doesn’t guarantee efficient renders; state design and memoization matter." },
        { title: "SSR/hydration constraints", body: "Markup mismatches between server/client can cause hydration issues — keep render deterministic." },
      ]} />

      <NoteCallout tone="warning">Treat JSX as a UI description layer with syntax rules: it helps compose interfaces, but correctness, security, accessibility, and performance still depend on your logic and React patterns.</NoteCallout>

      <NoteTakeaways items={[
        "JSX allows expressions (not statements) in { }, requires one root, and differs from HTML in attributes/events/style/comments.",
        "Not all values are renderable (plain objects error); booleans/null/undefined render nothing; 0 renders visibly.",
        "JSX is not a full framework feature set: no directives, no implicit binding/reactivity, no automatic a11y/security beyond text escaping.",
        "Know workarounds and best practices: fragments, ternaries/maps, explicit checks, sanitization, semantic markup, and extraction.",
      ]} />
    </div>
  );
}
