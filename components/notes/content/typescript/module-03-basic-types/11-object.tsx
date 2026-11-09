import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteList, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function ObjectTypeNote() {
  return (
    <div>
      <NoteLead>The <InlineCode>object</InlineCode> type means &quot;any non-primitive value&quot; (objects, arrays, functions). It is usually too broad; prefer specific object shapes for real modeling.</NoteLead>
      <NoteCode filename="object.ts" code={`let value: object;\nvalue = { a: 1 };\nvalue = [1, 2];\nvalue = () => {};\n// value = "hi"; // Error (primitive)\n\n// Better: specific shape\ntype User = { id: number; name: string };\nconst user: User = { id: 1, name: "Alex" };`} />
      <ValidInvalidCards valid={{ code: `const config: { port: number } = { port: 3000 };`, note: "Specific shapes give property safety and autocomplete." }} invalid={{ code: `const x: object = { a: 1 };\n// x.a // Error: object has no known properties`, note: "Broad object does not expose your properties." }} />
      <NoteList items={["object: any non-primitive.", "{}: empty object type with quirky behavior; avoid for general modeling.", "Object: wrapper type; avoid.", "Preferred: { id: number; ... }, interfaces, Record, mapped types."]} />
      <NoteCallout tone="warning">Do not use <InlineCode>object</InlineCode>, <InlineCode>{"{}"}</InlineCode>, or <InlineCode>Object</InlineCode> when you know the shape. They hide useful type information.</NoteCallout>
      <NoteTakeaways items={["object is broad and excludes primitives.", "Use concrete object types for real data.", "For arbitrary key/value maps, consider Record<string, unknown> or index signatures."]} />
    </div>
  );
}
