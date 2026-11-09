import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function NeverChecksNote() {
  return (<div><NoteLead>The never type appears when narrowing eliminates all possibilities. It is a signal that a branch should be impossible.</NoteLead>
      <NoteCode filename="never.ts" code={`function fail(msg: string): never {\n  throw new Error(msg);\n}\n// never can be used to assert impossible states`} />
      <NoteTakeaways items={["never means no possible value remains.", "Use it for impossible branches and exhaustiveness.", "Reaching never often means your union handling is complete."]} /></div>);
}
