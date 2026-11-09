import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function InOperatorGuardNote() {
  return (<div><NoteLead>The <code>in</code> operator checks property existence and narrows object unions.</NoteLead>
      <NoteCode filename="in.ts" code={`type Fish = { swim(): void };\ntype Bird = { fly(): void };\nfunction move(animal: Fish | Bird) {\n  if ("swim" in animal) animal.swim();\n  else animal.fly();\n}`} />
      <NoteTakeaways items={["in is useful for object shape narrowing.", "Works when union members have distinguishing properties.", "Discriminated unions are often clearer when you control the types."]} /></div>);
}
