import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function DiscriminatedUnionsNote() {
  return (<div><NoteLead>Discriminated unions use a common literal property (tag/discriminant) so TypeScript can narrow reliably in switch/if branches.</NoteLead>
      <NoteCode filename="discriminated.ts" code={`type Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; size: number };\n\nfunction area(s: Shape) {\n  switch (s.kind) {\n    case "circle": return Math.PI * s.radius ** 2;\n    case "square": return s.size * s.size;\n  }\n}`} />
      <NoteTakeaways items={["A shared literal field makes narrowing precise and ergonomic.", "Ideal for state machines, events, and variants.", "Combine with exhaustiveness checks for safety."]} /></div>);
}
