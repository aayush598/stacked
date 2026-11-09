import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function StringEnumsNote(){
  return <div>
    <NoteLead>String enums use readable string values and avoid reverse mapping confusion.</NoteLead>
    <NoteCode filename="string-enums.ts" code={`enum Role { Admin = "admin", User = "user" }\nconst r: Role = Role.Admin;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Members need explicit string values.", "Good for readable runtime values.", "Still emits runtime code unless replaced by alternatives."]} />
  </div>;
}
