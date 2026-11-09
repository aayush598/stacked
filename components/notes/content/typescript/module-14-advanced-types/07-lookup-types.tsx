import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function LookupTypesNote() {
  return (<div>
    <NoteLead>Lookup types (indexed access) retrieve nested/member types from existing types.</NoteLead>
    <NoteCode filename="lookup-types.ts" code={`type Api = { user: { id: string; roles: string[] } };
type User = Api['user'];
type Role = Api['user']['roles'][number]; // string`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["Lookups avoid duplicating type definitions.", "[number] extracts array element types.", "Great for deriving types from source-of-truth models."]} />
  </div>);
}
