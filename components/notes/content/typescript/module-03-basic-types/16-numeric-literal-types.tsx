import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function NumericLiteralTypesNote() {
  return (
    <div>
      <NoteLead>
        Numeric literal types restrict values to specific numbers. They are useful for status codes, fixed levels, page
        sizes, and finite numeric settings.
      </NoteLead>
      <NoteCode
        filename="numeric-literals.ts"
        code={`type HttpStatus = 200 | 201 | 400 | 401 | 404 | 500;
let status: HttpStatus = 200;

function setVolume(level: 0 | 25 | 50 | 75 | 100): void {
  console.log(level);
}

const maxRetries = 3; // literal 3
let retries = 3;      // widened to number`}
      />
      <ValidInvalidCards
        valid={{ code: "setVolume(50);", note: "50 is part of the allowed numeric literal set." }}
        invalid={{ code: "setVolume(30);", note: "30 is a number, but not an allowed member of the union." }}
      />
      <NoteCallout tone="insight">Numeric literals are affected by widening: <code className="font-mono">const</code> keeps <code className="font-mono">3</code>, while <code className="font-mono">let</code> usually becomes <code className="font-mono">number</code>.</NoteCallout>
      <NoteTakeaways items={["Use numeric literal unions for finite valid numbers.", "They prevent invalid values like unsupported status codes.", "Understand const vs let widening for numeric literals."]} />
    </div>
  );
}
