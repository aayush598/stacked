import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function SatisfiesOperatorNote() {
  return (<div><NoteLead>The <code>satisfies</code> operator checks that a value matches a type while preserving the value&apos;s more specific inferred type.</NoteLead>
      <Compare a={{t:"Type annotation (widens)",c:`const cfg: Record<string, string|number> = {\n  host: "localhost",\n  port: 3000,\n};\ncfg.port; // string | number`}} b={{t:"satisfies (keeps precision)",c:`const cfg = {\n  host: "localhost",\n  port: 3000,\n} satisfies Record<string, string|number>;\ncfg.port; // number`}} />
      <NoteTakeaways items={["satisfies validates against a type without widening the value.", "Great for config objects and literal-preserving contracts.", "Prefer over broad annotations when you need both checking and precision."]} /></div>);
}
