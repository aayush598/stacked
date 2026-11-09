import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function BrowserCompatibilityNote2311() {
  return (<div>
    <NoteLead>Browser compatibility. — understand the rule, see the typed shape, then apply it safely in real code.</NoteLead>
    <NoteCode filename="browser-compatibility.ts" code={`// Browser compatibility.\n// Key idea: apply TypeScript's type system to make this concept safe and explicit.
// Add concrete types, narrow unknowns, and keep APIs predictable.`} />
    <NoteCallout tone="tip">Focus on: what problem this solves, the exact TypeScript syntax/pattern, and a safe real-world usage example.</NoteCallout>
    <NoteTakeaways items={["Browser compatibility. adds type safety when used intentionally.", "Prefer explicit contracts at boundaries.", "Avoid unsafe escape hatches unless justified."]} />
  </div>);
}
