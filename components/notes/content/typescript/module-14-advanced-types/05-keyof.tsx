import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function KeyofNote() {
  return (<div>
    <NoteLead>keyof produces a union of property keys from a type.</NoteLead>
    <NoteCode filename="keyof.ts" code={`type User = { id: number; name: string };
type Keys = keyof User; // 'id' | 'name'
function get<T, K extends keyof T>(obj: T, k: K): T[K] { return obj[k]; }`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["keyof T is the union of T's keys.", "Use with generics for type-safe property access.", "Supports string, number, and symbol keys."]} />
  </div>);
}
