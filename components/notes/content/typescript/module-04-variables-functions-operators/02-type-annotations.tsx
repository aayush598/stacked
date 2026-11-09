import { NoteCallout, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ToggleTabs } from "./shared/m04-visuals";
export function TypeAnnotationsM4Note(){
  return <div>
    <NoteLead>Type annotations tell TypeScript the expected type of a variable, parameter, or value position. Module 3 introduced the idea; here we use annotations in everyday variable and function code.</NoteLead>
    <ToggleTabs items={[
      {label:"Variable",code:`let total: number = 0;\nconst name: string = "Alex";\nlet tags: string[] = [];`,note:"Annotate when inference is unclear or you need a specific contract."},
      {label:"Parameter",code:`function greet(name: string, times: number) {\n  return name.repeat(times);\n}`,note:"Parameters should usually be annotated in reusable functions."},
      {label:"Object",code:`let user: { id: number; active: boolean };\nuser = { id: 1, active: true };`,note:"Inline shapes work, but named types/interfaces scale better."},
    ]} />
    <NoteCallout tone="tip">Do not add annotations that repeat obvious inference. Good annotations communicate intent and boundaries.</NoteCallout>
    <NoteTakeaways items={["Annotations are contracts.", "Use them at boundaries and unclear cases.", "They are erased from emitted JavaScript."]} />
  </div>;
}