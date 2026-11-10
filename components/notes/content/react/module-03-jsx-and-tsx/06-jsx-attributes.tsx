import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxAttributesR3S6() {
  return (
    <div>
      <SectionHero
        title="JSX Attributes"
        subtitle="Attributes (props) configure elements and components. JSX supports string literals, expression values, boolean shorthand, spreads, event handlers, style objects, refs, and accessibility/data attributes — with React-specific naming rules."
        chips={["Props", "Strings vs {expr}", "Booleans", "Spread", "className/htmlFor", "aria/data-*"]}
      />

      <NoteHeading>Attribute syntax variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: 'name="value"', example: '<input type="text" />', note: "String literal prop/attribute." },
        { syntax: "name={'value'}", example: "<input type={'text'} />", note: "String via expression (equivalent here, sometimes used dynamically)." },
        { syntax: "name={expr}", example: "<img src={url} />", note: "Any JS expression: variables, calls, objects, arrays, functions." },
        { syntax: "name", example: "<input disabled />", note: "Boolean attribute shorthand — usually equivalent to name={true}." },
        { syntax: "name={true/false}", example: "<input disabled={busy} />", note: "Explicit boolean control (preferred for dynamic values)." },
        { syntax: "{...props}", example: "<input {...inputProps} />", note: "Spread object properties as attributes/props." },
        { syntax: "name={fn}", example: "<button onClick={save} />", note: "Event handler/function prop." },
        { syntax: "style={{...}}", example: "<div style={{color:'red'}} />", note: "Style object (camelCased properties)." },
        { syntax: "data-* / aria-*", example: '<div data-id="1" aria-label="x" />', note: "Data and accessibility attributes passed through to DOM." },
      ]} />

      <Tabs items={[
        { label: "Strings & numbers", code: `<img src="/logo.png" alt="Logo" width={120} height={40} />\n<Input placeholder="Search" maxLength={50} />`, note: "Use quotes for literals, braces for numbers/variables/expressions." },
        { label: "Booleans", code: `<input required />\n<input required={true} />\n<input disabled={false} />\n<Modal open={isOpen} dismissible />`, note: "Presence often means true; explicit {boolean} is clearest when dynamic." },
        { label: "Objects/arrays/functions", code: `<Chart data={points} options={{ animate: true }} />\n<List items={[1,2,3]} renderItem={(x) => <li>{x}</li>} />\n<button onClick={() => onSave(id)}>Save</button>`, note: "Props can carry any JS value your component expects." },
        { label: "Spread", code: `const inputProps = { type: "email", value, onChange };\nreturn <input {...inputProps} autoComplete="email" />;`, note: "Combine spreads and explicit props; later values override earlier ones." },
      ]} />

      <NoteHeading>HTML vs JSX attribute names (important differences)</NoteHeading>
      <ComparePanels
        left={{ title: "HTML", tone: "neutral", code: `<div class="box"></div>\n<label for="email">Email</label>\n<input tabindex="1" readonly maxlength="10">\n<td colspan="2"></td>\n<svg stroke-width="2"></svg>` }}
        right={{ title: "JSX / React DOM", tone: "good", code: `<div className="box"></div>\n<label htmlFor="email">Email</label>\n<input tabIndex={1} readOnly maxLength={10} />\n<td colSpan={2}></td>\n<svg strokeWidth="2"></svg>` }}
      />
      <SyntaxMatrix rows={[
        { syntax: "class", example: 'class="a" → className="a"', note: "class is a reserved word in JS." },
        { syntax: "for", example: 'for="id" → htmlFor="id"', note: "for is reserved in JS." },
        { syntax: "tabindex", example: "tabindex → tabIndex", note: "camelCase DOM property naming in JSX." },
        { syntax: "readonly", example: "readonly → readOnly", note: "camelCase exception to know." },
        { syntax: "maxlength", example: "maxlength → maxLength", note: "camelCase form." },
        { syntax: "onclick", example: 'onclick="..." → onClick={fn}', note: "Event handlers are camelCased function props." },
        { syntax: "contenteditable", example: "contenteditable → contentEditable", note: "camelCase in JSX." },
        { syntax: "colspan/rowspan", example: "colspan → colSpan", note: "camelCase." },
      ]} />

      <NoteHeading>Special and common attributes</NoteHeading>
      <RuleGrid rules={[
        { title: "className", body: "Use for CSS classes on DOM elements; can be built dynamically (strings, helpers, clsx)." },
        { title: "htmlFor", body: "Associates labels with form controls by id (accessibility + click focus behavior)." },
        { title: "style", body: "Accepts an object {{ camelCasedProp: value }}; not a CSS string." },
        { title: "dangerouslySetInnerHTML", body: "Injects raw HTML via {{ __html: sanitized }} — use only with trusted/sanitized content." },
        { title: "key", body: "Special React prop for list identity; not available via props in the child component." },
        { title: "ref", body: "References DOM nodes/component handles; special handling (React 19 allows ref prop on function components)." },
        { title: "children", body: "Content between tags; can also be passed as children={...} (tags usually clearer)." },
        { title: "suppressHydrationWarning", body: "Advanced escape hatch for intentional server/client text mismatches." },
      ]} />

      <NoteHeading>data-* and aria-* attributes</NoteHeading>
      <NoteCode filename="a11y-data.tsx" code={`<button\n  type="button"\n  aria-label="Close dialog"\n  aria-expanded={open}\n  aria-controls="menu"\n  data-testid="close-btn"\n  data-track="modal-close"\n>\n  <XIcon aria-hidden="true" />\n</button>`} />
      <NoteText>Use <code>aria-*</code> for accessibility semantics/state and <code>data-*</code> for custom metadata/testing hooks. These are passed through on host elements.</NoteText>

      <NoteHeading>Component props vs DOM attributes</NoteHeading>
      <ComparePanels
        left={{ title: "Component prop contract", tone: "neutral", code: `function Avatar({ size, src, alt }) {\n  return <img src={src} alt={alt} width={size} />;\n}\n<Avatar size={48} src={u} alt="A" />` , note: "Props are consumed by your component logic." }}
        right={{ title: "Forwarding to DOM", tone: "good", code: `function Input({ label, ...rest }) {\n  return <label>{label}<input {...rest} /></label>;\n}\n<Input label="Email" type="email" required />` , note: "Only forwarded props reach the underlying DOM element." }}
      />

      <NoteCallout tone="insight">Before passing an attribute, know the target: host elements expect valid DOM/SVG attributes/properties; components accept whatever props you define (or forward). TypeScript in TSX helps catch invalid prop names/types.</NoteCallout>

      <NoteTakeaways items={[
        "JSX attributes support strings, expressions, boolean shorthand, spreads, and special props (key/ref/children).",
        "Use React/DOM naming: className, htmlFor, camelCased events/properties (tabIndex, onClick, etc.).",
        "style takes an object; data-* and aria-* are essential for metadata and accessibility.",
        "Spread order matters and component props don’t become DOM attributes unless explicitly forwarded.",
      ]} />
    </div>
  );
}
