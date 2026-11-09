import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function TypeOnlyImportsNote() {
  return (<div><NoteLead>Type-only imports/exports are erased at runtime. They make intent clear and can avoid runtime dependency/cycle issues.</NoteLead>
      <NoteCode filename="types-only.ts" code={`import type { User } from "./types";\nimport { type User2, load } from "./api";\nexport type { User };\n\nconst u: User = { id: "1", name: "A" };`} />
      <NoteTakeaways items={["import type is removed from emitted JS.", "Useful for type-only dependencies.", "Can prevent unintended runtime imports."]} /></div>);
}
