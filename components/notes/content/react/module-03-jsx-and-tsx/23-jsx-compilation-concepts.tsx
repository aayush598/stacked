import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, JSXTransformDemo, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxCompilationConceptsR3S23() {
  return (
    <div>
      <SectionHero
        title="JSX Compilation Concepts"
        subtitle="Browsers don’t understand JSX. Build tools (Babel, TypeScript, SWC, esbuild) transform JSX into plain JavaScript function calls/objects that React can use to create elements. Understanding transforms clarifies runtime behavior and tooling config."
        chips={["Transform step", "createElement (classic)", "jsx/jsxs (automatic)", "React elements", "Source maps"]}
      />

      <JSXTransformDemo
        jsx={`const el = <h1 className="title">Hello</h1>;`}
        classic={`// Classic runtime (React.createElement)\nimport React from "react";\n\nconst el = React.createElement(\n  "h1",\n  { className: "title" },\n  "Hello"\n);`}
        automatic={`// Automatic runtime (react/jsx-runtime)\nimport { jsx as _jsx } from "react/jsx-runtime";\n\nconst el = _jsx("h1", {\n  className: "title",\n  children: "Hello",\n});`}
      />

      <NoteHeading>Why compilation is required</NoteHeading>
      <NoteText>JSX is not valid JavaScript syntax for engines. A compile/transpile step converts <code>{"<Tag />"}</code> syntax into function calls that produce React element objects. This happens at build/dev time, not in the browser at runtime (except specialized in-browser compilers for demos).</NoteText>
      <AnimatedFlow steps={[
        { label: "Source code", note: "You write .jsx/.tsx with JSX syntax." },
        { label: "Parse/transform", note: "Compiler parses JSX and emits JS (createElement or jsx/jsxs)." },
        { label: "Bundle/runtime", note: "Bundler serves compiled JS; React runtime is available as needed." },
        { label: "Execute", note: "Code runs, creating React element descriptions." },
        { label: "Render", note: "React reconciles element tree to DOM/native UI." },
      ]} />

      <Tabs items={[
        { label: "Element with children", code: `// JSX\nconst ui = (\n  <div className="card">\n    <h2>Title</h2>\n    <p>Body</p>\n  </div>\n);\n\n// Classic (conceptual)\nReact.createElement(\n  "div",\n  { className: "card" },\n  React.createElement("h2", null, "Title"),\n  React.createElement("p", null, "Body")\n);\n\n// Automatic uses jsx/jsxs with children in props/args (details vary by implementation)` , note: "Nested JSX becomes nested createElement/jsx calls." },
        { label: "Component & props", code: `// JSX\n<Button type="submit" disabled={busy} onClick={save}>\n  Save\n</Button>\n\n// Classic\nReact.createElement(Button, {\n  type: "submit",\n  disabled: busy,\n  onClick: save,\n}, "Save");` , note: "Capitalized components become variable references, not strings." },
        { label: "Spread & expressions", code: `// JSX\n<Input {...props} value={value} />\n\n// Conceptually props object includes spread result + overrides\nReact.createElement(Input, { ...props, value: value });` , note: "Expressions/spreads are preserved as JS expressions in compiled output." },
        { label: "Fragments", code: `// JSX\n<> <A/> <B/> </>\n\n// Classic\nReact.createElement(React.Fragment, null,\n  React.createElement(A, null),\n  React.createElement(B, null)\n);\n\n// Automatic imports Fragment helper as needed` , note: "Fragments compile to Fragment element type." },
        { label: "Key & children", code: `items.map(item => (\n  <li key={item.id} className="row">{item.name}</li>\n));\n\n// key is passed specially; children can be prop or extra args depending on runtime` , note: "key and ref have special handling in element creation." },
      ]} />

      <NoteHeading>Classic vs automatic JSX runtime</NoteHeading>
      <ComparePanels
        left={{ title: "Classic transform", tone: "neutral", code: `// Requires React in scope (historically)\nimport React from "react";\nReact.createElement(type, props, ...children)\n\n// tsconfig: "jsx": "react"` , note: "Older default; JSX compiles to React.createElement." }}
        right={{ title: "Automatic runtime (modern)", tone: "good", code: `// Auto-imports helpers from react/jsx-runtime\nimport { jsx, jsxs, Fragment } from "react/jsx-runtime";\njsx(type, props, key?)\n\n// tsconfig: "jsx": "react-jsx"` , note: "No need to import React just for JSX; preferred in modern setups." }}
      />
      <SyntaxMatrix rows={[
        { syntax: "jsx()", example: "single or no child cases", note: "Automatic runtime helper for elements." },
        { syntax: "jsxs()", example: "multiple static children cases", note: "Optimization/variant used by transform for multiple children." },
        { syntax: "Fragment", example: "imported from jsx-runtime in auto mode", note: "Fragment type reference for <> syntax." },
        { syntax: "key handling", example: "passed separately in automatic runtime", note: "Improves consistency and avoids key in props object." },
        { syntax: "dev variants", example: "jsxDEV in development", note: "May include extra debug info (file, line) in dev builds." },
      ]} />

      <NoteHeading>Tooling and configuration</NoteHeading>
      <RuleGrid rules={[
        { title: "TypeScript", body: "tsconfig jsx: react-jsx (modern), react-jsxdev, react (classic), preserve (let bundler transform)." },
        { title: "Babel", body: "@babel/preset-react with runtime: 'automatic' or 'classic'." },
        { title: "SWC/esbuild/Vite/Next", body: "Framework/toolchain configs select JSX runtime; modern defaults usually automatic." },
        { title: "File extensions", body: ".jsx for JS, .tsx for TypeScript+JSX; .js may require config to allow JSX." },
        { title: "Source maps", body: "Compiled output maps back to original JSX for debugging in devtools." },
        { title: "React import", body: "With automatic runtime, `import React from 'react'` is not required solely for JSX (but needed if you use React APIs)." },
      ]} />

      <NoteCode filename="tsconfig.example.json" code={`{\n  "compilerOptions": {\n    "jsx": "react-jsx",\n    "jsxImportSource": "react"\n  }\n}\n// For other libs (e.g. Preact) jsxImportSource can differ`} />

      <NoteHeading>What compilation means for you</NoteHeading>
      <NoteList items={[
        "JSX is syntactic sugar: it does not add runtime capabilities beyond what createElement/jsx calls produce.",
        "Props/children/expressions are normal JS values passed at element-creation time.",
        "Component tags become references (must be in scope), host tags become strings.",
        "Understanding transforms helps debug ‘React is not defined’ (classic), missing runtime config, or unexpected output.",
        "Dev builds may include extra debug metadata; production builds optimize output.",
      ]} />

      <NoteTakeaways items={[
        "JSX must be compiled to JavaScript (createElement or jsx/jsxs runtime calls) before execution.",
        "Automatic runtime is the modern default: cleaner imports and improved key handling; classic uses React.createElement.",
        "Transforms preserve JS expressions, spreads, and component references while converting markup syntax.",
        "Know your toolchain config (TS/Babel/bundler) because it controls JSX runtime, dev diagnostics, and output.",
      ]} />
    </div>
  );
}
