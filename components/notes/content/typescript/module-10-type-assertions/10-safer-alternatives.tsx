import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function SaferAlternativesNote() {
  return (<div><NoteLead>Prefer narrowing, type guards, validation, satisfies, and better type design over assertions.</NoteLead>
      <NoteCode filename="safer.ts" code={`// Narrowing
if (typeof v === "string") v.toUpperCase();

// satisfies
const routes = { home: "/" } satisfies Record<string, string>;

// Validation/type guard
if (isUser(data)) console.log(data.name);

// unknown + parse
const parsed: unknown = JSON.parse(text);`} />
      <NoteTakeaways items={["Narrowing and guards provide real safety.", "satisfies gives checking without widening.", "Design types so assertions are rarely needed."]} /></div>);
}
