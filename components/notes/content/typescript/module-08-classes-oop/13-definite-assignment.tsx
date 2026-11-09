import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function DefiniteAssignmentNote() {
  return (
    <div>
      <NoteLead>With strictPropertyInitialization, TypeScript requires properties to be assigned. Use the definite assignment assertion (!) when initialization happens outside the constructor (e.g., dependency injection).</NoteLead>
      <NoteCode filename="definite.ts" code={`class Service {
  // Assigned by framework/DI, not in constructor
  db!: Database;

  init(db: Database) {
    this.db = db;
  }
}

// Without !: Error - Property 'db' has no initializer
// The ! tells TypeScript: "trust me, this will be assigned"`} />
      <NoteCallout tone="warning">The ! assertion bypasses the compiler check. Only use it when you are certain the value will be assigned before use.</NoteCallout>
      <NoteTakeaways items={["strictPropertyInitialization requires all properties to be initialized.", "Use ! (definite assignment) only when init happens outside the constructor.", "Prefer constructor assignment when possible — it's safer."]} />
    </div>
  );
}
