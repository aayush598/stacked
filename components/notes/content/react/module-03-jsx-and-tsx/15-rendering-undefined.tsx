import { NoteCallout, NoteCode, NoteHeading, NoteList, NoteTakeaways, NoteText } from "@/components/notes/note-blocks";
import { ComparePanels, RenderValueMatrix, RuleGrid, SectionHero, SyntaxMatrix, Tabs } from "./shared/visuals";

export function RenderingUndefinedR3S15() {
  return (
    <div>
      <SectionHero
        title="Rendering undefined"
        subtitle="undefined as a child (or returned in some cases historically guarded) renders nothing in React. It often appears from optional data, missing props, or expressions — but you should handle it deliberately to avoid accidental blank UI."
        chips={["Renders nothing", "Optional values", "Fallbacks", "?? / defaults"]}
      />

      <RenderValueMatrix />

      <NoteHeading>How undefined appears and behaves</NoteHeading>
      <SyntaxMatrix rows={[
        { syntax: "Child expression", example: "<div>{undefined}</div>", note: "No visible output." },
        { syntax: "Missing prop/field", example: "<p>{user.nickname}</p>", note: "If nickname is undefined, renders nothing — may be unintended." },
        { syntax: "Function returns undefined", example: "{getLabel()}", note: "If function returns undefined, nothing renders." },
        { syntax: "Optional chaining result", example: "{user?.profile?.bio}", note: "Can evaluate to undefined; provide fallback if needed." },
        { syntax: "Variable not set", example: "let x; return <>{x}</>;", note: "undefined value renders nothing." },
        { syntax: "Map to undefined", example: "arr.map(x => x.ok ? <X/> : undefined)", note: "Creates holes/nothing; prefer filter or null for clarity." },
      ]} />

      <Tabs items={[
        { label: "Optional data", code: `function UserCard({ user }) {\n  return (\n    <div>\n      <h2>{user.name}</h2>\n      <p>{user.title}</p> {/* may be undefined */}\n      {user.bio ? <p>{user.bio}</p> : null}\n    </div>\n  );\n}` , note: "Decide: hide field, show fallback, or render conditionally." },
        { label: "Fallback patterns", code: `<p>{user.title ?? "Member"}</p>\n<p>{user.title || "Member"}</p> {/* also replaces '' */}\n<p>{user.phone ?? "Not provided"}</p>\n<input value={value ?? ""} />` , note: "Use ?? when only null/undefined should fallback." },
        { label: "Default params/values", code: `function Greeting({ name = "Guest" }) {\n  return <h1>Hello, {name}</h1>;\n}\n\nconst label = data.label ?? "Default";` , note: "Prevent undefined early with defaults." },
        { label: "Component returns", code: `function Maybe({ show }) {\n  if (!show) return null; // preferred explicit\n  return <div>Hi</div>;\n}\n// Avoid accidentally returning undefined from a branch`, note: "Be explicit: return null or JSX from all code paths." },
      ]} />

      <NoteHeading>null vs undefined in rendering and logic</NoteHeading>
      <ComparePanels
        left={{ title: "Rendering behavior", tone: "neutral", code: `{null}      -> nothing\n{undefined} -> nothing` , note: "Both render no output as children." }}
        right={{ title: "Semantic/logic differences", tone: "neutral", code: `null: intentional empty value\nundefined: missing/uninitialized\nvalue ?? x catches both\nchecks may differ (=== null, typeof)` , note: "Treat them consistently in your data contracts." }}
      />

      <RuleGrid rules={[
        { title: "Prefer explicit fallbacks", body: "Don’t let important UI silently disappear due to undefined data." },
        { title: "Use ?? for defaults", body: "Nullish coalescing is ideal for null/undefined-only fallbacks." },
        { title: "Default props/params", body: "Set defaults to guarantee renderable values." },
        { title: "Guard rendering", body: "Conditionally render sections when data is absent: {user?.bio && <p>...}" },
        { title: "Avoid accidental undefined", body: "Ensure all render paths return valid React nodes (JSX/null)." },
        { title: "Debugging tip", body: "Blank areas can be caused by undefined expressions — log values or use devtools checks." },
      ]} />

      <NoteCallout tone="warning">A component that forgets to return in some branches can return <code>undefined</code> at runtime (JS behavior), which may cause errors/warnings depending on context. Always return JSX, <code>null</code>, or another valid node explicitly.</NoteCallout>

      <NoteTakeaways items={[
        "undefined renders nothing as a child, similar to null/booleans in output — but often signals missing data.",
        "Use ??, defaults, and conditional rendering to control what users see when values are undefined.",
        "Keep component contracts clear: distinguish ‘intentionally hidden’ (null) from ‘missing data’ (undefined/error states).",
        "Ensure every code path in a component returns a valid renderable value.",
      ]} />
    </div>
  );
}
