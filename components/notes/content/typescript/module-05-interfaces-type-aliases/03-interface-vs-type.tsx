import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function InterfaceVsTypeNote(){
  return <div>
    <NoteLead>Interfaces and type aliases overlap for object shapes. Interfaces support declaration merging and extension patterns; type aliases are more flexible for unions, mapped/conditional types, and complex compositions.</NoteLead>
    <NoteCode filename="interface-vs-type.ts" code={`interface A { x: number; }\ninterface A { y: number; } // merged\n\n type B = { x: number } & { y: number };\n type Status = "ok" | "error"; // type alias excels`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Use interface for extendable object contracts/public APIs if your team prefers it.", "Use type for unions, tuples, functions, mapped/conditional/utility compositions.", "Be consistent in a project."]} />
  </div>;
}
