import { bootstrapDocsFormsComponents } from "./forms-components";
import { bootstrapDocsFoundations } from "./foundations";
import { bootstrapDocsHelpersUtilities } from "./helpers-utilities";

export const bootstrapDocsQuestions = [
  ...bootstrapDocsFoundations,
  ...bootstrapDocsFormsComponents,
  ...bootstrapDocsHelpersUtilities,
];
