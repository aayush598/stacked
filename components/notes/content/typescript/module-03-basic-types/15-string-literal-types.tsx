import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ValidInvalidCards } from "./shared/basic-types-visuals";

export function StringLiteralTypesNote() {
  return (
    <div>
      <NoteLead>
        String literal types restrict a value to specific strings. They are ideal for roles, statuses, HTTP methods,
        environments, and other fixed domain values.
      </NoteLead>
      <NoteCode
        filename="string-literals.ts"
        code={`type Status = "pending" | "success" | "failed";
let currentStatus: Status = "pending";
currentStatus = "success";
// currentStatus = "completed"; // Error

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
function request(method: HttpMethod): void {
  console.log(method);
}`}
      />
      <ValidInvalidCards
        valid={{ code: 'request("POST");', note: "The method matches the allowed literal union." }}
        invalid={{ code: 'request("FETCH");', note: "Arbitrary strings are rejected when a literal union is expected." }}
      />
      <NoteCallout tone="tip">For simple fixed values, string literal unions are often easier than enums: they have no runtime object and integrate cleanly with APIs.</NoteCallout>
      <NoteTakeaways items={["Literal unions provide compile-time restrictions.", "as const preserves literal values in objects/arrays.", "Prefer literal unions for fixed API/domain strings unless enum runtime behavior is needed."]} />
    </div>
  );
}
