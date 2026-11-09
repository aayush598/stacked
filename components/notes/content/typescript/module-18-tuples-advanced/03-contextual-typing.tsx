import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function ContextualTypingNote(){ return (<div><NoteLead>The expected type from context can infer parameter types (e.g., callbacks).</NoteLead><NoteCode filename="contextual-typing.ts" code={`window.addEventListener('click', e => {
  e.button; // MouseEvent context
});`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Context flows from usage site to expression.", "Reduces callback annotation boilerplate."]} /></div>); }
