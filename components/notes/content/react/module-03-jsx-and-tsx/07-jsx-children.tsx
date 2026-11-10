import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ChildTypesDemo, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxChildrenR3S7() {
  return (
    <div>
      <SectionHero
        title="JSX Children"
        subtitle="Children are the content between tags, passed as the special children prop. They enable composition patterns like wrappers, layouts, slots, and compound components — accepting text, elements, arrays, functions, and more."
        chips={["children prop", "Composition", "Nesting", "Slots", "React.Children"]}
      />

      <ChildTypesDemo />

      <NoteHeading>Syntax variations for children</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "<C>text</C>", example: '<Button>Save</Button>', note: "String/text child." },
        { syntax: "<C><X/></C>", example: "<Card><Title/></Card>", note: "Element/component as child." },
        { syntax: "<C>{expr}</C>", example: "<p>{name}</p>", note: "Expression child (value, element, array, null, etc.)." },
        { syntax: "<C>{a}{b}</C>", example: "<p>Hello {name}!</p>", note: "Mixed text and expressions." },
        { syntax: "<C>\\n  <A/>\\n  <B/>\\n</C>", example: "multiple siblings", note: "Multiple children passed together." },
        { syntax: "<C children={x} />", example: '<Card children={<h1/>} />', note: "Explicit children prop (less common for JSX nodes)." },
        { syntax: "<C />", example: "<Avatar />", note: "No children provided (undefined unless defaulted)." },
        { syntax: "Function child", example: "<Mouse>{pos => ...}</Mouse>", note: "Render-prop pattern: children can be a function." },
      ]} />

      <AnimatedFlow steps={[
        { label: "Author nested content", note: "Place content between opening and closing tags." },
        { label: "React passes children", note: "Content becomes props.children (single or multiple)." },
        { label: "Component renders slot", note: "Component decides where/how to render {children}." },
        { label: "Compose freely", note: "Callers control inner UI; wrappers control layout/behavior." },
      ]} />

      <Tabs items={[
        { label: "Basic wrapper", code: `function Card({ children }) {\n  return <div className="card">{children}</div>;\n}\n\n<Card>\n  <h2>Title</h2>\n  <p>Body content</p>\n</Card>` , note: "Classic composition container." },
        { label: "Multiple children", code: `<Layout>\n  <Header />\n  <Main />\n  <Footer />\n</Layout>\n// Layout may render {children} in a region`, note: "Children can be a set/array of sibling nodes." },
        { label: "Conditional/optional", code: `function Panel({ title, children }) {\n  return (\n    <section>\n      {title && <h2>{title}</h2>}\n      <div>{children}</div>\n    </section>\n  );\n}` , note: "Components can render children conditionally or with wrappers." },
        { label: "Named slots", code: `function Dialog({ title, footer, children }) {\n  return (\n    <div role="dialog">\n      <header>{title}</header>\n      <main>{children}</main>\n      <footer>{footer}</footer>\n    </div>\n  );\n}\n\n<Dialog title={<h2>Confirm</h2>} footer={<Actions/>}>\n  Are you sure?\n</Dialog>` , note: "Use props for multiple distinct regions; children for primary content." },
        { label: "Children as function", code: `type Props = { children: (value: string) => React.ReactNode };\nfunction Provide({ children }: Props) {\n  const value = "ready";\n  return <>{children(value)}</>;\n}\n<Provide>{(v) => <span>{v}</span>}</Provide>` , note: "Render-prop pattern (less common now, but valid)." },
      ]} />

      <NoteHeading>What children can be (types/shapes)</NoteHeading>
      <RuleGrid rules={[
        { title: "Primitive text/numbers", body: "Strings and numbers render as text nodes." },
        { title: "Elements & fragments", body: "Single or multiple React elements, including <>...</>." },
        { title: "Arrays", body: "Arrays of renderable nodes (keys required for element items in dynamic lists)." },
        { title: "null/undefined/booleans", body: "Render nothing — useful for conditional slots." },
        { title: "Mixed content", body: "Text interleaved with expressions/components is common and valid." },
        { title: "Functions/components (pattern)", body: "Possible when your component API expects it (render props/slot functions)." },
      ]} />

      <NoteHeading>Children utilities and caveats</NoteHeading>
      <NoteCode filename="children-api.tsx" code={`import { Children, isValidElement, cloneElement } from "react";\n\nfunction List({ children }) {\n  const count = Children.count(children);\n  const items = Children.toArray(children); // assigns keys if needed\n  return (\n    <ul>\n      {Children.map(children, (child, i) => (\n        <li data-i={i}>{child}</li>\n      ))}\n    </ul>\n  );\n}`} />
      <NoteList items={[
        "Children.count / forEach / map / only / toArray help when children shape is unknown.",
        "Children utilities operate on the direct children structure, not deeply rendered output of child components.",
        "cloneElement exists for advanced cases but can make data flow harder to follow — prefer explicit props/composition.",
        "Do not assume children is always an array; it can be a single node, undefined, etc.",
      ]} />

      <ComparePanels
        left={{ title: "Implicit nesting (preferred)", tone: "good", code: `<Card>\n  <h1>Hi</h1>\n</Card>` }}
        right={{ title: "Explicit prop form", tone: "neutral", code: `<Card children={<h1>Hi</h1>} />\n// avoid passing both in conflicting ways` }}
      />

      <NoteCallout tone="tip">Design children APIs intentionally: document what kinds of children are accepted, whether order matters, and if you provide named slots for complex layouts.</NoteCallout>

      <NoteTakeaways items={[
        "Children are passed via nesting (or children prop) and enable powerful composition patterns.",
        "Children can be many types/shapes; handle absence and multiplicity safely.",
        "Use named props for multiple regions/slots and children for the primary content area.",
        "React.Children helpers are useful for advanced cases, but simple explicit composition is usually clearer.",
      ]} />
    </div>
  );
}
