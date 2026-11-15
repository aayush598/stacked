import { LabPlayground } from "@/components/lab/lab-playground";
import { getTrack } from "@/lib/lab/tracks";

export const metadata = {
  title: "Forms & Validation Lab — React · TypeScript · Bootstrap — Stacked",
  description: "Complete React TypeScript Bootstrap forms and validation lab with editable code and live visual output.",
};

export default function FormsLabPage() {
  const track = getTrack("forms");
  if (!track) return null;
  return <LabPlayground examples={track.examples} trackTitle={track.title} modules={track.modules} />;
}
