import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, ExpressionPlayground, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function RenderingStringsAndNumbersR3S13() {
  return (
    <div>
      <SectionHero
        title="Rendering Strings and Numbers"
        subtitle="Strings and numbers are the most common primitive React children. They render as text nodes. Formatting, coercion, whitespace, localization, and the special case of 0 are key practical details."
        chips={["Text nodes", "Formatting", "0 is visible", "Whitespace", "Localization"]}
      />

      <ExpressionPlayground />

      <NoteHeading>Syntax and rendering patterns</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "String literal child", example: "<p>Hello</p>", note: "Static text content." },
        { syntax: "String expression", example: "<p>{name}</p>", note: "Renders value as text." },
        { syntax: "Template literal", example: "{`Hi ${first} ${last}`}", note: "Compose formatted strings in JS." },
        { syntax: "Number expression", example: "<span>{count}</span>", note: "Renders numeric text (e.g. 42)." },
        { syntax: "0", example: "<span>{0}</span>", note: "Visible output: 0 (important for && pitfalls)." },
        { syntax: "NaN", example: "<span>{NaN}</span>", note: "Renders as NaN text." },
        { syntax: "Infinity", example: "<span>{Infinity}</span>", note: "Renders as Infinity text (usually avoid showing raw)." },
        { syntax: "BigInt", example: "{big.toString()}", note: "Convert to string/number representation for display as needed." },
        { syntax: "Computed", example: "{price * qty}", note: "Expression result rendered as text." },
        { syntax: "Formatted", example: "{value.toFixed(2)}", note: "Format in JS before rendering." },
      ]} />

      <Tabs items={[
        { label: "Basic rendering", code: `return (\n  <div>\n    <h1>{"Welcome"}</h1>\n    <p>{username}</p>\n    <p>Items: {items.length}</p>\n    <p>Total: {price * qty}</p>\n  </div>\n);` , note: "Primitives render predictably as text." },
        { label: "Formatting numbers", code: `const n = 1234567.89;\n<p>{n.toLocaleString("en-IN")}</p>\n<p>{n.toFixed(2)}</p>\n<p>{new Intl.NumberFormat("en-IN", { style:"currency", currency:"INR" }).format(n)}</p>` , note: "Use Intl APIs for locale-aware currency/number formatting." },
        { label: "Dates/strings", code: `const d = new Date();\n<p>{d.toLocaleDateString()}</p>\n<p>{title.trim()}</p>\n<p>{text.slice(0, 120)}</p>` , note: "Convert/format non-renderable objects (Date) to strings/numbers." },
        { label: "Whitespace & breaks", code: `<p>Hello {" "} {name}</p>\n<p>\n  Line 1<br />Line 2\n</p>\n<pre>{multilineText}</pre>` , note: "JSX collapses some whitespace; use {' '}, <br/>, or <pre> intentionally." },
        { label: "Concatenation vs nodes", code: `<p>Name: {first} {last}</p>\n<p>{"Name: " + first + " " + last}</p>\n<p>{\`Name: \${first} \${last}\`}</p>` , note: "All valid; prefer readability and avoid unnecessary string building in complex cases." },
      ]} />

      <NoteHeading>Edge cases and pitfalls</NoteHeading>
      <ComparePanels
        left={{ title: "0 with && (pitfall)", tone: "bad", code: `{count && <span>Has items</span>}\n// count === 0 => renders 0` , note: "0 is a renderable number, not ‘nothing’." }}
        right={{ title: "Explicit checks", tone: "good", code: `{count > 0 && <span>Has items</span>}\n{Number.isFinite(value) && <span>{value}</span>}\n{value != null ? String(value) : "—"}` , note: "Be intentional about visibility and formatting." }}
      />

      <SyntaxMatrix rows={[
        { syntax: "Empty string", example: '{""}', note: "Renders empty text node (no visible characters)." },
        { syntax: "String '0'", example: '{"0"}', note: "Renders visible 0 character." },
        { syntax: "Number 0", example: "{0}", note: "Renders visible 0." },
        { syntax: "Leading/trailing spaces", example: "<p> A {b} C </p>", note: "Some whitespace collapses in HTML rendering; be explicit when spacing matters." },
        { syntax: "Newlines in text", example: "{'a\\nb'} in <p>", note: "Rendered whitespace depends on CSS; use <br/> or white-space styling for breaks." },
        { syntax: "Unsafe HTML in strings", example: "{'<b>x</b>'}", note: "Rendered as text (escaped), not interpreted as HTML — safe by default." },
      ]} />

      <RuleGrid rules={[
        { title: "Escaping by default", body: "React escapes string content when rendering, helping prevent XSS from plain text interpolation." },
        { title: "Format for users", body: "Use locale/currency/units/date formatting appropriate to context." },
        { title: "Avoid raw objects", body: "Plain objects are not valid children; render fields or stringify intentionally for debug views." },
        { title: "Handle nullish values", body: "Decide on fallbacks: '', '—', 0, or hide the element." },
        { title: "Precision matters", body: "Use toFixed/Intl for display; beware floating-point artifacts in JS math." },
        { title: "Accessibility of text", body: "Ensure generated text is meaningful to assistive tech (labels, units, status)." },
      ]} />

      <NoteTakeaways items={[
        "Strings and numbers render as text; React escapes string children by default.",
        "0 is visible output — always use explicit boolean conditions with && when needed.",
        "Format numbers/dates/locale-specific values in JavaScript for clear, correct display.",
        "Control whitespace/newlines intentionally ({' '}, <br/>, <pre>, CSS white-space) and provide fallbacks for missing values.",
      ]} />
    </div>
  );
}
