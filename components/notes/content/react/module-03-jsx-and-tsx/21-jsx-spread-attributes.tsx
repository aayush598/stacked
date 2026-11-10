import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SpreadOrderDemo, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxSpreadAttributesR3S21() {
  return (
    <div>
      <SectionHero
        title="JSX Spread Attributes"
        subtitle="Spread syntax ({...props}) forwards multiple attributes/props at once. It is powerful for reusable components and wrappers, but prop precedence, unknown prop leakage, and readability require careful control."
        chips={["{...props}", "Forwarding", "Precedence", "Rest/destructure", "Type safety"]}
      />

      <SpreadOrderDemo />

      <NoteHeading>Syntax variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Spread all", example: "<input {...props} />", note: "Pass every enumerable property as prop/attribute." },
        { syntax: "Spread then override", example: "<input {...props} disabled />", note: "Later explicit prop overrides spread value." },
        { syntax: "Override then spread", example: "<input disabled {...props} />", note: "Spread may override earlier explicit prop." },
        { syntax: "Multiple spreads", example: "<Comp {...a} {...b} x={1} />", note: "Applied left-to-right; last wins for same key." },
        { syntax: "Spread children? (rare)", example: "<Comp>{...items}</Comp>", note: "Not a common pattern; usually pass array as child {items}." },
        { syntax: "Rest in params", example: "function C({x, ...rest}){}", note: "Separate owned props from forwarded props." },
        { syntax: "Conditional spread", example: "<Comp {...(ok ? props : {})} />", note: "Include props conditionally." },
        { syntax: "Computed source", example: "<input {...getProps()} />", note: "Spread result of expression/object." },
      ]} />

      <Tabs items={[
        { label: "Basic forwarding", code: `function TextInput(props) {\n  return <input className="input" {...props} />;\n}\n\n<TextInput type="email" placeholder="Email" value={v} onChange={onChange} />` , note: "Simple, but may forward unwanted props or override className unintentionally." },
        { label: "Controlled forwarding", code: `function TextInput({ label, className, ...inputProps }) {\n  return (\n    <label className="field">\n      <span>{label}</span>\n      <input {...inputProps} className={cn("input", className)} />\n    </label>\n  );\n}` , note: "Extract component-owned props; merge className/handlers intentionally." },
        { label: "Precedence rules", code: `const props = { disabled: true, type: "text" };\n\n<input {...props} disabled={false} /> // disabled -> false\n<input disabled={false} {...props} /> // disabled -> true\n<input {...props} type="email" />    // type -> "email"` , note: "Order determines final value for duplicate keys." },
        { label: "Multiple spreads", code: `const base = { size: "md", variant: "ghost" };\nconst state = isActive ? { variant: "solid" } : {};\n<Button {...base} {...state} size="lg" />\n// final: variant from state (if active) or base, size lg` , note: "Layer defaults, state, and explicit overrides predictably." },
        { label: "Conditional spreads", code: `<a\n  href={href}\n  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}\n  {...ariaProps}\n/>` , note: "Add groups of attributes conditionally without mutation." },
      ]} />

      <NoteHeading>Precedence and override behavior</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Start left", note: "Props are applied in order of appearance." },
        { label: "Apply spread", note: "All keys from object are set/overwritten." },
        { label: "Apply next prop/spread", note: "Later values replace earlier ones for same key." },
        { label: "Final value wins", note: "Result is the last assignment for each prop name." },
      ]} />

      <ComparePanels
        left={{ title: "Risk: unintended override", tone: "bad", code: `function Button(props) {\n  return <button className="btn" {...props} />;\n}\n// props.className can replace "btn" entirely` }}
        right={{ title: "Intentional merge", tone: "good", code: `function Button({ className, ...rest }) {\n  return <button {...rest} className={cn("btn", className)} />;\n}` }}
      />

      <NoteHeading>Best practices and risks</NoteHeading>
      <RuleGrid rules={[
        { title: "Prefer explicit APIs", body: "List important props explicitly for readability and documentation; spread the remainder if appropriate." },
        { title: "Filter/own before forwarding", body: "Remove component-only props (variant, isLoading) so they don’t leak to DOM as invalid attributes." },
        { title: "Be careful with className/style", body: "Merge instead of blindly overriding when your component provides base styling." },
        { title: "Event handler composition", body: "If both internal and forwarded handlers exist, compose them intentionally (call both)." },
        { title: "Security/behavior", body: "Spreading untrusted objects can inject unexpected handlers/URLs/attrs — validate inputs." },
        { title: "TypeScript typing", body: "Use proper prop types (e.g. React.ComponentProps<'input'>) to keep forwarding type-safe." },
        { title: "Avoid over-spreading", body: "Large opaque spreads make it hard to see what a component actually receives/supports." },
        { title: "Children handling", body: "Be explicit about children; avoid confusing patterns with spreads and children together." },
      ]} />

      <NoteCode filename="typed-forwarding.tsx" code={`type InputProps = React.ComponentPropsWithoutRef<"input"> & {\n  label?: string;\n};\n\nfunction Input({ label, className, ...props }: InputProps) {\n  return (\n    <label>\n      {label && <span>{label}</span>}\n      <input {...props} className={cn("input", className)} />\n    </label>\n  );\n}`} />

      <NoteCallout tone="warning">Spread is not “bad”, but uncontrolled spreading obscures component contracts and can cause subtle bugs (overrides, invalid DOM attrs, leaked internals). Make precedence and ownership explicit.</NoteCallout>

      <NoteTakeaways items={[
        "Use {...obj} to forward multiple props; multiple spreads and explicit props apply in order (last wins).",
        "Destructure to separate component-owned props from forwarded rest props.",
        "Merge critical props like className/style/handlers intentionally instead of accidental override.",
        "In TSX, type forwarded props precisely and avoid spreading untrusted or unknown objects blindly.",
      ]} />
    </div>
  );
}
