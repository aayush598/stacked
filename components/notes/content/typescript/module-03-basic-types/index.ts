import type { ComponentType } from "react";
import { TypeAnnotationsNote } from "./01-type-annotations";
import { TypeInferenceNote } from "./02-type-inference";
import { ExplicitVsInferredNote } from "./03-explicit-vs-inferred";
import { PrimitiveTypesNote } from "./04-primitive-types";
import { NullNote } from "./05-null";
import { UndefinedNote } from "./06-undefined";
import { VoidNote } from "./07-void";
import { NeverNote } from "./08-never";
import { AnyNote } from "./09-any";
import { UnknownNote } from "./10-unknown";
import { ObjectTypeNote } from "./11-object";
import { LiteralTypesNote } from "./12-literal-types";
import { NumericLiteralTypesNote } from "./13-numeric-literal-types";
import { StringLiteralTypesNote } from "./14-string-literal-types";
import { BooleanLiteralTypesNote } from "./15-boolean-literal-types";
import { ArrayTypesNote } from "./16-array-types";
import { ReadonlyArraysNote } from "./17-readonly-arrays";
import { TupleTypesNote } from "./18-tuple-types";
import { ReadonlyTuplesNote } from "./19-readonly-tuples";
import { OptionalTupleElementsNote } from "./20-optional-tuple-elements";
import { RestElementsTuplesNote } from "./21-rest-elements-tuples";
import { NamedTupleElementsNote } from "./22-named-tuple-elements";
import { EnumTypesNote } from "./23-enum-types";
import { NumericEnumsNote } from "./24-numeric-enums";
import { StringEnumsNote } from "./25-string-enums";
import { HeterogeneousEnumsNote } from "./26-heterogeneous-enums";
import { ConstEnumsNote } from "./27-const-enums";
import { EnumAlternativesNote } from "./28-enum-alternatives";
import { TypeWideningNote } from "./29-type-widening";
import { TypeNarrowingNote } from "./30-type-narrowing";
import { TypeCompatibilityNote } from "./31-type-compatibility";
import { TypeAssignabilityNote } from "./32-type-assignability";

export const module03Content: Record<string, ComponentType> = {
  "ts-m03-s01": TypeAnnotationsNote,
  "ts-m03-s02": TypeInferenceNote,
  "ts-m03-s03": ExplicitVsInferredNote,
  "ts-m03-s04": PrimitiveTypesNote,
  "ts-m03-s05": NullNote,
  "ts-m03-s06": UndefinedNote,
  "ts-m03-s07": VoidNote,
  "ts-m03-s08": NeverNote,
  "ts-m03-s09": AnyNote,
  "ts-m03-s10": UnknownNote,
  "ts-m03-s11": ObjectTypeNote,
  "ts-m03-s12": LiteralTypesNote,
  "ts-m03-s13": NumericLiteralTypesNote,
  "ts-m03-s14": StringLiteralTypesNote,
  "ts-m03-s15": BooleanLiteralTypesNote,
  "ts-m03-s16": ArrayTypesNote,
  "ts-m03-s17": ReadonlyArraysNote,
  "ts-m03-s18": TupleTypesNote,
  "ts-m03-s19": ReadonlyTuplesNote,
  "ts-m03-s20": OptionalTupleElementsNote,
  "ts-m03-s21": RestElementsTuplesNote,
  "ts-m03-s22": NamedTupleElementsNote,
  "ts-m03-s23": EnumTypesNote,
  "ts-m03-s24": NumericEnumsNote,
  "ts-m03-s25": StringEnumsNote,
  "ts-m03-s26": HeterogeneousEnumsNote,
  "ts-m03-s27": ConstEnumsNote,
  "ts-m03-s28": EnumAlternativesNote,
  "ts-m03-s29": TypeWideningNote,
  "ts-m03-s30": TypeNarrowingNote,
  "ts-m03-s31": TypeCompatibilityNote,
  "ts-m03-s32": TypeAssignabilityNote,
};
