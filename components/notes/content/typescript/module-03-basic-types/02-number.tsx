import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
} from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function NumberNote() {
  return (
    <div>
      <NoteLead>
        The <InlineCode>number</InlineCode> type represents numeric values in TypeScript. JavaScript numbers use IEEE
        754 double-precision floating-point representation, so integers and decimals share the same runtime type.
      </NoteLead>
      <NoteHeading eyebrow="4.2 Number">Values, bases, and special numbers</NoteHeading>
      <NoteCode
        filename="number.ts"
        code={`let age: number = 25;
let price: number = 99.99;
let temperature: number = -10;

let decimal: number = 100;
let hexadecimal: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

const infinity: number = Infinity;
const notANumber: number = NaN; // still type number`}
      />
      <ValidInvalidCards
        valid={{ code: "price.toFixed(2);", note: "Number methods work on number values." }}
        invalid={{ code: 'let price: number = "99.99";', note: "Numeric strings are not assignable to number." }}
      />
      <NoteCallout tone="warning" title="Floating-point precision">
        <InlineCode>0.1 + 0.2</InlineCode> can produce <InlineCode>0.30000000000000004</InlineCode>. For financial
        calculations, consider integer minor units or a decimal arithmetic library.
      </NoteCallout>
      <NoteTakeaways
        items={[
          "number covers integers, decimals, hex/binary/octal literals, Infinity, and NaN.",
          "NaN has type number at runtime and in TypeScript.",
          "Use bigint for integers beyond the safe integer range of number.",
        ]}
      />
    </div>
  );
}
