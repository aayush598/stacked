import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { Flow } from "./shared/visuals";
export function ProjectSetupR101S1() {
  return (<div>
    <NoteLead>Project setup. — project step: implement this part with clean React architecture, reusable components, and production-minded practices.</NoteLead>
    <Flow steps={["Plan","Implement","Compose","Handle states","Refine"]} />
    <NoteCode filename="project-setup.tsx" code={`// Project: Reusable component collection\n// Step: Project setup.\n// Build incrementally with typed props/state, clear component boundaries, and tests where relevant.`} />
    <NoteCallout tone="insight">Apply concepts from earlier modules. Keep components focused, state intentional, and APIs consistent.</NoteCallout>
    <NoteTakeaways items={["Complete this step before moving on.", "Validate behavior and edge states.", "Refactor for readability and reuse."]} />
  </div>);
}
