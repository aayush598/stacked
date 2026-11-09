import { InlineCode, NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function UndefinedNote() {
  return (
    <div>
      <NoteLead><InlineCode>undefined</InlineCode> usually means &quot;not provided&quot; or &quot;not initialized&quot;. It appears with unassigned variables, missing object properties, optional parameters, and functions with no explicit return.</NoteLead>
      <SyntaxPlayground options={[
        { label: "Optional param", code: `function greet(name?: string) {\n  console.log(name?.toUpperCase() ?? "Guest");\n}\ngreet(); // name is undefined`, note: "Optional parameters become T | undefined." },
        { label: "Optional property", code: `type User = { name: string; age?: number };\nconst u: User = { name: "A" };\n// u.age may be undefined`, note: "Optional properties may be missing." },
        { label: "exactOptionalPropertyTypes", code: `type Config = { retry?: number };\n// strict + exactOptionalPropertyTypes:\n// { retry: undefined } may be rejected\n// use retry?: number | undefined if needed`, note: "Controls whether explicit undefined is allowed for optionals." },
      ]} />
      <ValidInvalidCards valid={{ code: `let x: string | undefined;\nfunction f(): string | undefined { return undefined; }`, note: "Model missing values explicitly." }} invalid={{ code: `function f(): number { }\n// Error: not all code paths return a value`, note: "Missing return can produce undefined where a value is required." }} />
      <NoteCallout tone="warning">Do not confuse <InlineCode>undefined</InlineCode> (missing/uninitialized) with <InlineCode>null</InlineCode> (intentional empty). Pick a project convention.</NoteCallout>
      <NoteTakeaways items={["undefined often means missing, not intentionally cleared.", "Optional syntax introduces undefined.", "Handle undefined at boundaries and with narrowing/??."]} />
    </div>
  );
}
