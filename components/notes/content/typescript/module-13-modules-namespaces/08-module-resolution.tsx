import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function ModuleResolutionNote() {
  return (<div><NoteLead>Module resolution determines how TypeScript finds the file behind an import specifier. It depends on compiler options and project/runtime.</NoteLead>
      <NoteCode filename="tsconfig.json" code={`{\n  "compilerOptions": {\n    "module": "NodeNext",\n    "moduleResolution": "NodeNext"\n  }\n}`} />
      <NoteTakeaways items={["Resolution rules must match your runtime/bundler.", "NodeNext/Bundler/Classic behave differently.", "Misconfigured resolution causes confusing import errors."]} /></div>);
}
