import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, ConditionalPlayground, RenderValueMatrix, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function BooleanRenderingBehaviorR3S16() {
  return (
    <div>
      <SectionHero
        title="Boolean Rendering Behavior"
        subtitle="Booleans (true, false) are valid React children but render nothing visible. This enables conditional patterns like {cond && <X/>}, while requiring care with truthy/falsy values such as 0 and empty strings."
        chips={["true/false hidden", "&& conditionals", "0 pitfall", "Explicit booleans"]}
      />

      <RenderValueMatrix />
      <ConditionalPlayground />

      <NoteHeading>Boolean rendering rules and variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "{true}", example: "<div>{true}</div>", note: "Renders nothing." },
        { syntax: "{false}", example: "<div>{false}</div>", note: "Renders nothing." },
        { syntax: "{cond && <A/>}", example: "{isOpen && <Modal/>}", note: "Renders <A/> when cond is truthy; renders cond when cond is falsy (can be 0!)." },
        { syntax: "{cond ? <A/> : <B/>}", example: "{ok ? <Yes/> : <No/>}", note: "Explicit branch selection; no leakage of falsy display values." },
        { syntax: "{cond ? <A/> : null}", example: "{show ? <A/> : null}", note: "Render element or nothing." },
        { syntax: "Boolean prop", example: "<Input disabled={true} />", note: "Props/attributes can be boolean; different from child rendering." },
        { syntax: "String coercion", example: "{String(flag)} / {flag.toString()}", note: "Renders 'true'/'false' as text if you actually want to display it." },
      ]} />

      <Tabs items={[
        { label: "&& pattern", code: `function Panel({ canEdit, items }) {\n  return (\n    <div>\n      {canEdit && <button>Edit</button>}\n      {items.length > 0 && <List items={items} />}\n      {Boolean(user) && <Avatar user={user} />}\n    </div>\n  );\n}` , note: "Use when you want ‘show or nothing’; ensure left side is a real boolean." },
        { label: "Ternary pattern", code: `{isLoading ? <Spinner /> : <Content />}\n{error ? <Error /> : null}\n{isOn ? "On" : "Off"}` , note: "Clear for either/or and for rendering text labels." },
        { label: "Falsy pitfalls", code: `const count = 0;\n<div>{count && <Badge />}</div>   // renders 0\n<div>{count > 0 && <Badge />}</div> // renders nothing\n\nconst text = "";\n<div>{text && <p>{text}</p>}</div> // renders "" (empty)\n<div>{text?.length > 0 && <p>{text}</p>}</div>` , note: "&& evaluates to left operand if falsy — React will render it if it’s 0/NaN/''." },
        { label: "Display booleans", code: `<p>Status: {isActive ? "Active" : "Inactive"}</p>\n<pre>{JSON.stringify(flags, null, 2)}</pre>\n<td>{String(enabled)}</td>` , note: "Convert to human-readable text when the value itself must be shown." },
      ]} />

      <NoteHeading>Why && works (and when it surprises)</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Evaluate left side", note: "JS && returns left operand if it’s falsy, else right operand." },
        { label: "If falsy number/string", note: "Result may be 0, '', or NaN — all are renderable values in React (except '' shows empty)." },
        { label: "If true", note: "Result is right operand (often a JSX element) — React renders it." },
        { label: "Fix", note: "Coerce to boolean: cond > 0, !!cond, Boolean(cond), or use ternary." },
      ]} />

      <ComparePanels
        left={{ title: "Risky", tone: "bad", code: `{items.length && <List items={items} />}\n{page && <span>Page {page}</span>} // page 0?\n{discount && <Tag/>} // 0%?` }}
        right={{ title: "Safe", tone: "good", code: `{items.length > 0 && <List items={items} />}\n{page != null && <span>Page {page}</span>}\n{discount > 0 && <Tag/>}\n{!!value && <Comp/>}` }}
      />

      <RuleGrid rules={[
        { title: "Booleans don’t display", body: "true/false render nothing — perfect for guards, not for showing state labels." },
        { title: "&& returns operands", body: "Not always a boolean; React renders the resulting value (including 0)." },
        { title: "Prefer explicit checks", body: "Comparisons communicate intent and avoid edge cases." },
        { title: "Ternary for alternatives", body: "Use when you need an else branch or explicit null." },
        { title: "Boolean attributes differ", body: "disabled={isBusy} controls element behavior; {isBusy} as child would be invisible." },
        { title: "TypeScript helps", body: "Typed conditions and lint rules can catch some unintended patterns." },
      ]} />

      <NoteTakeaways items={[
        "true and false render nothing as children; they’re useful in conditional expressions.",
        "{cond && <X/>} can accidentally render 0/NaN/'' — use explicit boolean conditions.",
        "Use ternaries for two-way rendering and String()/labels when you must display boolean state.",
        "Understand JS operator semantics (&&, ||, ??) because React renders their resulting values.",
      ]} />
    </div>
  );
}
