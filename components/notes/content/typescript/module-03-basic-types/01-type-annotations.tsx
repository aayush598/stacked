import { InlineCode, NoteCallout, NoteHeading, NoteLead, NoteList, NoteTakeaways } from "@/components/notes/note-blocks";
import { Module3HeroVisual, SyntaxPlayground, TypePipeline, ValidInvalidCards } from "./shared/basic-types-visuals";

export function TypeAnnotationsNote() {
  return (
    <div>
      <NoteLead>Type annotations are explicit labels that tell TypeScript what kind of value is allowed. They act like a contract: if the value breaks the contract, the compiler reports an error before runtime.</NoteLead>
      <Module3HeroVisual />
      <TypePipeline steps={[{ label: "Write contract", detail: "Use : type after a name to declare expectations.", tone: "lime" }, { label: "Assign/check", detail: "TypeScript checks values against the annotation.", tone: "sky" }, { label: "Refactor safely", detail: "Changes that violate the contract show errors early.", tone: "violet" }, { label: "Emit JS", detail: "Annotations are erased; runtime JavaScript has no : number.", tone: "coral" }]} />
      <NoteHeading eyebrow="Syntax">Where annotations appear</NoteHeading>
      <SyntaxPlayground options={[
        { label: "Variable", code: `let age: number = 25;\nconst username: string = "Alex";\nlet isActive: boolean = true;`, note: "Most common form: name: type = value." },
        { label: "Parameter", code: `function greet(name: string): string {\n  return \`Hello \${name}\`;\n}`, note: "Parameter annotations protect function inputs." },
        { label: "Object property", code: `const user: { id: number; name: string } = {\n  id: 1,\n  name: "Alex",\n};`, note: "Object shapes can be annotated inline or with a named type." },
        { label: "Array/return", code: `function getNames(): string[] {\n  return ["Alex", "Sam"];\n}\n\nconst scores: Array<number> = [10, 20];`, note: "Use T[] or Array<T>; annotate returns for public APIs." },
      ]} />
      <ValidInvalidCards valid={{ code: `let age: number = 25;\nage = 30;`, note: "The value matches the declared type." }} invalid={{ code: `let age: number = 25;\nage = "thirty"; // Error`, note: "A string cannot be assigned to a number variable." }} />
      <NoteHeading eyebrow="When to annotate">Fast decision rule</NoteHeading>
      <NoteList items={["Annotate function parameters and public return types.", "Annotate empty containers: const items: string[] = [].", "Annotate when inference is too wide or unclear.", "Skip obvious local annotations when TypeScript already infers correctly."]} />
      <NoteCallout tone="warning" title="Common mistake">Do not annotate with a broader type than needed. <InlineCode>let status: string = &quot;success&quot;</InlineCode> loses the useful literal information unless you actually want any string.</NoteCallout>
      <NoteTakeaways items={["Annotations declare contracts; inference can often fill them in.", "Annotations exist only at compile time.", "Use annotations where they improve safety or clarity, especially at boundaries."]} />
    </div>
  );
}
