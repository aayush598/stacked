import rawPages from "./react-examples.json";
import { buildDocsExampleQuestions, type DocsPage } from "./examples";

export const reactDocsQuestions = buildDocsExampleQuestions(
  rawPages as unknown as DocsPage[],
  { idPrefix: "react.docs", defaultLanguage: "jsx" },
);
