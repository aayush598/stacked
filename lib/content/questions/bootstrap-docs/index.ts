import { bootstrapDocsCards } from "./cards-examples";
import { bootstrapDocsFormsComponents } from "./forms-components";
import { bootstrapDocsFoundations } from "./foundations";
import { bootstrapDocsHelpersUtilities } from "./helpers-utilities";

export const bootstrapDocsQuestions = [
  ...bootstrapDocsFoundations,
  ...bootstrapDocsCards,
  ...bootstrapDocsFormsComponents,
  ...bootstrapDocsHelpersUtilities,
];
