export type LabExample = {
  id: string;
  track: string; // e.g. "forms" (extensible: regex, axios, json, etc.)
  module: string;
  title: string;
  summary: string;
  tags?: string[];
  code: string; // complete, runnable in playground (React TSX), default export or App
};

export type LabTrack = {
  id: string;
  title: string;
  description: string;
  modules: string[];
  examples: LabExample[];
};
