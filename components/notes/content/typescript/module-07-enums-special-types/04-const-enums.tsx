import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ConstEnumsNote(){
  return <div>
    <NoteLead>Const enums are inlined at compile time and do not emit a runtime enum object.</NoteLead>
    <NoteCode filename="const-enums.ts" code={`const enum Flag { A = 1, B = 2 }\nconst x = Flag.A;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["No runtime enum object; values are inlined.", "Can conflict with isolatedModules/build tooling.", "Check project/toolchain support first."]} />
  </div>;
}
