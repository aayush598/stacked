import { bootstrapDocsCards } from "./cards-examples";
import { bootstrapDocsV6Examples } from "./v6-examples";
import { bootstrapDocsFormsComponents } from "./forms-components";
import { bootstrapDocsFoundations } from "./foundations";
import { bootstrapDocsHelpersUtilities } from "./helpers-utilities";

export const bootstrapDocsQuestions = [
  ...bootstrapDocsFoundations,
  ...bootstrapDocsCards,
  ...bootstrapDocsFormsComponents,
  ...bootstrapDocsHelpersUtilities,
  ...bootstrapDocsV6Examples,
];
