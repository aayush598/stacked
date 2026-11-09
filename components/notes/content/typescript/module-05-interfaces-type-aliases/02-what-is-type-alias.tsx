import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function WhatIsTypeAliasNote(){
  return <div>
    <NoteLead>A type alias gives a name to any type: primitives, unions, intersections, tuples, functions, or object shapes.</NoteLead>
    <NoteCode filename="what-is-type-alias.ts" code={`type ID = string | number;\ntype User = { id: ID; name: string };\ntype Callback = (value: string) => void;`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Type aliases can name any type expression.", "Useful for unions, tuples, functions, and reusable names.", "Aliases do not create runtime values."]} />
  </div>;
}
