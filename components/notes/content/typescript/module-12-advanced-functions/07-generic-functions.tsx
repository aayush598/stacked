import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function GenericFunctionsM12Note() {
  return (<div><NoteLead>Generic functions in advanced scenarios combine inference, constraints, and mapped relationships for reusable typed behavior.</NoteLead>
      <NoteCode filename="generic-fn.ts" code={`function prop<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nprop({ a: 1 }, "a"); // number`} />
      <NoteTakeaways items={["Generics keep function APIs flexible and type-safe.", "Constraints make generic access safe.", "Inference usually supplies type arguments."]} /></div>);
}
