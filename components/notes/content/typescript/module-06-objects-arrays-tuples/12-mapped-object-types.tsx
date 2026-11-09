import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function MappedObjectTypesNote(){
  return <div>
    <NoteLead>Mapped types transform existing object types by iterating keys with keyof. This is a preview of advanced type system power.</NoteLead>
    <NoteCode filename="mapped-object-types.ts" code={`type User = { id: number; name: string };\ntype OptionalUser = { [K in keyof User]?: User[K] };\ntype ReadonlyUser = { readonly [K in keyof User]: User[K] };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Mapped types create new types from old ones.", "Built-ins like Partial/Readonly use mapped types.", "Use for systematic transformations."]} />
  </div>;
}
