import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function UnionTypesNote() {
  return (<div>
    <NoteLead>Union types allow one of several types. Narrow before using members specific to a branch.</NoteLead>
    <NoteCode filename="union-types.ts" code={`type Id = string | number;
function print(id: Id) {
  if (typeof id === 'string') id.toUpperCase();
  else id.toFixed(2);
}`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["| means any one member type.", "Narrow to access branch-specific members.", "Discriminated unions make narrowing reliable."]} />
  </div>);
}
