import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { CodeTabs } from "./shared/visuals";

export function PropertiesNote() {
  return (
    <div>
      <NoteLead>Class properties declare the data each instance holds. TypeScript requires property types and, in strict mode, ensures they are initialized.</NoteLead>
      <CodeTabs items={[
        { label: "Typed properties", code: `class Product {
  name: string;
  price: number;
  inStock: boolean = true; // default value

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}`, note: "Properties can have type annotations, default values, or both." },
        { label: "Optional", code: `class User {
  name: string;
  nickname?: string; // optional

  constructor(name: string, nickname?: string) {
    this.name = name;
    this.nickname = nickname;
  }
}`, note: "Optional properties may be undefined." },
        { label: "readonly", code: `class Entity {
  readonly id: string;
  constructor(id: string) {
    this.id = id; // OK: assign in constructor
  }
  // changeId() { this.id = "x"; } // Error
}`, note: "readonly properties can only be assigned in the constructor (or at declaration)." },
      ]} />
      <NoteTakeaways items={["Declare property types for compile-time safety.", "Use defaults, optional markers, or constructor assignment for initialization.", "readonly prevents reassignment after construction."]} />
    </div>
  );
}
