import rawPages from "./v6-examples.json";
import { docsQuestion } from "./seed";
import type { Question, Tier, VisualKind } from "../../schema";

type V6Block = {
  section: string;
  code: string;
  language: string | null;
};

type V6Page = {
  path: string;
  url: string;
  title: string;
  topicId: string;
  blocks: V6Block[];
};

type GroupKey = "class" | "attribute" | "selector" | "tag" | "fallback";

const GROUPS: GroupKey[] = ["class", "attribute", "selector", "tag", "fallback"];

const pages = rawPages as unknown as V6Page[];

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
  "action",
  "alt",
  "autocomplete",
  "charset",
  "checked",
  "content",
  "dir",
  "disabled",
  "for",
  "height",
  "href",
  "http-equiv",
  "id",
  "lang",
  "method",
  "multiple",
  "name",
  "novalidate",
  "placeholder",
  "readonly",
  "rel",
  "required",
  "role",
  "selected",
  "src",
  "style",
  "tabindex",
  "target",
  "type",
  "value",
  "width",
]);

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function extractClasses(code: string) {
  const values: string[] = [];
  for (const match of code.matchAll(/\bclass(?:Name)?\s*=\s*["'`]([^"'`]+)["'`]/g)) {
    values.push(...match[1].split(/\s+/));
  }
  for (const match of code.matchAll(/classList\.(?:add|remove|toggle)\(([^)]*)\)/g)) {
    values.push(...match[1].replace(/["'`]/g, "").split(/[\s,]+/));
  }
  return unique(values.map((value) => value.trim())).filter((value) =>
    /^[a-zA-Z_][\w:/-]*$/.test(value),
  );
}

function extractAttributes(code: string) {
  const values: string[] = [];
  for (const match of code.matchAll(/\b([a-zA-Z_:][\w:.-]*)\s*=\s*(?:"[^"]*"|'[^']*'|\{[^}]*\}|[^\s>]+)/g)) {
    const name = match[1];
    if (name === "class" || name === "className") continue;
    if (name.startsWith("data-") || name.startsWith("aria-") || ATTRIBUTE_NAMES.has(name)) {
      values.push(name);
    }
  }
  return unique(values);
}

function extractSelectors(code: string, language: string) {
  const values: string[] = [];
  if (language === "css" || language === "scss") {
    for (const match of code.matchAll(/(--[\w-]+|\$[\w-]+|\.[a-zA-Z_][\w-]*|#[a-zA-Z_][\w-]*|@[a-zA-Z-]+)/g)) {
      values.push(match[1]);
    }
    for (const match of code.matchAll(/(^|\n)\s*([a-zA-Z-]+)\s*:/g)) {
      values.push(match[2]);
    }
    for (const match of code.matchAll(/(^|\n)\s*([a-zA-Z][\w-]*)\s*\{/g)) {
      values.push(match[2]);
    }
    for (const match of code.matchAll(/(["'`])([^"'`]*[/.][^"'`]*)\1/g)) {
      values.push(match[2]);
    }
  } else if (language === "js") {
    for (const match of code.matchAll(/(bootstrap\.[A-Za-z][\w.]*|new\s+[A-Z][\w]*|[\w-]+\.bs\.[\w-]+|document\.[\w]+|window\.[\w]+|[\w-]+\.addEventListener|[\w-]+\.(?:show|hide|dispose|getInstance|getOrCreateInstance)\(|(?:import|export|const|let|var)\s+[A-Za-z_$][\w$]*)/g)) {
      values.push(match[1]);
    }
    for (const match of code.matchAll(/(["'`])([.#][a-zA-Z_][\w-]*)\1/g)) {
      values.push(match[2]);
    }
    for (const match of code.matchAll(/(?:from|require\()\s*["'`]([^"'`]+)["'`]/g)) {
      values.push(match[1]);
    }
  } else if (language === "bash") {
    for (const line of code.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const words = trimmed.split(/\s+/);
      values.push(words[0]);
      for (const word of words.slice(1)) {
        if (/^[@a-zA-Z][\w@/.-]*$/.test(word)) values.push(word);
      }
    }
  }
  return unique(values);
}

function fallbackTokens(code: string) {
  const values: string[] = [];
  for (const line of code.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const cleaned = trimmed.replace(/^[^\w@.$#-]+/, "");
    const first = cleaned
      .split(/[\s,;:(){}[\]]+/)[0]
      .replace(/^[^\w@.$#-]+|[^\w@.$#/-]+$/g, "");
    if (first && /[a-zA-Z]/.test(first) && /^[@a-zA-Z0-9_.$#/-]+$/.test(first)) {
      values.push(first);
    }
  }
  return unique(values);
}

function extractTags(code: string) {
  const values: string[] = [];
  for (const match of code.matchAll(/<\/?([a-zA-Z][\w-]*)/g)) {
    values.push(match[1].toLowerCase());
  }
  return unique(values).filter(
    (value) => !["html", "head", "body", "meta", "link", "script", "title"].includes(value),
  );
}

function inferLanguage(code: string, page: V6Page) {
  if (/^\s*(npm|npx|pnpm|yarn|bun|git|cd|mkdir|touch|echo|gem|composer|install-package|openssl|bundle)\b/m.test(code)) return "bash";
  if (/<\/?[a-z][\w-]*(\s|>|\/)/i.test(code)) return "html";
  if (
    /(^|\n)\s*\$[\w-]+\s*:|@(?:use|import|forward|mixin|include|function|if|else|each|for|while|keyframes|media|supports)\b|--[\w-]+\s*:/.test(code) ||
    /(^|\n)\s*\.[\w-]+\s*\{/.test(code) ||
    /(^|\n)\s*[\w-]+\s*:\s*[^;]+;/.test(code)
  ) {
    return "scss";
  }
  if (/(^|\n)\s*(import|export|const|let|var|document|window|new|await|module\.exports|require)\b|bootstrap\.[A-Za-z]|\.addEventListener\(|\.(?:show|hide|dispose)\(/.test(code)) return "js";
  if (page.path.startsWith("customize/sass") || page.path.startsWith("utilities/api")) return "scss";
  return "html";
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
  if (/^[a-z][\w-]*$/i.test(token)) return "word";
  return "other";
}

function fallbackShape(token: string) {
  if (/^(last|not|unreleased|dead|versions|Chrome|Edge|Firefox|iOS|Safari|and_|op_|kaios)/i.test(token)) {
    return "browser";
  }
  return "config";
}

function filterPool(correct: string[], pool: string[], group: GroupKey) {
  const shapeFor = group === "fallback" ? fallbackShape : tokenShape;
  const shapes = new Set(correct.map(shapeFor));
  const maxLength = Math.max(16, ...correct.map((token) => token.length * 2));
  return pool.filter((token) => {
    if (token.length < 2 || token.length > maxLength) return false;
    if (/^[0-9.]+(?:[a-z%]+)?$/i.test(token)) return false;
    return shapes.has(shapeFor(token));
  });
}

function makeDistractors(
  correct: string[],
  pool: string[],
  forbidden: string[],
  seed: number,
  group: GroupKey,
) {
  const size = correct.length;
  const shapeFor = group === "fallback" ? fallbackShape : tokenShape;
  const available = filterPool(correct, pool, group).filter(
    (token) => !forbidden.includes(token),
  );
  const byShape = new Map<string, string[]>();
  for (const token of available) {
    const shape = shapeFor(token);
    byShape.set(shape, [...(byShape.get(shape) ?? []), token]);
  }
  const distractors: string[] = [];
  let cursor = seed % Math.max(available.length, 1);

  for (let attempt = 0; distractors.length < 3 && attempt < 24; attempt += 1) {
    const candidate: string[] = [];
    for (let offset = 0; candidate.length < size && offset < available.length * 2; offset += 1) {
      const desired = shapeFor(correct[candidate.length % correct.length]);
      const shaped = (byShape.get(desired) ?? []).filter(
        (token) => !forbidden.includes(token) && !candidate.includes(token),
      );
      const source = shaped.length ? shaped : available;
      const token = source[(cursor + offset) % Math.max(source.length, 1)];
      if (token && !forbidden.includes(token) && !candidate.includes(token)) {
        candidate.push(token);
      }
    }
    while (candidate.length < size) {
      candidate.push(mutateToken(correct[candidate.length % correct.length], attempt));
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
  page: V6Page;
  blockIndex: number;
  block: V6Block;
  language: string;
  groups: Record<GroupKey, string[]>;
};

const extracted: Extracted[] = [];

for (const page of pages) {
  page.blocks.forEach((block, blockIndex) => {
    const language = inferLanguage(block.code, page);
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
      class: classes,
      attribute: attributes,
      selector: selectors,
      tag: classes.length || attributes.length || selectors.length ? [] : tags,
      fallback,
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

function questionsFor(item: Extracted) {
  const questions: Question[] = [];
  for (const group of GROUPS) {
    const values = item.groups[group];
    if (!values.length) continue;
    const chunks = chunk(values, GROUP_SIZE[group]);
    chunks.forEach((correct, chunkIndex) => {
      const id = `bootstrap.v6.${item.page.path.replace(/[^a-z0-9]+/gi, "-")}.${item.blockIndex}.${group}.${chunkIndex}`;
      const seed = hash(id);
      const distractors = makeDistractors(
        correct,
        pools[group],
        item.groups[group],
        seed,
        group,
      );
      const correctIndex = seed % 4;
      const options = [...distractors];
      options.splice(correctIndex, 0, correct.join(" "));
      const section = item.block.section || item.page.title;
      questions.push(
        docsQuestion({
          id,
          topicId: item.page.topicId,
          tier: GROUP_TIER[group],
          title: `${item.page.title} · ${section} · ${GROUP_LABEL[group]}`,
          prompt: promptFor(group, correct.length, section, item.page.title),
          options,
          correct: correctIndex,
          answer: correct.join(" "),
          why: whyFor(group, correct, section, item.page.title),
          source: item.page.url,
          code: item.block.code,
          codeLanguage: item.language,
          bullets: [
            `Page: ${item.page.title}`,
            `Section: ${section}`,
            `Official code language: ${item.language}`,
            "The correct option uses the exact tokens from the documented snippet.",
          ],
          pitfalls: [
            "Do not replace a documented class or attribute with a similar Bootstrap 5 name.",
            "Keep responsive prefixes such as sm: and md:, and state suffixes such as active or disabled.",
          ],
          memory: "Exact token, exact prefix.",
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

export const bootstrapDocsV6Examples = extracted.flatMap(questionsFor);
