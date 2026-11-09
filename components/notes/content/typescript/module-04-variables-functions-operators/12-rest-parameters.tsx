import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function RestParametersNote(){
  return <div>
    <NoteLead>Rest parameters collect remaining arguments into an array. Type them as an array or tuple so TypeScript knows what each collected value can be.</NoteLead>
    <NoteCode filename="rest.ts" code={`function sum(...nums: number[]): number {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3);\n\nfunction tag(level: "info" | "warn", ...parts: string[]) {\n  console.log(level, parts.join(" "));\n}`} />
    <NoteTakeaways items={["Rest parameters become arrays inside the function.", "Type them precisely (number[], string[], tuple).", "Only one rest parameter is allowed, and it must be last."]} />
  </div>;
}