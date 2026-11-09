import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function UserDefinedTypeGuardsNote() {
  return (<div><NoteLead>User-defined type guards are functions that return a type predicate (<code>value is Type</code>). They let you reuse custom narrowing logic.</NoteLead>
      <NoteCode filename="guards.ts" code={`type User = { id: number; name: string };\nfunction isUser(v: unknown): v is User {\n  return typeof v === "object" && v !== null &&\n    "id" in v && "name" in v;\n}\n\nconst data: unknown = JSON.parse(text);\nif (isUser(data)) data.name; // User`} />
      <NoteTakeaways items={["Type predicates tell TypeScript what a true return means.", "Useful for validating unknown/external data.", "The guard implementation must actually be correct — TS trusts the signature."]} /></div>);
}
