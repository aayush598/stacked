import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ConstAssertionsNote() {
  return (<div><NoteLead><code>as const</code> makes values deeply readonly and preserves literal types. It prevents widening for arrays and objects.</NoteLead>
      <NoteCode filename="as-const.ts" code={`const role = "admin" as const; // "admin"\nconst tuple = [1, "a"] as const; // readonly [1, "a"]\nconst cfg = { mode: "dark", retries: 3 } as const;\n// { readonly mode: "dark"; readonly retries: 3 }`} />
      <NoteTakeaways items={["as const preserves literals and makes structures readonly.", "Useful for fixed config, tuples, and discriminated values.", "Compile-time only — no runtime freezing."]} /></div>);
}
