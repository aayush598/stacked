import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ControlFlowAnalysisNote() {
  return (<div><NoteLead>TypeScript tracks assignments, checks, returns, and throws across code paths to narrow types automatically.</NoteLead>
      <NoteCode filename="cfa.ts" code={`let x: string | number = Math.random() > 0.5 ? "a" : 1;\nif (typeof x === "string") {\n  x; // string\n} else {\n  x; // number\n}\n// after return/throw, TS knows code paths end`} />
      <NoteTakeaways items={["Control flow analysis is how TS understands branches.", "Assignments and conditions refine types over time.", "Some cases (closures, complex aliasing) limit analysis."]} /></div>);
}
