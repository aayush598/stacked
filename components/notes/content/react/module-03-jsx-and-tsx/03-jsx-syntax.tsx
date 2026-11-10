import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxSyntaxR3S3() {
  return (
    <div>
      <SectionHero
        title="JSX Syntax"
        subtitle="JSX has strict syntactic rules: valid tags, proper nesting/closing, one root expression, expression containers, and case-sensitive element types. Mastering these prevents most compile-time JSX errors."
        chips={["Tags & closing", "One root", "Nesting", "Case sensitivity", "{ } expressions"]}
      />

      <NoteHeading>Fundamental structure</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "<tag>...</tag>", example: "<div>Hello</div>", note: "Standard open/close form with children." },
        { syntax: "<tag />", example: "<input />", note: "Self-closing form for elements without children." },
        { syntax: "<tag attr />", example: '<img src="/a.png" alt="" />', note: "Attributes/props on elements or components." },
        { syntax: "{expression}", example: "<p>{count + 1}</p>", note: "Embed a JavaScript expression as a child/prop value." },
        { syntax: "One root", example: "return (<><A/><B/></>);", note: "A component must return a single root expression." },
        { syntax: "Nested elements", example: "<main><section><h1/></section></main>", note: "Children can include elements, text, expressions, components." },
      ]} />

      <Tabs items={[
        { label: "Opening/closing", code: `// Valid\n<div>\n  <p>Hello</p>\n</div>\n\n// Invalid: missing closing tag\n// <div>\n//   <p>Hello</p>`, note: "Every non-void element must be closed." },
        { label: "Self-closing", code: `// Valid\n<input type="text" />\n<img src={src} alt={alt} />\n<br />\n<hr />\n<meta charSet="utf-8" />\n\n// In JSX, prefer explicit self-close for void elements`, note: "HTML may allow unclosed void tags; JSX syntax requires valid closing/self-closing." },
        { label: "One root", code: `// Invalid: adjacent roots\n// return (\n//   <h1>A</h1>\n//   <p>B</p>\n// );\n\n// Valid: wrapper\nreturn (<div><h1>A</h1><p>B</p></div>);\n\n// Valid: fragment (no extra DOM)\nreturn (<><h1>A</h1><p>B</p></>);`, note: "Return one expression — use div/section or a fragment." },
        { label: "Nesting rules", code: `// Valid nesting\n<div>\n  <section>\n    <h1>Title</h1>\n  </section>\n</div>\n\n// Invalid nesting\n// <div><section></div></section>`, note: "Tags must close in the correct order; also respect valid HTML semantics." },
      ]} />

      <NoteHeading>Case sensitivity: host elements vs components</NoteHeading>
      <ComparePanels
        left={{ title: "Host elements (lowercase)", tone: "good", code: `<div />\n<span />\n<button />\n<input />\n<svg><circle /></svg>` , note: "Built-in DOM/SVG tags are lowercase." }}
        right={{ title: "Components (capitalized)", tone: "good", code: `function Card() { return <div/> }\n\n<Card />\n<Layout.Header />\n<Dialog.Content />` , note: "Capitalized names resolve to in-scope component values." }}
      />
      <NoteCallout tone="warning">If you write <code>{"<myComponent />"}</code> (lowercase), JSX treats it as an intrinsic tag name string, not your function variable. Use <code>{"<MyComponent />"}</code>.</NoteCallout>

      <NoteHeading>Attribute & children syntax variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: 'attr="text"', example: '<input placeholder="Name" />', note: "String literal attribute." },
        { syntax: "attr={expr}", example: "<input value={name} />", note: "Expression value (any JS expression)." },
        { syntax: "attr", example: "<input disabled />", note: "Boolean shorthand (typically means true)." },
        { syntax: "attr={true|false}", example: "<input disabled={isBusy} />", note: "Explicit boolean/control via expression." },
        { syntax: "{...obj}", example: "<input {...props} />", note: "Spread attributes/props from an object." },
        { syntax: "children text", example: "<p>Hello</p>", note: "Text node as child." },
        { syntax: "children elements", example: "<ul><li>A</li></ul>", note: "Nested element children." },
        { syntax: "children expression", example: "<p>{user.name}</p>", note: "Dynamic child from expression." },
      ]} />

      <NoteHeading>Comments and whitespace (syntax awareness)</NoteHeading>
      <NoteCode filename="comments.tsx" code={`return (\n  <div>\n    {/* JSX comment inside markup */}\n    <h1>Title</h1>\n    {\n      // JS comment inside an expression container (use carefully)\n    }\n  </div>\n);\n// Outside JSX, normal JS comments apply`} />

      <RuleGrid rules={[
        { title: "Parentheses for multiline", body: "Use return ( ... ) to avoid automatic semicolon insertion issues." },
        { title: "Valid JS expressions only", body: "Inside { } you can place expressions, not statements like if/for declarations." },
        { title: "Proper escaping/encoding", body: "Use {\"<\"}, {\"&\"} patterns or strings when needed; JSX text has parsing rules." },
        { title: "One top-level node", body: "Fragments (<>...</> / <Fragment>) solve multi-sibling returns cleanly." },
      ]} />

      <NoteTakeaways items={[
        "JSX syntax requires correctly closed, properly nested tags and a single root expression.",
        "Lowercase = intrinsic host elements; capitalized/member expressions = components.",
        "Attributes and children accept string literals or {expressions}; spreads and booleans have specific forms.",
        "Use parentheses for multiline returns and fragments to avoid unnecessary wrapper nodes.",
      ]} />
    </div>
  );
}
