import type { ComponentType } from "react";
import { ProjectSetupR104S1 } from "./01-project-setup";
import { ContextBasedStateR104S2 } from "./02-context-based-state";
import { ReducerBasedStateR104S3 } from "./03-reducer-based-state";
import { MultipleStateProvidersR104S4 } from "./04-multiple-state-providers";
import { SelectorsR104S5 } from "./05-selectors";
import { StateSubscriptionsR104S6 } from "./06-state-subscriptions";
import { StateCompositionR104S7 } from "./07-state-composition";
import { ActionDispatchingR104S8 } from "./08-action-dispatching";
import { StateInitializationR104S9 } from "./09-state-initialization";
import { StateResetR104S10 } from "./10-state-reset";
import { StatePersistenceIntegrationR104S11 } from "./11-state-persistence-integration";
import { PredictableTransitionsAndArchitectureR104S12 } from "./12-predictable-transitions-and-architecture";

export const project04Content: Record<string, ComponentType> = {
  "react-p04-s01": ProjectSetupR104S1,
  "react-p04-s02": ContextBasedStateR104S2,
  "react-p04-s03": ReducerBasedStateR104S3,
  "react-p04-s04": MultipleStateProvidersR104S4,
  "react-p04-s05": SelectorsR104S5,
  "react-p04-s06": StateSubscriptionsR104S6,
  "react-p04-s07": StateCompositionR104S7,
  "react-p04-s08": ActionDispatchingR104S8,
  "react-p04-s09": StateInitializationR104S9,
  "react-p04-s10": StateResetR104S10,
  "react-p04-s11": StatePersistenceIntegrationR104S11,
  "react-p04-s12": PredictableTransitionsAndArchitectureR104S12,
};
