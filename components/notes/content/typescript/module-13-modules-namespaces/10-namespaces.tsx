import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function NamespacesNote() {
  return (<div><NoteLead>Namespaces are TypeScript's older internal module system. They are still seen in declaration files but ES modules are preferred for application code.</NoteLead>
      <NoteCode filename="namespace.ts" code={`namespace Utils {\n  export function slug(s: string) { return s.toLowerCase(); }\n}\nUtils.slug("Hi");`} />
      <NoteTakeaways items={["Namespaces predate ES modules in TS usage patterns.", "Prefer ES modules for modern code organization.", "Still relevant for some .d.ts/global declaration scenarios."]} /></div>);
}
