import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function VarianceNote() {
  return (
    <div>
      <NoteLead>Variance describes how generic subtype relationships behave. It determines whether Container of a subtype is assignable to Container of a supertype.</NoteLead>
      <NoteCode filename="variance.ts" code={`class Animal { name = ""; }
class Dog extends Animal { breed = ""; }

// readonly arrays are covariant
const dogs: Dog[] = [new Dog()];
const animals: readonly Animal[] = dogs; // OK

// function params are contravariant under strictFunctionTypes
type Fn<T> = (v: T) => void;`} />
      <NoteCallout tone="insight">Variance rules prevent unsafe substitutions in generic positions. readonly promotes safer covariance.</NoteCallout>
      <NoteTakeaways items={["Variance governs subtype substitution in generics.", "Outputs tend to be covariant; inputs contravariant under strict checks.", "Mutability affects variance."]} />
    </div>
  );
}
