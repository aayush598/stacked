import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { Checklist, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function ReadableJsxConventionsR3S25() {
  return (
    <div>
      <SectionHero
        title="Readable JSX Conventions"
        subtitle="Readable JSX is about clarity, consistency, and intent. Conventions for formatting, naming, structure, expressions, and composition make components easier to scan, review, debug, and evolve over time."
        chips={["Formatting", "Naming", "Structure", "Extraction", "Consistency"]}
      />

      <NoteHeading>Formatting and layout conventions</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Multiline elements", example: "<Card>\n  <Title />\n  <Body />\n</Card>", note: "One child per line for nested structures." },
        { syntax: "Props on new lines", example: "<Button\n  variant=\"primary\"\n  onClick={save}\n/>", note: "Improves diff readability when props change." },
        { syntax: "Self-closing spacing", example: "<Input />", note: "Consistent spacing/style per project formatter." },
        { syntax: "Parentheses for returns", example: "return (\n  <main>...</main>\n);", note: "Avoids ASI issues and aligns blocks clearly." },
        { syntax: "Group related JSX", example: "blank lines between logical sections", note: "Separate header/body/footer blocks visually." },
        { syntax: "Consistent quotes/semis", example: "project Prettier/ESLint rules", note: "Automate consistency; don’t debate manually." },
      ]} />

      <Tabs items={[
        { label: "Clean component", code: `function UserCard({ user, onSelect }: Props) {\n  const fullName = user.firstName + " " + user.lastName;\n\n  return (\n    <article className="user-card">\n      <header className="user-card__header">\n        <Avatar src={user.avatarUrl} alt={fullName} />\n        <h3>{fullName}</h3>\n      </header>\n\n      <p className="user-card__role">{user.role}</p>\n\n      <button type="button" onClick={() => onSelect(user.id)}>\n        View profile\n      </button>\n    </article>\n  );\n}` , note: "Clear spacing, derived values named, props readable." },
        { label: "Prop organization", code: `<Dialog\n  open={isOpen}\n  title="Delete item"\n  size="sm"\n  onClose={onClose}\n  onConfirm={onConfirm}\n>\n  <p>This action cannot be undone.</p>\n</Dialog>` , note: "Group related props (state, content, handlers) logically." },
        { label: "Conditional clarity", code: `// Prefer named conditions / early returns\nif (isLoading) return <Skeleton />;\nif (error) return <ErrorState message={error.message} />;\n\nconst showEmpty = !isLoading && items.length === 0;\nreturn (\n  <section>\n    {showEmpty ? <EmptyState /> : <List items={items} />}\n  </section>\n);` , note: "Name intent; avoid dense nested ternaries." },
        { label: "Lists & keys", code: `<ul className="todo-list">\n  {todos.map((todo) => (\n    <TodoItem\n      key={todo.id}\n      todo={todo}\n      onToggle={onToggle}\n    />\n  ))}\n</ul>` , note: "Extract row components when item markup grows." },
      ]} />

      <NoteHeading>Naming and intent conventions</NoteHeading>
      <RuleGrid rules={[
        { title: "Components: PascalCase", body: "UserProfile, SettingsPanel — nouns/descriptive UI roles." },
        { title: "Handlers: handle/on prefix", body: "handleSubmit/onSubmit patterns communicate event intent clearly." },
        { title: "Booleans: is/has/can/should", body: "isOpen, hasError, canEdit improve conditional readability." },
        { title: "Derived values named", body: "const visibleItems = ...; const totalLabel = ... avoids inline noise." },
        { title: "Avoid cryptic abbreviations", body: "Prefer clarity (selectedUser) over ambiguous short names (su)." },
        { title: "Consistent prop naming", body: "Align with common conventions (value/onChange, open/onOpenChange, etc.)." },
      ]} />

      <NoteHeading>Structure and composition patterns</NoteHeading>
      <ComparePanels
        left={{ title: "Hard to read", tone: "bad", code: `return <div>{loading?<div>...</div>:error?<p>{error}</p>:<div><h1>{title}</h1>{items.map(i=>i.ok&&<div key={i.id}><span>{i.name}</span><button onClick={()=>do(i.id)}>Go</button></div>)}</div>}</div>` }}
        right={{ title: "Readable & maintainable", tone: "good", code: `if (loading) return <Spinner />;\nif (error) return <ErrorText message={error} />;\n\nreturn (\n  <section>\n    <h1>{title}</h1>\n    <ItemList items={items} onAction={do} />\n  </section>\n);` }}
      />
      <SyntaxMatrix rows={[
        { syntax: "Extract components", example: "<UserAvatar />, <EmptyState />", note: "Break large JSX into meaningful, reusable pieces." },
        { syntax: "Extract helpers", example: "formatPrice(), getStatusLabel()", note: "Move non-trivial logic out of render markup." },
        { syntax: "Limit inline complexity", example: "avoid long chained ternaries/maps inline", note: "Compute intermediate values above return." },
        { syntax: "One responsibility per block", example: "header/content/footer sections", note: "Group by UI purpose." },
        { syntax: "Prefer early returns", example: "guard clauses for loading/error/empty", note: "Reduces nesting and cognitive load." },
        { syntax: "Stable, readable props", example: "destructure props; avoid overusing spread", note: "Makes data flow explicit." },
      ]} />

      <NoteHeading>JSX-specific readability tips</NoteHeading>
      <RuleGrid rules={[
        { title: "Avoid unnecessary wrappers", body: "Use fragments instead of meaningless <div> soup when no DOM node is needed." },
        { title: "Keep attributes scannable", body: "One prop per line for multi-prop elements; put key/important props consistently." },
        { title: "Use explicit booleans/conditions", body: "count > 0 && ... instead of count && ... to avoid 0 rendering surprises." },
        { title: "Comment intent, not syntax", body: "Use {/* why */} sparingly for non-obvious decisions." },
        { title: "Consistent string/expr style", body: "Prefer {value} for dynamic values; keep spacing readable in mixed text." },
        { title: "Accessibility in markup", body: "Use semantic elements, labels, alt text, and clear button/link intent." },
      ]} />

      <Checklist items={[
        "Can I understand the component’s structure in 10 seconds?",
        "Are conditions and loops easy to follow (named, extracted, or early-returned)?",
        "Are keys stable and placed on mapped roots?",
        "Are props/handlers named clearly and consistently?",
        "Is complex logic moved out of JSX expressions?",
        "Is formatting consistent (automated by Prettier/ESLint)?",
      ]} />

      <NoteCallout tone="tip">Readable JSX is a team multiplier: optimize for the next person reading the code (including future you). When in doubt, choose explicitness over cleverness.</NoteCallout>

      <NoteTakeaways items={[
        "Use consistent formatting, multiline props/children, and parentheses for multiline returns.",
        "Name components, handlers, booleans, and derived values to communicate intent clearly.",
        "Reduce complexity with extraction (components/helpers), early returns, and named conditions.",
        "Favor semantic, accessible, and predictable JSX patterns; automate style with tooling.",
      ]} />
    </div>
  );
}
