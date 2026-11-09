import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function AmbientEnumsNote(){
  return <div>
    <NoteLead>Ambient enums (declare enum) describe enums that exist at runtime elsewhere. They are used in declaration/ambient contexts.</NoteLead>
    <NoteCode filename="ambient-enums.ts" code={`declare enum ExternalStatus {\n  Ready = "ready",\n  Busy = "busy",\n}\n// assumes ExternalStatus exists globally/externally`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["declare enum has no emitted implementation in your file.", "Used in .d.ts or ambient declarations.", "Be sure the runtime value actually exists."]} />
  </div>;
}
