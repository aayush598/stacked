import { NoteCallout, NoteCode, NoteHeading, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxFragmentsR3S8() {
  return (
    <div>
      <SectionHero
        title="JSX Fragments"
        subtitle="Fragments let components return or group multiple children without adding extra nodes to the DOM. They preserve structure validity, reduce wrapper noise, and avoid layout/CSS side effects."
        chips={["<>...</>", "<Fragment>", "No extra DOM", "Grouping", "Valid returns"]}
      />

      <NoteHeading>Why fragments exist</NoteHeading>
      <NoteText>JSX expressions must have a single root. When you need to return/render siblings without a meaningful wrapper element, fragments provide grouping with no DOM output.</NoteText>

      <SyntaxMatrix rows={[
        { syntax: "Short syntax", example: "<><A/><B/></>", note: "Most concise; cannot accept attributes like key." },
        { syntax: "Explicit Fragment", example: "<Fragment><A/><B/></Fragment>", note: "Import from React; supports key prop (and generally same behavior)." },
        { syntax: "React.Fragment", example: "<React.Fragment>...</React.Fragment>", note: "Equivalent explicit form if React namespace is used." },
        { syntax: "As return root", example: "return (<>...</>);", note: "Common for component multi-sibling returns." },
        { syntax: "As child wrapper", example: "<div><>...</></div>", note: "Group inline children when needed." },
      ]} />

      <Tabs items={[
        { label: "Short fragment", code: `function App() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Description</p>\n    </>\n  );\n}`, note: "No extra DOM element created." },
        { label: "Explicit Fragment", code: `import { Fragment } from "react";\n\nfunction App() {\n  return (\n    <Fragment>\n      <h1>Title</h1>\n      <p>Description</p>\n    </Fragment>\n  );\n}`, note: "Same grouping semantics; required when you need a key." },
        { label: "Keyed fragment", code: `import { Fragment } from "react";\n\n{items.map(item => (\n  <Fragment key={item.id}>\n    <dt>{item.term}</dt>\n    <dd>{item.def}</dd>\n  </Fragment>\n))}`, note: "Short syntax <> cannot take key." },
        { label: "Nested grouping", code: `return (\n  <section>\n    <h2>Stats</h2>\n    <>\n      <Metric a />\n      <Metric b />\n    </>\n  </section>\n);`, note: "Fragments can appear where elements are valid children." },
      ]} />

      <ComparePanels
        left={{ title: "Unnecessary DOM wrapper", tone: "bad", code: `return (\n  <div>\n    <h1>Hello</h1>\n    <p>Welcome</p>\n  </div>\n);\n// Adds extra div to DOM/CSS/layout` }}
        right={{ title: "Fragment grouping", tone: "good", code: `return (\n  <>\n    <h1>Hello</h1>\n    <p>Welcome</p>\n  </>\n);\n// No extra wrapper node` }}
      />

      <NoteHeading>When to use vs not use fragments</NoteHeading>
      <RuleGrid rules={[
        { title: "Use for structural grouping", body: "Return multiple siblings, satisfy one-root rule, or group list item pairs/rows logically." },
        { title: "Use to avoid invalid DOM", body: "Helpful in tables (<tr> groups), definition lists (<dt>/<dd>), and flex/grid contexts." },
        { title: "Don’t use when wrapper is needed", body: "If you need className, style, id, ref target, events, or semantic meaning, use a real element." },
        { title: "No DOM presence", body: "Fragments don’t appear in the DOM, can’t be styled, and can’t receive DOM event handlers." },
        { title: "Accessibility/semantics", body: "Choose semantic containers (section, nav, ul) when meaning/landmarks matter." },
        { title: "Keys limitation", body: "Only <Fragment key=...> supports keys; <> cannot." },
      ]} />

      <ComparePanels
        left={{ title: "Fragment not enough", tone: "neutral", code: `// Need styling/semantics/events -> use element\n<section className="panel" onClick={onOpen}>\n  <h2>Title</h2>\n  <p>Body</p>\n</section>` }}
        right={{ title: "Fragment appropriate", tone: "good", code: `// Pure grouping, no wrapper desired\n<>\n  <td>{a}</td>\n  <td>{b}</td>\n</>` }}
      />

      <NoteCallout tone="insight">Fragments improve DOM cleanliness but are not a default replacement for all wrappers. Pick the simplest structure that preserves semantics, styling needs, and behavior.</NoteCallout>

      <NoteTakeaways items={[
        "Fragments group children without adding DOM nodes — solving the single-root requirement cleanly.",
        "Use short <> </> for most cases; use <Fragment key={...}> in mapped groups that need keys.",
        "Fragments cannot have DOM attributes/events; use semantic elements when a real node is required.",
        "They are especially useful for valid table/definition-list structures and avoiding wrapper divs.",
      ]} />
    </div>
  );
}
