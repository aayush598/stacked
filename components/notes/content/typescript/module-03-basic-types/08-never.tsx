import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function NeverNote() {
  return (
    <div>
      <NoteLead><InlineCode>never</InlineCode> represents values that never occur. If a function throws or loops forever, it never returns normally. If a union branch is impossible after narrowing, the remaining type can become <InlineCode>never</InlineCode>.</NoteLead>
      <NoteCode filename="never.ts" code={`function fail(message: string): never {\n  throw new Error(message);\n}\n\nfunction exhaustive(x: never): never {\n  throw new Error("Unexpected: " + x);\n}\n\ntype Shape = { kind: "circle" } | { kind: "square" };\nfunction area(s: Shape): number {\n  switch (s.kind) {\n    case "circle": return 1;\n    case "square": return 4;\n    default: return exhaustive(s); // compile error if a case is missing\n  }\n}`} />
      <NoteCallout tone="warning">No normal value can be assigned to <InlineCode>never</InlineCode> (except <InlineCode>never</InlineCode> itself). That makes it perfect for exhaustiveness checks.</NoteCallout>
      <NoteTakeaways items={["never means impossible/unreachable/no normal completion.", "Use for exhaustiveness in switches/if chains over unions.", "never is the bottom type; it fits into other types but other types do not fit into never."]} />
    </div>
  );
}
