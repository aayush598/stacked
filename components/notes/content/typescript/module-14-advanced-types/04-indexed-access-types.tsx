import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function IndexedAccessTypesNote() {
  return (<div>
    <NoteLead>Indexed access types look up the type of a property: T[K].</NoteLead>
    <NoteCode filename="indexed-access-types.ts" code={`type User = { id: number; name: string };
type Id = User['id']; // number
type NameOrId = User['id' | 'name']; // number | string`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["T[K] extracts property value types.", "Works with unions of keys.", "Useful in generic APIs and utility types."]} />
  </div>);
}
