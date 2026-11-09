import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ArrowFunctionsNote(){
  return <div>
    <NoteLead>Arrow functions are compact function expressions. They are common for callbacks and short transformations. TypeScript infers many arrow parameter types from context.</NoteLead>
    <NoteCode filename="arrows.ts" code={`const add = (a: number, b: number): number => a + b;\nconst nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2); // n inferred\n\nconst toUser = (id: number) => ({ id, active: true });`} />
    <NoteCallout tone="warning">Wrap object literal returns in parentheses: <code className="font-mono">{`x => ({ a: 1 })`}</code>. Without parentheses, braces look like a function body.</NoteCallout>
    <NoteTakeaways items={["Arrow functions are concise and lexical for this.", "Contextual typing reduces annotation noise.", "Use explicit types when context is missing or unclear."]} />
  </div>;
}