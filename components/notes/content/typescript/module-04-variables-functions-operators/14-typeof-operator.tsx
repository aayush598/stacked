import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function TypeofOperatorNote(){
  return <div>
    <NoteLead>JavaScript&apos;s <InlineCode>typeof</InlineCode> runs at runtime and returns strings like <code className="font-mono">&quot;string&quot;</code>. TypeScript uses it for narrowing in control flow. (TypeScript also has a type-level <InlineCode>typeof</InlineCode> in type positions.)</NoteLead>
    <NoteCode filename="typeof.ts" code={`function format(value: string | number) {\n  if (typeof value === "string") return value.trim();\n  return value.toFixed(2);\n}\n\nconst config = { retries: 3 };\ntype Config = typeof config; // type-level typeof`} />
    <NoteCallout tone="insight">Remember runtime quirks: <InlineCode>typeof null === &quot;object&quot;</InlineCode>. TypeScript&apos;s narrowing accounts for common checks, but be precise with null.</NoteCallout>
    <NoteTakeaways items={["Runtime typeof is great for primitive narrowing.", "Type-level typeof captures the type of a value.", "Know JS typeof quirks, especially null."]} />
  </div>;
}