import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function PathAliasesNote() {
  return (<div><NoteLead>Path aliases map import prefixes (like <code>@/</code>) to directories. Configure both TypeScript and your runtime/bundler.</NoteLead>
      <NoteCode filename="tsconfig.json" code={`{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": { "@/*": ["src/*"] }\n  }\n}\n// import { x } from "@/utils/x";`} />
      <NoteCallout tone="warning">TypeScript paths help the compiler/editor; your bundler/runtime also needs matching alias config.</NoteCallout>
      <NoteTakeaways items={["Aliases improve import ergonomics.", "Keep alias config in sync across tools.", "Avoid too many alias patterns."]} /></div>);
}
