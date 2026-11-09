import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function AccessorDecoratorsNote(){ return (<div><NoteLead>Accessor decorators target getters/setters in supported decorator systems.</NoteLead><NoteCode filename="accessor-decorators.ts" code={`// @configurable(false)
// get x() { return 1; }`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Can modify accessor descriptors in legacy decorators."]} /></div>); }
