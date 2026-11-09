import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Compare } from "./shared/visuals";
export function AngleBracketSyntaxNote() {
  return (<div><NoteLead>Angle-bracket assertions (<code>&lt;Type&gt;value</code>) are an older form. They do not work in .tsx because of JSX syntax conflicts.</NoteLead>
      <Compare a={{t:"Angle bracket (.ts only)",c:`let x: unknown = "hi";\nlet len = (<string>x).length;`}} b={{t:"Preferred as syntax",c:`let x: unknown = "hi";\nlet len = (x as string).length;`}} />
      <NoteTakeaways items={["Angle brackets conflict with JSX in .tsx.", "Use as syntax consistently.", "You may see angle brackets in older codebases."]} /></div>);
}
