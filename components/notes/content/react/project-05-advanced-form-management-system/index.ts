import type { ComponentType } from "react";
import { ProjectSetupR105S1 } from "./01-project-setup";
import { FormStateR105S2 } from "./02-form-state";
import { FieldStateR105S3 } from "./03-field-state";
import { ControlledInputsR105S4 } from "./04-controlled-inputs";
import { UncontrolledInputsR105S5 } from "./05-uncontrolled-inputs";
import { ValidationIntegrationR105S6 } from "./06-validation-integration";
import { NestedFieldsR105S7 } from "./07-nested-fields";
import { DynamicFieldsR105S8 } from "./08-dynamic-fields";
import { FieldArraysR105S9 } from "./09-field-arrays";
import { MultiStepFormsR105S10 } from "./10-multi-step-forms";
import { FormSubmissionR105S11 } from "./11-form-submission";
import { AsyncValidationR105S12 } from "./12-async-validation";
import { SubmissionStatusR105S13 } from "./13-submission-status";
import { ErrorHandlingR105S14 } from "./14-error-handling";
import { OptimisticUpdatesAndResetR105S15 } from "./15-optimistic-updates-and-reset";

export const project05Content: Record<string, ComponentType> = {
  "react-p05-s01": ProjectSetupR105S1,
  "react-p05-s02": FormStateR105S2,
  "react-p05-s03": FieldStateR105S3,
  "react-p05-s04": ControlledInputsR105S4,
  "react-p05-s05": UncontrolledInputsR105S5,
  "react-p05-s06": ValidationIntegrationR105S6,
  "react-p05-s07": NestedFieldsR105S7,
  "react-p05-s08": DynamicFieldsR105S8,
  "react-p05-s09": FieldArraysR105S9,
  "react-p05-s10": MultiStepFormsR105S10,
  "react-p05-s11": FormSubmissionR105S11,
  "react-p05-s12": AsyncValidationR105S12,
  "react-p05-s13": SubmissionStatusR105S13,
  "react-p05-s14": ErrorHandlingR105S14,
  "react-p05-s15": OptimisticUpdatesAndResetR105S15,
};
