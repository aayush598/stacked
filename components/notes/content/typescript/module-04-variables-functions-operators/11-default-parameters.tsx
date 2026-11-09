import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function DefaultParametersNote(){
  return <div>
    <NoteLead>Default parameters provide a value when an argument is omitted or <code className="font-mono">undefined</code>. TypeScript often infers the parameter type from the default.</NoteLead>
    <NoteCode filename="defaults.ts" code={`function greet(name = "Guest") {\n  return "Hello " + name; // name inferred as string\n}\n\nfunction page(limit: number = 20, offset = 0) {\n  return { limit, offset };\n}`} />
    <NoteTakeaways items={["Defaults simplify call sites.", "Types can be inferred from default values.", "A default can replace some optional-parameter checks."]} />
  </div>;
}