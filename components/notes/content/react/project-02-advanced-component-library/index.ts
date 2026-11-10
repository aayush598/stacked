import type { ComponentType } from "react";
import { ProjectSetupR102S1 } from "./01-project-setup";
import { CompoundComponentsR102S2 } from "./02-compound-components";
import { HeadlessComponentsR102S3 } from "./03-headless-components";
import { PolymorphicComponentsR102S4 } from "./04-polymorphic-components";
import { ContextBasedComponentsR102S5 } from "./05-context-based-components";
import { ReusableFormComponentsR102S6 } from "./06-reusable-form-components";
import { ReusableDataDisplayComponentsR102S7 } from "./07-reusable-data-display-components";
import { ReusableNavigationComponentsR102S8 } from "./08-reusable-navigation-components";
import { ReusableOverlayComponentsR102S9 } from "./09-reusable-overlay-components";
import { ComponentContractsAndTestingR102S10 } from "./10-component-contracts-and-testing";
import { MaintainableAbstractionsR102S11 } from "./11-maintainable-abstractions";

export const project02Content: Record<string, ComponentType> = {
  "react-p02-s01": ProjectSetupR102S1,
  "react-p02-s02": CompoundComponentsR102S2,
  "react-p02-s03": HeadlessComponentsR102S3,
  "react-p02-s04": PolymorphicComponentsR102S4,
  "react-p02-s05": ContextBasedComponentsR102S5,
  "react-p02-s06": ReusableFormComponentsR102S6,
  "react-p02-s07": ReusableDataDisplayComponentsR102S7,
  "react-p02-s08": ReusableNavigationComponentsR102S8,
  "react-p02-s09": ReusableOverlayComponentsR102S9,
  "react-p02-s10": ComponentContractsAndTestingR102S10,
  "react-p02-s11": MaintainableAbstractionsR102S11,
};
