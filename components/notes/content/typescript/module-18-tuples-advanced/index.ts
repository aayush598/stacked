import type { ComponentType } from "react";
import { TypeInferenceM18Note } from "./01-type-inference";
import { BestCommonTypeNote } from "./02-best-common-type";
import { ContextualTypingNote } from "./03-contextual-typing";
import { TypeWideningM18Note } from "./04-type-widening";
import { TypeNarrowingM18Note } from "./05-type-narrowing";
import { LiteralWideningNote } from "./06-literal-widening";
import { FreshObjectLiteralsNote } from "./07-fresh-object-literals";
import { ExcessPropertyChecksNote } from "./08-excess-property-checks";
import { StructuralTypingNote } from "./09-structural-typing";
import { NominalTypingNote } from "./10-nominal-typing";
import { AssignabilityM18Note } from "./11-assignability";
import { TypeCompatibilityNote } from "./12-type-compatibility";

export const module18Content: Record<string, ComponentType> = {
  "ts-m18-s01": TypeInferenceM18Note,
  "ts-m18-s02": BestCommonTypeNote,
  "ts-m18-s03": ContextualTypingNote,
  "ts-m18-s04": TypeWideningM18Note,
  "ts-m18-s05": TypeNarrowingM18Note,
  "ts-m18-s06": LiteralWideningNote,
  "ts-m18-s07": FreshObjectLiteralsNote,
  "ts-m18-s08": ExcessPropertyChecksNote,
  "ts-m18-s09": StructuralTypingNote,
  "ts-m18-s10": NominalTypingNote,
  "ts-m18-s11": AssignabilityM18Note,
  "ts-m18-s12": TypeCompatibilityNote,
};
