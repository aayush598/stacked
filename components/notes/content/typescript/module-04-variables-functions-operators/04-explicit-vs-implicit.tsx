import { NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { TwoCol } from "./shared/m04-visuals";
export function ExplicitImplicitNote(){
  return <div>
    <NoteLead>Explicit types are written by you. Implicit types are inferred by TypeScript. Both are safe when used intentionally.</NoteLead>
    <TwoCol a={{title:"Explicit",body:"Useful for contracts, empty containers, and preventing widening.",code:`const ids: number[] = [];\nfunction parse(s: string): number { return Number(s); }`}} b={{title:"Implicit",body:"Useful for obvious locals and reducing noise.",code:`const ids = [1, 2, 3];\nconst doubled = ids.map(n => n * 2);`}} />
    <NoteCallout tone="tip">Choose the form that makes the next reader faster and the compiler stricter where needed.</NoteCallout>
    <NoteTakeaways items={["Explicit = written type; implicit = inferred type.", "Use explicit types for boundaries and ambiguous cases.", "Use implicit types for obvious local code."]} />
  </div>;
}