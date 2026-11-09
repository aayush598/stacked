import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function HigherOrderGenericsNote() {
  return (
    <div>
      <NoteLead>Higher-order generic patterns compose generic behavior across function layers, factories, currying, and typed pipelines.</NoteLead>
      <NoteCode filename="higher-order.ts" code={`function curry<A, B, R>(fn: (a: A, b: B) => R) {
  return (a: A) => (b: B) => fn(a, b);
}
const add = (a: number, b: number) => a + b;
curry(add)(1)(2); // 3`} />
      <NoteTakeaways items={["Generics can flow through multiple function layers.", "Useful for factories, middleware, and composition.", "Keep signatures readable."]} />
    </div>
  );
}
