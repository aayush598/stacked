import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ErrorContractsNote26() {
  return (<div>
    <NoteLead>Error contracts. — understand the rule, see the typed shape, then apply it safely in real code.</NoteLead>
    <NoteCode filename="error-contracts.ts" code={`// Error contracts.\n// Key idea: apply TypeScript's type system to make this concept safe and explicit.
// Add concrete types, narrow unknowns, and keep APIs predictable.`} />
    <NoteCallout tone="tip">Focus on: what problem this solves, the exact TypeScript syntax/pattern, and a safe real-world usage example.</NoteCallout>
    <NoteTakeaways items={["Error contracts. adds type safety when used intentionally.", "Prefer explicit contracts at boundaries.", "Avoid unsafe escape hatches unless justified."]} />
  </div>);
}
