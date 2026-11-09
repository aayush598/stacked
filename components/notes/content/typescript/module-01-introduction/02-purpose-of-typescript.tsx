import { FileCode2, ShieldCheck, WandSparkles } from "lucide-react";
import {
  NoteCallout,
  NoteCode,
  NoteHeading,
  NoteLead,
  NoteTakeaways,
  NoteText,
} from "@/components/notes/note-blocks";

export function PurposeOfTypeScriptNote() {
  return (
    <div>
      <NoteLead>
        TypeScript exists to make large JavaScript programs easier to change safely. It gives
        editors and teammates a shared, executable description of how the code is supposed to
        fit together.
      </NoteLead>

      <NoteHeading eyebrow="Three jobs">What TypeScript is actually doing</NoteHeading>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Catch mistakes",
            body: "Wrong property names, missing arguments and impossible states are reported before runtime.",
          },
          {
            icon: WandSparkles,
            title: "Improve tooling",
            body: "Editors can autocomplete, rename and navigate code because they understand the types.",
          },
          {
            icon: FileCode2,
            title: "Document intent",
            body: "A good type signature explains the contract without a paragraph of prose.",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-xl border border-line bg-surface p-4">
              <Icon className="size-4 text-lime" aria-hidden />
              <p className="mt-3 text-[15px] font-semibold text-mist">{item.title}</p>
              <p className="mt-1.5 text-[15px] leading-6 text-muted">{item.body}</p>
            </div>
          );
        })}
      </div>

      <NoteHeading eyebrow="Before and after">A missing property caught early</NoteHeading>
      <NoteText>
        Without types, this bug waits until a user opens the profile page. With types, the
        editor flags it while you are still writing the call.
      </NoteText>
      <NoteCode
        filename="profile.ts"
        code={`type Profile = {
  name: string;
  avatarUrl: string;
};

function renderProfile(profile: Profile) {
  return profile.name.toUpperCase();
}

renderProfile({ name: "Ada" });
// Error: avatarUrl is missing`}
      />

      <NoteCallout tone="tip">
        The goal is not to annotate everything. The goal is to put useful contracts around the
        parts of your app that change often or are shared by many people.
      </NoteCallout>

      <NoteTakeaways
        items={[
          "TypeScript makes intent machine-checkable.",
          "Better editor support is a first-class benefit, not a side effect.",
          "Start with boundaries and shared contracts, not every local variable.",
        ]}
      />
    </div>
  );
}
