import type { ComponentType } from "react";
import { WhatAreGenericsNote } from "./01-what-are-generics";
import { GenericFunctionsNote } from "./02-generic-functions";
import { GenericInterfacesNote } from "./03-generic-interfaces";
import { GenericClassesNote } from "./04-generic-classes";
import { GenericTypeAliasesNote } from "./05-generic-type-aliases";
import { MultipleTypeParametersNote } from "./06-multiple-type-parameters";
import { ConstraintsNote } from "./07-constraints";
import { KeyofWithGenericsNote } from "./08-keyof-with-generics";
import { DefaultTypeParametersNote } from "./09-default-type-parameters";
import { GenericInferenceNote } from "./10-generic-inference";
import { ExplicitTypeArgumentsNote } from "./11-explicit-type-arguments";
import { GenericUtilityPatternsNote } from "./12-generic-utility-patterns";
import { VarianceNote } from "./13-variance";
import { CovarianceContravarianceNote } from "./14-covariance-contravariance";
import { HigherOrderGenericsNote } from "./15-higher-order-generics";
import { CommonGenericPitfallsNote } from "./16-common-pitfalls";

export const module09Content: Record<string, ComponentType> = {
  "ts-m09-s01": WhatAreGenericsNote,
  "ts-m09-s02": GenericFunctionsNote,
  "ts-m09-s03": GenericInterfacesNote,
  "ts-m09-s04": GenericClassesNote,
  "ts-m09-s05": GenericTypeAliasesNote,
  "ts-m09-s06": MultipleTypeParametersNote,
  "ts-m09-s07": ConstraintsNote,
  "ts-m09-s08": KeyofWithGenericsNote,
  "ts-m09-s09": DefaultTypeParametersNote,
  "ts-m09-s10": GenericInferenceNote,
  "ts-m09-s11": ExplicitTypeArgumentsNote,
  "ts-m09-s12": GenericUtilityPatternsNote,
  "ts-m09-s13": VarianceNote,
  "ts-m09-s14": CovarianceContravarianceNote,
  "ts-m09-s15": HigherOrderGenericsNote,
  "ts-m09-s16": CommonGenericPitfallsNote,
};
