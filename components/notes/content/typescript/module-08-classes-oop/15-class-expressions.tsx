import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function ClassExpressionsNote() {
  return (
    <div>
      <NoteLead>Class expressions define classes as values (assigned to variables, passed as arguments). They work like function expressions but for classes.</NoteLead>
      <NoteCode filename="class-expr.ts" code={`const Logger = class {
  log(msg: string) { console.log(msg); }
};

const l = new Logger();
l.log("hello");

// Can also be anonymous or used inline
function create(kind: "a" | "b") {
  return kind === "a"
    ? class { type = "a" as const; }
    : class { type = "b" as const; };
}`} />
      <NoteTakeaways items={["Class expressions create class values without a declaration name in scope.", "Useful for dynamic class creation and mixin patterns.", "The class can still have an internal name for debugging."]} />
    </div>
  );
}
