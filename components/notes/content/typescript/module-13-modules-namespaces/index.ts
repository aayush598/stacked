import type { ComponentType } from "react";
import { ESModulesNote } from "./01-es-modules";
import { CommonJSNote } from "./02-commonjs";
import { ImportExportNote } from "./03-import-export";
import { DefaultExportsNote } from "./04-default-exports";
import { NamedExportsNote } from "./05-named-exports";
import { ReExportsNote } from "./06-re-exports";
import { TypeOnlyImportsNote } from "./07-type-only-imports";
import { ModuleResolutionNote } from "./08-module-resolution";
import { PathAliasesNote } from "./09-path-aliases";
import { NamespacesNote } from "./10-namespaces";
import { AmbientModulesNote } from "./11-ambient-modules";
import { ModuleAugmentationNote } from "./12-module-augmentation";

export const module13Content: Record<string, ComponentType> = {
  "ts-m13-s01": ESModulesNote,
  "ts-m13-s02": CommonJSNote,
  "ts-m13-s03": ImportExportNote,
  "ts-m13-s04": DefaultExportsNote,
  "ts-m13-s05": NamedExportsNote,
  "ts-m13-s06": ReExportsNote,
  "ts-m13-s07": TypeOnlyImportsNote,
  "ts-m13-s08": ModuleResolutionNote,
  "ts-m13-s09": PathAliasesNote,
  "ts-m13-s10": NamespacesNote,
  "ts-m13-s11": AmbientModulesNote,
  "ts-m13-s12": ModuleAugmentationNote,
};
