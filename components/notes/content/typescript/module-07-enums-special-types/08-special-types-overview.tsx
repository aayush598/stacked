import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function SpecialTypesOverviewNote(){
  return <div>
    <NoteLead>Special types handle unusual cases: any opts out, unknown is safe unknown, never is impossible, void is no useful return, and object is any non-primitive.</NoteLead>
    <NoteCode filename="special-types-overview.ts" code={`let a: any;\nlet u: unknown;\nfunction log(): void {}\nfunction fail(): never { throw new Error("x"); }\nlet o: object = {};`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["any is unsafe escape hatch.", "unknown forces narrowing.", "never represents impossible values.", "void is common for side-effect functions."]} />
  </div>;
}
