import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function GenericClassesNote() {
  return (
    <div>
      <NoteLead>Generic classes parameterize instance data and methods. The type parameter is fixed when the instance is created.</NoteLead>
      <NoteCode filename="generic-class.ts" code={`class Stack<T> {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}

const nums = new Stack<number>();
nums.push(1);
// nums.push("a"); // Error`} />
      <NoteTakeaways items={["Generic classes carry the type parameter across all members.", "Type is bound per instance.", "Enables type-safe collections and data structures."]} />
    </div>
  );
}
