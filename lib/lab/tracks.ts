import type { LabTrack } from "./types";
import { formsTrack } from "./forms-track";

export const labTracks: LabTrack[] = [formsTrack];

export function getTrack(id: string) {
  return labTracks.find((t) => t.id === id);
}
