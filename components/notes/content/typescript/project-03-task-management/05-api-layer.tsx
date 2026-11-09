import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ApiLayerNote35() {
  return (<div>
    <NoteLead>API layer. — understand the rule, see the typed shape, then apply it safely in real code.</NoteLead>
    <NoteCode filename="api-layer.ts" code={`// API layer.\n// Key idea: apply TypeScript's type system to make this concept safe and explicit.
// Add concrete types, narrow unknowns, and keep APIs predictable.`} />
    <NoteCallout tone="tip">Focus on: what problem this solves, the exact TypeScript syntax/pattern, and a safe real-world usage example.</NoteCallout>
    <NoteTakeaways items={["API layer. adds type safety when used intentionally.", "Prefer explicit contracts at boundaries.", "Avoid unsafe escape hatches unless justified."]} />
  </div>);
}
