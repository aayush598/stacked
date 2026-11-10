import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, NestingDepthMeter, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function AvoidingDeeplyNestedJsxR3S26() {
  return (
    <div>
      <SectionHero
        title="Avoiding Deeply Nested JSX"
        subtitle="Deeply nested JSX is hard to read, review, and modify. Flatten structure with guard clauses, extracted components, data-driven rendering, and clear composition patterns while preserving semantics and behavior."
        chips={["Early returns", "Extraction", "Guard clauses", "Composition", "Flatten conditionals"]}
      />

      <NestingDepthMeter depth={4} />

      <NoteHeading>Why deep nesting is a problem</NoteHeading>
      <RuleGrid rules={[
        { title: "Cognitive load", body: "Many indentation levels make it hard to track which branch/parent a line belongs to." },
        { title: "Difficult edits", body: "Small changes risk breaking closing tags, conditions, or structure." },
        { title: "Hidden logic", body: "Business rules buried inside nested ternaries/maps are easy to miss." },
        { title: "Poor reuse", body: "Large monolithic trees prevent extracting meaningful components." },
        { title: "Review/debug pain", body: "Diffs and stack traces are harder to reason about in giant render blocks." },
        { title: "Accessibility drift", body: "Complex nesting can obscure landmarks, heading order, and interactive structure." },
      ]} />

      <ComparePanels
        left={{ title: "Deeply nested (hard to follow)", tone: "bad", code: `function Page({ user, loading, error }) {\n  return (\n    <main>\n      {loading ? (\n        <div><Spinner /></div>\n      ) : (\n        error ? (\n          <div><Error msg={error} /></div>\n        ) : (\n          user ? (\n            <div>\n              <h1>{user.name}</h1>\n              {user.isAdmin ? (\n                <section>{user.items.length ? <ul>{user.items.map(i => <li key={i.id}>{i.name}</li>)}</ul> : <p>None</p>}</section>\n              ) : <p>No access</p>}\n            </div>\n          ) : <Login />\n        )\n      )}\n    </main>\n  );\n}` }}
        right={{ title: "Flattened & clear", tone: "good", code: `function Page({ user, loading, error }) {\n  if (loading) return <PageShell><Spinner /></PageShell>;\n  if (error) return <PageShell><Error msg={error} /></PageShell>;\n  if (!user) return <PageShell><Login /></PageShell>;\n\n  return (\n    <PageShell>\n      <h1>{user.name}</h1>\n      {user.isAdmin ? <AdminItems items={user.items} /> : <NoAccess />}\n    </PageShell>\n  );\n}` }}
      />

      <NoteHeading>Techniques to flatten JSX</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Early returns", example: "if (loading) return <Loading/>; ... return <Main/>", note: "Removes top-level conditional nesting (guard clauses)." },
        { syntax: "Extract child components", example: "<Header/><Sidebar/><Content/>", note: "Move subtrees into named components." },
        { syntax: "Extract variables", example: "const content = ...; return <div>{content}</div>", note: "Precompute branches/elements for readability." },
        { syntax: "Helper render functions", example: "function renderActions(){...}", note: "Can help locally, but prefer components if state/props grow (use judiciously)." },
        { syntax: "Data/lookup maps", example: "const views = {a:<A/>, b:<B/>}; return views[k]", note: "Replace long switch/ternary chains." },
        { syntax: "Array-driven UI", example: "config.map(...)", note: "Replace repeated similar blocks with mapped structures." },
        { syntax: "Children/composition", example: "<Layout left={<Nav/>} right={<Body/>} />", note: "Flatten by composing slots instead of nesting everything in one tree." },
        { syntax: "Custom hooks for logic", example: "const vm = usePageViewModel()", note: "Move branching/data prep out of JSX entirely." },
      ]} />

      <Tabs items={[
        { label: "Guard clauses", code: `function Profile({ user, isLoading, error }) {\n  if (isLoading) return <Skeleton />;\n  if (error) return <ErrorState error={error} />;\n  if (!user) return <EmptyState />;\n\n  return (\n    <section>\n      <h1>{user.name}</h1>\n      <ProfileDetails user={user} />\n    </section>\n  );\n}` , note: "Handle edge states first; keep happy path flat." },
        { label: "Extract components", code: `function Dashboard({ data }) {\n  return (\n    <main>\n      <DashboardHeader title={data.title} />\n      <StatsGrid stats={data.stats} />\n      <RecentActivity items={data.activity} />\n    </main>\n  );\n}\n\nfunction StatsGrid({ stats }) {\n  return <div className="grid">{stats.map(s => <StatCard key={s.id} {...s} />)}</div>;\n}` , note: "Each component owns a focused piece of UI." },
        { label: "Map over config", code: `const fields = [\n  { id: "name", label: "Name", component: TextField },\n  { id: "role", label: "Role", component: SelectField },\n];\n\nreturn (\n  <form>\n    {fields.map(({ id, label, component: Field }) => (\n      <Field key={id} name={id} label={label} />\n    ))}\n  </form>\n);` , note: "Replace repetitive nested blocks with declarative data." },
        { label: "Named branches", code: `const body = (() => {\n  if (tab === "overview") return <Overview />;\n  if (tab === "billing") return <Billing />;\n  return <Settings />;\n})();\n\nreturn (\n  <section>\n    <Tabs />\n    {body}\n  </section>\n);` , note: "Isolate branching logic from layout markup." },
      ]} />

      <NoteHeading>Refactoring flow</NoteHeading>
      <AnimatedFlow steps={[
        { label: "Identify complexity", note: "Find deep ternaries, long maps, or repeated blocks." },
        { label: "Separate concerns", note: "Distinguish state/loading/empty/error/success branches." },
        { label: "Extract", note: "Pull subtrees into components and logic into variables/hooks." },
        { label: "Flatten", note: "Use guard clauses and composition to reduce indentation." },
        { label: "Verify semantics", note: "Keep HTML structure, keys, accessibility, and behavior intact." },
      ]} />

      <NoteHeading>When nesting is OK</NoteHeading>
      <ComparePanels
        left={{ title: "Acceptable nesting", tone: "good", code: `<article>\n  <header><h2>{title}</h2></header>\n  <ul>\n    {items.map(i => (\n      <li key={i.id}><a href={i.href}>{i.label}</a></li>\n    ))}\n  </ul>\n</article>` , note: "Nesting reflects real semantic hierarchy." }}
        right={{ title: "Unnecessary nesting", tone: "bad", code: `<div>\n  <div>\n    <div>\n      <span>{title}</span>\n    </div>\n  </div>\n</div>` , note: "Wrappers without purpose add depth and noise." }}
      />

      <NoteCallout tone="tip">Goal isn’t “zero nesting” — it’s purposeful, readable nesting. Flatten control flow and remove meaningless wrappers; keep semantic structure that communicates the UI.</NoteCallout>

      <NoteTakeaways items={[
        "Use guard clauses/early returns to eliminate nested conditional pyramids.",
        "Extract components, variables, and hooks to separate concerns and reduce render complexity.",
        "Prefer data-driven rendering (maps/config) over repetitive or deeply branched inline JSX.",
        "Keep nesting when it represents real semantic/layout hierarchy; remove wrappers that add no value.",
      ]} />
    </div>
  );
}
