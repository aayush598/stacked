import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function MethodOverridingNote() {
  return (
    <div>
      <NoteLead>Subclasses can override parent methods. TypeScript ensures the override is compatible with the base method signature.</NoteLead>
      <NoteCode filename="override.ts" code={`class Logger {
  log(msg: string): void {
    console.log(msg);
  }
}

class TimestampLogger extends Logger {
  override log(msg: string): void {
    super.log(new Date().toISOString() + ": " + msg);
  }
}`} />
      <NoteCallout tone="tip">Use the override keyword (with noImplicitOverride) to make overrides explicit and catch accidental name mismatches.</NoteCallout>
      <NoteTakeaways items={["Overrides replace parent behavior in subclasses.", "The override must be type-compatible with the base method.", "The override keyword makes intent explicit and safer."]} />
    </div>
  );
}
