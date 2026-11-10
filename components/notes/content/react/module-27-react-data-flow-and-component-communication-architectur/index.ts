import type { ComponentType } from "react";
import { ParentToChildCommunicationR27S1 } from "./01-parent-to-child-communication";
import { ChildToParentCommunicationR27S2 } from "./02-child-to-parent-communication";
import { SiblingCommunicationR27S3 } from "./03-sibling-communication";
import { DeepComponentCommunicationR27S4 } from "./04-deep-component-communication";
import { PropsBasedCommunicationR27S5 } from "./05-props-based-communication";
import { CallbackBasedCommunicationR27S6 } from "./06-callback-based-communication";
import { ContextBasedCommunicationR27S7 } from "./07-context-based-communication";
import { ReducerBasedCommunicationR27S8 } from "./08-reducer-based-communication";
import { SharedComponentStateR27S9 } from "./09-shared-component-state";
import { SharedContextStateR27S10 } from "./10-shared-context-state";
import { ExternalStoreSubscriptionsR27S11 } from "./11-external-store-subscriptions";
import { StateOwnershipBoundariesR27S12 } from "./12-state-ownership-boundaries";
import { ComponentEventContractsR27S13 } from "./13-component-event-contracts";
import { EventDrivenComponentCommunicationR27S14 } from "./14-event-driven-component-communication";
import { ContextCompositionR27S15 } from "./15-context-composition";
import { ProviderNestingStrategiesR27S16 } from "./16-provider-nesting-strategies";
import { StateSynchronizationBoundariesR27S17 } from "./17-state-synchronization-boundaries";
import { AvoidingUnnecessaryCommunicationLayersR27S18 } from "./18-avoiding-unnecessary-communication-layers";
import { AvoidingExcessivePropDrillingR27S19 } from "./19-avoiding-excessive-prop-drilling";
import { ChoosingCommunicationPatternsForLargeAppR27S20 } from "./20-choosing-communication-patterns-for-large-applications";

export const module27Content: Record<string, ComponentType> = {
  "react-m27-s01": ParentToChildCommunicationR27S1,
  "react-m27-s02": ChildToParentCommunicationR27S2,
  "react-m27-s03": SiblingCommunicationR27S3,
  "react-m27-s04": DeepComponentCommunicationR27S4,
  "react-m27-s05": PropsBasedCommunicationR27S5,
  "react-m27-s06": CallbackBasedCommunicationR27S6,
  "react-m27-s07": ContextBasedCommunicationR27S7,
  "react-m27-s08": ReducerBasedCommunicationR27S8,
  "react-m27-s09": SharedComponentStateR27S9,
  "react-m27-s10": SharedContextStateR27S10,
  "react-m27-s11": ExternalStoreSubscriptionsR27S11,
  "react-m27-s12": StateOwnershipBoundariesR27S12,
  "react-m27-s13": ComponentEventContractsR27S13,
  "react-m27-s14": EventDrivenComponentCommunicationR27S14,
  "react-m27-s15": ContextCompositionR27S15,
  "react-m27-s16": ProviderNestingStrategiesR27S16,
  "react-m27-s17": StateSynchronizationBoundariesR27S17,
  "react-m27-s18": AvoidingUnnecessaryCommunicationLayersR27S18,
  "react-m27-s19": AvoidingExcessivePropDrillingR27S19,
  "react-m27-s20": ChoosingCommunicationPatternsForLargeAppR27S20,
};
