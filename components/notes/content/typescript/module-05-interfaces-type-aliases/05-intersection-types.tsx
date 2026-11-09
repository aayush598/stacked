import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function IntersectionTypesNote(){
  return <div>
    <NoteLead>Intersection types combine types with &. A value must satisfy all parts.</NoteLead>
    <NoteCode filename="intersection-types.ts" code={`type HasId = { id: number };\ntype Named = { name: string };\ntype User = HasId & Named;\nconst u: User = { id: 1, name: "Alex" };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["& means must satisfy every member.", "Useful for composing object types.", "Impossible intersections can produce never-like unusable types."]} />
  </div>;
}
