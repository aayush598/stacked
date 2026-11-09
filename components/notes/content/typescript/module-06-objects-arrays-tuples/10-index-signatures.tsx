import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function IndexSignaturesM6Note(){
  return <div>
    <NoteLead>Index signatures type dynamic keys on objects.</NoteLead>
    <NoteCode filename="index-signatures.ts" code={`type Scores = { [player: string]: number };\nconst s: Scores = { alex: 10 };\n\n// safer unknown map\n type UnknownMap = Record<string, unknown>;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Useful for dictionary-like objects.", "Be careful: key existence is not guaranteed unless modeled.", "noUncheckedIndexedAccess makes indexed reads safer."]} />
  </div>;
}
