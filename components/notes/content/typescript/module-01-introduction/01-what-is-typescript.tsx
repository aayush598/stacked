import {
  InlineCode,
  NoteCallout,
  NoteCardGrid,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
  NoteText,
} from "@/components/notes/note-blocks";
import { TypeAnatomyDiagram } from "../shared/type-anatomy-diagram";
import { TypeErasureDemo } from "../shared/type-erasure-demo";

export function WhatIsTypeScriptNote() {
  return (
    <div>
      <NoteLead>
        TypeScript is JavaScript with a type checker layered on top. You write familiar
        JavaScript, add optional type information, and the compiler tells you when the pieces
        do not fit — before the browser ever runs the code.
      </NoteLead>

      <TypeAnatomyDiagram />

      <NoteCallout tone="insight" title="The one-sentence version">
        TypeScript is a <strong className="text-mist">compile-time safety net</strong> for
        JavaScript. It catches mistakes early, then gets out of the way at runtime.
      </NoteCallout>

      <NoteHeading eyebrow="The core idea">Types are erased, behavior remains</NoteHeading>
      <NoteText>
        Type annotations do not exist in the JavaScript that ships to users. The compiler uses
        them to check your program, then emits plain JavaScript. That is why TypeScript can
        adopt existing JavaScript codebases without changing how the browser works.
      </NoteText>

      <TypeErasureDemo />

      <NoteHeading eyebrow="A useful mental model">Think in two timelines</NoteHeading>
      <NoteCardGrid
        items={[
          {
            title: "Compile time",
            body: (
              <>
                The compiler reads your types, checks relationships and reports errors. This is
                where TypeScript adds most of its value.
              </>
            ),
            accent: "lime",
          },
          {
            title: "Runtime",
            body: (
              <>
                Your JavaScript runs with the same objects, functions and browser APIs as
                before. Types are gone.
              </>
            ),
            accent: "sky",
          },
          {
            title: "Source of truth",
            body: (
              <>
                Values still decide behavior. Types describe what you intend those values to
                be.
              </>
            ),
            accent: "violet",
          },
          {
            title: "Safety boundary",
            body: (
              <>
                At the edges of your app — user input, network data, local storage — runtime
                validation still matters.
              </>
            ),
            accent: "coral",
          },
        ]}
      />

      <NoteHeading eyebrow="First example">A tiny typed function</NoteHeading>
      <NoteText>
        This example is intentionally small. The important part is not the syntax — it is the
        contract: <InlineCode>greet</InlineCode> promises to receive a{" "}
        <InlineCode>User</InlineCode>, so every call site is checked against that shape.
      </NoteText>
      <NoteCode
        filename="greet.ts"
        code={`type User = {
  id: number;
  name: string;
};

function greet(user: User) {
  return \`Hello, \${user.name}\`;
}

greet({ id: 1, name: "Ada" });
greet({ id: 2 }); // Error: name is missing`}
      />

      <NoteCallout tone="warning">
        TypeScript is not a replacement for runtime validation. If data comes from a form, an
        API response or local storage, it can still be malformed when it reaches your app.
      </NoteCallout>

      <NoteTakeaways
        items={[
          "TypeScript is JavaScript plus a compile-time type checker.",
          "Types describe intent; values still control runtime behavior.",
          "Annotations are erased from the JavaScript that ships.",
          "Use runtime validation at every untrusted boundary.",
        ]}
      />
    </div>
  );
}
