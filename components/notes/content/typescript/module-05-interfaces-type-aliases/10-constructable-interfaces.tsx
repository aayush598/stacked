import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ConstructableInterfacesNote(){
  return <div>
    <NoteLead>Construct signatures model values that can be called with new.</NoteLead>
    <NoteCode filename="constructable-interfaces.ts" code={`interface UserCtor {\n  new (name: string): { name: string };\n}\nclass User { constructor(public name: string) {} }\nconst C: UserCtor = User;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Use `new (...)` in interfaces/type aliases for constructors.", "Separates static/construct side from instance side.", "Common in factory and class-typing patterns."]} />
  </div>;
}
