import type { ComponentType } from "react";
import { InstallingTypeScript21 } from "./01-installing-typescript";
import { TscCLI22 } from "./02-tsc-cli";
import { TsconfigJson23 } from "./03-tsconfig-json";
import { Editors24 } from "./04-editors";
import { VSCodeSetup25 } from "./05-vs-code-setup";
import { RunningTypeScript26 } from "./06-running-typescript";
import { WatchMode27 } from "./07-watch-mode";
import { BuildPipelines28 } from "./08-build-pipelines";
import { TypeScriptREPL29 } from "./09-typescript-repl";
import { DebuggingTypeScript210 } from "./10-debugging-typescript";

export const module02Content: Record<string, ComponentType> = {
  "ts-m02-s01": InstallingTypeScript21,
  "ts-m02-s02": TscCLI22,
  "ts-m02-s03": TsconfigJson23,
  "ts-m02-s04": Editors24,
  "ts-m02-s05": VSCodeSetup25,
  "ts-m02-s06": RunningTypeScript26,
  "ts-m02-s07": WatchMode27,
  "ts-m02-s08": BuildPipelines28,
  "ts-m02-s09": TypeScriptREPL29,
  "ts-m02-s10": DebuggingTypeScript210,
};
