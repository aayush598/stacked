import { buildQuestion } from "../../question-builder";
import type { Question, Tier, VisualKind } from "../../schema";

export type DocsBlock = {
  section: string;
  code: string;
  language: string | null;
};

export type DocsPage = {
  path: string;
  url: string;
  title: string;
  topicId: string;
  blocks: DocsBlock[];
};

export type DocsExampleConfig = {
  idPrefix: string;
  sourceBase?: string;
  defaultLanguage?: string;
};

type GroupKey = "class" | "attribute" | "selector" | "tag" | "fallback";

const GROUPS: GroupKey[] = ["class", "attribute", "selector", "tag", "fallback"];

const GROUP_LABEL: Record<GroupKey, string> = {
  class: "classes",
  attribute: "attributes or ARIA hooks",
  selector: "selectors, variables, or API tokens",
  tag: "element names",
  fallback: "code tokens",
};

const GROUP_SINGULAR: Record<GroupKey, string> = {
  class: "class",
  attribute: "attribute or ARIA hook",
  selector: "selector, variable, or API token",
  tag: "element name",
  fallback: "code token",
};

const GROUP_SIZE: Record<GroupKey, number> = {
  class: 4,
  attribute: 3,
  selector: 3,
  tag: 3,
  fallback: 3,
};

const GROUP_TIER: Record<GroupKey, Tier> = {
  class: "easy",
  attribute: "medium",
  selector: "hard",
  tag: "medium",
  fallback: "hard",
};

const GROUP_VISUAL: Record<GroupKey, VisualKind> = {
  class: "utility-stack",
  attribute: "attribute-map",
  selector: "selector-map",
  tag: "markup-tree",
  fallback: "selector-map",
};

const ATTRIBUTE_NAMES = new Set([
  "accept",
  "accept-charset",
  "accesskey",
  "action",
  "allow",
  "alt",
  "async",
  "autocomplete",
  "autofocus",
  "autoplay",
  "capture",
  "charset",
  "checked",
  "children",
  "cols",
  "colspan",
  "content",
  "controls",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "defaultchecked",
  "defaultvalue",
  "defer",
  "dir",
  "dirname",
  "disabled",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "fetchpriority",
  "for",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "htmlfor",
  "http-equiv",
  "id",
  "inert",
  "inputmode",
  "ismap",
  "key",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "low",
  "max",
  "maxlength",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "novalidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "playsinline",
  "popover",
  "poster",
  "preload",
  "readonly",
  "referrerpolicy",
  "ref",
  "rel",
  "required",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "sandbox",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "spellcheck",
  "src",
  "srcdoc",
  "srclang",
  "srcset",
  "start",
  "step",
  "style",
  "summary",
  "tabindex",
  "target",
  "title",
  "translate",
  "type",
  "usemap",
  "value",
  "width",
  "wrap",
]);

const SASS_AT_RULES = new Set([
  "@forward",
  "@use",
  "@import",
  "@mixin",
  "@include",
  "@function",
  "@extend",
  "@if",
  "@else",
  "@each",
  "@for",
  "@while",
  "@return",
  "@debug",
  "@warn",
  "@error",
  "@at-root",
  "@content",
]);

const SCRIPT_KEYWORDS =
  "async|await|class|debugger|delete|enum|extends|get|implements|in|instanceof|interface|keyof|infer|is|asserts|new|of|private|protected|public|satisfies|set|static|super|this|throw|try|catch|finally|typeof|void|with|yield|as|unknown|never|any|string|number|boolean|object|symbol|bigint|readonly|abstract|override|declare|namespace|type";

const GENERIC_SCRIPT_WORDS = new Set([
  "const",
  "let",
  "var",
  "function",
  "return",
  "export",
  "default",
  "import",
  "from",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "true",
  "false",
  "null",
  "undefined",
  "package",
]);

const CSS_RESERVED = new Set([
  "true",
  "false",
  "null",
  "none",
  "auto",
  "inherit",
  "initial",
  "unset",
  "revert",
  "revert-layer",
  "normal",
  "transparent",
  "currentcolor",
]);

const FALLBACK_STOPWORDS = new Set([
  "about",
  "above",
  "after",
  "again",
  "against",
  "all",
  "also",
  "and",
  "any",
  "are",
  "before",
  "below",
  "between",
  "both",
  "but",
  "can",
  "could",
  "did",
  "do",
  "does",
  "done",
  "down",
  "during",
  "each",
  "every",
  "few",
  "first",
  "for",
  "from",
  "had",
  "has",
  "have",
  "here",
  "how",
  "into",
  "its",
  "just",
  "last",
  "less",
  "like",
  "made",
  "make",
  "many",
  "may",
  "might",
  "more",
  "most",
  "much",
  "must",
  "new",
  "next",
  "not",
  "old",
  "once",
  "only",
  "or",
  "other",
  "our",
  "over",
  "previous",
  "same",
  "she",
  "should",
  "since",
  "some",
  "such",
  "than",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "this",
  "those",
  "through",
  "under",
  "until",
  "up",
  "use",
  "used",
  "using",
  "very",
  "was",
  "we",
  "were",
  "what",
  "when",
  "where",
  "which",
  "while",
  "why",
  "will",
  "with",
  "without",
  "would",
  "you",
  "your",
]);

function stripComments(code: string) {
  return code
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/(^|[^:])\/\/.*$/gm, "$1 ");
}

function stripScriptNoise(code: string) {
  let value = code.replace(/\/\*[\s\S]*?\*\//g, " ");
  value = value.replace(/(["'`])(?:\\.|(?!\1)[^\\])*\1/g, '""');
  value = value.replace(/(^|[^:])\/\/.*$/gm, "$1 ");
  value = value.replace(/>([\s]*[^<>{}\n][^<>{}]*)</g, "><");
  return value;
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function cleanTokens(values: string[]) {
  return unique(values).filter((token) => {
    if (token.length < 1 || !/[A-Za-z]/.test(token)) return false;
    if (!/^[\x20-\x7E]+$/.test(token)) return false;
    if (/["'`(){}[\],;=<>|\\^~\s]/.test(token)) return false;
    return true;
  });
}

function extractClasses(code: string) {
  const values: string[] = [];
  const source = stripComments(code);
  for (const match of source.matchAll(/\bclass(?:Name)?\s*=\s*["'`]([^"'`]+)["'`]/g)) {
    values.push(...match[1].split(/\s+/));
  }
  for (const match of source.matchAll(/classList\.(?:add|remove|toggle)\(([^)]*)\)/g)) {
    values.push(...match[1].replace(/["'`]/g, "").split(/[\s,]+/));
  }
  return unique(values.map((value) => value.trim())).filter((value) =>
    /^[a-zA-Z_][\w:/-]*$/.test(value),
  );
}

function extractAttributes(code: string) {
  const values: string[] = [];
  const source = stripComments(code);
  for (const match of source.matchAll(/\b([a-zA-Z_:][\w:.-]*)\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]*\}|[^\s>]+)/g)) {
    const name = match[1];
    if (name === "class" || name === "className") continue;
    const lower = name.toLowerCase();
    if (
      name.startsWith("data-") ||
      name.startsWith("aria-") ||
      name.startsWith("on") ||
      ATTRIBUTE_NAMES.has(lower)
    ) {
      values.push(name);
    }
  }
  return unique(values);
}

function stripCssNoise(code: string) {
  return stripComments(code).replace(/(["'])(?:\\.|(?!\1)[^\\])*\1/g, '""');
}

function extractCssSelectors(code: string) {
  const values: string[] = [];
  const source = stripCssNoise(code);
  for (const match of source.matchAll(/(--[\w-]+|\$[\w-]+|\.[a-zA-Z_][\w-]*|#[a-zA-Z_][\w-]*|@[a-zA-Z-]+)/g)) {
    values.push(match[1]);
  }
  for (const match of source.matchAll(/(^|\n)\s*([a-zA-Z-]+)\s*:/g)) {
    values.push(match[2]);
  }
  for (const match of source.matchAll(/(^|\n)\s*([a-zA-Z][\w-]*)\s*\{/g)) {
    values.push(match[2]);
  }
  return unique(values).filter(
    (value) => !(/^[a-zA-Z-]+$/.test(value) && CSS_RESERVED.has(value.toLowerCase())),
  );
}

function extractScriptSelectors(code: string) {
  const values: string[] = [];
  const tokens = stripScriptNoise(code);
  const patterns = [
    /bootstrap\.[A-Za-z][\w.]*/g,
    /React\.[A-Za-z][\w.]*/g,
    /use[A-Z][\w$]*/g,
    /\b[A-Z][A-Za-z0-9_$]*\b/g,
    /(?:const|let|var|function|class|interface|type|enum|namespace|declare)\s+([A-Za-z_$][\w$]*)/g,
    /\.([a-zA-Z_$][\w$]*)\s*\(/g,
    new RegExp(`\\b(?:${SCRIPT_KEYWORDS})\\b`, "g"),
    /\b(?:document|window|console|JSON|Object|Array|Promise|Math|Date|localStorage|sessionStorage|fetch|setTimeout|setInterval|clearTimeout|clearInterval|requestAnimationFrame)\b/g,
  ];
  for (const pattern of patterns) {
    for (const match of tokens.matchAll(pattern)) {
      values.push(match[1] ?? match[0]);
    }
  }
  for (const match of code.matchAll(/(["'`])([.#][a-zA-Z_][\w-]*|click|submit|change|input|keydown|keyup|focus|blur|load|error)\1/g)) {
    values.push(match[2]);
  }
  for (const match of tokens.matchAll(/(?:import|export)\s+(?:type\s+)?\{([^}]+)\}/g)) {
    values.push(
      ...match[1]
        .split(",")
        .map((part) => part.trim().split(/\s+as\s+/)[0])
        .filter(Boolean),
    );
  }
  return unique(values).filter(
    (value) =>
      value.length >= 2 &&
      !GENERIC_SCRIPT_WORDS.has(value.toLowerCase()) &&
      !FALLBACK_STOPWORDS.has(value.toLowerCase()) &&
      /^[A-Za-z_$][\w$]*$/.test(value),
  );
}

function extractSelectors(code: string, language: string) {
  if (language === "css" || language === "scss") {
    return extractCssSelectors(code);
  }
  if (["js", "ts", "jsx", "tsx", "javascript", "typescript"].includes(language)) {
    return extractScriptSelectors(code);
  }
  if (language === "bash") {
    const values: string[] = [];
    for (const line of code.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const words = trimmed.split(/\s+/);
      values.push(words[0]);
      for (const word of words.slice(1)) {
        if (/^[@a-zA-Z][\w@/.-]*$/.test(word)) values.push(word);
      }
    }
    return unique(values);
  }
  return [];
}

function fallbackTokens(code: string) {
  const values: string[] = [];
  for (const line of stripComments(code).split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    for (const raw of trimmed.split(/[\s,;:(){}[\]=<>+*/%!&|?]+/)) {
      const token = raw.replace(/^[^\w@.$#-]+|[^\w@.$#/-]+$/g, "");
      if (!token || token.length < 2 || !/[a-zA-Z]/.test(token)) continue;
      if (!/^[@a-zA-Z0-9_.$#/-]+$/.test(token)) continue;
      if (/^[0-9.]+/.test(token)) continue;
      if (/:\/\//.test(token) || /^www\./i.test(token) || /\.(com|org|net|io|dev)\b/i.test(token)) {
        continue;
      }
      if (
        GENERIC_SCRIPT_WORDS.has(token.toLowerCase()) ||
        FALLBACK_STOPWORDS.has(token.toLowerCase())
      ) {
        continue;
      }
      values.push(token);
    }
  }
  return unique(values);
}

function extractTags(code: string) {
  const values: string[] = [];
  const source = stripComments(code);
  for (const match of source.matchAll(/<\/?([a-zA-Z][\w-]*)/g)) {
    values.push(match[1].toLowerCase());
  }
  return unique(values).filter(
    (value) => !["html", "head", "body", "meta", "link", "script", "title"].includes(value),
  );
}

function inferLanguage(code: string, page: DocsPage, fallback: string) {
  if (/^\s*(npm|npx|pnpm|yarn|bun|git|cd|mkdir|touch|echo|gem|composer|install-package|openssl|bundle)\b/m.test(code)) {
    return "bash";
  }
  if (/<\/?[a-z][\w-]*(\s|>|\/)/i.test(code)) {
    if (fallback === "jsx" || fallback === "tsx") return fallback;
    return "html";
  }
  if (
    /(^|\n)\s*\$[\w-]+\s*:|@(?:use|import|forward|mixin|include|function|if|else|each|for|while|keyframes|media|supports)\b|--[\w-]+\s*:/.test(code) ||
    /(^|\n)\s*\.[\w-]+\s*\{/.test(code) ||
    /(^|\n)\s*[\w-]+\s*:\s*[^;]+;/.test(code)
  ) {
    return "scss";
  }
  if (/(^|\n)\s*(import|export|const|let|var|document|window|new|await|module\.exports|require)\b|bootstrap\.[A-Za-z]|\.addEventListener\(|\.(?:show|hide|dispose)\(/.test(code)) {
    return fallback === "tsx" ? "tsx" : fallback === "ts" ? "ts" : "js";
  }
  if (page.path.startsWith("customize/sass") || page.path.startsWith("utilities/api")) {
    return "scss";
  }
  return fallback;
}

function normalizeLanguage(language: string | null, fallback: string) {
  if (!language) return fallback;
  const value = language.toLowerCase();
  if (value.includes("tsx")) return "tsx";
  if (value.includes("jsx")) return "jsx";
  if (value.includes("typescript") || value === "ts") return "ts";
  if (value.includes("javascript") || value === "js") return "js";
  if (value.includes("scss") || value.includes("sass")) return "scss";
  if (value.includes("css")) return "css";
  if (value.includes("html")) return "html";
  if (value.includes("bash") || value.includes("shell") || value === "sh") return "bash";
  if (value.includes("json")) return "json";
  return fallback;
}

function chunk(values: string[], size: number) {
  const result: string[][] = [];
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size));
  }
  return result;
}

function hash(value: string) {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) >>> 0;
  }
  return result;
}

function mutateToken(token: string, index: number) {
  if (token.startsWith("data-bs-")) return token.replace("data-bs-", "data-");
  if (token.startsWith("aria-")) return `${token}-alt`;
  if (token.startsWith(".")) return `.${token.slice(1)}-alt`;
  if (token.startsWith("#")) return `#${token.slice(1)}-alt`;
  if (token.startsWith("--")) return `${token}-alt`;
  if (token.startsWith("$")) return `${token}-alt`;
  if (token.startsWith("@")) return `${token}-alt`;
  if (token.startsWith("bootstrap.")) return `bootstrap.${token.slice(10)}Alt`;
  if (index % 2 === 0) return `${token}-alt`;
  return `${token}-x`;
}

function tokenShape(token: string) {
  if (token.startsWith("bootstrap.")) return "bootstrap";
  if (SASS_AT_RULES.has(token)) return "sass-at";
  if (token.startsWith("@")) return "css-at";
  if (token.startsWith("$")) return "$";
  if (token.startsWith("--")) return "--";
  if (token.startsWith(".")) return ".";
  if (token.startsWith("#")) return "#";
  if (token.startsWith("data-")) return "data";
  if (token.startsWith("aria-")) return "aria";
  if (/^[A-Z]/.test(token)) return "pascal";
  if (/^[a-z][\w-]*$/i.test(token)) return "word";
  return "other";
}

function fallbackShape(token: string) {
  if (/^(last|not|unreleased|dead|versions|Chrome|Edge|Firefox|iOS|Safari|and_|op_|kaios)/i.test(token)) {
    return "browser";
  }
  return "config";
}

function poolByShape(pool: string[], group: GroupKey) {
  const shapeFor = group === "fallback" ? fallbackShape : tokenShape;
  const result = new Map<string, string[]>();
  for (const token of pool) {
    const shape = shapeFor(token);
    result.set(shape, [...(result.get(shape) ?? []), token]);
  }
  return result;
}

function makeDistractors(
  correct: string[],
  pool: string[],
  forbidden: string[],
  seed: number,
  group: GroupKey,
  shapedPool: Map<string, string[]>,
) {
  const size = correct.length;
  const shapeFor = group === "fallback" ? fallbackShape : tokenShape;
  const desired = correct.map(shapeFor);
  const maxLength = Math.max(16, ...correct.map((token) => token.length * 2));
  const blocked = new Set(forbidden);
  const distractors: string[] = [];
  let cursor = seed % Math.max(pool.length, 1);

  const pick = (shape: string, used: Set<string>, offset: number) => {
    const source = shapedPool.get(shape) ?? pool;
    const attempts = Math.min(source.length, 80);
    for (let step = 0; step < attempts; step += 1) {
      const token = source[(cursor + offset + step) % Math.max(source.length, 1)];
      if (!token || token.length < 2 || token.length > maxLength) continue;
      if (/^[0-9.]+(?:[a-z%]+)?$/i.test(token)) continue;
      if (blocked.has(token) || used.has(token)) continue;
      return token;
    }
    return undefined;
  };

  for (let attempt = 0; distractors.length < 3 && attempt < 24; attempt += 1) {
    const candidate: string[] = [];
    const used = new Set(blocked);
    for (let index = 0; index < size; index += 1) {
      const token = pick(desired[index % desired.length], used, attempt * size + index);
      if (token) {
        candidate.push(token);
        used.add(token);
      } else {
        candidate.push(mutateToken(correct[index % correct.length], attempt));
      }
    }
    const label = candidate.join(" ");
    if (!distractors.includes(label) && label !== correct.join(" ")) {
      distractors.push(label);
    }
    cursor += size + 1;
  }

  while (distractors.length < 3) {
    const candidate = correct.map((token, index) => mutateToken(token, distractors.length + index));
    const label = candidate.join(" ");
    if (!distractors.includes(label) && label !== correct.join(" ")) distractors.push(label);
    else distractors.push(`${label} ${distractors.length}`);
  }

  return distractors;
}

function promptFor(group: GroupKey, count: number, section: string, title: string) {
  const label =
    count === 1
      ? `Which ${GROUP_SINGULAR[group]} appears`
      : `Which ${count} ${GROUP_LABEL[group]} appear`;
  return `${label} in the official "${section}" example on the ${title} page?`;
}

function whyFor(group: GroupKey, tokens: string[], section: string, title: string) {
  return `The ${title} documentation uses ${tokens.join(" ")} in the "${section}" example. The full official snippet is shown above; compare the exact spelling, prefixes, and punctuation rather than substituting a similar ${GROUP_LABEL[group]} from memory.`;
}

type Extracted = {
  page: DocsPage;
  blockIndex: number;
  block: DocsBlock;
  language: string;
  groups: Record<GroupKey, string[]>;
};

export function buildDocsExampleQuestions(pages: DocsPage[], config: DocsExampleConfig) {
  const fallbackLanguage = config.defaultLanguage ?? "html";
  const extracted: Extracted[] = [];

  for (const page of pages) {
    page.blocks.forEach((block, blockIndex) => {
      let language = normalizeLanguage(
        block.language,
        inferLanguage(block.code, page, fallbackLanguage),
      );
      if (
        (fallbackLanguage === "jsx" || fallbackLanguage === "tsx") &&
        (language === "js" || language === "ts") &&
        /<\/?[A-Za-z][\w.-]*(\s|>|\/)/.test(block.code)
      ) {
        language = fallbackLanguage;
      }
      if (fallbackLanguage === "ts" && language === "js") {
        language = "ts";
      }
      const classes = extractClasses(block.code);
      const attributes = extractAttributes(block.code);
      const selectors = extractSelectors(block.code, language).filter(
        (token) => !classes.includes(token) && !attributes.includes(token),
      );
      const tags = extractTags(block.code);
      const fallback =
        classes.length || attributes.length || selectors.length || tags.length
          ? []
          : fallbackTokens(block.code);
      const groups: Record<GroupKey, string[]> = {
        class: cleanTokens(classes),
        attribute: cleanTokens(attributes),
        selector: cleanTokens(selectors),
        tag: cleanTokens(
          classes.length || attributes.length || selectors.length ? [] : tags,
        ),
        fallback: cleanTokens(fallback),
      };
      extracted.push({ page, blockIndex, block, language, groups });
    });
  }

  const pools = {
    class: unique(extracted.flatMap((item) => item.groups.class)),
    attribute: unique(extracted.flatMap((item) => item.groups.attribute)),
    selector: unique(extracted.flatMap((item) => item.groups.selector)),
    tag: unique(extracted.flatMap((item) => item.groups.tag)),
    fallback: unique(extracted.flatMap((item) => item.groups.fallback)),
  };
  const shapedPools = {
    class: poolByShape(pools.class, "class"),
    attribute: poolByShape(pools.attribute, "attribute"),
    selector: poolByShape(pools.selector, "selector"),
    tag: poolByShape(pools.tag, "tag"),
    fallback: poolByShape(pools.fallback, "fallback"),
  };

  function questionsFor(item: Extracted) {
    const questions: Question[] = [];
    for (const group of GROUPS) {
      const values = item.groups[group];
      if (!values.length) continue;
      const chunks = chunk(values, GROUP_SIZE[group]);
      chunks.forEach((correct, chunkIndex) => {
        const id = `${config.idPrefix}.${item.page.path.replace(/[^a-z0-9]+/gi, "-")}.${item.blockIndex}.${group}.${chunkIndex}`;
        const seed = hash(id);
        const distractors = makeDistractors(
          correct,
          pools[group],
          item.groups[group],
          seed,
          group,
          shapedPools[group],
        );
        const correctIndex = seed % 4;
        const options = [...distractors];
        options.splice(correctIndex, 0, correct.join(" "));
        const section = item.block.section || item.page.title;
        const source = item.page.url.startsWith("http")
          ? item.page.url
          : `${config.sourceBase ?? ""}/${item.page.url.replace(/^\/+/, "")}`;
        questions.push(
          buildQuestion({
            id,
            topicId: item.page.topicId,
            tier: GROUP_TIER[group],
            title: `${item.page.title} · ${section} · ${GROUP_LABEL[group]}`,
            prompt: promptFor(group, correct.length, section, item.page.title),
            options,
            correct: correctIndex,
            answer: correct.join(" "),
            why: whyFor(group, correct, section, item.page.title),
            summary: whyFor(group, correct, section, item.page.title),
            code: item.block.code,
            codeLanguage: item.language,
            bullets: [
              `Page: ${item.page.title}`,
              `Section: ${section}`,
              `Official code language: ${item.language}`,
              "The correct option uses the exact tokens from the documented snippet.",
              `Official documentation: ${source}`,
            ],
            syntax: item.block.code,
            pitfalls: [
              "Do not replace a documented token with a similar-looking name from another version or library.",
              "Compare the exact spelling, casing, punctuation and prefixes in the official snippet.",
            ],
            memory: "Exact token, exact context.",
            visual: [
              GROUP_VISUAL[group],
              `${item.page.title}: ${section}`,
              "Match the exact tokens from the official code block.",
            ],
            mono: true,
          }),
        );
      });
    }
    return questions;
  }

  return extracted.flatMap(questionsFor);
}
