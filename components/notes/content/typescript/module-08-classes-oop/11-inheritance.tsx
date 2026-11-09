import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function InheritanceNote() {
  return (
    <div>
      <NoteLead>Inheritance lets a subclass extend a base class, inheriting its properties and methods. Use extends and call super() in the constructor.</NoteLead>
      <NoteCode filename="inheritance.ts" code={`class Animal {
  constructor(public name: string) {}
  move(): string { return this.name + " moves"; }
}

class Bird extends Animal {
  constructor(name: string, public canFly: boolean) {
    super(name); // must call super before using this
  }
  move(): string {
    return this.canFly ? this.name + " flies" : super.move();
  }
}`} />
      <NoteCallout tone="warning">Call super() in the subclass constructor before accessing this. Prefer composition over deep inheritance hierarchies.</NoteCallout>
      <NoteTakeaways items={["extends inherits properties and methods from a base class.", "super() calls the parent constructor; super.method() calls a parent method.", "Favor composition when inheritance creates tight coupling."]} />
    </div>
  );
}
