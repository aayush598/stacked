import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function OptionalChainingNote() {
  return (<div><NoteLead>Optional chaining (<code>?.</code>) safely accesses properties/methods when a value may be null or undefined, returning undefined instead of throwing.</NoteLead>
      <NoteCode filename="optional-chain.ts" code={`type User = { profile?: { city?: string } };\nconst u: User = {};\nconst city = u.profile?.city; // string | undefined\narr?.[0];\nfn?.();`} />
      <NoteTakeaways items={["?. short-circuits to undefined on null/undefined.", "Great for deeply optional data.", "The result type includes undefined."]} /></div>);
}
