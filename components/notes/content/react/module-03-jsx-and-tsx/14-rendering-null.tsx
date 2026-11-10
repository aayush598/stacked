import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { AnimatedFlow, ComparePanels, RenderValueMatrix, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function RenderingNullR3S14() {
  return (
    <div>
      <SectionHero
        title="Rendering null"
        subtitle="null is a valid React child and component return value that renders nothing. It is the explicit way to represent ‘render no UI here’ while keeping logic clear and intentional."
        chips={["Renders nothing", "return null", "Conditional UI", "No DOM node"]}
      />

      <RenderValueMatrix />

      <NoteHeading>Where null can be used</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Child expression", example: "<div>{null}</div>", note: "Produces no visible output at that position." },
        { syntax: "Component return", example: "function X(){ if(!show) return null; return <UI/>; }", note: "Component renders nothing." },
        { syntax: "Conditional branch", example: "{cond ? <A/> : null}", note: "Explicitly render nothing in else branch." },
        { syntax: "Array entries", example: "{[<A key=1/>, null, <B key=2/>]}", note: "Null items are ignored." },
        { syntax: "Prop-driven UI", example: "{error ? <Error/> : null}", note: "Optional sections (banners, badges, modals)." },
        { syntax: "As placeholder before load", example: "data ? <View/> : null", note: "Valid, but consider skeleton/empty/loading states for UX." },
      ]} />

      <Tabs items={[
        { label: "Conditional component", code: `function Banner({ open, children }) {\n  if (!open) return null;\n  return <div role="status" className="banner">{children}</div>;\n}\n\n<Banner open={hasNotice}>Saved</Banner>` , note: "Clear contract: open=false renders nothing." },
        { label: "Inline conditional", code: `return (\n  <header>\n    <h1>Dashboard</h1>\n    {canEdit ? <EditButton /> : null}\n    {error && <ErrorMessage />}\n  </header>\n);` , note: "Both patterns are common; choose for readability." },
        { label: "Guard clauses", code: `function Profile({ user }) {\n  if (user == null) return null; // or fallback UI\n  return <Card name={user.name} />;\n}` , note: "Early return prevents rendering with missing required data." },
        { label: "Returning null vs fragment", code: `if (!ready) return null;         // nothing\nif (!ready) return <></>;         // also nothing, but pointless\nif (!ready) return <div/>;       // renders empty DOM node` , note: "Use null for intentional absence; avoid empty wrappers." },
      ]} />

      <NoteHeading>null vs other “empty” values</NoteHeading>
      <ComparePanels
        left={{ title: "Render nothing", tone: "neutral", code: `null\nundefined\ntrue\nfalse\n// all produce no visible output as children` }}
        right={{ title: "Render something", tone: "neutral", code: `0        -> 0\n""       -> empty text\n"hi"     -> hi\n[]       -> (renders contents)\n<div/>   -> empty element node` }}
      />

      <AnimatedFlow steps={[
        { label: "Check condition", note: "Determine if UI should exist (data, permission, state)." },
        { label: "Return/render null", note: "Explicitly produce no output when absent." },
        { label: "No DOM node", note: "Nothing is inserted into the layout." },
        { label: "Alternative states", note: "Consider placeholder/skeleton/disabled UI when better for UX." },
      ]} />

      <RuleGrid rules={[
        { title: "Intentional absence", body: "null clearly communicates ‘nothing to render’." },
        { title: "No layout impact", body: "Unlike an empty <div>, null does not create a DOM element." },
        { title: "Valid everywhere nodes allowed", body: "As a child, in arrays, or as a component return value." },
        { title: "Not the same as hidden", body: "CSS-hidden elements still exist in DOM/a11y tree; null removes rendering output." },
        { title: "UX consideration", body: "Sometimes a loading skeleton or message is better than returning null." },
        { title: "TypeScript", body: "Components may return ReactNode (includes null) or JSX.Element | null depending on typing style." },
      ]} />

      <NoteCallout tone="tip">Prefer <code>return null</code> over rendering empty wrappers when a component has nothing meaningful to show. It keeps the DOM clean and intent obvious.</NoteCallout>

      <NoteTakeaways items={[
        "null renders nothing and is valid as a child, array entry, or component return.",
        "Use it for conditional/optional UI, guards, and intentional absence.",
        "Distinguish null (no node) from empty elements or CSS-hidden content (node still exists).",
        "Choose between null and explicit loading/empty states based on user experience needs.",
      ]} />
    </div>
  );
}
