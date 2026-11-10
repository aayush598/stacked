import type { ComponentType } from "react";
import { ProjectSetupR107S1 } from "./01-project-setup";
import { DesignSystemCompatibleComponentsR107S2 } from "./02-design-system-compatible-components";
import { CompoundAndHeadlessComponentsR107S3 } from "./03-compound-and-headless-components";
import { AccessibilitySupportR107S4 } from "./04-accessibility-support";
import { ThemeIntegrationAndVariantsR107S5 } from "./05-theme-integration-and-variants";
import { ReusableHooksR107S6 } from "./06-reusable-hooks";
import { ComponentDocumentationAndExamplesR107S7 } from "./07-component-documentation-and-examples";
import { ComponentTestsR107S8 } from "./08-component-tests";
import { VisualRegressionTestsR107S9 } from "./09-visual-regression-tests";
import { StablePublicApisR107S10 } from "./10-stable-public-apis";
import { BackwardCompatibilityAndMaintenanceR107S11 } from "./11-backward-compatibility-and-maintenance";

export const project07Content: Record<string, ComponentType> = {
  "react-p07-s01": ProjectSetupR107S1,
  "react-p07-s02": DesignSystemCompatibleComponentsR107S2,
  "react-p07-s03": CompoundAndHeadlessComponentsR107S3,
  "react-p07-s04": AccessibilitySupportR107S4,
  "react-p07-s05": ThemeIntegrationAndVariantsR107S5,
  "react-p07-s06": ReusableHooksR107S6,
  "react-p07-s07": ComponentDocumentationAndExamplesR107S7,
  "react-p07-s08": ComponentTestsR107S8,
  "react-p07-s09": VisualRegressionTestsR107S9,
  "react-p07-s10": StablePublicApisR107S10,
  "react-p07-s11": BackwardCompatibilityAndMaintenanceR107S11,
};
