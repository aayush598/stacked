import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function VoidNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>void</InlineCode> represents the absence of a meaningful return value from a function. It is
        primarily a return type.
      </NoteLead>
      <NoteCode
        filename="void.ts"
        code={`function logMessage(): void {
  console.log("Hello");
}

type Callback = () => void;
const callback: Callback = () => 100; // allowed in callback context
execute(callback);

function execute(callback: () => void): void {
  callback(); // return value is ignored
}`}
      />
      <ValidInvalidCards
        valid={{ code: "function saveUser(): void { console.log('saved'); }", note: "A void function performs work without a meaningful result." }}
        invalid={{ code: "function getAge(): void { return 25; }", note: "A function declared to return void cannot return a meaningful value." }}
      />
      <NoteCallout tone="insight">
        In callback types, <InlineCode>void</InlineCode> means the caller ignores the return value. That is why a
        callback typed as <InlineCode>() =&gt; void</InlineCode> may return something.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "Use void for logging, notifications, event handlers, and side-effect functions.",
          "void means no meaningful return value; it is not the same as never.",
          "Callback void is more permissive than a function explicitly returning void.",
        ]}
      />
    </div>
  );
}
