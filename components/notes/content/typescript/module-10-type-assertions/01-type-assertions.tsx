import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function TypeAssertionsNote() {
  return (<div><NoteLead>Type assertions tell TypeScript to treat a value as a specific type. They override inference but do not perform runtime conversion or validation.</NoteLead>
      <NoteCode filename="assertions.ts" code={`const el = document.getElementById("app") as HTMLDivElement;\n// You assert it's a div; TS trusts you\n\nconst data = JSON.parse(text) as User; // risky without validation`} />
      <NoteCallout tone="warning">Assertions silence the compiler but can be wrong at runtime. Prefer narrowing/validation when data is untrusted.</NoteCallout>
      <NoteTakeaways items={["Assertions change the compile-time type view, not runtime behavior.", "Use only when you know more than the compiler.", "Avoid asserting untrusted external data without checks."]} /></div>);
}
