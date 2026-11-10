import type { ComponentType } from "react";
import { ProjectSetupR108S1 } from "./01-project-setup";
import { LazyLoadingAndSuspenseR108S2 } from "./02-lazy-loading-and-suspense";
import { ErrorBoundariesR108S3 } from "./03-error-boundaries";
import { ConcurrentRenderingR108S4 } from "./04-concurrent-rendering";
import { TransitionsAndDeferredValuesR108S5 } from "./05-transitions-and-deferred-values";
import { OptimisticUiR108S6 } from "./06-optimistic-ui";
import { ServerRenderingAndHydrationR108S7 } from "./07-server-rendering-and-hydration";
import { ReactServerComponentsR108S8 } from "./08-react-server-components";
import { ReactCompilerR108S9 } from "./09-react-compiler";
import { BehaviorAnalysisAndLimitationsR108S10 } from "./10-behavior-analysis-and-limitations";

export const project08Content: Record<string, ComponentType> = {
  "react-p08-s01": ProjectSetupR108S1,
  "react-p08-s02": LazyLoadingAndSuspenseR108S2,
  "react-p08-s03": ErrorBoundariesR108S3,
  "react-p08-s04": ConcurrentRenderingR108S4,
  "react-p08-s05": TransitionsAndDeferredValuesR108S5,
  "react-p08-s06": OptimisticUiR108S6,
  "react-p08-s07": ServerRenderingAndHydrationR108S7,
  "react-p08-s08": ReactServerComponentsR108S8,
  "react-p08-s09": ReactCompilerR108S9,
  "react-p08-s10": BehaviorAnalysisAndLimitationsR108S10,
};
