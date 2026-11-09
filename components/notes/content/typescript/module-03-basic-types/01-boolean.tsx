import {
  InlineCode,
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
  NoteText,
} from "@/components/notes/note-blocks";
import {
  AnimatedMeter,
  Module3HeroVisual,
  TypePipeline,
  ValidInvalidCards,
} from "./shared/basic-types-visuals";

export function BooleanNote() {
  return (
    <div>
      <NoteLead>
        Module 3 starts with TypeScript&apos;s basic types: the values you model every day and the compiler
        behaviors that keep them honest. This Phase 1 section begins with <InlineCode>boolean</InlineCode>, then sets
        up the mental model for annotations, inference, widening, narrowing, and assignability used throughout the
        module.
      </NoteLead>

      <Module3HeroVisual />

      <NoteCallout tone="insight" title="Module 3 objective">
        Build a strong understanding of TypeScript&apos;s type system, from basic annotations to type compatibility,
        widening, and narrowing. Uncompleted Module 3 sections are tagged <strong className="text-mist">Incomplete</strong>
        {" "}until content and human review are finished.
      </NoteCallout>

      <NoteHeading eyebrow="1. Boolean">Logical values: true or false</NoteHeading>
      <NoteText>
        The <InlineCode>boolean</InlineCode> type represents logical values. It has exactly two possible values:
        <InlineCode>true</InlineCode> and <InlineCode>false</InlineCode>. Use it for flags, guards, feature states, and
        decisions.
      </NoteText>
      <NoteCode
        filename="boolean.ts"
        code={`let isActive: boolean = true;
let isDeleted: boolean = false;
let isAuthenticated: boolean = true;

function canAccessDashboard(isAuthenticated: boolean): boolean {
  return isAuthenticated;
}`}
      />
      <ValidInvalidCards
        valid={{ code: 'let isActive: boolean = true;', note: "A boolean annotation accepts true or false." }}
        invalid={{ code: 'let isActive: boolean = "true";', note: 'A string is not assignable to boolean, even if it looks truthy.' }}
      />
      <NoteCallout tone="warning">
        Do not confuse boolean values with truthy/falsy values. <InlineCode>1</InlineCode>,{" "}
        <InlineCode>&quot;hello&quot;</InlineCode>, and <InlineCode>true</InlineCode> may behave similarly in JavaScript
        conditions, but they are different TypeScript types.
      </NoteCallout>

      <NoteHeading eyebrow="Recommended setup">Strict compiler configuration</NoteHeading>
      <NoteText>
        Module 3 examples assume strict TypeScript behavior so mistakes appear at compile time.
      </NoteText>
      <NoteCode
        filename="tsconfig.json"
        code={`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts"]
}`}
      />
      <TypePipeline
        steps={[
          { label: "Declare contract", detail: "Annotations say what a value must be.", tone: "lime" },
          { label: "Infer when obvious", detail: "The compiler can determine many types automatically.", tone: "sky" },
          { label: "Check compatibility", detail: "Assignments and calls must satisfy the expected type.", tone: "violet" },
          { label: "Narrow safely", detail: "Control flow refines unions to usable members.", tone: "coral" },
        ]}
      />
      <AnimatedMeter value={18} label="Module 3 authoring progress (visual draft)" />

      <NoteTakeaways
        items={[
          "boolean has two values: true and false.",
          "Type annotations declare contracts; the compiler checks them before runtime.",
          "Use strict compiler options while studying basic types.",
          "Module 3 incomplete sections are visible in the roadmap until fully authored and reviewed.",
        ]}
      />
    </div>
  );
}
