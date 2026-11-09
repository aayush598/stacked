import type { ComponentType } from "react";
import { BooleanNote } from "./01-boolean";
import { NumberNote } from "./02-number";
import { StringNote } from "./03-string";
import { BigIntNote } from "./04-bigint";
import { SymbolNote } from "./05-symbol";
import { NullNote } from "./06-null";
import { UndefinedNote } from "./07-undefined";
import { VoidNote } from "./08-void";
import { NeverNote } from "./09-never";
import { ObjectNote } from "./10-object";
import { AnyNote } from "./11-any";
import { UnknownNote } from "./12-unknown";
import { SpecialTypesComparisonNote } from "./13-never-void-any-unknown";
import { PrimitiveTypeInferenceNote } from "./14-primitive-type-inference";
import { StringLiteralTypesNote } from "./15-string-literal-types";
import { NumericLiteralTypesNote } from "./16-numeric-literal-types";
import { BooleanLiteralTypesNote } from "./17-boolean-literal-types";

export const module03Content: Record<string, ComponentType> = {
  "ts-m03-s01": BooleanNote,
  "ts-m03-s02": NumberNote,
  "ts-m03-s03": StringNote,
  "ts-m03-s04": BigIntNote,
  "ts-m03-s05": SymbolNote,
  "ts-m03-s06": NullNote,
  "ts-m03-s07": UndefinedNote,
  "ts-m03-s08": VoidNote,
  "ts-m03-s09": NeverNote,
  "ts-m03-s10": ObjectNote,
  "ts-m03-s11": AnyNote,
  "ts-m03-s12": UnknownNote,
  "ts-m03-s13": SpecialTypesComparisonNote,
  "ts-m03-s14": PrimitiveTypeInferenceNote,
  "ts-m03-s15": StringLiteralTypesNote,
  "ts-m03-s16": NumericLiteralTypesNote,
  "ts-m03-s17": BooleanLiteralTypesNote,
};
