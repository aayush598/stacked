import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function StringEnumsNote() {
  return (
    <div>
      <NoteLead>String enums use explicit string values. They are easier to debug and serialize than numeric enums because the runtime values are readable.</NoteLead>
      <NoteCode filename="string-enums.ts" code={`enum Role {\n  Admin = "admin",\n  Editor = "editor",\n  Viewer = "viewer",\n}\n\nfunction canDelete(role: Role) {\n  return role === Role.Admin;\n}\n\nconsole.log(Role.Admin); // "admin"`} />
      <NoteCallout tone="insight">String enums avoid reverse mapping confusion, but still emit runtime objects. For many APIs, <code className="font-mono">type Role = &quot;admin&quot; | &quot;editor&quot; | &quot;viewer&quot;</code> is simpler.</NoteCallout>
      <NoteTakeaways items={["String enums require explicit string values.", "They serialize/debug clearly.", "Compare with literal unions for lightweight alternatives."]} />
    </div>
  );
}
