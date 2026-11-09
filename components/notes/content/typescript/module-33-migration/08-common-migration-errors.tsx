import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function CommonMigrationErrorsNote338() {
  return (<div>
    <NoteLead>Common migration errors. — understand the rule, see the typed shape, then apply it safely in real code.</NoteLead>
    <NoteCode filename="common-migration-errors.ts" code={`// Common migration errors.\n// Key idea: apply TypeScript's type system to make this concept safe and explicit.
// Add concrete types, narrow unknowns, and keep APIs predictable.`} />
    <NoteCallout tone="tip">Focus on: what problem this solves, the exact TypeScript syntax/pattern, and a safe real-world usage example.</NoteCallout>
    <NoteTakeaways items={["Common migration errors. adds type safety when used intentionally.", "Prefer explicit contracts at boundaries.", "Avoid unsafe escape hatches unless justified."]} />
  </div>);
}
