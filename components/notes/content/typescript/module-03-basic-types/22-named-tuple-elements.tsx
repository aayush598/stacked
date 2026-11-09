import { NoteCallout, NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function NamedTupleElementsNote() {
  return (
    <div>
      <NoteLead>Named tuple elements add labels for readability. Labels do not change runtime behavior or tuple compatibility in most practical cases; they improve tooling and intent.</NoteLead>
      <NoteCode filename="named-tuples.ts" code={`type Range = [start: number, end: number];\ntype HttpEntry = [status: number, body: string, cached?: boolean];\n\nfunction inRange(value: number, [start, end]: Range): boolean {\n  return value >= start && value <= end;\n}`} />
      <NoteCallout tone="tip">Use labels when tuple positions have meaning. If consumers need named access like <code className="font-mono">range.start</code>, use an object type instead.</NoteCallout>
      <NoteTakeaways items={["Labels document tuple positions.", "They improve editor hints and readability.", "Objects are still clearer when names matter at usage sites."]} />
    </div>
  );
}
