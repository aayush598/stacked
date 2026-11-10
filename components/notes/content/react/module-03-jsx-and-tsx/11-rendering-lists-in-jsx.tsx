import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, KeyVisualizer, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function RenderingListsInJsxR3S11() {
  return (
    <div>
      <SectionHero
        title="Rendering Lists in JSX"
        subtitle="Render collections by transforming arrays into arrays of elements/values using JavaScript (usually map). Correct keys, stable identity, filtering/sorting patterns, and empty/loading states are essential for predictable UI."
        chips={["map()", "Keys & identity", "filter/sort/reduce", "Nested lists", "Empty states"]}
      />

      <KeyVisualizer />

      <NoteHeading>Core pattern and syntax variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Array.map to elements", example: "{items.map(item => <Li key={item.id} />)}", note: "Most common: 1 data item -> 1 element." },
        { syntax: "Inline in JSX child", example: "<ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>", note: "Expression container returns an array of nodes." },
        { syntax: "Precomputed variable", example: "const rows = data.map(...); return <>{rows}</>;", note: "Improves readability for complex mapping." },
        { syntax: "filter().map()", example: "items.filter(p).map(render)", note: "Derive visible subset then render." },
        { syntax: "sort() on copy", example: "[...items].sort(cmp).map(...)", note: "Avoid mutating original array during render." },
        { syntax: "flatMap()", example: "groups.flatMap(g => g.items.map(...))", note: "Flatten and map in one pass." },
        { syntax: "Multiple elements per item", example: "map(i => <Fragment key={i.id}><dt/><dd/></Fragment>)", note: "Use keyed Fragment for sibling pairs/groups." },
        { syntax: "Index as key (limited)", example: "map((x,i)=><li key={i}>)", note: "Only safe for static, never reordered/inserted/removed lists.", valid: true },
        { syntax: "Random key", example: "key={Math.random()}", note: "Breaks identity every render — avoid.", valid: false },
      ]} />

      <Tabs items={[
        { label: "Basic map", code: `function UserList({ users }) {\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}` , note: "Key goes on the outermost element returned per iteration." },
        { label: "Component items", code: `function ProductGrid({ products }) {\n  return (\n    <div className="grid">\n      {products.map((p) => (\n        <ProductCard key={p.id} product={p} />\n      ))}\n    </div>\n  );\n}` , note: "Extract list items into components for clarity and reuse." },
        { label: "Filter + sort", code: `const visible = users\n  .filter((u) => u.active)\n  .slice()\n  .sort((a,b) => a.name.localeCompare(b.name));\n\nreturn <ul>{visible.map(u => <li key={u.id}>{u.name}</li>)}</ul>;` , note: "Transform data outside deep JSX; copy before mutating sort." },
        { label: "Nested lists", code: `{categories.map((cat) => (\n  <section key={cat.id}>\n    <h2>{cat.name}</h2>\n    <ul>\n      {cat.products.map((p) => (\n        <li key={p.id}>{p.name}</li>\n      ))}\n    </ul>\n  </section>\n))}` , note: "Keys must be unique among siblings at each list level (not globally required)." },
        { label: "Keyed fragments", code: `import { Fragment } from "react";\n\n<dl>\n  {terms.map(t => (\n    <Fragment key={t.id}>\n      <dt>{t.term}</dt>\n      <dd>{t.def}</dd>\n    </Fragment>\n  ))}\n</dl>` , note: "Return multiple nodes per item without invalid wrappers." },
        { label: "Empty/conditional", code: `if (users.length === 0) return <p>No users found.</p>;\nreturn (\n  <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>\n);\n\n// or inline\n{items.length > 0 ? <List items={items}/> : <Empty/>}` , note: "Always design explicit empty/loading/error states." },
      ]} />

      <NoteHeading>Keys: rules, identity, and pitfalls</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Previous tree", note: "React has prior list elements and their keys." },
        { label: "New data", note: "Items may be added, removed, reordered, or updated." },
        { label: "Match by key", note: "Stable keys let React associate old/new items correctly." },
        { label: "Preserve state", note: "Correct identity preserves component state and DOM focus/inputs." },
        { label: "Update efficiently", note: "Avoids unnecessary remounts and mismatched updates." },
      ]} />
      <ComparePanels
        left={{ title: "Bad key choices", tone: "bad", code: `key={index} // risky if dynamic\nkey={Math.random()} // new every render\nkey={item.name} // not guaranteed unique/stable` , note: "Can cause state bugs, lost input, wrong animations/updates." }}
        right={{ title: "Good key choices", tone: "good", code: `key={item.id}        // stable unique id\nkey={item.uuid}\nkey={slug}           // if truly unique+stable\nkey={item.id ?? item.email}` , note: "Prefer durable identifiers from data/backend." }}
      />
      <RuleGrid rules={[
        { title: "Unique among siblings", body: "Keys only need uniqueness within the same array render, not globally." },
        { title: "Stable across renders", body: "Same item should keep the same key over time." },
        { title: "Key is not a prop", body: "key is consumed by React; pass id separately if child needs it (id={item.id})." },
        { title: "Put key on mapped root", body: "The element returned directly inside map gets the key (including Fragment)." },
        { title: "Index is conditional", body: "OK for static lists that never reorder/change; unsafe for editable/dynamic lists." },
        { title: "No key warnings", body: "Missing/unstable keys can cause subtle bugs even when UI ‘looks fine’ initially." },
      ]} />

      <NoteHeading>Advanced list patterns</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Conditional items", example: "items.map(i => show(i) && <Row key={i.id}/>)", note: "May insert false/null in array; prefer filter before map.", valid: true },
        { syntax: "reduce to nodes", example: "items.reduce((acc, i) => [...], [])", note: "Useful for separators/complex accumulation." },
        { syntax: "Interleaving separators", example: "items.flatMap((i,idx)=> idx?[<Sep key=.../>,<I/>]:[<I/>])", note: "Ensure every element in result has a stable key." },
        { syntax: "Windowing/virtualization", example: "render visible slice only", note: "Performance pattern for very large lists (libraries/common technique)." },
        { syntax: "Pagination/infinite", example: "concat pages then map", note: "Maintain stable ids across pages; handle loading/empty states." },
        { syntax: "Grouped rendering", example: "Object.groupBy/map groups", note: "Render section headers + nested lists with proper keys at each level." },
      ]} />

      <NoteTakeaways items={[
        "Use map/filter/sort/flatMap to transform data into renderable lists; keep transforms readable.",
        "Keys must be stable and unique among siblings — prefer real IDs; avoid random/index for dynamic lists.",
        "Place key on the direct mapped root (element or Fragment) and don’t expect key as a prop.",
        "Handle empty, loading, and error states explicitly; consider virtualization for large datasets.",
      ]} />
    </div>
  );
}
