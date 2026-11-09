import rawPages from "./html-examples.json";
import { buildDocsExampleQuestions, type DocsPage } from "./examples";

export const htmlDocsQuestions = buildDocsExampleQuestions(
  rawPages as unknown as DocsPage[],
  { idPrefix: "html.docs", defaultLanguage: "html" },
);
