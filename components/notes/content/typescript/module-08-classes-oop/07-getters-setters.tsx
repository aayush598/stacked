import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function GettersSettersNote() {
  return (
    <div>
      <NoteLead>Getters and setters control property access with custom logic. TypeScript infers types from them and validates usage.</NoteLead>
      <NoteCode filename="accessors.ts" code={`class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) throw new Error("Below absolute zero");
    this._celsius = value;
  }

  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }
}

const t = new Temperature();
t.celsius = 100;
t.fahrenheit; // 212`} />
      <NoteCallout tone="insight">If you only define a getter (no setter), the property is effectively readonly from the outside.</NoteCallout>
      <NoteTakeaways items={["Getters compute or control read access; setters validate or control writes.", "TypeScript infers the property type from getter/setter signatures.", "A getter-only property behaves as readonly."]} />
    </div>
  );
}
