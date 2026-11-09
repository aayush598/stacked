import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function TypeCastingVsConversionNote() {
  return (<div><NoteLead>Type assertions are not type conversions. They do not change runtime values. Use real conversion functions for runtime changes.</NoteLead>
      <Compare a={{t:"Assertion (no runtime change)",c:`const x = "42" as unknown as number;\n// x is still "42" at runtime`}} b={{t:"Conversion (runtime change)",c:`const x = Number("42");\n// x is 42 at runtime`}} />
      <NoteTakeaways items={["Assertions affect TypeScript only.", "Conversions (Number, String, Boolean, JSON parsing) affect runtime values.", "Never confuse the two."]} /></div>);
}
