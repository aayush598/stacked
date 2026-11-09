import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function ClassSyntaxNote() {
  return (
    <div>
      <NoteLead>Classes bundle data (properties) and behavior (methods) into a reusable blueprint. TypeScript adds type annotations to class members, constructors, and method signatures.</NoteLead>
      <NoteCode filename="class.ts" code={`class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return "Hello, " + this.name;
  }
}

const u = new User("Alex", 30);
u.greet(); // "Hello, Alex"`} />
      <FlowSteps steps={[{ label: "class", detail: "blueprint" }, { label: "constructor", detail: "init" }, { label: "new", detail: "instance" }, { label: "methods", detail: "behavior" }]} />
      <NoteTakeaways items={["Classes define the shape and behavior of objects.", "The constructor runs when you create an instance with new.", "TypeScript checks property types and method signatures at compile time."]} />
    </div>
  );
}
