import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function ConstEnumsNote() {
  return (
    <div>
      <NoteLead><code className="font-mono">const enum</code> members are inlined at use sites, so no runtime enum object is emitted. This can reduce runtime overhead but has toolchain/build constraints.</NoteLead>
      <NoteCode filename="const-enums.ts" code={`const enum Flags {\n  Read = 1,\n  Write = 2,\n}\nconst canRead = Flags.Read;\n// often emitted roughly as: const canRead = 1;`} />
      <NoteCallout tone="warning">Const enums can be problematic with <code className="font-mono">isolatedModules</code>, Babel/SWC transpilation setups, or cross-package declaration consumers depending on configuration. Understand your build pipeline before adopting them widely.</NoteCallout>
      <NoteTakeaways items={["const enums inline values and avoid runtime enum objects.", "They require compatible build/type options.", "Literal unions/as const objects are safer defaults in many modern toolchains."]} />
    </div>
  );
}
