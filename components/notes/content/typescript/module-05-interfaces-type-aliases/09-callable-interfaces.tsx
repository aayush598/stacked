import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function CallableInterfacesNote(){
  return <div>
    <NoteLead>An interface can describe a callable value by including a call signature.</NoteLead>
    <NoteCode filename="callable-interfaces.ts" code={`interface Formatter {\n  (value: number): string;\n  locale?: string;\n}\nconst f: Formatter = (n) => n.toFixed(2);`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Call signatures model functions with properties.", "Useful for hybrid function/object APIs.", "Type aliases can also express call signatures."]} />
  </div>;
}
