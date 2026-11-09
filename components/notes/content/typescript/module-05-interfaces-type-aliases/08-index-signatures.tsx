import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function IndexSignaturesNote(){
  return <div>
    <NoteLead>Index signatures describe objects with dynamic keys of a consistent value type.</NoteLead>
    <NoteCode filename="index-signatures.ts" code={`interface Counts {\n  [key: string]: number;\n}\nconst c: Counts = { apples: 2, pears: 3 };\n\n// Prefer Record when simple\n type Counts2 = Record<string, number>;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Index signatures allow dynamic property keys.", "All declared properties must be compatible with the index signature.", "Use Record for common key/value maps."]} />
  </div>;
}
