import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";

export function NeverNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>never</InlineCode> represents a value that can never occur. It is the bottom type of TypeScript&apos;s
        type system and is used for functions that never return normally and for impossible states.
      </NoteLead>
      <NoteCode
        filename="never.ts"
        code={`function throwError(): never {
  throw new Error("Something went wrong");
}

type Status = "pending" | "approved" | "rejected";

function processStatus(status: Status): string {
  switch (status) {
    case "pending": return "Waiting";
    case "approved": return "Accepted";
    case "rejected": return "Declined";
    default: {
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
    }
  }
}`}
      />
      <NoteHeading eyebrow="Never vs void">Different meanings</NoteHeading>
      <NoteCallout tone="warning">
        <InlineCode>void</InlineCode> means the function can finish normally but returns no meaningful value.{" "}
        <InlineCode>never</InlineCode> means the function cannot finish normally or the value cannot exist.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "Use never for throwing functions, infinite loops, and exhaustiveness checks.",
          "never is assignable to every type; no ordinary value is assignable to never.",
          "Conditional types often use never to filter out members.",
        ]}
      />
    </div>
  );
}
