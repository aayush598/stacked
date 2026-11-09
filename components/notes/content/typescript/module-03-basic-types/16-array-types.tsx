import { InlineCode, NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ArrayTupleMockup, SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function ArrayTypesNote() {
  return (
    <div>
      <NoteLead>Arrays hold ordered collections where elements share a type (or a union). TypeScript checks element types on reads, writes, and common array methods.</NoteLead>
      <ArrayTupleMockup />
      <SyntaxPlayground options={[
        { label: "T[]", code: `const names: string[] = ["A", "B"];\nnames.push("C");\n// names.push(1); // Error`, note: "Most common array syntax." },
        { label: "Array<T>", code: `const scores: Array<number> = [1, 2, 3];`, note: "Generic syntax; equivalent for simple arrays." },
        { label: "Union elements", code: `const mixed: (string | number)[] = [1, "two"];\nconst first = mixed[0]; // string | number | undefined with noUncheckedIndexedAccess`, note: "Use unions when each position can be different kinds." },
        { label: "Objects", code: `type User = { id: number; name: string };\nconst users: User[] = [{ id: 1, name: "A" }];\nusers.map(u => u.name);`, note: "Arrays of structured types are common in app code." },
      ]} />
      <ValidInvalidCards valid={{ code: `const ids: number[] = [];\nids.push(7);`, note: "All elements satisfy number." }} invalid={{ code: `const ids: number[] = [1, "2"];`, note: "String element violates number[]." }} />
      <NoteCallout tone="insight">With <InlineCode>noUncheckedIndexedAccess</InlineCode>, indexing like <InlineCode>arr[i]</InlineCode> can include <InlineCode>undefined</InlineCode>, reflecting that the index may be out of bounds.</NoteCallout>
      <NoteTakeaways items={["Use arrays for variable-length collections of compatible elements.", "T[] and Array<T> are equivalent forms.", "Index access can be unsafe; consider bounds checks or iteration methods."]} />
    </div>
  );
}
