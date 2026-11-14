import { notFound } from "next/navigation";
import { LabPlayground } from "@/components/lab/lab-playground";
import { getTrack, labTracks } from "@/lib/lab/tracks";

export const dynamicParams = false;

export function generateStaticParams() {
  return labTracks.map((t) => ({ track: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ track: string }> }) {
  const { track } = await params;
  const t = getTrack(track);
  return {
    title: t ? `${t.title} — Practice Lab — Stacked` : "Practice Lab — Stacked",
    description: t?.description,
  };
}

export default async function LabTrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track } = await params;
  const t = getTrack(track);
  if (!t) notFound();
  return <LabPlayground examples={t.examples} trackTitle={t.title} modules={t.modules} />;
}
