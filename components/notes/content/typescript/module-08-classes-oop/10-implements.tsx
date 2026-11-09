import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function ImplementsNote() {
  return (
    <div>
      <NoteLead>The implements keyword ensures a class satisfies an interface contract. The class must provide all required members.</NoteLead>
      <NoteCode filename="implements.ts" code={`interface Printable {
  print(): string;
}

interface Serializable {
  serialize(): object;
}

class Report implements Printable, Serializable {
  constructor(private data: string) {}
  print(): string { return this.data; }
  serialize(): object { return { data: this.data }; }
}`} />
      <NoteCallout tone="insight">implements checks the contract but does not inherit implementation (unlike extends). A class can implement multiple interfaces.</NoteCallout>
      <NoteTakeaways items={["implements enforces that a class matches an interface shape.", "A class can implement multiple interfaces.", "implements is a type check — it doesn't copy code."]} />
    </div>
  );
}
