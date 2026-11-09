import type { ComponentType } from "react";
import { ProjectSetupNote31 } from "./01-project-setup";
import { DomainModelingNote32 } from "./02-domain-modeling";
import { TaskStateMachineNote33 } from "./03-task-state-machine";
import { UserTypesNote34 } from "./04-user-types";
import { ApiLayerNote35 } from "./05-api-layer";
import { FrontendIntegrationNote36 } from "./06-frontend-integration";
import { FilteringAndSearchNote37 } from "./07-filtering-and-search";
import { ValidationNote38 } from "./08-validation";
import { TestingNote39 } from "./09-testing";
import { DeploymentNote310 } from "./10-deployment";

export const project03Content: Record<string, ComponentType> = {
  "ts-p03-s01": ProjectSetupNote31,
  "ts-p03-s02": DomainModelingNote32,
  "ts-p03-s03": TaskStateMachineNote33,
  "ts-p03-s04": UserTypesNote34,
  "ts-p03-s05": ApiLayerNote35,
  "ts-p03-s06": FrontendIntegrationNote36,
  "ts-p03-s07": FilteringAndSearchNote37,
  "ts-p03-s08": ValidationNote38,
  "ts-p03-s09": TestingNote39,
  "ts-p03-s10": DeploymentNote310,
};
