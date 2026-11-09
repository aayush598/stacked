import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function NonNullAssertionNote() {
  return (<div><NoteLead>The non-null assertion operator (<code>!</code>) tells TypeScript a value is not null or undefined. It removes nullability without a runtime check.</NoteLead>
      <NoteCode filename="non-null.ts" code={`function get(id: string): User | null { return null; }\nconst user = get("1")!; // TS assumes non-null\nuser.name; // runtime error if actually null\n\nel!.addEventListener("click", fn);`} />
      <NoteCallout tone="warning">Use ! sparingly. A runtime check or proper narrowing is safer.</NoteCallout>
      <NoteTakeaways items={["! removes null/undefined from a type.", "No runtime guard is added.", "Prefer if checks, optional chaining, or better types."]} /></div>);
}
