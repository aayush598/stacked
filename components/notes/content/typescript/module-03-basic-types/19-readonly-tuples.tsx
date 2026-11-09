import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function ReadonlyTuplesNote() {
  return (
    <div>
      <NoteLead>Readonly tuples prevent mutation and preserve precise tuple structure. They are useful for constants, fixed coordinates, and function contracts that should not be changed.</NoteLead>
      <NoteCode filename="readonly-tuples.ts" code={`const point: readonly [number, number] = [10, 20];\n// point[0] = 30; // Error\n\nfunction move(p: readonly [number, number]) {\n  return [p[0] + 1, p[1] + 1] as const;\n}\n\nconst pair = [1, "a"] as const; // readonly [1, "a"]`} />
      <NoteCallout tone="tip">Accept <InlineCode>readonly</InlineCode> tuples/arrays in parameters when you only read them. This makes your function compatible with more inputs.</NoteCallout>
      <NoteTakeaways items={["Readonly tuples combine fixed positions with immutability.", "as const is a convenient source of readonly literal tuples.", "Use for safe constants and read-only APIs."]} />
    </div>
  );
}
