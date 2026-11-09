import rawPages from "./typescript-examples.json";
import { buildDocsExampleQuestions, type DocsPage } from "./examples";

export const typescriptDocsQuestions = buildDocsExampleQuestions(
  rawPages as unknown as DocsPage[],
  { idPrefix: "typescript.docs", defaultLanguage: "ts" },
);
