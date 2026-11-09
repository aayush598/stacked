import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { WideningNarrowingDemo } from "./shared/basic-types-visuals";

export function PrimitiveTypeInferenceNote() {
  return (
    <div>
      <NoteLead>
        TypeScript can infer primitive types from initialization and context. Inference keeps code concise while still
        providing static checking.
      </NoteLead>
      <NoteCode
        filename="inference.ts"
        code={`let username = "Alex";   // string
let age = 25;            // number
let isActive = true;     // boolean
const fixedStatus = "active"; // literal "active"

const scores = [80, 90, 95];      // number[]
const values = [10, "hello"];     // (string | number)[]

const result = Math.random() > 0.5 ? "success" : 404;
// string | number`}
      />
      <WideningNarrowingDemo />
      <NoteCallout tone="insight">
        Inference is not dynamic typing. The compiler still determines and checks types statically. Use explicit
        annotations at public boundaries or when you need to constrain widening.
      </NoteCallout>
      <NoteTakeaways items={["Initialization often provides enough type information.", "const preserves primitive literals; let usually widens.", "Contextual typing infers callback parameter types from usage."]} />
    </div>
  );
}
