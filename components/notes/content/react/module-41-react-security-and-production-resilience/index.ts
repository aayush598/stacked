import type { ComponentType } from "react";
import { ReactSecurityFundamentalsR41S1 } from "./01-react-security-fundamentals";
import { RenderingUntrustedContentR41S2 } from "./02-rendering-untrusted-content";
import { CrossSiteScriptingConsiderationsR41S3 } from "./03-cross-site-scripting-considerations";
import { SafeContentRenderingR41S4 } from "./04-safe-content-rendering";
import { DangerouslysetinnerhtmlR41S5 } from "./05-dangerouslysetinnerhtml";
import { SanitizationBoundariesR41S6 } from "./06-sanitization-boundaries";
import { UrlHandlingR41S7 } from "./07-url-handling";
import { UserGeneratedContentR41S8 } from "./08-user-generated-content";
import { ClientSideSecurityLimitationsR41S9 } from "./09-client-side-security-limitations";
import { SensitiveInformationInUiStateR41S10 } from "./10-sensitive-information-in-ui-state";
import { SecureErrorPresentationR41S11 } from "./11-secure-error-presentation";
import { AuthenticationUiBoundariesR41S12 } from "./12-authentication-ui-boundaries";
import { AuthorizationAwareRenderingR41S13 } from "./13-authorization-aware-rendering";
import { ServerComponentSecurityBoundariesR41S14 } from "./14-server-component-security-boundaries";
import { ServerActionSecurityConsiderationsR41S15 } from "./15-server-action-security-considerations";
import { AvoidingTrustInClientSideValidationR41S16 } from "./16-avoiding-trust-in-client-side-validation";
import { ErrorBoundaryStrategiesR41S17 } from "./17-error-boundary-strategies";
import { GracefulComponentFailuresR41S18 } from "./18-graceful-component-failures";
import { RecoveryUiR41S19 } from "./19-recovery-ui";
import { ProductionResiliencePatternsR41S20 } from "./20-production-resilience-patterns";
import { PreventingAccidentalDataExposureR41S21 } from "./21-preventing-accidental-data-exposure";
import { SecureComponentDesignR41S22 } from "./22-secure-component-design";

export const module41Content: Record<string, ComponentType> = {
  "react-m41-s01": ReactSecurityFundamentalsR41S1,
  "react-m41-s02": RenderingUntrustedContentR41S2,
  "react-m41-s03": CrossSiteScriptingConsiderationsR41S3,
  "react-m41-s04": SafeContentRenderingR41S4,
  "react-m41-s05": DangerouslysetinnerhtmlR41S5,
  "react-m41-s06": SanitizationBoundariesR41S6,
  "react-m41-s07": UrlHandlingR41S7,
  "react-m41-s08": UserGeneratedContentR41S8,
  "react-m41-s09": ClientSideSecurityLimitationsR41S9,
  "react-m41-s10": SensitiveInformationInUiStateR41S10,
  "react-m41-s11": SecureErrorPresentationR41S11,
  "react-m41-s12": AuthenticationUiBoundariesR41S12,
  "react-m41-s13": AuthorizationAwareRenderingR41S13,
  "react-m41-s14": ServerComponentSecurityBoundariesR41S14,
  "react-m41-s15": ServerActionSecurityConsiderationsR41S15,
  "react-m41-s16": AvoidingTrustInClientSideValidationR41S16,
  "react-m41-s17": ErrorBoundaryStrategiesR41S17,
  "react-m41-s18": GracefulComponentFailuresR41S18,
  "react-m41-s19": RecoveryUiR41S19,
  "react-m41-s20": ProductionResiliencePatternsR41S20,
  "react-m41-s21": PreventingAccidentalDataExposureR41S21,
  "react-m41-s22": SecureComponentDesignR41S22,
};
