import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ComparePanel } from "./shared/visuals";

export function ParameterPropertiesNote() {
  return (
    <div>
      <NoteLead>Parameter properties are a shorthand: adding an access modifier (or readonly) to a constructor parameter declares and initializes a property in one step.</NoteLead>
      <ComparePanel
        left={{ title: "Without shorthand", code: `class User {
  name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}` }}
        right={{ title: "With parameter properties", code: `class User {
  constructor(
    public name: string,
    private age: number,
  ) {}
}` }}
      />
      <NoteCallout tone="tip">Parameter properties reduce boilerplate. They are especially useful for simple data-holding classes.</NoteCallout>
      <NoteTakeaways items={["Prefix constructor params with public/private/protected/readonly to auto-create properties.", "Less boilerplate, same result.", "Keep constructors readable — too many parameter properties can get noisy."]} />
    </div>
  );
}
