import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function SwcNote285() {
  return (<div>
    <NoteLead>SWC. — understand the rule, see the typed shape, then apply it safely in real code.</NoteLead>
    <NoteCode filename="swc.ts" code={`// SWC.\n// Key idea: apply TypeScript's type system to make this concept safe and explicit.
// Add concrete types, narrow unknowns, and keep APIs predictable.`} />
    <NoteCallout tone="tip">Focus on: what problem this solves, the exact TypeScript syntax/pattern, and a safe real-world usage example.</NoteCallout>
    <NoteTakeaways items={["SWC. adds type safety when used intentionally.", "Prefer explicit contracts at boundaries.", "Avoid unsafe escape hatches unless justified."]} />
  </div>);
}
