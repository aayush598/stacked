import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function RenderingArraysR3S12() {
  return (
    <div>
      <SectionHero
        title="Rendering Arrays"
        subtitle="Arrays are valid React children when they contain renderable nodes. React can render arrays of strings, numbers, elements, fragments, and even nested arrays — with key requirements for element collections."
        chips={["Arrays as children", "Mixed types", "Nested arrays", "Keys", "Flattening"]}
      />

      <NoteHeading>What array contents React can render</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Array of strings", example: '{["A","B","C"]}', note: "Renders concatenated text nodes (no automatic separators)." },
        { syntax: "Array of numbers", example: "{[1, 2, 3]}", note: "Renders numeric text (including 0)." },
        { syntax: "Array of elements", example: "{[<b key=1/>, <i key=2/>]}", note: "Each element in a dynamic/constructed array should have a stable key." },
        { syntax: "Mixed array", example: '{["Hi", 2, <X key="x"/>, null]}', note: "null/undefined/booleans inside render nothing." },
        { syntax: "Nested arrays", example: "{[[<a key=1/>],[<b key=2/>]]}", note: "React flattens renderable nested arrays during rendering." },
        { syntax: "Array with conditionals", example: "{[a && <A key=a/>, b ? <B key=b/> : null]}", note: "Be mindful of false values — filter or ensure keys/nulls are intentional." },
        { syntax: "Empty array", example: "{[]}", note: "Renders nothing." },
      ]} />

      <Tabs items={[
        { label: "Primitives", code: `function App() {\n  const names = ["John", "Sarah", "David"];\n  const nums = [10, 20, 30];\n  return (\n    <>\n      <div>{names}</div>      {/* JohnSarahDavid */}\n      <div>{names.join(", ")}</div>\n      <div>{nums}</div>\n    </>\n  );\n}` , note: "Add separators/formatting explicitly (join, map with commas, CSS)." },
        { label: "Elements array", code: `const items = [\n  <li key="a">A</li>,\n  <li key="b">B</li>,\n  <li key="c">C</li>,\n];\nreturn <ul>{items}</ul>;` , note: "Keys identify elements in collections." },
        { label: "Nested arrays", code: `const nested = [\n  [<span key="1">One</span>],\n  [<span key="2">Two</span>, <span key="3">Three</span>],\n];\nreturn <div>{nested}</div>; // flattened output` , note: "Useful with some data shapes, but explicit map/flatMap is often clearer." },
        { label: "flat/flatMap", code: `const groups = [[1,2],[3]];\nconst flat = groups.flat();\nreturn <>{flat.map(n => <span key={n}>{n}</span>)}</>;\n\n// or\n{groups.flatMap(g => g.map(n => <Chip key={n} n={n}/>))}` , note: "Normalize data shape before rendering for clarity." },
        { label: "Interleaving", code: `const list = items.map((it, i) => (\n  <Fragment key={it.id}>\n    {i > 0 && ", "}\n    <span>{it.label}</span>\n  </Fragment>\n));\nreturn <p>{list}</p>;` , note: "Common for comma-separated inline elements." },
      ]} />

      <NoteHeading>Arrays vs props.children and React.Children</NoteHeading>
      <ComparePanels
        left={{ title: "children (opaque shape)", tone: "neutral", code: `function Box({ children }) {\n  // children may be: undefined, string, element,\n  // array, fragment, number, null, boolean...\n  return <div>{children}</div>;\n}` }}
        right={{ title: "Normalizing children", tone: "good", code: `import { Children, toArray } from "react";\nconst arr = Children.toArray(children);\nconst count = Children.count(children);\nChildren.forEach(children, fn);\nChildren.map(children, fn);` }}
      />
      <RuleGrid rules={[
        { title: "Don’t assume array", body: "A single child is not passed as an array; multiple children may be. Use React.Children/toArray when needed." },
        { title: "Keys in arrays", body: "Elements inside arrays should have keys when React needs to track identity (especially dynamic collections)." },
        { title: "No auto separators", body: "Rendering ['a','b'] produces ab; join/format explicitly for readable text." },
        { title: "Booleans/null inside", body: "false/true/null/undefined entries render nothing — convenient but be careful with && patterns." },
      ]} />

      <NoteHeading>Common array rendering pitfalls</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Missing keys", example: "{items.map(i => <li>{i}</li>)}", note: "Warning and potential reconciliation issues.", valid: false },
        { syntax: "Object arrays rendered directly", example: "{users} where users are objects", note: "Objects are not valid children — map to elements/fields.", valid: false },
        { syntax: "Comma/space formatting", example: "{names} -> JohnSarah", note: "Use join, CSS gap, or explicit separators." },
        { syntax: "Mutating during render", example: "items.sort().map(...)", note: "Mutates source; copy first ([...items].sort()).", valid: false },
        { syntax: "Sparse arrays/holes", example: "[1,,3].map(...)", note: "Be explicit; behavior can be surprising — normalize data." },
      ]} />

      <NoteTakeaways items={[
        "Arrays of renderable nodes are valid children; React can render nested arrays and mixed types.",
        "Provide stable keys for element items in collections to preserve identity across updates.",
        "props.children is not always an array — use React.Children utilities for robust handling.",
        "Format separators and normalize/memoize derived arrays appropriately; avoid mutation in render.",
      ]} />
    </div>
  );
}
