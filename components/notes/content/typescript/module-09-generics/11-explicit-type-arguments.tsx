import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function ExplicitTypeArgumentsNote() {
  return (
    <div>
      <NoteLead>Sometimes you must specify type arguments manually when inference is ambiguous, too wide, or there is no value to infer from.</NoteLead>
      <NoteCode filename="explicit.ts" code={`function create<T>(): T[] { return []; }
const nums = create<number>(); // number[]
// create() alone would infer unknown[]

const result = Promise.resolve<string>("ok");`} />
      <NoteTakeaways items={["Pass type arguments in angle brackets: fn<Type>().", "Needed when no argument provides inference.", "Avoid when inference already gives the right type."]} />
    </div>
  );
}
