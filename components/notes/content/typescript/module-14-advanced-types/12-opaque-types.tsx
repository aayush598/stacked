import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function OpaqueTypesNote() {
  return (<div>
    <NoteLead>Opaque types hide implementation details behind a named type, exposing only allowed operations. Branding is a common implementation.</NoteLead>
    <NoteCode filename="opaque-types.ts" code={`type Email = string & { readonly __opaque: 'Email' };
function parseEmail(input: string): Email | null {
  return input.includes('@') ? (input as Email) : null;
}`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["Opaque types model validated/domain-specific values.", "They prevent accidental use of unvalidated primitives.", "Create them through trusted constructors or validators."]} />
  </div>);
}
