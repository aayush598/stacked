import type { ComponentType } from "react";
import { WhatIsNarrowingNote } from "./01-what-is-narrowing";
import { TypeofGuardNote } from "./02-typeof-guard";
import { TruthinessNarrowingNote } from "./03-truthiness-narrowing";
import { EqualityNarrowingNote } from "./04-equality-narrowing";
import { InOperatorGuardNote } from "./05-in-operator-guard";
import { InstanceofGuardNote } from "./06-instanceof-guard";
import { UserDefinedTypeGuardsNote } from "./07-user-defined-type-guards";
import { AssertionFunctionsNote } from "./08-assertion-functions";
import { DiscriminatedUnionsNote } from "./09-discriminated-unions";
import { ExhaustivenessChecksNote } from "./10-exhaustiveness-checks";
import { NeverChecksNote } from "./11-never-checks";
import { ControlFlowAnalysisNote } from "./12-control-flow-analysis";
import { DefiniteAssignmentNote } from "./13-definite-assignment";
import { NarrowingPitfallsNote } from "./14-narrowing-pitfalls";

export const module11Content: Record<string, ComponentType> = {
  "ts-m11-s01": WhatIsNarrowingNote,
  "ts-m11-s02": TypeofGuardNote,
  "ts-m11-s03": TruthinessNarrowingNote,
  "ts-m11-s04": EqualityNarrowingNote,
  "ts-m11-s05": InOperatorGuardNote,
  "ts-m11-s06": InstanceofGuardNote,
  "ts-m11-s07": UserDefinedTypeGuardsNote,
  "ts-m11-s08": AssertionFunctionsNote,
  "ts-m11-s09": DiscriminatedUnionsNote,
  "ts-m11-s10": ExhaustivenessChecksNote,
  "ts-m11-s11": NeverChecksNote,
  "ts-m11-s12": ControlFlowAnalysisNote,
  "ts-m11-s13": DefiniteAssignmentNote,
  "ts-m11-s14": NarrowingPitfallsNote,
};
