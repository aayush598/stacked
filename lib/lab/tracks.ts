import type { LabTrack } from "./types";
import { formsTrack } from "./forms-track";
import { topicTracks } from "./tracks-data";

export const labTracks: LabTrack[] = [formsTrack, ...topicTracks].sort(
  (a, b) => (a.priority ?? 1) - (b.priority ?? 1),
);

export function getTrack(id: string) {
  return labTracks.find((t) => t.id === id);
}
