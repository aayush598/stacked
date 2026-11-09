import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ThisTypesNote() {
  return (<div><NoteLead>You can type <code>this</code> in functions/methods using a special first <code>this</code> parameter. It is a type annotation, not a runtime argument.</NoteLead>
      <NoteCode filename="this.ts" code={`interface DB { run(sql: string): void }\nfunction exec(this: DB, sql: string) {\n  this.run(sql);\n}\nconst db: DB = { run: console.log, exec } as any;\n// TS checks this context when typing/calling patterns`} />
      <NoteTakeaways items={["The this parameter is a compile-time annotation.", "Useful for functions that rely on call context.", "Arrow functions do not have their own this binding."]} /></div>);
}
