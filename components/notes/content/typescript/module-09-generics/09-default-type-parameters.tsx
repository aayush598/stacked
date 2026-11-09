import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function DefaultTypeParametersNote() {
  return (
    <div>
      <NoteLead>Generic type parameters can have defaults, used when the caller does not specify and inference cannot determine the type.</NoteLead>
      <NoteCode filename="defaults.ts" code={`interface Container<T = string> {
  value: T;
}
const a: Container = { value: "hello" };        // T = string
const b: Container<number> = { value: 42 };      // T = number`} />
      <NoteTakeaways items={["Defaults simplify common generic usage.", "Explicit type arguments override defaults.", "Put required parameters before defaults."]} />
    </div>
  );
}
