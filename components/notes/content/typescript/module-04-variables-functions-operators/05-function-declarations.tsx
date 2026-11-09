import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function FunctionDeclarationsNote(){
  return <div>
    <NoteLead>Function declarations name a function and can be hoisted in JavaScript. In TypeScript, add parameter and return types to define a clear contract.</NoteLead>
    <NoteCode filename="declaration.ts" code={`function add(a: number, b: number): number {\n  return a + b;\n}\n\nfunction greet(name: string): void {\n  console.log("Hello " + name);\n}`} />
    <NoteTakeaways items={["Declarations are great for named reusable functions.", "Annotate parameters; add return types for public/important functions.", "The function body must satisfy the return type."]} />
  </div>;
}