import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function DefaultExportsNote() {
  return (<div><NoteLead>A module can have one default export. Default imports choose a local name; named exports remain explicit.</NoteLead>
      <Compare a={{t:"Default export",c:`export default function greet() {}\nimport greet from "./greet";`}} b={{t:"Named export",c:`export function greet() {}\nimport { greet } from "./greet";`}} />
      <NoteTakeaways items={["Default exports are convenient but less explicit.", "Named exports often refactor and search better.", "Be consistent with project conventions."]} /></div>);
}
