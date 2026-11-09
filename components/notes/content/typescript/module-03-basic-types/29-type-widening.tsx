import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { WideningNarrowingDemo } from "./shared/basic-types-visuals";

export function TypeWideningNote() {
  return (
    <div>
      <NoteLead>Widening is when TypeScript expands a specific literal or constrained value into a broader type. It is often useful (mutable variables can change), but sometimes it loses precision.</NoteLead>
      <WideningNarrowingDemo />
      <NoteCode filename="widening.ts" code={`let a = "hello";        // string\nconst b = "hello";      // "hello"\n\nlet arr = [1, "a"];     // (string | number)[]\nconst tuple = [1, "a"] as const; // readonly [1, "a"]\n\nlet cfg = { method: "GET" }; // { method: string }\nconst cfg2 = { method: "GET" } as const; // { readonly method: "GET" }\n\n// satisfies: check shape, keep inferred precision\nconst routes = { home: "/" } satisfies Record<string, \`/\${string}\`>;`} />
      <NoteCallout tone="insight">Control widening with <InlineCode>const</InlineCode>, explicit annotations, <InlineCode>as const</InlineCode>, and <InlineCode>satisfies</InlineCode>. Use <InlineCode>satisfies</InlineCode> when you want validation without losing literal detail.</NoteCallout>
      <NoteTakeaways items={["Widening makes mutable/general cases easier but less precise.", "as const prevents deep widening.", "satisfies checks compatibility while preserving useful inference."]} />
    </div>
  );
}
