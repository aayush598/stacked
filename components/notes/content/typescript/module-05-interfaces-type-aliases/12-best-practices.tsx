import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function BestPracticesM5Note(){
  return <div>
    <NoteLead>Choose clear names, keep contracts focused, prefer composition, and avoid overly clever types. Export stable public types and hide internal complexity.</NoteLead>
    <NoteCode filename="best-practices.ts" code={`// Good: focused contract\ntype CreateUserInput = { name: string; email: string };\ntype User = { id: string } & CreateUserInput;\n\n// Avoid giant, unrelated interfaces`} />
    <NoteCallout tone="tip">Focus on the contract: what values are allowed, how to read/write them safely, and where TypeScript can infer or must be told.</NoteCallout>
    <NoteTakeaways items={["Name types by domain meaning.", "Prefer composition over huge single shapes.", "Use unions/interfaces/types intentionally, not randomly."]} />
  </div>;
}
