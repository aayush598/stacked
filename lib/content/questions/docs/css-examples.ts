import rawPages from "./css-examples.json";
import { buildDocsExampleQuestions, type DocsPage } from "./examples";

export const cssDocsQuestions = buildDocsExampleQuestions(
  rawPages as unknown as DocsPage[],
  { idPrefix: "css.docs", defaultLanguage: "css" },
);
