import type { ComponentType } from "react";
import { NumericEnumsNote } from "./01-numeric-enums";
import { StringEnumsNote } from "./02-string-enums";
import { HeterogeneousEnumsNote } from "./03-heterogeneous-enums";
import { ConstEnumsNote } from "./04-const-enums";
import { AmbientEnumsNote } from "./05-ambient-enums";
import { EnumReverseMappingNote } from "./06-enum-reverse-mapping";
import { EnumPitfallsNote } from "./07-enum-pitfalls";
import { SpecialTypesOverviewNote } from "./08-special-types-overview";

export const module07Content: Record<string, ComponentType> = {
  "ts-m07-s01": NumericEnumsNote,
  "ts-m07-s02": StringEnumsNote,
  "ts-m07-s03": HeterogeneousEnumsNote,
  "ts-m07-s04": ConstEnumsNote,
  "ts-m07-s05": AmbientEnumsNote,
  "ts-m07-s06": EnumReverseMappingNote,
  "ts-m07-s07": EnumPitfallsNote,
  "ts-m07-s08": SpecialTypesOverviewNote,
};
