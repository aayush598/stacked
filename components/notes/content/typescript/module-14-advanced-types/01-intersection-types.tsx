import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function IntersectionTypesNote() {
  return (<div>
    <NoteLead>Intersection types combine multiple types with &. A value must satisfy all parts at once.</NoteLead>
    <NoteCode filename="intersection-types.ts" code={`type A = { id: number };
type B = { name: string };
type User = A & B;
const u: User = { id: 1, name: 'Alex' };`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["& requires all members to be satisfied.", "Useful for composing object contracts.", "Conflicting required properties can create impossible types."]} />
  </div>);
}
