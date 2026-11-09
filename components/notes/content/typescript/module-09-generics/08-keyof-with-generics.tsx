import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function KeyofWithGenericsNote() {
  return (
    <div>
      <NoteLead>keyof produces a union of an object type keys. Combined with generics, it enables type-safe property access, picking, and mapping.</NoteLead>
      <NoteCode filename="keyof-generics.ts" code={`function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

const users = [{ name: "A", age: 30 }, { name: "B", age: 25 }];
pluck(users, "name"); // string[]
pluck(users, "age");  // number[]`} />
      <FlowSteps steps={[{ label: "T", detail: "object" }, { label: "keyof T", detail: "key union" }, { label: "K extends keyof T" }, { label: "T[K]", detail: "value type" }]} />
      <NoteTakeaways items={["keyof T gives the union of T property names.", "K extends keyof T ensures only valid keys are passed.", "T[K] (indexed access) gives the property value type."]} />
    </div>
  );
}
