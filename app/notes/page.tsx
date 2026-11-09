import { NotesHome } from "@/components/notes/notes-home";

export const metadata = {
  title: "Notes — Stacked",
  description:
    "Deep, visual notes for the frontend stack. Start with the complete TypeScript roadmap, review states, read tracking and local notifications.",
};

export default function NotesPage() {
  return <NotesHome />;
}
