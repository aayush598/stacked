import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ComparePanel } from "./shared/visuals";

export function PrivateFieldsNote() {
  return (
    <div>
      <NoteLead>JavaScript private fields (#) provide true runtime privacy. TypeScript private is a compile-time check only. They work differently.</NoteLead>
      <ComparePanel
        left={{ title: "TypeScript private", code: `class A {
  private secret = 42;
}
// Compile-time error only
// At runtime, still accessible
// via bracket notation hacks` }}
        right={{ title: "JS private field #", code: `class A {
  #secret = 42;
  get() { return this.#secret; }
}
// True runtime privacy
// new A().#secret → SyntaxError` }}
      />
      <NoteTakeaways items={["TypeScript private is erased at compile time — not truly private at runtime.", "# fields are a JavaScript feature with real runtime enforcement.", "Use # for true encapsulation; use private for TypeScript-only projects with simpler tooling needs."]} />
    </div>
  );
}
