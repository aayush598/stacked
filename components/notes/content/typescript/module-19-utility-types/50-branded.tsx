import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
export function BrandedUtil(){ return (<div><NoteLead>Branded/nominal helper pattern for safer primitive distinctions.</NoteLead><NoteCode filename="branded.ts" code={`type Brand<T,B extends string> = T & { readonly __brand: B };
type UserId = Brand<string,'UserId'>;`} /><NoteCallout tone="tip">Learn this as a pattern: understand the rule, then practice with small type-level examples.</NoteCallout><NoteTakeaways items={["IDs/units/domain primitives."]} /></div>); }
