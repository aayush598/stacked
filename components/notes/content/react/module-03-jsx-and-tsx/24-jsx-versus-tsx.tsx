import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxVersusTsxR3S24() {
  return (
    <div>
      <SectionHero
        title="JSX versus TSX"
        subtitle="JSX is the syntax extension for writing UI in JavaScript/React; TSX is JSX used in TypeScript files (.tsx) with type checking, typed props, generics, and richer tooling. Understanding the difference helps you author safer, scalable components."
        chips={[".jsx vs .tsx", "Type safety", "Typed props/events", "Generics", "Tooling"]}
      />

      <NoteHeading>What they are</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "JSX", example: "const el = <div className=\"x\" />;", note: "Syntax for UI elements/expressions in React code (commonly .jsx/.js with support)." },
        { syntax: "TSX", example: "const el: JSX.Element = <div />;", note: "JSX syntax inside TypeScript files (.tsx) with type system integration." },
        { syntax: "File extension .jsx", example: "Component.jsx", note: "JavaScript + JSX (no TypeScript types enforced by compiler)." },
        { syntax: "File extension .tsx", example: "Component.tsx", note: "TypeScript + JSX; required for JSX in TS projects." },
        { syntax: "Compilation", example: "Babel/TS/SWC -> JS", note: "Both compile away JSX (and TS types in TSX) to JavaScript." },
      ]} />

      <ComparePanels
        left={{ title: "JSX (JavaScript)", tone: "neutral", code: `// Button.jsx\nexport function Button({ label, onClick, disabled }) {\n  return (\n    <button disabled={disabled} onClick={onClick}>\n      {label}\n    </button>\n  );\n}` , note: "Flexible, but prop contracts are implicit unless documented/runtime-checked." }}
        right={{ title: "TSX (TypeScript)", tone: "good", code: `// Button.tsx\ntype ButtonProps = {\n  label: string;\n  disabled?: boolean;\n  onClick?: () => void;\n};\nexport function Button({ label, onClick, disabled = false }: ButtonProps) {\n  return <button disabled={disabled} onClick={onClick}>{label}</button>;\n}` , note: "Explicit API, editor autocomplete, compile-time checks." }}
      />

      <Tabs items={[
        { label: "Typed props", code: `type CardProps = {\n  title: string;\n  count?: number;\n  children: React.ReactNode;\n  variant?: "info" | "warning";\n};\n\nfunction Card({ title, count = 0, children, variant = "info" }: CardProps) {\n  return <section data-variant={variant}><h3>{title}</h3>{children}</section>;\n}` , note: "Discriminated unions/enums/literals model precise component APIs." },
        { label: "Events & DOM types", code: `function Form() {\n  function onChange(e: React.ChangeEvent<HTMLInputElement>) {\n    console.log(e.target.value);\n  }\n  function onSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n  }\n  return (\n    <form onSubmit={onSubmit}>\n      <input onChange={onChange} />\n    </form>\n  );\n}` , note: "Typed events and elements improve correctness and autocomplete." },
        { label: "Children typing", code: `import type { PropsWithChildren, ReactNode } from "react";\n\ntype Props = PropsWithChildren<{ title: string }>;\n// or\n type Props = { title: string; children?: ReactNode };\n\n// Render-prop\n type Props = { children: (value: number) => ReactNode };` , note: "Model the exact children contract you expect." },
        { label: "Generics in TSX", code: `type ListProps<T> = {\n  items: T[];\n  renderItem: (item: T) => React.ReactNode;\n};\n\nfunction List<T extends { id: string }>({ items, renderItem }: ListProps<T>) {\n  return <ul>{items.map((it) => <li key={it.id}>{renderItem(it)}</li>)}</ul>;\n}\n\n// Usage (inference)\n<List items={users} renderItem={(u) => <span>{u.name}</span>} />` , note: "Generics enable reusable, strongly-typed components." },
        { label: "Polymorphic/forwarding", code: `type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {\n  variant?: "primary" | "ghost";\n};\n\nfunction Button({ variant = "primary", className, ...props }: ButtonProps) {\n  return <button {...props} className={cn(variant, className)} />;\n}` , note: "Extend intrinsic element props for safe attribute forwarding." },
      ]} />

      <NoteHeading>TypeScript-specific JSX details</NoteHeading>
      <RuleGrid rules={[
        { title: "JSX.Element / ReactNode", body: "Common types for renderable values; ReactNode is broader (includes strings, numbers, null, etc.)." },
        { title: "ComponentProps helpers", body: "React.ComponentProps<'div'> or ComponentPropsWithoutRef/WithRef for accurate intrinsic prop typing." },
        { title: "Generics syntax ambiguity", body: "In TSX, <T> can be parsed as JSX; use <T,> or function declarations when needed: const fn = <T,>(x: T) => x." },
        { title: "Type assertions", body: "Prefer value as Type in TSX; angle-bracket assertions <Type>value conflict with JSX in .tsx." },
        { title: "jsxImportSource", body: "Can be configured for libraries with different JSX runtimes (e.g. Preact, Emotion)." },
        { title: "Strict null checks", body: "Encourage handling undefined/null in props and rendering paths explicitly." },
      ]} />

      <SyntaxMatrix rows={[
        { syntax: "Generic arrow in TSX", example: "const id = <T,>(x: T) => x;", note: "Trailing comma avoids JSX parsing ambiguity." },
        { syntax: "Generic function", example: "function id<T>(x: T){ return x }", note: "Unambiguous in TSX." },
        { syntax: "Type assertion", example: "const el = value as HTMLDivElement;", note: "Use 'as' syntax in TSX files." },
        { syntax: "Intrinsic element props", example: "React.SVGProps<SVGSVGElement>", note: "Typed SVG/HTML attribute sets." },
        { syntax: "Ref typing", example: "useRef<HTMLInputElement>(null)", note: "Strongly-typed refs for DOM/components." },
      ]} />

      <NoteHeading>Choosing JSX vs TSX</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Small/prototype", note: "JSX can be fast to start, but contracts are implicit." },
        { label: "Growing codebase", note: "TSX catches prop/typing errors early and documents APIs." },
        { label: "Team/shared components", note: "Typed interfaces improve collaboration and refactoring safety." },
        { label: "Production scale", note: "TSX + strict settings typically reduce runtime bugs and regressions." },
      ]} />
      <ComparePanels
        left={{ title: "When JSX is enough", tone: "neutral", code: `- quick demos/spikes\n- very small scripts\n- learning fundamentals\n- environments without TS setup` }}
        right={{ title: "When TSX is strongly preferred", tone: "good", code: `- reusable component libraries\n- large/team codebases\n- complex props/state/data shapes\n- refactoring-heavy projects\n- API/contract clarity` }}
      />

      <NoteCallout tone="insight">TSX doesn’t change how JSX works at runtime — it adds a compile-time type system around the same JSX syntax and React model, giving you safer props, better tooling, and clearer component contracts.</NoteCallout>

      <NoteTakeaways items={[
        "JSX is the UI syntax; TSX is JSX in TypeScript (.tsx) with static typing and enhanced tooling.",
        "Both compile to JavaScript; TSX additionally enforces types for props, state, events, refs, and children.",
        "Use TypeScript patterns (ComponentProps, ReactNode, generics, unions) to model precise component APIs.",
        "For production and team projects, TSX generally provides better maintainability and fewer runtime prop/contract bugs.",
      ]} />
    </div>
  );
}
