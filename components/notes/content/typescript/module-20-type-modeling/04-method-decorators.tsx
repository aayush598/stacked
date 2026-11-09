import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function MethodDecoratorsNote(){ return (<div><NoteLead>Method decorators can inspect/replace method definitions in legacy decorator systems.</NoteLead><NoteCode filename="method-decorators.ts" code={`function log(target:any, key:string, desc: PropertyDescriptor) {
  const fn = desc.value; desc.value = function(...a:any[]){ console.log(key); return fn.apply(this,a); };
}`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["Common for logging, auth, tracing wrappers."]} /></div>); }
