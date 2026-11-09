import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function WhatIsInterfaceNote(){
  return <div>
    <NoteLead>An interface describes the shape of an object: which properties/methods it has and their types. It is a contract for structure.</NoteLead>
    <NoteCode filename="what-is-interface.ts" code={`interface User {\n  id: number;\n  name: string;\n  active?: boolean;\n}\n\nconst u: User = { id: 1, name: "Alex" };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Interfaces model object shapes.", "Optional properties use ?.", "TypeScript checks that values satisfy the interface."]} />
  </div>;
}
