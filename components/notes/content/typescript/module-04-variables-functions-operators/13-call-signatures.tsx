import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function CallSignaturesNote(){
  return <div>
    <NoteLead>A call signature describes how a value can be called like a function: parameter list and return type. It is useful in type aliases and interfaces for callbacks and function-shaped objects.</NoteLead>
    <NoteCode filename="call-signature.ts" code={`type Formatter = (value: number) => string;\nconst money: Formatter = n => "$" + n.toFixed(2);\n\ninterface Comparator {\n  (a: number, b: number): number;\n}\nconst desc: Comparator = (a, b) => b - a;`} />
    <NoteTakeaways items={["Call signatures describe callable types.", "Use type aliases or interfaces depending on style and needs.", "They make callbacks and higher-order APIs explicit."]} />
  </div>;
}