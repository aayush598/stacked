import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { CodeTabs } from "./shared/visuals";

export function ConstraintsNote() {
  return (
    <div>
      <NoteLead>Constraints limit what types can fill a type parameter using extends. This lets you safely access properties or require capabilities.</NoteLead>
      <CodeTabs items={[
        { label: "Property", code: `function getLength<T extends { length: number }>(v: T): number {
  return v.length;
}
getLength("hello");  // OK
getLength([1, 2]);   // OK
// getLength(42);    // Error`, note: "T must have a length property." },
        { label: "keyof", code: `function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "A", age: 30 };
get(user, "name"); // string`, note: "K must be a valid key of T." },
      ]} />
      <NoteTakeaways items={["extends constrains acceptable type arguments.", "Constraints enable safe property/method access on generic values.", "keyof constraints are essential for type-safe property access."]} />
    </div>
  );
}
