import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, KeyVisualizer, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function ReactFragmentsR3S9() {
  return (
    <div>
      <SectionHero
        title="React Fragments (Deep Dive)"
        subtitle="Fragments group children without adding DOM nodes. This section focuses on practical fragment patterns: keyed fragments in lists, table/definition-list-safe grouping, short vs explicit syntax, and when fragments are the wrong tool."
        chips={["No DOM wrapper", "Keyed groups", "<> vs <Fragment>", "Semantic correctness"]}
      />

      <NoteHeading>Syntax and capabilities</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "<>...</>", example: "<><li>A</li><li>B</li></>", note: "Short syntax; concise, no extra node; cannot take props/keys." },
        { syntax: "<Fragment>...</Fragment>", example: "<Fragment><li/></Fragment>", note: "Explicit; import { Fragment } from 'react'; supports key." },
        { syntax: "<React.Fragment key={id}>", example: "map item to paired nodes", note: "Namespaced explicit form; key allowed." },
        { syntax: "key on short fragment", example: "< key={id}> ❌", note: "Not supported — use explicit Fragment.", valid: false },
        { syntax: "Fragment as root", example: "return (<>...</>);", note: "Satisfies single-root return requirement." },
      ]} />

      <Tabs items={[
        { label: "Keyed pairs (dl)", code: `import { Fragment } from "react";\n\nfunction Glossary({ items }) {\n  return (\n    <dl>\n      {items.map((item) => (\n        <Fragment key={item.id}>\n          <dt>{item.term}</dt>\n          <dd>{item.description}</dd>\n        </Fragment>\n      ))}\n    </dl>\n  );\n}`, note: "Groups dt/dd pairs without invalid wrapper elements inside <dl>." },
        { label: "Table rows/cells", code: `function Columns({ row }) {\n  return (\n    <>\n      <td>{row.name}</td>\n      <td>{row.role}</td>\n    </>\n  );\n}\n// <tr><Columns row={r} /></tr> keeps valid table structure`, note: "Avoid div wrappers inside tr/tbody where invalid." },
        { label: "Conditional groups", code: `return (\n  <section>\n    <h2>Details</h2>\n    {showMeta && (\n      <>\n        <p>Created: {createdAt}</p>\n        <p>Owner: {owner}</p>\n      </>\n    )}\n  </section>\n);`, note: "Conditionally render multiple siblings as one branch." },
        { label: "Component return", code: `function Fields() {\n  return (\n    <>\n      <label htmlFor="a">A</label>\n      <input id="a" />\n      <label htmlFor="b">B</label>\n      <input id="b" />\n    </>\n  );\n}`, note: "Useful when parent layout should control spacing/containers." },
      ]} />

      <KeyVisualizer />
      <NoteCallout tone="insight">When mapping to multiple sibling nodes per item, the <strong>key must be on the direct root returned by map</strong>. That root can be an explicit <code>Fragment</code>.</NoteCallout>

      <NoteHeading>Short vs explicit: choosing correctly</NoteHeading>
      <ComparePanels
        left={{ title: "Short syntax (no key)", tone: "good", code: `return (\n  <>\n    <Header />\n    <Content />\n  </>\n);`, note: "Default choice for simple grouping." }}
        right={{ title: "Explicit Fragment (keyed)", tone: "good", code: `items.map(x => (\n  <Fragment key={x.id}>\n    <A />\n    <B />\n  </Fragment>\n));`, note: "Required when the fragment itself needs a key." }}
      />

      <NoteHeading>When NOT to use a fragment</NoteHeading>
      <RuleGrid rules={[
        { title: "Need styling/layout", body: "Fragments cannot have className/style; use div/section/etc. when layout or styling is required." },
        { title: "Need semantics/landmarks", body: "Use semantic elements (nav, main, ul, header) for meaning and accessibility." },
        { title: "Need events/ref", body: "Cannot attach onClick/ref to a fragment; wrap in a real element if interaction/measurement is needed." },
        { title: "Need a container query/animation target", body: "Animations, observers, and CSS selectors require an actual DOM node." },
      ]} />

      <NoteHeading>Common mistakes & patterns</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Div soup instead of fragment", example: "return <div><A/><B/></div>", note: "Adds unnecessary DOM; prefer fragment if wrapper has no purpose." },
        { syntax: "Invalid wrapper in table", example: "<tr><div><td/></div></tr>", note: "Breaks HTML semantics; use fragment or correct structure.", valid: false },
        { syntax: "Key on wrong element", example: "<Fragment><li key=id/></Fragment> in map", note: "Key should be on the mapped root (Fragment).", valid: false },
        { syntax: "Fragment in text contexts", example: "mixed whitespace expectations", note: "Whitespace rules still apply to text nodes inside fragments." },
      ]} />

      <NoteTakeaways items={[
        "Use fragments to group siblings without DOM wrappers; essential for valid markup in some structures.",
        "Short syntax is preferred unless you need a key — then use explicit <Fragment key={...}>.",
        "Fragments are invisible to the DOM: no styling, no refs/events, no semantics — choose real elements when those matter.",
        "In lists, key the fragment when it is the direct child returned per item.",
      ]} />
    </div>
  );
}
