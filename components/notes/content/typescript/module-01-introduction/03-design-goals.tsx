import {
  NoteCallout,
  NoteHeading,
  NoteLead,
  NoteList,
  NoteTakeaways,
  NoteText,
} from "@/components/notes/note-blocks";

export function DesignGoalsNote() {
  return (
    <div>
      <NoteLead>
        TypeScript&apos;s design goals explain many of its tradeoffs. It is intentionally
        gradual, JavaScript-first, and focused on tooling rather than runtime features.
      </NoteLead>

      <NoteHeading eyebrow="The design brief">What the language optimizes for</NoteHeading>
      <NoteList
        items={[
          "Stay a superset of JavaScript, so existing code can be adopted incrementally.",
          "Add optional static typing without changing runtime behavior.",
          "Emit clean, idiomatic JavaScript that resembles the source.",
          "Provide excellent editor and tooling support.",
          "Scale from small scripts to large applications and teams.",
        ]}
      />

      <NoteHeading eyebrow="Tradeoff">Gradual by design</NoteHeading>
      <NoteText>
        You can add TypeScript one file at a time. That flexibility is powerful, but it also
        means the type system is only as strong as the boundaries you choose to enforce. Strict
        mode and runtime validation are how teams turn a gradual system into a reliable one.
      </NoteText>

      <NoteCallout tone="insight" title="A useful shortcut">
        If you are unsure whether TypeScript can do something, ask: does it need to exist at
        runtime? If yes, it is JavaScript. If it only describes the shape of JavaScript, it is
        probably a type-level feature.
      </NoteCallout>

      <NoteTakeaways
        items={[
          "TypeScript is a superset of JavaScript.",
          "It adds compile-time checking, not runtime behavior.",
          "Adoption is incremental by design.",
          "Strictness and validation are deliberate team choices.",
        ]}
      />
    </div>
  );
}
