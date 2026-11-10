import type { ComponentType } from "react";
import { ProjectSetupB21 } from "./01-project-setup";
import { ResponsiveSidebarB22 } from "./02-responsive-sidebar";
import { NavigationHeaderB23 } from "./03-navigation-header";
import { DashboardCardsB24 } from "./04-dashboard-cards";
import { DataTablesB25 } from "./05-data-tables";
import { SearchInterfaceB26 } from "./06-search-interface";
import { FiltersB27 } from "./07-filters";
import { PaginationB28 } from "./08-pagination";
import { ModalWorkflowsB29 } from "./09-modal-workflows";
import { AlertsAndNotificationsB210 } from "./10-alerts-and-notifications";
import { ResponsiveLayoutsAndGridConsistencyB211 } from "./11-responsive-layouts-and-grid-consistency";
import { ReusableLayoutPatternsAndDesignLanguageB212 } from "./12-reusable-layout-patterns-and-design-language";

export const project02Content: Record<string, ComponentType> = {
  "bs-p02-s01": ProjectSetupB21,
  "bs-p02-s02": ResponsiveSidebarB22,
  "bs-p02-s03": NavigationHeaderB23,
  "bs-p02-s04": DashboardCardsB24,
  "bs-p02-s05": DataTablesB25,
  "bs-p02-s06": SearchInterfaceB26,
  "bs-p02-s07": FiltersB27,
  "bs-p02-s08": PaginationB28,
  "bs-p02-s09": ModalWorkflowsB29,
  "bs-p02-s10": AlertsAndNotificationsB210,
  "bs-p02-s11": ResponsiveLayoutsAndGridConsistencyB211,
  "bs-p02-s12": ReusableLayoutPatternsAndDesignLanguageB212,
};
