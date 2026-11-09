import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function GenericInferenceNote() {
  return (
    <div>
      <NoteLead>TypeScript infers generic type arguments from function arguments, return context, and assigned values so you rarely need to write them explicitly.</NoteLead>
      <NoteCode filename="inference.ts" code={`function wrap<T>(value: T) { return { value }; }
wrap(42);       // T inferred as number
wrap("hello");  // T inferred as string

[1, 2, 3].map(x => x.toString()); // number -> string`} />
      <NoteCallout tone="tip">Let inference work. Specify type arguments explicitly only when inference is wrong or impossible.</NoteCallout>
      <NoteTakeaways items={["Inference uses arguments, callbacks, and expected types.", "Explicit type arguments are the fallback.", "Good inference reduces noise."]} />
    </div>
  );
}
