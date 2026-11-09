import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function CommonGenericPitfallsNote() {
  return (
    <div>
      <NoteLead>Common mistakes include unnecessary generics, parameters used once, generic-as-assertion, and unreadable signatures.</NoteLead>
      <NoteCode filename="pitfalls.ts" code={`// Bad: T used only once
function log<T>(msg: T) { console.log(msg); }
// Better
function log(msg: unknown) { console.log(msg); }

// Bad: unsafe generic return
// function parse<T>(s: string): T { return JSON.parse(s) as T; }
// Better: return unknown and validate
function parse(s: string): unknown { return JSON.parse(s); }`} />
      <NoteCallout tone="warning">Use generics only when they express a real type relationship between values.</NoteCallout>
      <NoteTakeaways items={["Avoid generics that do not connect types.", "Do not use generics as hidden assertions.", "Prefer simple, readable type signatures."]} />
    </div>
  );
}
