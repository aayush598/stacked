import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function DeclarationMergingNote(){
  return <div>
    <NoteLead>Interfaces with the same name in the same scope merge their members. This is useful for augmentation but can surprise newcomers.</NoteLead>
    <NoteCode filename="declaration-merging.ts" code={`interface Box { x: number; }\ninterface Box { y: number; }\nconst b: Box = { x: 1, y: 2 };`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Only interfaces merge this way (not type aliases).", "Useful for extending third-party/global types.", "Keep merges intentional and discoverable."]} />
  </div>;
}
