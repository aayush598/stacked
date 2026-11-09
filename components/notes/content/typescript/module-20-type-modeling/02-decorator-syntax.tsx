import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function DecoratorSyntaxNote(){ return (<div><NoteLead>Decorator syntax uses `@expression` above a class/member/parameter (legacy) or as defined by the active proposal.</NoteLead><NoteCode filename="decorator-syntax.ts" code={`// @sealed
// class A {}`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Syntax depends on decorator implementation (legacy vs standard)."]} /></div>); }
