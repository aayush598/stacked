import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function ExtractingComplexJsxR3S27() {
  return (
    <div>
      <SectionHero
        title="Extracting Complex JSX"
        subtitle="When JSX becomes large, deeply conditional, or repetitive, extract it into smaller components, variables, helpers, and hooks. Good extraction improves readability, reuse, testing, and separation of concerns."
        chips={["Component extraction", "Variables/helpers", "Custom hooks", "Composition", "Reuse"]}
      />

      <NoteHeading>Signals that JSX should be extracted</NoteHeading>
      <RuleGrid rules={[
        { title: "Too many responsibilities", body: "One component handles layout, data shaping, multiple states, and complex interactions." },
        { title: "Deep nesting/branching", body: "Nested ternaries, long conditionals, or repeated structural blocks." },
        { title: "Repetition", body: "Similar UI patterns duplicated with small variations (cards, rows, fields)." },
        { title: "Hard-to-name blocks", body: "Sections that deserve semantic names (UserHeader, EmptyState, Filters)." },
        { title: "Testing difficulty", body: "Hard to test logic or UI states in isolation." },
        { title: "Prop/state clutter", body: "Too many local variables and props intertwined in one render." },
      ]} />

      <ComparePanels
        left={{ title: "Monolithic JSX", tone: "bad", code: `function Orders({ orders, loading, q }) {\n  const filtered = orders.filter(o => o.name.includes(q));\n  return (\n    <div>\n      <h1>Orders</h1>\n      <input value={q} readOnly />\n      {loading ? <p>Loading...</p> : (\n        filtered.length === 0 ? <p>Empty</p> : (\n          <ul>\n            {filtered.map(o => (\n              <li key={o.id}>\n                <span>{o.name}</span>\n                <span>{o.status}</span>\n                {o.status === "late" ? <b>!</b> : null}\n              </li>\n            ))}\n          </ul>\n        )\n      )}\n    </div>\n  );\n}` }}
        right={{ title: "Extracted structure", tone: "good", code: `function Orders({ orders, loading, q }) {\n  const filtered = filterOrders(orders, q);\n  if (loading) return <OrdersLoading />;\n  return (\n    <section>\n      <OrdersHeader query={q} />\n      {filtered.length === 0 ? <OrdersEmpty /> : <OrderList orders={filtered} />}\n    </section>\n  );\n}` }}
      />

      <NoteHeading>Extraction techniques and variations</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Extract component", example: "function OrderRow({ order }) { return <li>...</li>; }", note: "Best for reusable/meaningful UI blocks with their own props." },
        { syntax: "Extract local variable", example: "const header = <h1>...</h1>;", note: "Simplifies return without new component API." },
        { syntax: "Extract helper function", example: "function renderBadge(status){...}", note: "OK for small local render logic; avoid overuse vs components." },
        { syntax: "Extract pure utility", example: "formatCurrency(), sortItems()", note: "Move non-JSX computations out of render." },
        { syntax: "Extract custom hook", example: "const vm = useOrders()", note: "Move state/effects/derived logic; return data + handlers." },
        { syntax: "Split container/presentational", example: "OrdersContainer -> OrdersView", note: "Separate data orchestration from UI rendering (when useful)." },
        { syntax: "Slot/children composition", example: "<Card header={...} footer={...} />", note: "Pass subtrees instead of hardcoding internals." },
        { syntax: "Configuration-driven", example: "columns.map(col => ...)", note: "Replace repetitive JSX with data definitions." },
      ]} />

      <Tabs items={[
        { label: "Extract subcomponent", code: `function UserList({ users }: { users: User[] }) {\n  return (\n    <ul>\n      {users.map((user) => (\n        <UserListItem key={user.id} user={user} />\n      ))}\n    </ul>\n  );\n}\n\nfunction UserListItem({ user }: { user: User }) {\n  return (\n    <li className="row">\n      <Avatar src={user.avatarUrl} alt={user.name} />\n      <span>{user.name}</span>\n      <RoleBadge role={user.role} />\n    </li>\n  );\n}` , note: "Improves readability and localizes item markup." },
        { label: "Extract variables", code: `function Panel({ state, data }) {\n  const title = <h2>Analytics</h2>;\n  let body: React.ReactNode = <Empty />;\n  if (state === "loading") body = <Spinner />;\n  else if (state === "error") body = <ErrorState />;\n  else if (data) body = <Chart data={data} />;\n\n  return (\n    <section>\n      {title}\n      {body}\n    </section>\n  );\n}` , note: "Good when branches are simple and local." },
        { label: "Extract hook + view", code: `function useCheckout() {\n  const [step, setStep] = useState(0);\n  const next = () => setStep((s) => s + 1);\n  return { step, next };\n}\n\nfunction Checkout() {\n  const { step, next } = useCheckout();\n  return (\n    <div>\n      <CheckoutSteps step={step} />\n      <CheckoutBody step={step} />\n      <button onClick={next}>Next</button>\n    </div>\n  );\n}` , note: "Separates behavior/state logic from JSX structure." },
        { label: "Config-driven rendering", code: `const actions = [\n  { key: "edit", label: "Edit", onClick: onEdit },\n  { key: "delete", label: "Delete", onClick: onDelete, tone: "danger" },\n];\n\nreturn (\n  <div className="actions">\n    {actions.map((a) => (\n      <Button key={a.key} tone={a.tone} onClick={a.onClick}>{a.label}</Button>\n    ))}\n  </div>\n);` , note: "Eliminates repetitive button blocks and centralizes definitions." },
      ]} />

      <NoteHeading>Choosing the right extraction</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Identify block", note: "Find a JSX region with a clear purpose or repetition." },
        { label: "Name it", note: "If you can name it well, it’s a good extraction candidate." },
        { label: "Pick level", note: "Variable/helper for local simplicity; component/hook for reuse and boundaries." },
        { label: "Define interface", note: "Pass minimal props/inputs; keep dependencies explicit." },
        { label: "Re-evaluate", note: "Avoid over-extraction that fragments understanding." },
      ]} />
      <ComparePanels
        left={{ title: "Extract to variable when", tone: "neutral", code: `- used once\n- no separate state/effects\n- improves local readability\n- no prop API needed` }}
        right={{ title: "Extract to component when", tone: "good", code: `- reusable or semantically distinct\n- has its own props/variants\n- benefits from isolation/testing\n- reduces parent complexity significantly` }}
      />

      <RuleGrid rules={[
        { title: "Keep props minimal", body: "Pass only what the extracted unit needs; avoid dumping entire objects unnecessarily." },
        { title: "Preserve semantics", body: "Maintain correct HTML structure, keys, labels, and accessibility when moving JSX." },
        { title: "Don’t over-abstract", body: "Too many tiny components can be as confusing as one large one — optimize for clarity." },
        { title: "Colocate when helpful", body: "Place extracted components near usage unless they’re shared broadly." },
        { title: "Name by intent", body: "EmptyState, Toolbar, OrderRow communicate purpose better than generic names." },
        { title: "Test boundaries", body: "Extraction can enable focused tests for complex UI states and behaviors." },
      ]} />

      <NoteCallout tone="tip">A practical heuristic: extract when it makes the parent read like an outline of the UI. If extraction hides important flow or creates indirection, reconsider the boundary.</NoteCallout>

      <NoteTakeaways items={[
        "Extract complex JSX to reduce nesting, duplication, and mixed responsibilities.",
        "Use variables/helpers for local clarity, components for reusable/meaningful UI units, and hooks for stateful logic.",
        "Design clean interfaces (props/inputs) and keep semantics, keys, and accessibility intact.",
        "Balance extraction: aim for readable composition, not excessive fragmentation.",
      ]} />
    </div>
  );
}
