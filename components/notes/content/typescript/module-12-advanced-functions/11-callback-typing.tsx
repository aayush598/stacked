import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function CallbackTypingNote() {
  return (<div><NoteLead>Type callbacks with clear parameter and return types. This enables contextual typing and safe higher-order APIs.</NoteLead>
      <NoteCode filename="callbacks.ts" code={`function onEvent(handler: (id: string, at: Date) => void) {\n  handler("e1", new Date());\n}\nonEvent((id, at) => console.log(id, at.toISOString()));\n\n// Promise callbacks are also typed through generics`} />
      <NoteTakeaways items={["Typed callbacks improve API safety and autocomplete.", "TS infers callback params when the context type is known.", "Use void return for callbacks whose result is ignored."]} /></div>);
}
