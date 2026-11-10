import type { ComponentType } from "react";
import { ProjectSetupR106S1 } from "./01-project-setup";
import { MultiplePagesAndReusableLayoutsR106S2 } from "./02-multiple-pages-and-reusable-layouts";
import { ComplexFormsR106S3 } from "./03-complex-forms";
import { DataTablesFiltersSearchPaginationR106S4 } from "./04-data-tables-filters-search-pagination";
import { ModalWorkflowsR106S5 } from "./05-modal-workflows";
import { SharedApplicationStateR106S6 } from "./06-shared-application-state";
import { ReusableComponentLibraryR106S7 } from "./07-reusable-component-library";
import { ErrorHandlingAndLoadingStatesR106S8 } from "./08-error-handling-and-loading-states";
import { SuspenseBoundariesR106S9 } from "./09-suspense-boundaries";
import { PerformanceOptimizationR106S10 } from "./10-performance-optimization";
import { TestingAndProfilingR106S11 } from "./11-testing-and-profiling";

export const project06Content: Record<string, ComponentType> = {
  "react-p06-s01": ProjectSetupR106S1,
  "react-p06-s02": MultiplePagesAndReusableLayoutsR106S2,
  "react-p06-s03": ComplexFormsR106S3,
  "react-p06-s04": DataTablesFiltersSearchPaginationR106S4,
  "react-p06-s05": ModalWorkflowsR106S5,
  "react-p06-s06": SharedApplicationStateR106S6,
  "react-p06-s07": ReusableComponentLibraryR106S7,
  "react-p06-s08": ErrorHandlingAndLoadingStatesR106S8,
  "react-p06-s09": SuspenseBoundariesR106S9,
  "react-p06-s10": PerformanceOptimizationR106S10,
  "react-p06-s11": TestingAndProfilingR106S11,
};
