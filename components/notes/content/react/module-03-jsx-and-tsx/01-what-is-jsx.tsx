import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, ExpressionPlayground, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function WhatIsJsxR3S1() {
  return (
    <div>
      <SectionHero
        title="What is JSX?"
        subtitle="JSX (JavaScript XML) is a syntax extension that lets you write HTML-like markup inside JavaScript. It is a declarative way to describe UI that React renders — compiled to JavaScript, producing React element descriptions (not HTML strings, not DOM nodes)."
        chips={["Syntax extension", "Declarative UI", "Compiles to JS", "Elements not DOM", "Optional in React"]}
      />

      <NoteHeading eyebrow="Definition">JSX in one sentence</NoteHeading>
      <NoteText>JSX allows UI structure to live next to the logic that produces it while following JavaScript expression rules. Build tools transform JSX into JavaScript (e.g. <code>jsx()</code>/<code>jsxs()</code> or <code>createElement()</code>) that React uses to build element trees.</NoteText>
      <AnimatedFlow steps={[
        { label: "Write JSX", note: "Author tree-like markup inside JavaScript expressions." },
        { label: "Compile", note: "Babel/TypeScript/SWC transforms JSX to runtime calls." },
        { label: "Create elements", note: "React receives lightweight element descriptions (type + props)." },
        { label: "Reconcile", note: "React compares trees to decide updates." },
        { label: "Render/commit", note: "Host environment (DOM, native) is updated." },
      ]} />

      <NoteHeading>Core syntax forms (variations)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Element expression", example: "const el = <h1>Hello</h1>;", note: "JSX as a value assigned to a variable." },
        { syntax: "Returned from component", example: "function A(){ return <div/> }", note: "Most common: components return JSX." },
        { syntax: "Nested tree", example: "<div><h1/><p/></div>", note: "Children nested inside a parent element." },
        { syntax: "Self-closing", example: "<img src={x} />", note: "Required form when no children are provided." },
        { syntax: "With attributes/props", example: '<Card title="Hi" n={1} />', note: "Strings or expressions passed as attributes." },
        { syntax: "Expression container", example: "<h1>{name}</h1>", note: "Embed any JS expression inside braces." },
        { syntax: "Fragment", example: "<><A/><B/></>", note: "Groups siblings without extra DOM node." },
        { syntax: "Component element", example: "<UserCard user={u} />", note: "Capitalized type refers to a component." },
        { syntax: "JSX in arrays/props", example: "items.map(i => <Li key={i}/>)", note: "JSX composes anywhere expressions are allowed." },
      ]} />

      <Tabs items={[
        { label: "Simple element", code: `const element = <h1>Hello, React!</h1>;`, note: "Looks like HTML, but is transformed JavaScript." },
        { label: "Component tree", code: `function App() {\n  return (\n    <div className="app">\n      <header><h1>Welcome</h1></header>\n      <main><p>Learning JSX fundamentals.</p></main>\n    </div>\n  );\n}`, note: "Declarative description of nested UI." },
        { label: "Stored & composed", code: `const title = <h1>Dashboard</h1>;\nconst body = <p>Stats</p>;\nreturn <section>{title}{body}</section>;`, note: "JSX values are composable expressions." },
        { label: "Without JSX", code: `import { createElement } from "react";\n\nconst element = createElement(\n  "h1",\n  { className: "title" },\n  "Hello, React!"\n);`, note: "Equivalent output, lower readability for trees." },
      ]} />

      <NoteHeading>JSX is not HTML</NoteHeading>
      <NoteText>JSX resembles HTML but follows JavaScript and React/DOM property conventions. Differences affect attributes, events, styling, comments, and tag rules.</NoteText>
      <ComparePanels
        left={{ title: "HTML", tone: "neutral", code: `<div class="container">\n  <label for="email">Email</label>\n  <input type="text" tabindex="1">\n  <button onclick="save()">Save</button>\n  <!-- comment -->\n</div>` }}
        right={{ title: "JSX", tone: "good", code: `<div className="container">\n  <label htmlFor="email">Email</label>\n  <input type="text" tabIndex={1} />\n  <button onClick={save}>Save</button>\n  {/* comment */}\n</div>` }}
      />
      <RuleGrid rules={[
        { title: "Attribute naming", body: "class→className, for→htmlFor, tabindex→tabIndex, readonly→readOnly, maxlength→maxLength, etc." },
        { title: "Valid tag syntax", body: "Close non-void tags (<div></div>) and self-close void/empty tags (<input />, <br />, <img />)." },
        { title: "Events are functions", body: "onClick/onChange receive function references/handlers, not string code." },
        { title: "style is an object", body: "style={{ backgroundColor: 'black', fontSize: 16 }} uses camelCased properties." },
        { title: "Comments differ", body: "Use {/* ... */} inside JSX; // and /* */ work in surrounding JS regions." },
        { title: "JavaScript context", body: "JSX is embedded in JS, so reserved words and expression rules matter." },
      ]} />

      <NoteHeading>JSX is not a template language</NoteHeading>
      <NoteText>Template engines often introduce special directives for loops/conditions. JSX uses plain JavaScript expressions via <code>{"{}"}</code>, making composition predictable and powerful.</NoteText>
      <ExpressionPlayground />
      <NoteCode filename="expressions-in-markup.tsx" code={`function Profile({ user, items }) {\n  return (\n    <div>\n      <h1>{user.name.toUpperCase()}</h1>\n      <p>{items.length} items</p>\n      {items.length > 0 ? <List items={items} /> : <Empty />}\n    </div>\n  );\n}`} />

      <NoteHeading>JSX produces React elements (descriptions)</NoteHeading>
      <NoteText>A JSX expression evaluates to a lightweight object-like description of UI (type, props/children). It is not the live DOM node. React uses these descriptions during reconciliation.</NoteText>
      <NoteCode filename="conceptual.ts" code={`const heading = <h1 className="title">Hello</h1>;\n\n// Conceptual (classic mental model):\n// React.createElement("h1", { className: "title" }, "Hello")\n\n// Conceptual shape (illustrative, not exact internals):\n// { type: "h1", props: { className: "title", children: "Hello" } }`} />
      <ComparePanels
        left={{ title: "JSX expression", tone: "neutral", code: `const ui = <Button variant="primary">Save</Button>;` , note: "A value describing what to render." }}
        right={{ title: "Actual DOM (later)", tone: "neutral", code: `<button class="btn primary">Save</button>` , note: "Created/updated by the renderer after reconciliation." }}
      />

      <NoteHeading>JSX is optional, but preferred</NoteHeading>
      <NoteList items={[
        "You can write React with createElement only — useful to understand, rarely preferred for app code.",
        "JSX improves readability, structural clarity, refactoring, and code review quality.",
        "Tooling (formatters, linters, TypeScript, editors) is optimized for JSX/TSX workflows.",
        "Knowing the compiled form helps debug runtime/transform issues and library behavior.",
      ]} />

      <NoteCallout tone="insight">Mental model: JSX is syntax for creating UI descriptions. React is the library that interprets those descriptions over time (state, updates, reconciliation) to produce UI.</NoteCallout>

      <NoteTakeaways items={[
        "JSX is a compile-time syntax extension that produces React element descriptions, not HTML or DOM.",
        "It looks like HTML but follows JS/React rules (attributes, events, style objects, comments, closing tags).",
        "Any place a JS expression fits, a JSX expression can fit — enabling powerful composition.",
        "JSX is optional but the standard, maintainable way to author React UIs.",
      ]} />
    </div>
  );
}
