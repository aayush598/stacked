import type { LabTrack } from "./types";
import { formsTrack } from "./forms-track";
import { topicTracks } from "./tracks-data";
import { extraTracks } from "./tracks-extra";

function mergeTrack(base: LabTrack, extra?: LabTrack): LabTrack {
  if (!extra) return base;
  const modules = [...base.modules];
  for (const m of extra.modules) if (!modules.includes(m)) modules.push(m);
  return {
    ...base,
    modules,
    examples: [...base.examples, ...extra.examples],
  };
}

const extrasById = new Map(extraTracks.map((t) => [t.id, t]));

export const labTracks: LabTrack[] = [formsTrack, ...topicTracks]
  .map((track) => mergeTrack(track, extrasById.get(track.id)))
  .sort((a, b) => (a.priority ?? 1) - (b.priority ?? 1));

export function getTrack(id: string) {
  return labTracks.find((t) => t.id === id);
}
