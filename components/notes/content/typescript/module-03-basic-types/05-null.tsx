import { InlineCode, NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { SyntaxPlayground, ValidInvalidCards } from "./shared/basic-types-visuals";

export function NullNote() {
  return (
    <div>
      <NoteLead><InlineCode>null</InlineCode> means an intentional absence: you deliberately set a value to &quot;nothing here&quot;. In strict TypeScript, <InlineCode>null</InlineCode> is not automatically allowed in other types.</NoteLead>
      <SyntaxPlayground options={[
        { label: "Nullable union", code: `let middleName: string | null = null;\nmiddleName = "Lee";\nmiddleName = null;`, note: "Explicitly model nullability with a union." },
        { label: "Narrowing", code: `function len(name: string | null) {\n  if (name !== null) return name.length;\n  return 0;\n}`, note: "Check for null before using string operations." },
        { label: "Nullish tools", code: `const display = middleName ?? "N/A";\nconst upper = middleName?.toUpperCase();`, note: "?? handles null/undefined; ?. safely accesses members." },
      ]} />
      <ValidInvalidCards valid={{ code: `let email: string | null = null;`, note: "Union allows null intentionally." }} invalid={{ code: `// strictNullChecks: true\nlet email: string = null; // Error`, note: "null is not assignable to string in strict mode." }} />
      <NoteCallout tone="insight">Use <InlineCode>null</InlineCode> when absence is meaningful in your domain (e.g., no manager assigned). Be consistent across the codebase about null vs undefined.</NoteCallout>
      <NoteTakeaways items={["null is intentional absence.", "Enable strictNullChecks; model nullability with unions.", "Narrow before property access."]} />
    </div>
  );
}
