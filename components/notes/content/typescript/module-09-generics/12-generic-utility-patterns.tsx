import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { FlowSteps } from "./shared/visuals";

export function GenericUtilityPatternsNote() {
  return (
    <div>
      <NoteLead>Common generic patterns: factories, wrappers, mappers, and repositories keep type flow intact across operations.</NoteLead>
      <NoteCode filename="patterns.ts" code={`function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
}`} />
      <NoteTakeaways items={["Generics power reusable typed patterns.", "Preserve type relationships through the full operation.", "Common in libraries, APIs, and data layers."]} />
    </div>
  );
}
