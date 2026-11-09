import type { ComponentType } from "react";
import { TemplateLiteralTypesNote } from "./01-template-literal-types";
import { StringManipulationTypesNote } from "./02-string-manipulation-types";
import { CombiningLiteralTypesNote } from "./03-combining-literal-types";
import { UnionDistributionM17Note } from "./04-union-distribution";
import { TemplateLiteralInferenceNote } from "./05-template-literal-inference";
import { KeyRemappingTemplateLiteralsNote } from "./06-key-remapping-template-literals";
import { EventNamePatternsNote } from "./07-event-name-patterns";
import { CSSPropertyPatternsNote } from "./08-css-property-patterns";
import { RoutePatternsNote } from "./09-route-patterns";
import { RecursiveStringTypesNote } from "./10-recursive-string-types";
import { LimitsAndPerformanceNote } from "./11-limits-and-performance";
import { PracticalExamplesM17Note } from "./12-practical-examples";

export const module17Content: Record<string, ComponentType> = {
  "ts-m17-s01": TemplateLiteralTypesNote,
  "ts-m17-s02": StringManipulationTypesNote,
  "ts-m17-s03": CombiningLiteralTypesNote,
  "ts-m17-s04": UnionDistributionM17Note,
  "ts-m17-s05": TemplateLiteralInferenceNote,
  "ts-m17-s06": KeyRemappingTemplateLiteralsNote,
  "ts-m17-s07": EventNamePatternsNote,
  "ts-m17-s08": CSSPropertyPatternsNote,
  "ts-m17-s09": RoutePatternsNote,
  "ts-m17-s10": RecursiveStringTypesNote,
  "ts-m17-s11": LimitsAndPerformanceNote,
  "ts-m17-s12": PracticalExamplesM17Note,
};
