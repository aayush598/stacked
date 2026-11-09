import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ComparePanel, FlowSteps } from "./shared/visuals";

export function WhatAreGenericsNote() {
  return (
    <div>
      <NoteLead>Generics let you write reusable code that works with multiple types while preserving type relationships. Instead of using any, generics keep input and output types connected.</NoteLead>
      <ComparePanel
        left={{ title: "Without generics (loses type)", code: `function identity(value: any): any {
  return value;
}
const x = identity("hello"); // any` }}
        right={{ title: "With generics (keeps type)", code: `function identity<T>(value: T): T {
  return value;
}
const x = identity("hello"); // string` }}
      />
      <FlowSteps steps={[{ label: "T", detail: "type param" }, { label: "input: T" }, { label: "output: T" }, { label: "type preserved" }]} />
      <NoteTakeaways items={["Generics preserve type relationships instead of erasing them with any.", "Type parameters (like T) act as placeholders filled in at use time.", "The compiler infers or you explicitly provide the type argument."]} />
    </div>
  );
}
