import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function AmbientModulesNote() {
  return (<div><NoteLead>Ambient modules declare module shapes without implementations, often for untyped packages or virtual modules.</NoteLead>
      <NoteCode filename="globals.d.ts" code={`declare module "legacy-lib" {\n  export function doThing(x: string): number;\n}\n\ndeclare module "*.svg" {\n  const url: string;\n  export default url;\n}`} />
      <NoteTakeaways items={["Ambient modules describe modules that exist outside TS source.", "Used for third-party types, assets, and virtual modules.", "Keep declarations accurate to runtime behavior."]} /></div>);
}
