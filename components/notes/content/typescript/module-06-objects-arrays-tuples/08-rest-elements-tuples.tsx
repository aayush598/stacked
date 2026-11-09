import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function RestElementsTuplesNote(){
  return <div>
    <NoteLead>Rest elements allow variable tail length in tuples.</NoteLead>
    <NoteCode filename="rest-elements-tuples.ts" code={`type Args = [command: string, ...flags: string[]];\nconst run: Args = ["build", "--prod", "--verbose"];`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Use rest for typed variadic tails.", "Combine fixed prefix with flexible suffix.", "Common in function argument modeling."]} />
  </div>;
}
