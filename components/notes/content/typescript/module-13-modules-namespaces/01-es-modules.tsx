import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ESModulesNote() {
  return (<div><NoteLead>ES modules use <code>import</code>/<code>export</code> syntax. They are the modern standard for TypeScript/JavaScript module organization.</NoteLead>
      <NoteCode filename="math.ts" code={`export function add(a: number, b: number) { return a + b; }\nexport const PI = 3.14;`} />
      <NoteCode filename="app.ts" code={`import { add, PI } from "./math";\nconsole.log(add(1, 2), PI);`} />
      <NoteTakeaways items={["ESM is the standard module system.", "Each file can export values, types, classes, etc.", "TypeScript compiles modules based on module/moduleResolution settings."]} /></div>);
}
