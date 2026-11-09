import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function AssertionRisksNote() {
  return (<div><NoteLead>Assertions can hide bugs, create false confidence, and break when data changes. Untrusted inputs are the most common source of assertion bugs.</NoteLead>
      <NoteCode filename="risks.ts" code={`// API may change shape
const user = await res.json() as User;
user.name.toUpperCase(); // crash if name missing

// Better: validate
function isUser(v: unknown): v is User {
  return typeof v === "object" && v !== null && "name" in v;
}`} />
      <NoteTakeaways items={["Assertions trust you, not the data.", "External boundaries need runtime validation.", "Overuse of assertions weakens TypeScript's value."]} /></div>);
}
