import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function NullishCoalescingNote() {
  return (<div><NoteLead>Nullish coalescing (<code>??</code>) provides a fallback only when the left side is null or undefined.</NoteLead>
      <NoteCode filename="nullish.ts" code={`const port = config.port ?? 3000;\nconst name = input ?? "Guest";\n// Unlike ||, ?? keeps 0, false, "" as valid values`} />
      <NoteCallout tone="tip">Prefer <code>??</code> over <code>||</code> when 0, false, or empty string are meaningful.</NoteCallout>
      <NoteTakeaways items={["?? handles only null/undefined.", "|| handles all falsy values.", "Use ?? with optional/nullable values."]} /></div>);
}
