import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Tabs, Flow } from "./shared/visuals";
export function BrandedTypesNote() {
  return (<div>
    <NoteLead>Branded types add a compile-time tag to distinguish structurally identical primitives (nominal-like behavior).</NoteLead>
    <NoteCode filename="branded-types.ts" code={`type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };
function asUserId(id: string): UserId { return id as UserId; }`} />
    <NoteCallout tone="tip">Understand the type relationship first, then apply the syntax. TypeScript type operators are easiest when you read them as transformations.</NoteCallout>
    <NoteTakeaways items={["Branding prevents mixing IDs/units with same runtime shape.", "Brands are compile-time only.", "Use constructors/validators to create branded values safely."]} />
  </div>);
}
