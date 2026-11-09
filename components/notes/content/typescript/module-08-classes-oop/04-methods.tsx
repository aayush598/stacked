import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function MethodsNote() {
  return (
    <div>
      <NoteLead>Methods define behavior on class instances. TypeScript checks parameter types, return types, and call-site arguments.</NoteLead>
      <NoteCode filename="methods.ts" code={`class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  describe(): string {
    return "A simple calculator";
  }

  // Method that returns void
  log(message: string): void {
    console.log("[Calc]", message);
  }
}

const calc = new Calculator();
calc.add(2, 3); // 5`} />
      <NoteCallout tone="tip">Annotate method return types on public APIs for clarity and to catch accidental return changes.</NoteCallout>
      <NoteTakeaways items={["Methods are functions attached to instances (or the class, if static).", "TypeScript validates arguments and return values.", "Methods can use this to access instance properties."]} />
    </div>
  );
}
