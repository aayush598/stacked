import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ArraysNote(){
  return <div>
    <NoteLead>Arrays store variable-length ordered values. Use <code className="font-mono">T[]</code> or <code className="font-mono">Array&lt;T&gt;</code> for homogeneous collections.</NoteLead>
    <NoteCode filename="arrays.ts" code={`const names: string[] = ["A", "B"];\nnames.push("C");\nconst first = names[0];`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Arrays are best for same-kind ordered lists.", "Use unions for mixed element types.", "Index access may need undefined handling under strict settings."]} />
  </div>;
}
