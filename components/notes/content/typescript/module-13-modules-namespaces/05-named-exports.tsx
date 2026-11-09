import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function NamedExportsNote() {
  return (<div><NoteLead>Named exports expose specific bindings by name. They are explicit, support multiple exports per module, and work well with tooling.</NoteLead>
      <NoteCode filename="named.ts" code={`export const A = 1;\nexport function b() {}\nexport type C = { id: string };\nimport { A, b, type C } from "./named";`} />
      <NoteTakeaways items={["Named exports scale well for libraries and apps.", "You can export values and types.", "Tooling can auto-import and refactor named exports reliably."]} /></div>);
}
