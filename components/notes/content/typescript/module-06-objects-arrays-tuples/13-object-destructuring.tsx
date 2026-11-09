import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ObjectDestructuringNote(){
  return <div>
    <NoteLead>Destructuring extracts properties. Type the whole object pattern when needed; TypeScript keeps member types.</NoteLead>
    <NoteCode filename="object-destructuring.ts" code={`type User = { id: number; name: string; role?: string };
function label({ id, name, role = "viewer" }: User) {
  return id + ":" + name + ":" + role;
}`} />
    <NoteCallout tone="tip">Types flow through destructuring. Defaults can make local values defined while the source property remains optional.</NoteCallout>
    <NoteTakeaways items={["Types flow through destructuring.", "Defaults can make values defined locally.", "Avoid overly complex destructuring signatures."]} />
  </div>;
}
