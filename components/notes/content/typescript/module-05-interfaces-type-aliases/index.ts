import type { ComponentType } from "react";
import { WhatIsInterfaceNote } from "./01-what-is-interface";
import { WhatIsTypeAliasNote } from "./02-what-is-type-alias";
import { InterfaceVsTypeNote } from "./03-interface-vs-type";
import { ExtendingInterfacesNote } from "./04-extending-interfaces";
import { IntersectionTypesNote } from "./05-intersection-types";
import { UnionTypesNote } from "./06-union-types";
import { DeclarationMergingNote } from "./07-declaration-merging";
import { IndexSignaturesNote } from "./08-index-signatures";
import { CallableInterfacesNote } from "./09-callable-interfaces";
import { ConstructableInterfacesNote } from "./10-constructable-interfaces";
import { HybridTypesNote } from "./11-hybrid-types";
import { BestPracticesM5Note } from "./12-best-practices";

export const module05Content: Record<string, ComponentType> = {
  "ts-m05-s01": WhatIsInterfaceNote,
  "ts-m05-s02": WhatIsTypeAliasNote,
  "ts-m05-s03": InterfaceVsTypeNote,
  "ts-m05-s04": ExtendingInterfacesNote,
  "ts-m05-s05": IntersectionTypesNote,
  "ts-m05-s06": UnionTypesNote,
  "ts-m05-s07": DeclarationMergingNote,
  "ts-m05-s08": IndexSignaturesNote,
  "ts-m05-s09": CallableInterfacesNote,
  "ts-m05-s10": ConstructableInterfacesNote,
  "ts-m05-s11": HybridTypesNote,
  "ts-m05-s12": BestPracticesM5Note,
};
