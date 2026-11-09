import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function BigIntNote() {
  return (
    <div>
      <NoteLead>
        <InlineCode>bigint</InlineCode> represents integers of arbitrary precision. Use it when integer values exceed
        the safe integer range of <InlineCode>number</InlineCode>.
      </NoteLead>
      <NoteCode
        filename="bigint.ts"
        code={`const largeNumber: bigint = 9007199254740993n;
const value = BigInt("9007199254740993");

const a: bigint = 100n;
const b: bigint = 200n;
const sum = a + b;
const quotient = 10n / 3n; // 3n (truncated)`}
      />
      <ValidInvalidCards
        valid={{ code: "const result = 10n + BigInt(20);", note: "Convert explicitly before mixing with number-derived values." }}
        invalid={{ code: "const result = 10n + 20;", note: "number and bigint cannot be mixed directly in arithmetic." }}
      />
      <NoteCallout tone="warning">
        BigInts are not directly serializable with ordinary <InlineCode>JSON.stringify()</InlineCode>. Handle them
        explicitly at API boundaries.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "Use bigint literals with an n suffix or BigInt(...).",
          "Do not mix number and bigint in arithmetic.",
          "BigInt division truncates fractional results.",
        ]}
      />
    </div>
  );
}
