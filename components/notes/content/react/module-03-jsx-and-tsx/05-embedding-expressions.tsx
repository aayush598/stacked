import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, ExpressionPlayground, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function EmbeddingExpressionsR3S5() {
  return (
    <div>
      <SectionHero
        title="Embedding Expressions in JSX"
        subtitle="Curly braces { } embed JavaScript expressions into JSX as children or attribute values. You can render values, compute results, call functions, access data, and choose UI — but statements are not allowed inside expression containers."
        chips={["{expression}", "Children & props", "Any JS expression", "No statements", "Rendering rules"]}
      />

      <NoteHeading>How expression containers work</NoteHeading>
      <NoteText>In JSX, <code>{`{ }`}</code> escapes from markup into JavaScript expression context. The expression is evaluated and its result is used as a child/prop value (subject to React’s rendering rules for types like strings, numbers, elements, arrays, null, booleans, etc.).</NoteText>
      <ExpressionPlayground />

      <SyntaxMatrix rows={[
        { syntax: "{variable}", example: "<h1>{name}</h1>", note: "Render a value from scope/props/state." },
        { syntax: "{a + b}", example: "<p>{price * qty}</p>", note: "Arithmetic/logical expressions are fine." },
        { syntax: "{obj.prop}", example: "<span>{user.email}</span>", note: "Member access and optional chaining expressions." },
        { syntax: "{arr[i]}", example: "<span>{items[0]}</span>", note: "Index/computed access expressions." },
        { syntax: "{fn()}", example: "<h1>{formatDate(d)}</h1>", note: "Call pure/appropriate functions to produce values." },
        { syntax: "{cond ? A : B}", example: "{ok ? <Ok/> : <Err/>}", note: "Conditional expression (ternary) is valid." },
        { syntax: "{cond && <X/>}", example: "{show && <Modal/>}", note: "Logical expressions — watch for 0/NaN rendering pitfalls." },
        { syntax: "{value ?? fallback}", example: "{title ?? 'Untitled'}", note: "Nullish coalescing for null/undefined fallbacks." },
        { syntax: "{`template ${x}`}", example: "<p>{`Hi ${name}`}</p>", note: "Template literals and string expressions." },
        { syntax: "{<Child/>}", example: "{<Badge/>}", note: "A JSX element is itself an expression." },
      ]} />

      <Tabs items={[
        { label: "Variables & literals", code: `const name = "John";\nconst count = 3;\nreturn (\n  <div>\n    <h1>Hello, {name}</h1>\n    <p>Count: {count}</p>\n    <p>{"static in braces"}</p>\n  </div>\n);`, note: "Any expression value can be embedded; strings/numbers render as text." },
        { label: "Math & logic", code: `const total = price * quantity;\nconst label = isNew && "New";\nreturn (\n  <>\n    <p>Total: {price * quantity}</p>\n    <p>Taxed: {Math.round(total * 1.18)}</p>\n    <p>{label || "Standard"}</p>\n  </>\n);`, note: "Compute inline for simple cases; extract when complex." },
        { label: "Function calls", code: `function formatName(user) {\n  return user.first + " " + user.last;\n}\nreturn <h2>{formatName(user)}</h2>;`, note: "Call functions that return renderable values/elements; keep them pure-ish during render." },
        { label: "Objects & arrays", code: `return (\n  <div>\n    <p>{user.profile.role}</p>\n    <p>{user.tags?.[0]}</p>\n    <p>{JSON.stringify(meta)}</p>\n  </div>\n);`, note: "Access nested data; objects themselves are not valid React children (render specific fields)." },
        { label: "As attribute values", code: `<input\n  value={value}\n  placeholder={placeholderText}\n  maxLength={max}\n  disabled={isSaving}\n  onChange={handleChange}\n/>`, note: "Braces pass expression results as props/attributes." },
      ]} />

      <NoteHeading>Expressions vs statements (critical rule)</NoteHeading>
      <NoteText>JSX expression containers accept <strong>expressions</strong> (produce a value) — not statements (perform actions/control flow declarations). This is a JavaScript language rule, not just React preference.</NoteText>
      <ComparePanels
        left={{ title: "Invalid in { }", tone: "bad", code: `{if (ok) { <A/> }}\n{for (const x of xs) ...}\n{switch (s) { ... }}\n{const y = 1}\n{let z;}`, note: "if/for/while/switch/variable declarations are statements." }}
        right={{ title: "Valid alternatives", tone: "good", code: `{ok ? <A/> : <B/>}\n{xs.map(x => <X key={x.id} />)}\n{(() => { /* IIFE with statements */ return val; })()}\n{getContent(s)}\n{contentVariable}`, note: "Use expressions, map, helpers, or precomputed variables." }}
      />

      <SyntaxMatrix rows={[
        { syntax: "if / else", example: "{if (x) ...}", note: "Statement — not allowed in JSX braces.", valid: false },
        { syntax: "ternary", example: "{x ? <A/> : <B/>}", note: "Expression — allowed.", valid: true },
        { syntax: "for/while", example: "{for (...) ...}", note: "Statements — not allowed.", valid: false },
        { syntax: "map/filter", example: "{list.map(...)}", note: "Expressions returning arrays/values — allowed.", valid: true },
        { syntax: "switch", example: "{switch(x){}}", note: "Statement — use helper or variable instead.", valid: false },
        { syntax: "try/catch", example: "{try {...}}", note: "Statement — move to helper/function body.", valid: false },
        { syntax: "IIFE", example: "{(() => { if(x) return <A/>; })()}", note: "Expression (function call) — possible but often less readable.", valid: true },
      ]} />

      <NoteHeading>What can be rendered (child result rules)</NoteHeading>
      <RuleGrid rules={[
        { title: "Renderable", body: "Strings, numbers, valid React elements, fragments, portals, arrays of renderable nodes." },
        { title: "Render nothing", body: "null, undefined, true, false render no visible output as children." },
        { title: "Not renderable as child", body: "Plain objects (e.g. {a:1}) throw errors; render specific fields or JSON intentionally." },
        { title: "0 is visible", body: "Numeric 0 renders as text — a common pitfall with && conditions." },
        { title: "Functions not called for you", body: "{handleClick} passes a function (e.g. as prop); {handleClick()} embeds its return value." },
        { title: "Promises/async", body: "You can’t render a Promise as a child; resolve data via state/effects/framework patterns." },
      ]} />

      <NoteHeading>Keeping expressions clean</NoteHeading>
      <ComparePanels
        left={{ title: "Overloaded inline logic", tone: "bad", code: `<ul>\n  {users.filter(u=>u.active).sort((a,b)=>a.name.localeCompare(b.name)).slice(0,10).map(u => (\n    <li key={u.id}>{u.profile?.name ?? u.email}</li>\n  ))}\n</ul>` }}
        right={{ title: "Prepared, readable values", tone: "good", code: `const visibleUsers = users\n  .filter((u) => u.active)\n  .sort((a,b) => a.name.localeCompare(b.name))\n  .slice(0, 10);\n\nreturn <ul>{visibleUsers.map(u => <UserRow key={u.id} user={u} />)}</ul>;` }}
      />
      <NoteCallout tone="tip">Guideline: inline expressions are great for simple lookups/conditions/formatting. Extract multi-step transforms, branching logic, or non-obvious computations into named variables or helpers.</NoteCallout>

      <NoteHeading>JSX expressions inside attributes (patterns)</NoteHeading>
      <NoteCode filename="attrs.tsx" code={`<img src={user.avatarUrl} alt={\`Avatar of \${user.name}\`} />\n<button disabled={isSaving || !isValid} aria-busy={isSaving}>Save</button>\n<div className={isActive ? "tab active" : "tab"} />\n<Component config={{ theme, size: compact ? "sm" : "md" }} items={[a, b, c]} />`} />

      <NoteTakeaways items={[
        "Use { } to embed any JavaScript expression in JSX children or attribute values.",
        "Statements (if/for/switch/try/decls) are not allowed inside { } — use expressions, helpers, or precompute values.",
        "Know what renders: strings/numbers/elements/arrays render; null/undefined/booleans render nothing; objects are invalid children.",
        "Keep complex logic out of markup for readability, debugging, and testability.",
      ]} />
    </div>
  );
}
