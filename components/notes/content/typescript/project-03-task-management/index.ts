import type { ComponentType } from "react";
import { ProjectSetup31 } from "./01-project-setup";
import { DomainModeling32 } from "./02-domain-modeling";
import { TaskStateMachine33 } from "./03-task-state-machine";
import { UserTypes34 } from "./04-user-types";
import { APILayer35 } from "./05-api-layer";
import { FrontendIntegration36 } from "./06-frontend-integration";
import { FilteringAndSearch37 } from "./07-filtering-and-search";
import { Validation38 } from "./08-validation";
import { Testing39 } from "./09-testing";
import { Deployment310 } from "./10-deployment";

export const project03Content: Record<string, ComponentType> = {
  "ts-p03-s01": ProjectSetup31,
  "ts-p03-s02": DomainModeling32,
  "ts-p03-s03": TaskStateMachine33,
  "ts-p03-s04": UserTypes34,
  "ts-p03-s05": APILayer35,
  "ts-p03-s06": FrontendIntegration36,
  "ts-p03-s07": FilteringAndSearch37,
  "ts-p03-s08": Validation38,
  "ts-p03-s09": Testing39,
  "ts-p03-s10": Deployment310,
};
