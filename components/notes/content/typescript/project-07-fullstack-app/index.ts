import type { ComponentType } from "react";
import { ProjectSetup71 } from "./01-project-setup";
import { MonorepoStructure72 } from "./02-monorepo-structure";
import { SharedTypes73 } from "./03-shared-types";
import { DatabaseModels74 } from "./04-database-models";
import { APIContracts75 } from "./05-api-contracts";
import { FrontendDataLayer76 } from "./06-frontend-data-layer";
import { Authentication77 } from "./07-authentication";
import { RuntimeValidation78 } from "./08-runtime-validation";
import { Testing79 } from "./09-testing";
import { CIChecks710 } from "./10-ci-checks";
import { Deployment711 } from "./11-deployment";
import { ProductionHardening712 } from "./12-production-hardening";

export const project07Content: Record<string, ComponentType> = {
  "ts-p07-s01": ProjectSetup71,
  "ts-p07-s02": MonorepoStructure72,
  "ts-p07-s03": SharedTypes73,
  "ts-p07-s04": DatabaseModels74,
  "ts-p07-s05": APIContracts75,
  "ts-p07-s06": FrontendDataLayer76,
  "ts-p07-s07": Authentication77,
  "ts-p07-s08": RuntimeValidation78,
  "ts-p07-s09": Testing79,
  "ts-p07-s10": CIChecks710,
  "ts-p07-s11": Deployment711,
  "ts-p07-s12": ProductionHardening712,
};
