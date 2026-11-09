import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function CommonJSNote() {
  return (<div><NoteLead>CommonJS uses <code>require()</code> and <code>module.exports</code>. It is common in older Node.js code; TypeScript can interop depending on config.</NoteLead>
      <NoteCode filename="legacy.js" code={`// CommonJS\nmodule.exports = { add(a,b){ return a+b; } };\nconst math = require("./math");`} />
      <NoteCallout tone="insight">Modern Node and TypeScript projects increasingly use ESM. Understand CJS for interop and legacy packages.</NoteCallout>
      <NoteTakeaways items={["CJS is require/module.exports.", "ESM/CJS interop depends on compiler and runtime settings.", "Prefer ESM for new TypeScript projects when possible."]} /></div>);
}
