import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { EnumCompareVisual } from "./shared/basic-types-visuals";

export function EnumTypesNote() {
  return (
    <div>
      <NoteLead>Enums define a named set of constants. Unlike most TypeScript types, enums can generate JavaScript runtime code (unless you use const enums or alternatives), so understand their output before using them widely.</NoteLead>
      <EnumCompareVisual />
      <NoteCode filename="enum.ts" code={`enum Direction { Up, Down, Left, Right }\nlet d: Direction = Direction.Up;\n\n// Enums have runtime representation\nconsole.log(Direction.Up);`} />
      <NoteCallout tone="warning">Enums are convenient but have trade-offs: runtime code, interoperability details, and sometimes less ergonomic behavior than string literal unions.</NoteCallout>
      <NoteTakeaways items={["Enums are named constant groups with type + possible runtime value.", "Know the emitted JavaScript behavior.", "Consider literal unions or as const objects as alternatives."]} />
    </div>
  );
}
