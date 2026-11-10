import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, NestingDepthMeter, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxNestingR3S17() {
  return (
    <div>
      <SectionHero
        title="JSX Nesting"
        subtitle="Nesting expresses UI hierarchy by placing elements, components, expressions, text, and fragments inside one another. Correct nesting must satisfy JSX syntax and valid host markup semantics while staying readable and maintainable."
        chips={["Hierarchy", "Elements & components", "Valid semantics", "Fragments", "Readability"]}
      />

      <NestingDepthMeter depth={3} />

      <NoteHeading>Nesting syntax and variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Element in element", example: "<div><p>Text</p></div>", note: "Basic parent/child nesting." },
        { syntax: "Multiple siblings", example: "<div><h1/><p/><ul/></div>", note: "Parent can contain many children in order." },
        { syntax: "Deep nesting", example: "<main><section><article><h1/></article></section></main>", note: "Valid, but keep depth purposeful." },
        { syntax: "Component nesting", example: "<Layout><Header/><Content/></Layout>", note: "Components compose like elements via children/props." },
        { syntax: "Mixed text + elements", example: "<p>Hello <strong>{name}</strong>!</p>", note: "Inline elements and expressions interleaved with text." },
        { syntax: "Expression as child", example: "<div>{condition ? <A/> : <B/>}</div>", note: "Nested result of an expression." },
        { syntax: "List nesting", example: "<ul>{items.map(i => <li key={i.id}>...</li>)}</ul>", note: "Dynamic children nested inside container." },
        { syntax: "Fragment grouping", example: "<><A/><B/></> or nested fragments", note: "Groups siblings without DOM wrapper." },
        { syntax: "Layout + slots", example: '<Page header={<Nav/>}><Body/></Page>', note: "Nesting via props and children composition." },
      ]} />

      <Tabs items={[
        { label: "Basic hierarchy", code: `function Profile() {\n  return (\n    <main>\n      <header>\n        <h1>Profile</h1>\n        <p className="subtitle">Account details</p>\n      </header>\n      <section>\n        <h2>Info</h2>\n        <p>Email: {user.email}</p>\n      </section>\n    </main>\n  );\n}`, note: "Use nesting to reflect document/UI structure." },
        { label: "Component composition", code: `<AppShell>\n  <Sidebar>\n    <Nav />\n  </Sidebar>\n  <Content>\n    <Toolbar />\n    <Card>\n      <CardHeader title="Stats" />\n      <CardBody><Chart /></CardBody>\n    </Card>\n  </Content>\n</AppShell>`, note: "Nesting components builds application structure." },
        { label: "Inline & text", code: `<p>\n  Welcome back, <strong>{user.name}</strong>.\n  You have <a href="/inbox">{count} messages</a>.\n</p>`, note: "Text nodes and inline elements can be freely nested (with valid semantics)." },
        { label: "Conditional nesting", code: `<article>\n  <h2>{post.title}</h2>\n  {post.cover && <img src={post.cover} alt="" />}\n  {post.published ? (\n    <section><Body html={post.html} /></section>\n  ) : (\n    <p>Draft</p>\n  )}\n</article>`, note: "Nest expressions that resolve to elements, null, arrays, etc." },
      ]} />

      <NoteHeading>JSX nesting rules vs HTML semantics</NoteHeading>
      <ComparePanels
        left={{ title: "JSX syntax requirement", tone: "neutral", code: `// Tags must close in correct order\n<div>\n  <span>ok</span>\n</div>\n\n// Invalid JSX\n// <div><span></div></span>` , note: "Parser requires properly nested/closed tags." }}
        right={{ title: "Valid HTML semantics (also important)", tone: "good", code: `// Valid\n<ul><li>Item</li></ul>\n<table><tbody><tr><td>A</td></tr></tbody></table>\n\n// Avoid invalid structures like <p><div/></p>\n// or <ul><div/></ul>`, note: "Even if JSX compiles, invalid HTML nesting can cause browser quirks/accessibility issues." }}
      />

      <SyntaxMatrix rows={[
        { syntax: "<ul>/<ol> children", example: "direct <li> (or template/script in HTML; in JSX use valid elements)", note: "List containers should contain list items appropriately." },
        { syntax: "<table> structure", example: "table > thead/tbody > tr > th/td", note: "Browsers may auto-correct invalid nesting unexpectedly." },
        { syntax: "<p> content model", example: "phrasing content; avoid block elements inside", note: "Invalid nesting can break rendered DOM structure." },
        { syntax: "Interactive elements", example: "avoid <button><a/></button>", note: "Nested interactive controls are invalid/confusing for a11y." },
        { syntax: "Form controls", example: "label wrapping or htmlFor association", note: "Nest inputs in labels or associate properly." },
      ]} />

      <NoteHeading>Patterns: flattening and structuring</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Start with semantics", note: "Choose meaningful parent elements (main, section, nav, ul)." },
        { label: "Nest by responsibility", note: "Group related UI; extract subtrees into components." },
        { label: "Remove wrapper noise", note: "Use fragments instead of pointless divs." },
        { label: "Guard readability", note: "Limit depth; refactor when branches become hard to scan." },
      ]} />

      <ComparePanels
        left={{ title: "Wrapper soup / too deep", tone: "bad", code: `<div>\n  <div className="card">\n    <div>\n      <div>\n        <h3>{title}</h3>\n        <div><p>{body}</p></div>\n      </div>\n    </div>\n  </div>\n</div>` }}
        right={{ title: "Purposeful, semantic nesting", tone: "good", code: `<article className="card">\n  <h3>{title}</h3>\n  <p>{body}</p>\n</article>` }}
      />

      <RuleGrid rules={[
        { title: "Every wrapper should earn its place", body: "Use elements for semantics, layout, styling hooks, accessibility, or interaction — not habit." },
        { title: "Prefer fragments for grouping", body: "When no DOM node is needed, <>...</> keeps structure clean." },
        { title: "Extract subtrees", body: "Move complex nested blocks into named components with clear props." },
        { title: "Respect content models", body: "Follow valid HTML nesting rules to avoid broken DOM and a11y issues." },
        { title: "Keep indentation meaningful", body: "Consistent formatting makes hierarchy visible; avoid single-line deeply nested blobs." },
        { title: "Whitespace awareness", body: "Inline text nesting and line breaks can affect rendered spacing — be intentional." },
      ]} />

      <NoteTakeaways items={[
        "JSX nesting must be syntactically correct and should also produce semantically valid markup.",
        "Nest elements, components, text, and expressions to model hierarchy — but avoid unnecessary depth/wrappers.",
        "Use fragments and component extraction to keep trees readable and intentional.",
        "Pay attention to HTML content-model rules (lists, tables, phrasing/flow content, interactive elements).",
      ]} />
    </div>
  );
}
