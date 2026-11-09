import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function ReadonlyTypesNote() {
  return (<div>
    <NoteLead>Readonly types prevent mutation at compile time. Use readonly modifiers, Readonly&lt;T&gt;, and as const.</NoteLead>
    <NoteCode filename="readonly-types.ts" code={`type User = { readonly id: string; name: string };
const u: User = { id: '1', name: 'A' };
// u.id = '2'; // Error
type R = Readonly<User>;`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["readonly blocks reassignment of members.", "Readonly<T> makes all properties readonly.", "Compile-time only \u2014 runtime values can still be mutable."]} />
  </div>);
}
