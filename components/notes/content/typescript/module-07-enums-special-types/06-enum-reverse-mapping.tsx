import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function EnumReverseMappingNote(){
  return <div>
    <NoteLead>Numeric enums map name→value and value→name in emitted JS. String enums do not have reverse mappings.</NoteLead>
    <NoteCode filename="enum-reverse-mapping.ts" code={`enum E { A = 10 }\nE.A; // 10\nE[10]; // "A"\n\nenum S { A = "a" }\n// no S["a"] reverse name lookup`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Reverse mapping applies to numeric enums.", "Can be useful, but also surprising.", "String enums are simpler for serialization."]} />
  </div>;
}
