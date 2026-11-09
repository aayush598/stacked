import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ImportExportNote() {
  return (<div><NoteLead>Imports bring module bindings into scope; exports make bindings available to other modules.</NoteLead>
      <NoteCode filename="io.ts" code={`export const x = 1;\nexport function f() {}\nimport { x, f } from "./io";\nimport * as io from "./io";\nexport { x as value };`} />
      <NoteTakeaways items={["Named imports/exports are explicit and refactor-friendly.", "Namespace imports group exports under one object.", "Re-export syntax can forward APIs."]} /></div>);
}
