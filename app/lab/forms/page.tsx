import { LabPlayground } from "@/components/lab/lab-playground";
import { formsTrack } from "@/lib/lab/forms-track";

export const metadata = {
  title: "Forms & Validation Lab — React · TypeScript · Bootstrap — Stacked",
  description: "Complete React TypeScript Bootstrap forms and validation lab with editable code and live visual output.",
};

export default function FormsLabPage() {
  return <LabPlayground examples={formsTrack.examples} trackTitle={formsTrack.title} modules={formsTrack.modules} />;
}
