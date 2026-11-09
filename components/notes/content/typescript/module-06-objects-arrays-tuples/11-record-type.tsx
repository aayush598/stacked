import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function RecordTypeNote(){
  return <div>
    <NoteLead><code className="font-mono">Record&lt;K, V&gt;</code> constructs an object type with keys K and values V.</NoteLead>
    <NoteCode filename="record-type.ts" code={`type Role = "admin" | "user";\ntype Permissions = Record<Role, boolean>;\nconst p: Permissions = { admin: true, user: false };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Record is concise for key/value maps.", "Great when keys are a known union.", "Equivalent in spirit to mapped index signatures."]} />
  </div>;
}
