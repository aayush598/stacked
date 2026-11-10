import type { ComponentType } from "react";
import { MigrationStrategy331 } from "./01-migration-strategy";
import { AllowJs332 } from "./02-allowjs";
import { CheckJs333 } from "./03-checkjs";
import { IncrementalMigration334 } from "./04-incremental-migration";
import { StrictnessRollout335 } from "./05-strictness-rollout";
import { TypingThirdPartyCode336 } from "./06-typing-third-party-code";
import { ConvertingFiles337 } from "./07-converting-files";
import { CommonMigrationErrors338 } from "./08-common-migration-errors";
import { LegacyCodePatterns339 } from "./09-legacy-code-patterns";
import { TeamAdoption3310 } from "./10-team-adoption";
import { MigrationChecklist3311 } from "./11-migration-checklist";

export const module33Content: Record<string, ComponentType> = {
  "ts-m33-s01": MigrationStrategy331,
  "ts-m33-s02": AllowJs332,
  "ts-m33-s03": CheckJs333,
  "ts-m33-s04": IncrementalMigration334,
  "ts-m33-s05": StrictnessRollout335,
  "ts-m33-s06": TypingThirdPartyCode336,
  "ts-m33-s07": ConvertingFiles337,
  "ts-m33-s08": CommonMigrationErrors338,
  "ts-m33-s09": LegacyCodePatterns339,
  "ts-m33-s10": TeamAdoption3310,
  "ts-m33-s11": MigrationChecklist3311,
};
