import type { ComponentType } from "react";
import { ProjectSetup21 } from "./01-project-setup";
import { HTTPServer22 } from "./02-http-server";
import { RouteTypes23 } from "./03-route-types";
import { RequestValidation24 } from "./04-request-validation";
import { ResponseTypes25 } from "./05-response-types";
import { ErrorContracts26 } from "./06-error-contracts";
import { PersistenceLayer27 } from "./07-persistence-layer";
import { AuthenticationTypes28 } from "./08-authentication-types";
import { Pagination29 } from "./09-pagination";
import { Testing210 } from "./10-testing";
import { Deployment211 } from "./11-deployment";

export const project02Content: Record<string, ComponentType> = {
  "ts-p02-s01": ProjectSetup21,
  "ts-p02-s02": HTTPServer22,
  "ts-p02-s03": RouteTypes23,
  "ts-p02-s04": RequestValidation24,
  "ts-p02-s05": ResponseTypes25,
  "ts-p02-s06": ErrorContracts26,
  "ts-p02-s07": PersistenceLayer27,
  "ts-p02-s08": AuthenticationTypes28,
  "ts-p02-s09": Pagination29,
  "ts-p02-s10": Testing210,
  "ts-p02-s11": Deployment211,
};
