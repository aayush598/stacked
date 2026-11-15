import type { LabTrack } from "../types";
import { advanced_hooksExtra } from "./advanced-hooks";
import { advanced_uiExtra } from "./advanced-ui";
import { auth_formsExtra } from "./auth-forms";
import { axiosExtra } from "./axios";
import { cardsExtra } from "./cards";
import { chartsExtra } from "./charts";
import { crudExtra } from "./crud";
import { dashboard_layoutExtra } from "./dashboard-layout";
import { data_tablesExtra } from "./data-tables";
import { file_uploadExtra } from "./file-upload";
import { formsExtra } from "./forms";
import { modalsExtra } from "./modals";
import { navigationExtra } from "./navigation";
import { notificationsExtra } from "./notifications";
import { paginationExtra } from "./pagination";
import { protected_routesExtra } from "./protected-routes";
import { responsiveExtra } from "./responsive";
import { search_filter_sortExtra } from "./search-filter-sort";
import { state_hooksExtra } from "./state-hooks";
import { typescriptExtra } from "./typescript";

export const extraTracks: LabTrack[] = [
  formsExtra,
  crudExtra,
  data_tablesExtra,
  axiosExtra,
  state_hooksExtra,
  search_filter_sortExtra,
  auth_formsExtra,
  dashboard_layoutExtra,
  navigationExtra,
  modalsExtra,
  typescriptExtra,
  paginationExtra,
  cardsExtra,
  responsiveExtra,
  file_uploadExtra,
  protected_routesExtra,
  chartsExtra,
  notificationsExtra,
  advanced_hooksExtra,
  advanced_uiExtra,
];
