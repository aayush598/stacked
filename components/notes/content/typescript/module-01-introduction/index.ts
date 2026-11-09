import type { ComponentType } from "react";
import { WhatIsTypeScriptNote } from "./01-what-is-typescript";
import { PurposeOfTypeScriptNote } from "./02-purpose-of-typescript";
import { DesignGoalsNote } from "./03-design-goals";

export const module01Content: Record<string, ComponentType> = {
  "ts-m01-s01": WhatIsTypeScriptNote,
  "ts-m01-s02": PurposeOfTypeScriptNote,
  "ts-m01-s03": DesignGoalsNote,
};
