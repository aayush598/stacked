import { InlineCode, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function InOperatorNote(){
  return <div>
    <NoteLead>The <InlineCode>in</InlineCode> operator checks whether a property key exists on an object. TypeScript can use it to narrow unions of object types.</NoteLead>
    <NoteCode filename="in.ts" code={`type Dog = { bark: () => void };\ntype Cat = { meow: () => void };\n\nfunction speak(pet: Dog | Cat) {\n  if ("bark" in pet) pet.bark();\n  else pet.meow();\n}`} />
    <NoteTakeaways items={["in checks property existence at runtime.", "TypeScript narrows object unions when the key distinguishes members.", "Useful when types share no literal discriminant field."]} />
  </div>;
}