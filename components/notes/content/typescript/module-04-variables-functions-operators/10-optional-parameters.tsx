import { InlineCode, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function OptionalParametersNote(){
  return <div>
    <NoteLead>Optional parameters use <InlineCode>?</InlineCode>. They may be omitted by the caller, and inside the function their type includes <InlineCode>undefined</InlineCode>.</NoteLead>
    <NoteCode filename="optional.ts" code={`function greet(name: string, title?: string): string {\n  if (title) return "Hello " + title + " " + name;\n  return "Hello " + name;\n}\ngreet("Alex");\ngreet("Alex", "Dr.");`} />
    <NoteTakeaways items={["Optional parameters come after required ones.", "Inside the function, treat optional values as possibly undefined.", "Use defaults when you want a concrete fallback value."]} />
  </div>;
}