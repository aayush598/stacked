import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { PitfallCards } from "./shared/visuals";

export function AbstractClassesNote() {
  return (
    <div>
      <NoteLead>Abstract classes cannot be instantiated directly. They define a contract (including abstract members) that subclasses must implement.</NoteLead>
      <NoteCode filename="abstract.ts" code={`abstract class Shape {
  abstract area(): number; // must be implemented

  describe(): string {      // shared implementation
    return "Area: " + this.area();
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }
  area(): number { return Math.PI * this.radius ** 2; }
}

// new Shape(); // Error: cannot instantiate abstract class
new Circle(5).describe(); // "Area: 78.54..."`} />
      <NoteTakeaways items={["Abstract classes provide partial implementation + required contracts.", "Abstract members have no body — subclasses must implement them.", "You cannot create instances of an abstract class directly."]} />
    </div>
  );
}
