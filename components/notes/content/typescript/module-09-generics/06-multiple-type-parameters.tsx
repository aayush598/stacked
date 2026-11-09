import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function MultipleTypeParametersNote() {
  return (
    <div>
      <NoteLead>Functions and types can take multiple type parameters to express relationships between several types.</NoteLead>
      <NoteCode filename="multi.ts" code={`function merge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}
const merged = merge({ name: "A" }, { age: 30 });
// { name: string; age: number }

type Entry<K, V> = { key: K; value: V };`} />
      <NoteTakeaways items={["Use multiple type parameters when types relate independently.", "Name them descriptively when T alone is unclear.", "Each parameter is inferred or specified independently."]} />
    </div>
  );
}
