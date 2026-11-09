import { InlineCode, NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function VoidNote() {
  return (
    <div>
      <NoteLead><InlineCode>void</InlineCode> means a function does not return a useful value. The function can finish normally; callers should ignore its result.</NoteLead>
      <NoteCode filename="void.ts" code={`function log(msg: string): void {\n  console.log(msg);\n}\n\n// Callback: return value ignored\nfunction run(cb: () => void) { cb(); }\nrun(() => 123); // allowed in this callback context\n\n// But explicit void function:\nfunction f(): void {\n  // return 123; // Error\n}`} />
      <ValidInvalidCards valid={{ code: `const handler: () => void = () => { save(); };`, note: "Use void for side-effect callbacks." }} invalid={{ code: `function getId(): void { return 1; }`, note: "A function declared void should not return a meaningful value." }} />
      <NoteCallout tone="insight">Callback <InlineCode>() =&gt; void</InlineCode> is intentionally permissive: it means &quot;I won&apos;t use your return&quot;, not &quot;you must not return anything&quot;. This makes APIs like <InlineCode>forEach</InlineCode> easier.</NoteCallout>
      <NoteTakeaways items={["void = no meaningful return.", "Common for event handlers, logging, and commands.", "void is different from never and undefined."]} />
    </div>
  );
}
