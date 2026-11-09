import type { ComponentType } from "react";
import { ProjectSetupNote21 } from "./01-project-setup";
import { HttpServerNote22 } from "./02-http-server";
import { RouteTypesNote23 } from "./03-route-types";
import { RequestValidationNote24 } from "./04-request-validation";
import { ResponseTypesNote25 } from "./05-response-types";
import { ErrorContractsNote26 } from "./06-error-contracts";
import { PersistenceLayerNote27 } from "./07-persistence-layer";
import { AuthenticationTypesNote28 } from "./08-authentication-types";
import { PaginationNote29 } from "./09-pagination";
import { TestingNote210 } from "./10-testing";
import { DeploymentNote211 } from "./11-deployment";

export const project02Content: Record<string, ComponentType> = {
  "ts-p02-s01": ProjectSetupNote21,
  "ts-p02-s02": HttpServerNote22,
  "ts-p02-s03": RouteTypesNote23,
  "ts-p02-s04": RequestValidationNote24,
  "ts-p02-s05": ResponseTypesNote25,
  "ts-p02-s06": ErrorContractsNote26,
  "ts-p02-s07": PersistenceLayerNote27,
  "ts-p02-s08": AuthenticationTypesNote28,
  "ts-p02-s09": PaginationNote29,
  "ts-p02-s10": TestingNote210,
  "ts-p02-s11": DeploymentNote211,
};
