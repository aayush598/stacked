import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ReturnTypesNote(){
  return <div>
    <NoteLead>Return types describe what a function gives back. TypeScript can infer them, but explicit return types are valuable for public APIs and to catch accidental return-path changes.</NoteLead>
    <NoteCode filename="returns.ts" code={`function slugify(text: string): string {\n  return text.toLowerCase().replace(/\s+/g, "-");\n}\n\nfunction maybeId(flag: boolean): number | undefined {\n  if (flag) return 1;\n  return undefined;\n}`} />
    <NoteCallout tone="tip">If a function has multiple branches, an explicit return type helps ensure every branch returns the intended shape.</NoteCallout>
    <NoteTakeaways items={["Return types define output contracts.", "Inference is fine locally; explicit types help at boundaries.", "All return paths must satisfy the declared return type."]} />
  </div>;
}