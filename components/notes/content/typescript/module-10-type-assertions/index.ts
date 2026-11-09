import type { ComponentType } from "react";
import { TypeAssertionsNote } from "./01-type-assertions";
import { AsSyntaxNote } from "./02-as-syntax";
import { AngleBracketSyntaxNote } from "./03-angle-bracket-syntax";
import { NonNullAssertionNote } from "./04-non-null-assertion";
import { DoubleAssertionsNote } from "./05-double-assertions";
import { SatisfiesOperatorNote } from "./06-satisfies-operator";
import { ConstAssertionsNote } from "./07-const-assertions";
import { TypeCastingVsConversionNote } from "./08-type-casting-vs-conversion";
import { AssertionRisksNote } from "./09-assertion-risks";
import { SaferAlternativesNote } from "./10-safer-alternatives";

export const module10Content: Record<string, ComponentType> = {
  "ts-m10-s01": TypeAssertionsNote,
  "ts-m10-s02": AsSyntaxNote,
  "ts-m10-s03": AngleBracketSyntaxNote,
  "ts-m10-s04": NonNullAssertionNote,
  "ts-m10-s05": DoubleAssertionsNote,
  "ts-m10-s06": SatisfiesOperatorNote,
  "ts-m10-s07": ConstAssertionsNote,
  "ts-m10-s08": TypeCastingVsConversionNote,
  "ts-m10-s09": AssertionRisksNote,
  "ts-m10-s10": SaferAlternativesNote,
};
