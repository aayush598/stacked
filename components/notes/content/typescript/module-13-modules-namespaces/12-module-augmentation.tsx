import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";

export function ModuleAugmentationNote() {
  return (<div><NoteLead>Module augmentation adds types to existing modules (e.g., extending library interfaces). It uses declaration merging in a module context.</NoteLead>
      <NoteCode filename="augment.d.ts" code={`import "express";\ndeclare module "express" {\n  interface Request {\n    userId?: string;\n  }\n}`} />
      <NoteTakeaways items={["Augmentation extends existing module declarations.", "Useful for adding typed properties to library types.", "Ensure the file is treated as a module and augmentation target is correct."]} /></div>);
}
