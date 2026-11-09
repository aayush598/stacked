import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { CodeTabs } from "./shared/visuals";

export function GenericFunctionsNote() {
  return (
    <div>
      <NoteLead>Generic functions declare type parameters in angle brackets. The type flows from arguments to the return value.</NoteLead>
      <CodeTabs items={[
        { label: "Basic", code: `function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
first([1, 2, 3]);      // number | undefined
first(["a", "b"]);     // string | undefined`, note: "T is inferred from the argument." },
        { label: "Multiple params", code: `function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("age", 30); // [string, number]`, note: "Multiple type parameters capture different relationships." },
        { label: "Arrow function", code: `const wrap = <T,>(value: T): { value: T } => ({ value });
wrap(42); // { value: number }`, note: "In .tsx files, add a trailing comma <T,> to avoid JSX ambiguity." },
      ]} />
      <NoteTakeaways items={["Declare type parameters with <T> before the function parameters.", "TypeScript usually infers T from arguments.", "Generics connect input types to output types."]} />
    </div>
  );
}
