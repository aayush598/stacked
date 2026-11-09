import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function RecursiveTypesNote() {
  return (<div>
    <NoteLead>Recursive types reference themselves. Useful for trees, nested JSON-like structures, and linked lists.</NoteLead>
    <NoteCode filename="recursive-types.ts" code={`type Json = string | number | boolean | null | Json[] | { [k: string]: Json };
type Tree<T> = { value: T; children?: Tree<T>[] };`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["Recursive types model nested/self-referential data.", "Keep recursion simple for compiler performance.", "Useful for JSON, trees, menus, and AST-like shapes."]} />
  </div>);
}
