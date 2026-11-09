import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function HigherOrderFunctionsNote() {
  return (<div><NoteLead>Higher-order functions take functions as arguments or return functions. Type their callbacks precisely for safe composition.</NoteLead>
      <NoteCode filename="hof.ts" code={`function withLog<T extends unknown[], R>(fn: (...args: T) => R) {\n  return (...args: T): R => {\n    console.log("call");\n    return fn(...args);\n  };\n}\nconst add = (a: number, b: number) => a + b;\nconst loggedAdd = withLog(add);`} />
      <NoteTakeaways items={["HOFs are central to functional patterns and APIs.", "Generics preserve argument/return relationships.", "Type callbacks and returned functions explicitly when needed."]} /></div>);
}
