import type { ComponentType } from "react";
import { IntersectionTypesNote } from "./01-intersection-types";
import { UnionTypesNote } from "./02-union-types";
import { DiscriminatedUnionsM14Note } from "./03-discriminated-unions";
import { IndexedAccessTypesNote } from "./04-indexed-access-types";
import { KeyofNote } from "./05-keyof";
import { TypeofTypeOperatorNote } from "./06-typeof-type-operator";
import { LookupTypesNote } from "./07-lookup-types";
import { IndexSignaturesM14Note } from "./08-index-signatures";
import { ReadonlyTypesNote } from "./09-readonly-types";
import { RecursiveTypesNote } from "./10-recursive-types";
import { BrandedTypesNote } from "./11-branded-types";
import { OpaqueTypesNote } from "./12-opaque-types";

export const module14Content: Record<string, ComponentType> = {
  "ts-m14-s01": IntersectionTypesNote,
  "ts-m14-s02": UnionTypesNote,
  "ts-m14-s03": DiscriminatedUnionsM14Note,
  "ts-m14-s04": IndexedAccessTypesNote,
  "ts-m14-s05": KeyofNote,
  "ts-m14-s06": TypeofTypeOperatorNote,
  "ts-m14-s07": LookupTypesNote,
  "ts-m14-s08": IndexSignaturesM14Note,
  "ts-m14-s09": ReadonlyTypesNote,
  "ts-m14-s10": RecursiveTypesNote,
  "ts-m14-s11": BrandedTypesNote,
  "ts-m14-s12": OpaqueTypesNote,
};
