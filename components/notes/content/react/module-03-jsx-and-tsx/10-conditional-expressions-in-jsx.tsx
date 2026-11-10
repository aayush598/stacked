import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, ConditionalPlayground, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function ConditionalExpressionsInJsxR3S10() {
  return (
    <div>
      <SectionHero
        title="Conditional Expressions in JSX"
        subtitle="Conditional rendering displays different UI for different states. JSX uses JavaScript expressions and control flow: if/else, early returns, ternaries, logical &&/||, nullish ??, variables, and switch/mapping strategies."
        chips={["if/early return", "Ternary ?: ", "&& / ||", "??", "State-driven UI"]}
      />

      <ConditionalPlayground />

      <NoteHeading>All common conditional patterns (variations)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "if + return", example: "if (loading) return <Spinner/>;", note: "Best for mutually exclusive top-level states." },
        { syntax: "Early returns chain", example: "if (err) return <E/>; if (!data) return <Empty/>; return <Ok/>;", note: "Flattens nested branches; very readable." },
        { syntax: "Ternary", example: "{ok ? <A/> : <B/>}", note: "Inline two-way choice inside JSX." },
        { syntax: "Nested ternary", example: "{a ? <A/> : b ? <B/> : <C/>}", note: "Works but can harm readability; consider refactor.", valid: true },
        { syntax: "Logical AND", example: "{isAdmin && <Panel/>}", note: "Render when truthy; beware left value rendering (0, '')." },
        { syntax: "Logical OR", example: "{title || 'Untitled'}", note: "Fallback for any falsy value (including 0, '')." },
        { syntax: "Nullish coalescing", example: "{count ?? 0}", note: "Fallback only for null/undefined." },
        { syntax: "Variable assignment", example: "let body; if(x) body=<A/>; return body;", note: "Prepare element outside JSX." },
        { syntax: "IIFE in JSX", example: "{(() => { if(x) return <A/>; return <B/>; })()}", note: "Allows statements inline; use sparingly." },
        { syntax: "Switch outside JSX", example: "switch(s){case 'a': return <A/>}", note: "Clear for many discrete states." },
        { syntax: "Object/map lookup", example: "const views = {a:<A/>}; return views[k];", note: "Declarative mapping from state to UI." },
        { syntax: "Render null", example: "if (!show) return null;", note: "Valid: intentionally render nothing." },
      ]} />

      <Tabs items={[
        { label: "Early returns", code: `function Screen({ loading, error, user }) {\n  if (loading) return <Skeleton />;\n  if (error) return <ErrorState message={error.message} />;\n  if (!user) return <EmptyState />;\n  return <Profile user={user} />;\n}`, note: "Preferred for page/section-level exclusive states." },
        { label: "Ternary", code: `return (\n  <div>\n    {isLoggedIn ? <Dashboard /> : <Login />}\n    {items.length ? <List items={items} /> : <p>No items</p>}\n  </div>\n);`, note: "Concise when both branches are simple." },
        { label: "&&, ||, ??", code: `{isAdmin && <AdminTools />}\n{notifications.length > 0 && <Badge n={notifications.length} />}\n<h1>{username || "Guest"}</h1>      {/* falsy fallback */}\n<h1>{username ?? "Guest"}</h1>      {/* nullish fallback */}\n<span>{count ?? 0}</span>           {/* keeps 0 */}`, note: "Choose operator based on what values are meaningful." },
        { label: "Switch/map", code: `function Status({ status }) {\n  switch (status) {\n    case "idle": return <Idle/>;\n    case "loading": return <Spinner/>;\n    case "success": return <Done/>;\n    case "error": return <Retry/>;\n    default: return null;\n  }\n}\n\n// or map\nconst byStatus = { idle: <Idle/>, loading: <Spinner/> };\nreturn byStatus[status] ?? null;`, note: "Scales well for finite state sets." },
        { label: "Computed variables", code: `const showBanner = isBeta && !dismissed;\nconst content = error ? <Error/> : <Data/>;\nreturn (\n  <>\n    {showBanner && <Banner />}\n    {content}\n  </>\n);`, note: "Name conditions for readability and reuse." },
      ]} />

      <NoteHeading>The 0 (and falsy value) rendering pitfalls</NoteHeading>
      <ComparePanels
        left={{ title: "Pitfall: renders 0 / NaN / ''", tone: "bad", code: `{count && <Badge n={count} />}        // if 0 => renders 0\n{items.length && <List />}          // if 0 => renders 0\n{text && <p>{text}</p>}             // if "" => may render empty unexpectedly` , note: "&& returns left operand when falsy; React renders 0 and NaN (as text) and ''." }}
        right={{ title: "Safe explicit conditions", tone: "good", code: `{count > 0 && <Badge n={count} />}\n{items.length > 0 && <List />}\n{text != null && text !== "" && <p>{text}</p>}\n{Boolean(flag) && <X/>}` , note: "Make the condition evaluate to true/false for visibility control." }}
      />

      <NoteHeading>|| vs ?? (important distinction)</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "a || b", example: '"" || "x" => "x", 0 || 5 => 5', note: "Falls back on any falsy: false, 0, '', NaN, null, undefined." },
        { syntax: "a ?? b", example: '"" ?? "x" => "", 0 ?? 5 => 0', note: "Falls back only on null or undefined (nullish)." },
        { syntax: "Use || for", example: "display defaults where empty/0 invalid", note: "When you want to treat falsy as 'missing'." },
        { syntax: "Use ?? for", example: "numeric counts, empty strings allowed", note: "When 0/false/'' are valid values." },
      ]} />

      <AnimatedFlow steps={[
        { label: "Identify states", note: "loading, error, empty, success, partial, unauthorized..." },
        { label: "Pick pattern", note: "early return, ternary, map, or variables." },
        { label: "Guard edge values", note: "handle 0, empty string, null, undefined intentionally." },
        { label: "Keep readable", note: "extract components/helpers when branches grow." },
      ]} />

      <RuleGrid rules={[
        { title: "Exclusive states", body: "Prefer early returns or switch for mutually exclusive UI states." },
        { title: "Inline simple choices", body: "Ternary is ideal for small two-way branches inside markup." },
        { title: "Boolean intent", body: "Use comparisons (x > 0, x != null) for && visibility guards." },
        { title: "Name conditions", body: "const canEdit = ... improves clarity over complex inline expressions." },
        { title: "Avoid deep nesting", body: "Nested ternaries/ifs in JSX hurt maintainability — refactor." },
        { title: "Render nothing", body: "Return null or use condition && <X/> for optional UI." },
      ]} />

      <NoteTakeaways items={[
        "Use if/early returns for clear exclusive states; ternaries for simple inline choices.",
        "Guard && with explicit booleans to avoid rendering 0, NaN, or unintended values.",
        "Choose || vs ?? based on whether 0/''/false are valid; prefer ?? for nullish-only fallbacks.",
        "For many states, switch or lookup maps keep rendering logic declarative and scalable.",
      ]} />
    </div>
  );
}
