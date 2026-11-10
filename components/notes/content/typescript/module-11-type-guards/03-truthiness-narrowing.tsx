import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function TruthinessNarrowingNote() {
  return (<div><NoteLead>Truthiness checks narrow out null/undefined and other falsy values, but they also exclude 0, &quot;&quot;, and false.</NoteLead>
      <NoteCode filename="truthy.ts" code={`function greet(name?: string) {\n  if (name) {\n    return name.toUpperCase(); // string (truthy)\n  }\n  return "Guest";\n}\n// Careful: empty string "" is falsy`} />
      <NoteTakeaways items={["Truthiness removes null/undefined in common cases.", "It can incorrectly exclude valid falsy values like 0 or empty string.", "Use explicit null checks when falsy values are meaningful."]} /></div>);
}
