import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function FunctionExpressionsNote(){
  return <div>
    <NoteLead>Function expressions assign a function value to a variable, constant, property, or argument. They are useful for callbacks and values passed around.</NoteLead>
    <NoteCode filename="expression.ts" code={`const multiply = function (a: number, b: number): number {\n  return a * b;\n};\n\nconst handler: (msg: string) => void = function (msg) {\n  console.log(msg);\n};`} />
    <NoteTakeaways items={["Expressions create function values.", "Type can be on the variable or on the function itself.", "Contextual typing often infers callback parameter types."]} />
  </div>;
}