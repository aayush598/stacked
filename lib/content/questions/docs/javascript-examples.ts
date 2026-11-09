import rawPages from "./javascript-examples.json";
import { buildDocsExampleQuestions, type DocsPage } from "./examples";

export const javascriptDocsQuestions = buildDocsExampleQuestions(
  rawPages as unknown as DocsPage[],
  { idPrefix: "javascript.docs", defaultLanguage: "js" },
);
