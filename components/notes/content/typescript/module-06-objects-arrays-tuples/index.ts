import type { ComponentType } from "react";
import { ObjectTypesNote } from "./01-object-types";
import { ObjectPropertyModifiersNote } from "./02-object-property-modifiers";
import { ArraysNote } from "./03-arrays";
import { ReadonlyArraysNote } from "./04-readonly-arrays";
import { TuplesNote } from "./05-tuples";
import { NamedTuplesNote } from "./06-named-tuples";
import { OptionalTupleElementsNote } from "./07-optional-tuple-elements";
import { RestElementsTuplesNote } from "./08-rest-elements-tuples";
import { ArrayMethodsTypesNote } from "./09-array-methods-with-types";
import { IndexSignaturesM6Note } from "./10-index-signatures";
import { RecordTypeNote } from "./11-record-type";
import { MappedObjectTypesNote } from "./12-mapped-object-types";
import { ObjectDestructuringNote } from "./13-object-destructuring";

export const module06Content: Record<string, ComponentType> = {
  "ts-m06-s01": ObjectTypesNote,
  "ts-m06-s02": ObjectPropertyModifiersNote,
  "ts-m06-s03": ArraysNote,
  "ts-m06-s04": ReadonlyArraysNote,
  "ts-m06-s05": TuplesNote,
  "ts-m06-s06": NamedTuplesNote,
  "ts-m06-s07": OptionalTupleElementsNote,
  "ts-m06-s08": RestElementsTuplesNote,
  "ts-m06-s09": ArrayMethodsTypesNote,
  "ts-m06-s10": IndexSignaturesM6Note,
  "ts-m06-s11": RecordTypeNote,
  "ts-m06-s12": MappedObjectTypesNote,
  "ts-m06-s13": ObjectDestructuringNote,
};
