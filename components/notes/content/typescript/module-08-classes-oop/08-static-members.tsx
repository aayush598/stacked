import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function StaticMembersNote() {
  return (
    <div>
      <NoteLead>Static members belong to the class itself, not instances. Use them for utility functions, constants, factories, or shared state.</NoteLead>
      <NoteCode filename="static.ts" code={`class MathUtil {
  static PI = 3.14159;

  static circleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}

MathUtil.PI;           // 3.14159
MathUtil.circleArea(5); // ~78.54
// new MathUtil().PI;  // Error: static member`} />
      <NoteCallout tone="tip">Static members are accessed on the class, not on instances. They can also have access modifiers.</NoteCallout>
      <NoteTakeaways items={["static properties/methods live on the class, not instances.", "Useful for constants, utilities, and factory methods.", "Static members can be public, private, or protected."]} />
    </div>
  );
}
