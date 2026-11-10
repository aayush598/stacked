import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, Checklist, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function JsxFormattingStandardsR3S28() {
  return (
    <div>
      <SectionHero
        title="JSX Formatting Standards"
        subtitle="Consistent JSX formatting improves readability, reduces merge conflicts, and makes code reviews faster. Use automated tools (Prettier/ESLint) plus team conventions for structure, props, expressions, and accessibility-aware markup."
        chips={["Prettier/ESLint", "Indentation", "Props layout", "Consistency", "Readable diffs"]}
      />

      <NoteHeading>Core formatting rules (practical)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Indentation", example: "2 spaces (common) or project standard", note: "Be consistent across files; enforce with formatter." },
        { syntax: "Multiline JSX", example: "return (\n  <div>\n    ...\n  </div>\n);", note: "Wrap multiline returns in parentheses." },
        { syntax: "One element per line", example: "nested children on separate lines", note: "Makes hierarchy and diffs clearer." },
        { syntax: "Props single vs multi-line", example: "<Btn type=\"button\" /> or stacked props", note: "Break props onto new lines when long/many." },
        { syntax: "Self-closing tags", example: "<Input />", note: "Use for elements without children." },
        { syntax: "Closing bracket placement", example: ">) on same or new line per style", note: "Follow formatter/project convention consistently." },
        { syntax: "Whitespace in JSX", example: "{' '} for intentional spacing", note: "Be explicit when spacing matters." },
        { syntax: "Expression spacing", example: "{value} not { value } (common)", note: "Keep style consistent; formatter usually decides." },
      ]} />

      <Tabs items={[
        { label: "Element & children", code: `// Good: clear hierarchy\nfunction Card({ title, children }) {\n  return (\n    <section className="card">\n      <header className="card__header">\n        <h2>{title}</h2>\n      </header>\n      <div className="card__body">{children}</div>\n    </section>\n  );\n}` , note: "Indent children, keep structure scannable." },
        { label: "Props formatting", code: `// Short: inline is fine\n<Button variant="primary">Save</Button>\n\n// Many/long props: multiline\n<UserRow\n  key={user.id}\n  user={user}\n  isSelected={selectedId === user.id}\n  onSelect={onSelect}\n  onDelete={onDelete}\n/>\n\n// Long strings/objects\n<Input\n  placeholder="Search by name, email, or role"\n  style={{ maxWidth: 320 }}\n/>` , note: "Optimize for readability and clean git diffs." },
        { label: "Conditionals & lists", code: `return (\n  <section>\n    {isLoading ? (\n      <Spinner />\n    ) : hasError ? (\n      <ErrorState />\n    ) : (\n      <ul>\n        {items.map((item) => (\n          <li key={item.id}>\n            <ItemRow item={item} />\n          </li>\n        ))}\n      </ul>\n    )}\n  </section>\n);` , note: "Prefer early returns in components, but format inline branches clearly when used." },
        { label: "Fragments & comments", code: `return (\n  <>\n    <Header />\n    {/* Main content area */}\n    <main>\n      <Content />\n    </main>\n    <Footer />\n  </>\n);` , note: "Use JSX comments {/* ... */} inside JSX; keep them purposeful." },
      ]} />

      <ComparePanels
        left={{ title: "Inconsistent / cramped", tone: "bad", code: `return (<div><h1>{title}</h1><ul>{items.map(i=><li key={i.id}><span>{i.name}</span><button onClick={()=>x(i.id)}>X</button></li>)}</ul></div>);` }}
        right={{ title: "Formatted / readable", tone: "good", code: `return (\n  <div>\n    <h1>{title}</h1>\n    <ul>\n      {items.map((item) => (\n        <li key={item.id}>\n          <span>{item.name}</span>\n          <button type="button" onClick={() => x(item.id)}>X</button>\n        </li>\n      ))}\n    </ul>\n  </div>\n);` }}
      />

      <NoteHeading>Team standards and automation</NoteHeading>
      <RuleGrid rules={[
        { title: "Prettier", body: "Auto-formats JSX/TSX consistently (indentation, wrapping, quotes as configured)." },
        { title: "ESLint + plugins", body: "eslint-plugin-react, react-hooks, jsx-a11y catch issues and enforce patterns." },
        { title: "Editor integration", body: "Format on save and lint-on-type reduce style drift and review noise." },
        { title: "CI enforcement", body: "Run format/lint checks in CI to keep main branch consistent." },
        { title: "Shared config", body: "Centralize rules in repo configs to avoid per-developer variation." },
        { title: "Minimize manual style debates", body: "Let tools decide most formatting; reserve discussions for architectural conventions." },
      ]} />

      <NoteHeading>Attribute/prop ordering and conventions (team choice)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "key first (in lists)", example: "<Item key={id} ... />", note: "Common convention: key/ref early and visible." },
        { syntax: "ref/ids", example: "ref, id, name", note: "Identity-related props grouped together." },
        { syntax: "Primary data props", example: "value, items, user", note: "Core inputs before callbacks/handlers." },
        { syntax: "State/variant props", example: "disabled, open, variant", note: "Behavior/appearance modifiers." },
        { syntax: "Event handlers", example: "onClick, onChange, onSubmit", note: "Often placed after data/config props." },
        { syntax: "className/style last or consistent", example: "className=... style=...", note: "Pick an order and enforce with lint rules if desired." },
        { syntax: "Boolean shorthand", example: "disabled vs disabled={true}", note: "Both valid; be consistent (explicit often clearer for dynamic values)." },
      ]} />

      <NoteHeading>Accessibility and semantics as formatting-adjacent standards</NoteHeading>
      <RuleGrid rules={[
        { title: "Semantic elements", body: "Prefer button, a, label, nav, main, ul/li over generic div/span when appropriate." },
        { title: "Labels and alt text", body: "Always provide accessible names for controls and meaningful alt/aria-labels." },
        { title: "Readable attribute layout", body: "Multiline props make ARIA and event handlers easier to audit." },
        { title: "Avoid clickable divs", body: "If unavoidable, include role, tabIndex, and keyboard handlers — but native elements are better." },
      ]} />

      <AnimatedFlow steps={[
        { label: "Write clearly", note: "Structure JSX for human readers first." },
        { label: "Auto-format", note: "Run Prettier/editor formatting on save." },
        { label: "Lint", note: "Catch React/JSX/a11y issues with ESLint rules." },
        { label: "Review diffs", note: "Consistent formatting makes behavioral changes obvious." },
      ]} />

      <Checklist items={[
        "Multiline return wrapped in parentheses?",
        "Nested JSX indented consistently with one logical element per line?",
        "Props formatted for readability (multiline when long)?",
        "Keys present and stable in mapped lists?",
        "No unnecessary wrappers or deeply nested inline logic?",
        "Semantic elements and accessibility attributes included where needed?",
        "Prettier/ESLint passing with project config?",
      ]} />

      <NoteCallout tone="insight">Formatting standards are most effective when automated. Agree on conventions, encode them in tooling, and focus human attention on correctness, UX, and architecture.</NoteCallout>

      <NoteTakeaways items={[
        "Consistent JSX formatting (indentation, multiline structure, prop layout) makes components easier to read and maintain.",
        "Use parentheses for multiline returns and format conditionals/lists clearly to reveal structure.",
        "Automate standards with Prettier, ESLint (react/hooks/jsx-a11y), and CI checks.",
        "Include semantic and accessibility-conscious markup as part of high-quality JSX conventions.",
      ]} />
    </div>
  );
}
