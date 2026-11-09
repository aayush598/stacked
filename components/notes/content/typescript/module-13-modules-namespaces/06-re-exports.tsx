import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ReExportsNote() {
  return (<div><NoteLead>Re-exports forward exports from another module, useful for barrel files and public API surfaces.</NoteLead>
      <NoteCode filename="index.ts" code={`export { add } from "./add";\nexport * from "./math";\nexport type { User } from "./types";`} />
      <NoteCallout tone="warning">Barrel files can create circular dependency and bundle/performance issues if overused. Keep public barrels intentional.</NoteCallout>
      <NoteTakeaways items={["Re-exports define module facades.", "Useful for package/public entry points.", "Avoid uncontrolled deep barrel chains."]} /></div>);
}
