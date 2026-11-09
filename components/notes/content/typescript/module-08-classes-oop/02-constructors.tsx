import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { CodeTabs } from "./shared/visuals";

export function ConstructorsNote() {
  return (
    <div>
      <NoteLead>The constructor initializes a new instance. TypeScript validates constructor parameters and ensures properties are properly assigned (especially with strictPropertyInitialization).</NoteLead>
      <CodeTabs items={[
        { label: "Basic", code: `class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}`, note: "Assign all required properties in the constructor." },
        { label: "Overloads", code: `class Box {
  value: number;
  constructor(value: number);
  constructor(value: string);
  constructor(value: number | string) {
    this.value = typeof value === "string" ? Number(value) : value;
  }
}`, note: "Overload signatures provide multiple call shapes; one implementation handles all." },
        { label: "Defaults", code: `class Config {
  debug: boolean;
  constructor(debug = false) {
    this.debug = debug;
  }
}
new Config();     // debug = false
new Config(true); // debug = true`, note: "Default parameters work in constructors too." },
      ]} />
      <NoteTakeaways items={["Constructors initialize instance state.", "TypeScript enforces parameter types and property assignment.", "Constructor overloads allow flexible instantiation patterns."]} />
    </div>
  );
}
