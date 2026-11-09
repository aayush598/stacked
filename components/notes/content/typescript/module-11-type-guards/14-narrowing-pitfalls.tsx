import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function NarrowingPitfallsNote() {
  return (<div><NoteLead>Narrowing can be affected by truthiness edge cases, mutable variables, closures, typeof null, and overly broad checks.</NoteLead>
      <NoteCode filename="pitfalls.ts" code={`// truthiness excludes 0 and ""
if (count) { /* misses count === 0 */ }

// mutable variable in closure
let v: string | null = "a";
const fn = () => { if (v) v.length; };
v = null; // TS may be conservative in callbacks`} />
      <NoteCallout tone="warning">Be explicit: check for null/undefined directly when 0 or empty string are valid values.</NoteCallout>
      <NoteTakeaways items={["Falsy checks can discard valid values.", "Closures/mutation can limit narrowing.", "Prefer precise checks for robust narrowing."]} /></div>);
}
