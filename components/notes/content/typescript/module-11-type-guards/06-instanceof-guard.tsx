import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function InstanceofGuardNote() {
  return (<div><NoteLead><code>instanceof</code> narrows by constructor/class prototype chain. It works for class instances and built-ins like Error, Date, Array.</NoteLead>
      <NoteCode filename="instanceof.ts" code={`function handle(err: unknown) {\n  if (err instanceof Error) {\n    console.log(err.message); // Error\n  }\n}\n\nconst v: Date | string = new Date();\nif (v instanceof Date) v.toISOString();`} />
      <NoteTakeaways items={["instanceof works with classes and constructor functions.", "Useful for Error handling and class hierarchies.", "It does not work with plain interfaces/type aliases at runtime."]} /></div>);
}
