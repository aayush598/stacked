import type { ComponentType } from "react";
import { LetConstVarNote } from "./01-let-const-var";
import { TypeAnnotationsM4Note } from "./02-type-annotations";
import { TypeInferenceM4Note } from "./03-type-inference";
import { ExplicitImplicitNote } from "./04-explicit-vs-implicit";
import { FunctionDeclarationsNote } from "./05-function-declarations";
import { FunctionExpressionsNote } from "./06-function-expressions";
import { ArrowFunctionsNote } from "./07-arrow-functions";
import { ParametersNote } from "./08-parameters";
import { ReturnTypesNote } from "./09-return-types";
import { OptionalParametersNote } from "./10-optional-parameters";
import { DefaultParametersNote } from "./11-default-parameters";
import { RestParametersNote } from "./12-rest-parameters";
import { CallSignaturesNote } from "./13-call-signatures";
import { TypeofOperatorNote } from "./14-typeof-operator";
import { InOperatorNote } from "./15-in-operator";

export const module04Content: Record<string, ComponentType> = {
  "ts-m04-s01": LetConstVarNote,
  "ts-m04-s02": TypeAnnotationsM4Note,
  "ts-m04-s03": TypeInferenceM4Note,
  "ts-m04-s04": ExplicitImplicitNote,
  "ts-m04-s05": FunctionDeclarationsNote,
  "ts-m04-s06": FunctionExpressionsNote,
  "ts-m04-s07": ArrowFunctionsNote,
  "ts-m04-s08": ParametersNote,
  "ts-m04-s09": ReturnTypesNote,
  "ts-m04-s10": OptionalParametersNote,
  "ts-m04-s11": DefaultParametersNote,
  "ts-m04-s12": RestParametersNote,
  "ts-m04-s13": CallSignaturesNote,
  "ts-m04-s14": TypeofOperatorNote,
  "ts-m04-s15": InOperatorNote,
};
