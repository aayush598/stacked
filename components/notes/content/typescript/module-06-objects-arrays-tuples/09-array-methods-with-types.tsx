import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ArrayMethodsTypesNote(){
  return <div>
    <NoteLead>Array methods like map/filter/reduce preserve or transform types. TypeScript infers callback types from the array element type.</NoteLead>
    <NoteCode filename="array-methods-with-types.ts" code={`const nums = [1, 2, 3];
const labels = nums.map(n => "#" + n); // string[]
const evens = nums.filter(n => n % 2 === 0); // number[]
const total = nums.reduce((acc, n) => acc + n, 0); // number`} />
    <NoteCallout tone="tip">Callback parameters are often contextually typed. Add an explicit accumulator type to reduce when inference is unclear.</NoteCallout>
    <NoteTakeaways items={["map changes element type; filter usually preserves type (or narrows with predicates).", "Annotate reduce accumulators when needed.", "Typed arrays make method chains safer."]} />
  </div>;
}
