import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxExpressionsR3S4() {
  return (
    <div>
      <SectionHero
        title="JSX Expressions"
        subtitle="A JSX expression is any JSX value that can participate in JavaScript as an expression: assigned, returned, passed, stored, nested, or conditionally selected. Understanding this unlocks flexible composition."
        chips={["JSX as value", "Assign/return/pass", "Composition", "Parentheses & ASI"]}
      />

      <NoteHeading>What counts as a JSX expression?</NoteHeading>
      <NoteText>Because transformed JSX becomes JavaScript expressions/calls, you can use JSX anywhere an expression is valid. This includes variables, function returns, arguments, object properties, array elements, ternary branches, and children.</NoteText>
      <SyntaxMatrix rows={[
        { syntax: "Assign to variable", example: "const title = <h1>Hi</h1>;", note: "Store UI descriptions for reuse/composition." },
        { syntax: "Return from function", example: "return <main>...</main>;", note: "Components and helpers can return JSX." },
        { syntax: "Pass as prop", example: '<Panel header={<h2>Title</h2>} />', note: "JSX elements are values; props can accept them." },
        { syntax: "Pass as children", example: "<Card><p>Body</p></Card>", note: "Children are just a prop pattern in JSX form." },
        { syntax: "Store in array", example: "const items = [<li key=.../>];", note: "Arrays of nodes are renderable (keys needed for elements)." },
        { syntax: "Conditional selection", example: "const ui = ok ? <Ok/> : <Err/>;", note: "Choose between JSX expressions with JS control flow/expressions." },
        { syntax: "Nested in JSX", example: "<div>{title}</div>", note: "Embed previously created JSX via expression container." },
        { syntax: "Function argument", example: "render(<App />)", note: "APIs can accept elements (e.g. render, portals patterns)." },
      ]} />

      <AnimatedFlow steps={[
        { label: "Create", note: "Produce a JSX expression (<El />)." },
        { label: "Store/Pass", note: "Keep in vars, props, arrays, maps, or state-derived values." },
        { label: "Compose", note: "Combine smaller expressions into larger trees." },
        { label: "Return/Render", note: "React consumes the final element tree description." },
      ]} />

      <Tabs items={[
        { label: "Variables & returns", code: `function getMessage() {\n  return <p>Hello from a function</p>;\n}\n\nfunction App() {\n  const header = <h1>Dashboard</h1>;\n  const message = getMessage();\n  return (\n    <section>\n      {header}\n      {message}\n    </section>\n  );\n}` , note: "JSX values flow like any other expression." },
        { label: "Props & children", code: `function Layout({ header, children }) {\n  return (<div><header>{header}</header><main>{children}</main></div>);\n}\n\n<Layout header={<h1>Title</h1>}>\n  <p>Content</p>\n</Layout>` , note: "Elements can be passed through multiple composition channels." },
        { label: "Collections & conditions", code: `const items = users.map(u => <li key={u.id}>{u.name}</li>);\nconst body = error ? <Error /> : <ul>{items}</ul>;\nreturn <main>{body}</main>;` , note: "Build UI from data transformations before or during composition." },
      ]} />

      <NoteHeading>Multiline JSX and parentheses (ASI pitfall)</NoteHeading>
      <ComparePanels
        left={{ title: "Bug: automatic semicolon insertion", tone: "bad", code: `function App() {\n  return\n    <h1>Hello</h1>; // becomes: return; <h1/> unreachable\n}` , note: "Returns undefined, not the element." }}
        right={{ title: "Correct: parenthesized multiline", tone: "good", code: `function App() {\n  return (\n    <h1>Hello</h1>\n  );\n}` , note: "Safe, readable convention for multiline JSX." }}
      />
      <NoteCallout tone="warning">Always wrap multiline returned JSX in parentheses. This avoids ASI bugs and is the standard formatting style in React codebases.</NoteCallout>

      <NoteHeading>Expression boundaries and composition patterns</NoteHeading>
      <RuleGrid rules={[
        { title: "JSX is not a statement", body: "You can’t write <div/> as a bare statement for control flow; use it as a value (return/assign/pass)." },
        { title: "Compose small pieces", body: "Extract named element variables (header, emptyState) to clarify complex returns." },
        { title: "Conditional expressions", body: "Pick elements via ternary, &&, ??, maps, or helper functions that return JSX." },
        { title: "Type perspective (TSX)", body: "JSX expressions produce ReactElement/ReactNode-compatible values depending on context." },
      ]} />

      <SyntaxMatrix rows={[
        { syntax: "(<JSX />)", example: "return (<div />);", note: "Grouping parentheses around JSX expression — common for multiline.", valid: true },
        { syntax: "cond ? <A/> : <B/>", example: "{ok ? <Ok/> : <No/>}", note: "Expression form for branching (valid inside JSX/JS expressions).", valid: true },
        { syntax: "<A/>, <B/> (adjacent)", example: "return <A/>; <B/>;", note: "Two expressions/statements, not one return value — invalid for a single return.", valid: false },
        { syntax: "return;\\n<JSX/>", example: "return\\n<div/>", note: "ASI breaks the return value.", valid: false },
      ]} />

      <NoteTakeaways items={[
        "JSX expressions are first-class values: assign, return, pass, store in arrays/maps, and nest them.",
        "Multiline JSX returns should be wrapped in parentheses to prevent ASI bugs.",
        "Think in composition: build small JSX values and combine them into clear UI trees.",
        "Use JavaScript expression constructs (ternary, &&, helpers) to choose between JSX expressions.",
      ]} />
    </div>
  );
}
