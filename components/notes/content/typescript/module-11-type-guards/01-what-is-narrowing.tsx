import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function WhatIsNarrowingNote() {
  return (<div><NoteLead>Narrowing is TypeScript refining a broad type to a more specific one based on runtime checks and control flow.</NoteLead>
      <NoteCode filename="narrowing.ts" code={`function print(v: string | number) {\n  if (typeof v === "string") {\n    v.toUpperCase(); // string\n  } else {\n    v.toFixed(2);    // number\n  }\n}`} />
      <NoteTakeaways items={["Narrowing makes union types usable.", "It follows control flow branches.", "The goal is safe access to type-specific members."]} /></div>);
}
