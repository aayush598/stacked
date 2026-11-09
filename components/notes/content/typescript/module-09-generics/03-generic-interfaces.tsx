import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function GenericInterfacesNote() {
  return (
    <div>
      <NoteLead>Interfaces can accept type parameters to create flexible, reusable contracts.</NoteLead>
      <NoteCode filename="generic-interface.ts" code={`interface Box<T> {
  value: T;
  label: string;
}

const numBox: Box<number> = { value: 42, label: "count" };
const strBox: Box<string> = { value: "hello", label: "greeting" };

interface ApiResponse<T> {
  data: T;
  status: number;
  error?: string;
}`} />
      <NoteTakeaways items={["Generic interfaces parameterize their member types.", "Specify the type argument when using: Box<number>.", "Common for containers, responses, and wrappers."]} />
    </div>
  );
}
