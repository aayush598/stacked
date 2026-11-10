import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function WhyJsxExistsR3S2() {
  return (
    <div>
      <SectionHero
        title="Why JSX Exists"
        subtitle="JSX exists to make UI composition expressive, readable, and maintainable. It represents component trees visually while keeping the full power of JavaScript for logic, data shaping, and composition."
        chips={["Readability", "Composition", "Co-location", "Maintainability", "DX"]}
      />

      <NoteHeading>The readability problem without JSX</NoteHeading>
      <ComparePanels
        left={{ title: "Nested createElement calls", tone: "bad", code: `import { createElement as h } from "react";\n\nfunction App() {\n  return h("div", { className: "card" },\n    h("header", null,\n      h("h1", null, "Welcome"),\n      h("p", null, "Profile")\n    ),\n    h("button", { onClick: save }, "Save")\n  );\n}` , note: "Structure becomes hard to scan as nesting grows." }}
        right={{ title: "Same UI in JSX", tone: "good", code: `function App() {\n  return (\n    <div className="card">\n      <header>\n        <h1>Welcome</h1>\n        <p>Profile</p>\n      </header>\n      <button onClick={save}>Save</button>\n    </div>\n  );\n}` , note: "Hierarchy mirrors the UI and is easy to review." }}
      />

      <AnimatedFlow steps={[
        { label: "Describe UI", note: "Represent intended structure declaratively." },
        { label: "Embed logic", note: "Use expressions, conditions, maps with normal JS." },
        { label: "Compose components", note: "Assemble small pieces into larger screens." },
        { label: "Refactor safely", note: "Clear trees are easier to extract and change." },
        { label: "Scale teams", note: "Consistent patterns improve collaboration and reviews." },
      ]} />

      <NoteHeading>Benefits and design goals</NoteHeading>
      <RuleGrid rules={[
        { title: "Declarative composition", body: "Describe what UI should look like for given inputs/state instead of imperative DOM steps." },
        { title: "Visual hierarchy", body: "Nested tags communicate parent/child/layout relationships at a glance." },
        { title: "JavaScript power", body: "Conditions, loops, helpers, and data transforms use the language you already know." },
        { title: "Component reuse", body: "Custom components become first-class tags (<Card />, <Avatar />) enabling composition." },
        { title: "Co-location", body: "Markup, event wiring, and rendering logic for a view can live together coherently." },
        { title: "Tooling ecosystem", body: "Great support in TypeScript, linters, formatters, and editors." },
      ]} />

      <NoteHeading>Co-location vs separation of concerns</NoteHeading>
      <NoteText>JSX does not mean mixing everything. It encourages separating concerns by component/feature (each owning its UI + related behavior) rather than splitting by file type alone. Keep business logic, data fetching strategies, and heavy transforms organized.</NoteText>
      <ComparePanels
        left={{ title: "Too much in markup", tone: "bad", code: `return (\n  <ul>\n    {users.filter(u=>u.active && u.role!==\"guest\")\n      .sort((a,b)=>a.score-b.score)\n      .map(u => <li key={u.id}>{format(u)}</li>)}\n  </ul>\n);` }}
        right={{ title: "Balanced responsibilities", tone: "good", code: `const visibleUsers = getVisibleUsers(users);\nreturn (\n  <ul>\n    {visibleUsers.map((u) => (\n      <UserRow key={u.id} user={u} />\n    ))}\n  </ul>\n);` }}
      />

      <NoteHeading>JSX vs alternative approaches (mental model)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "createElement API", example: "h('div', props, child)", note: "No special syntax; verbose for deep trees." },
        { syntax: "JSX", example: "<div {...props}>{child}</div>", note: "Syntactic sugar compiled to JS; highly readable." },
        { syntax: "Template strings/HTML", example: "innerHTML = `<div>..</div>`", note: "Not React’s model; loses component/identity/safety patterns." },
        { syntax: "Hyperscript helpers", example: "m('div', m('h1','Hi'))", note: "Similar to createElement; still less visual than JSX." },
      ]} />

      <Tabs items={[
        { label: "Composition", code: `function Page() {\n  return (\n    <Layout>\n      <Header />\n      <Content><Profile /></Content>\n      <Footer />\n    </Layout>\n  );\n}`, note: "Custom components read like a UI vocabulary." },
        { label: "Logic + UI", code: `function Badge({ count }) {\n  if (count <= 0) return null;\n  return <span className="badge">{count}</span>;\n}`, note: "Control flow stays in JS; JSX expresses outcomes." },
      ]} />

      <NoteCallout tone="tip">Production principle: JSX should primarily describe UI. Move complex transformations, side effects, and decisions into well-named helpers/hooks when that improves clarity and testability.</NoteCallout>

      <NoteTakeaways items={[
        "JSX exists for clarity and composability — it makes UI trees easy to read, write, and refactor.",
        "It combines declarative markup with full JavaScript expressiveness (no separate template mini-language).",
        "Good JSX co-locates view concerns by component while keeping heavy logic appropriately separated.",
        "JSX is syntactic sugar over element-creation APIs, optimized for humans and tooling.",
      ]} />
    </div>
  );
}
