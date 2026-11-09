import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function AsSyntaxNote() {
  return (<div><NoteLead>The <code>as Type</code> syntax is the standard TypeScript assertion form. It works in .ts and .tsx files.</NoteLead>
      <NoteCode filename="as.ts" code={`const value: unknown = "hello";\nconst len = (value as string).length;\n\ntype Status = "ok" | "error";\nconst s = "ok" as Status;`} />
      <NoteTakeaways items={["Use as for type assertions.", "Preferred over angle brackets in TSX/modern code.", "Still no runtime safety."]} /></div>);
}
