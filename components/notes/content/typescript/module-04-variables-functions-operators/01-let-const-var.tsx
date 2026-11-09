import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { TwoCol } from "./shared/m04-visuals";
export function LetConstVarNote(){
  return <div>
    <NoteLead><InlineCode>let</InlineCode>, <InlineCode>const</InlineCode>, and <InlineCode>var</InlineCode> declare variables, but they behave very differently. In modern TypeScript, prefer <InlineCode>const</InlineCode> by default and <InlineCode>let</InlineCode> when you must reassign. Avoid <InlineCode>var</InlineCode>.</NoteLead>
    <NoteCode filename="declarations.ts" code={`const apiUrl = "https://api.example.com"; // cannot be reassigned\nlet count = 0; // can be reassigned\ncount += 1;\n\n// var is function-scoped and hoisted in confusing ways\n// var legacy = 1; // avoid in new code`} />
    <TwoCol a={{title:"const",body:"Block-scoped binding. The binding cannot be reassigned, but object contents can still mutate unless typed readonly/frozen.",code:`const user = { name: "A" };\nuser.name = "B"; // OK\n// user = {} // Error`}} b={{title:"let",body:"Block-scoped and reassignable. TypeScript tracks its type through assignments and control flow.",code:`let status = "idle";\nstatus = "loading"; // OK\n// status = 1; // Error (type string)`}} />
    <NoteCallout tone="warning">Use <InlineCode>var</InlineCode> only when maintaining legacy code. It ignores block scope and can create subtle bugs.</NoteCallout>
    <NoteTakeaways items={["Prefer const; use let for reassignment.", "const prevents rebinding, not deep immutability.", "Avoid var in modern TypeScript."]} />
  </div>;
}