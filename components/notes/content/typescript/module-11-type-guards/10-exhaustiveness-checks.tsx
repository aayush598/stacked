import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ExhaustivenessChecksNote() {
  return (<div><NoteLead>Exhaustiveness checks ensure all union members are handled. A common pattern assigns the remaining value to never.</NoteLead>
      <NoteCode filename="exhaustive.ts" code={`type S = { kind: "a" } | { kind: "b" };\nfunction f(s: S): number {\n  switch (s.kind) {\n    case "a": return 1;\n    case "b": return 2;\n    default: {\n      const _exhaustive: never = s;\n      return _exhaustive;\n    }\n  }\n}`} />
      <NoteTakeaways items={["Exhaustiveness checks catch missing cases at compile time.", "The never assignment fails if a new union member is unhandled.", "Very useful for discriminated unions."]} /></div>);
}
