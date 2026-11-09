import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function TypeInferenceM4Note(){
  return <div>
    <NoteLead>Type inference lets TypeScript determine types from values and usage. This keeps code concise without losing static safety.</NoteLead>
    <NoteCode filename="inference.ts" code={`let city = "Delhi";      // string\nlet visits = 3;          // number\nlet flags = [true, false]; // boolean[]\n\nfunction double(n: number) { return n * 2; } // number`} />
    <NoteCallout tone="insight">Inference is strongest when variables are initialized immediately. Uninitialized variables may need annotations or become less precise.</NoteCallout>
    <NoteTakeaways items={["Inference uses values, context, and control flow.", "Initialized locals are often best left inferred.", "Public APIs are often clearer with explicit types."]} />
  </div>;
}