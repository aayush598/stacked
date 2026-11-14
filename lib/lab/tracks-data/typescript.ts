import type { LabTrack } from "../types";

export const typescriptTrack: LabTrack = {
  "id": "typescript",
  "title": "TypeScript Interfaces and Types",
  "description": "Interfaces, optional/readonly fields, unions, generics, utility types and typed props.",
  "priority": 11,
  "modules": [
    "Module 1 – Interfaces & Types",
    "Module 2 – Unions & Generics",
    "Module 3 – Utility Types & Props"
  ],
  "examples": [
    {
      "id": "ts-interface",
      "track": "typescript",
      "module": "Module 1 – Interfaces & Types",
      "title": "Interface basics",
      "summary": "Define an interface and render typed objects.",
      "tags": [],
      "code": "import React from \"react\";\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  active: boolean;\n}\n\nconst users: User[] = [\n  { id: 1, name: \"Aayush\", email: \"aayush@example.com\", active: true },\n  { id: 2, name: \"Meera\", email: \"meera@example.com\", active: false },\n];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">interface User</h5>\n        <ul className=\"list-group\">\n          {users.map((u) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={u.id}>\n              <span>{u.name} <span className=\"text-secondary small\">· {u.email}</span></span>\n              <span className={`badge ${u.active ? \"bg-success\" : \"bg-secondary\"}`}>{u.active ? \"active\" : \"inactive\"}</span>\n            </li>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ts-optional",
      "track": "typescript",
      "module": "Module 1 – Interfaces & Types",
      "title": "Optional & readonly fields",
      "summary": "Optional props with defaults and readonly data.",
      "tags": [],
      "code": "import React from \"react\";\n\ninterface Product {\n  readonly id: number;\n  name: string;\n  price: number;\n  discount?: number;\n}\n\nconst products: Product[] = [\n  { id: 1, name: \"Laptop\", price: 999, discount: 10 },\n  { id: 2, name: \"Mouse\", price: 20 },\n];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Optional & readonly</h5>\n        <ul className=\"list-group\">\n          {products.map((p) => (\n            <li className=\"list-group-item d-flex justify-content-between\" key={p.id}>\n              <span>{p.name} {p.discount ? <span className=\"badge bg-warning text-dark\">-{p.discount}%</span> : null}</span>\n              <strong>${p.price}</strong>\n            </li>\n          ))}\n        </ul>\n        <p className=\"form-text mt-2 mb-0\">`discount?` is optional; `id` is readonly.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ts-union",
      "track": "typescript",
      "module": "Module 2 – Unions & Generics",
      "title": "Union types & narrowing",
      "summary": "Discriminated unions with safe narrowing.",
      "tags": [],
      "code": "import React from \"react\";\n\ntype Shape =\n  | { kind: \"circle\"; radius: number }\n  | { kind: \"rect\"; width: number; height: number };\n\nconst shapes: Shape[] = [\n  { kind: \"circle\", radius: 5 },\n  { kind: \"rect\", width: 4, height: 3 },\n];\n\nfunction area(s: Shape): number {\n  if (s.kind === \"circle\") return Math.PI * s.radius ** 2;\n  return s.width * s.height;\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Union narrowing</h5>\n        <ul className=\"list-group\">\n          {shapes.map((s, i) => (\n            <li className=\"list-group-item d-flex justify-content-between\" key={i}>\n              <span>{s.kind}</span><strong>{area(s).toFixed(1)}</strong>\n            </li>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ts-generics",
      "track": "typescript",
      "module": "Module 2 – Unions & Generics",
      "title": "Generics",
      "summary": "A reusable generic list component and function.",
      "tags": [],
      "code": "import React from \"react\";\n\nfunction first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nfunction List<T>({ items, render }: { items: T[]; render: (item: T) => React.ReactNode }) {\n  return <ul className=\"list-group\">{items.map((item, i) => <li className=\"list-group-item\" key={i}>{render(item)}</li>)}</ul>;\n}\n\nexport default function App() {\n  const numbers = [10, 20, 30];\n  const names = [\"Aayush\", \"Meera\", \"Ravi\"];\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Generics</h5>\n        <p className=\"small text-secondary\">first(numbers) = {first(numbers)}</p>\n        <List items={names} render={(n) => <span>{n}</span>} />\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ts-alias",
      "track": "typescript",
      "module": "Module 3 – Utility Types & Props",
      "title": "Type alias & intersection",
      "summary": "Compose types with `&`.",
      "tags": [],
      "code": "import React from \"react\";\n\ntype Timestamps = { createdAt: string; updatedAt: string };\ntype Base = { id: number; title: string };\ntype Post = Base & Timestamps & { published: boolean };\n\nconst post: Post = {\n  id: 1,\n  title: \"Typed posts\",\n  published: true,\n  createdAt: \"2026-01-01\",\n  updatedAt: \"2026-02-01\",\n};\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Type alias & intersection</h5>\n        <h6>{post.title}</h6>\n        <p className=\"mb-2 text-secondary small\">Created {post.createdAt} · Updated {post.updatedAt}</p>\n        <span className={`badge ${post.published ? \"bg-success\" : \"bg-secondary\"}`}>{post.published ? \"published\" : \"draft\"}</span>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ts-utility",
      "track": "typescript",
      "module": "Module 3 – Utility Types & Props",
      "title": "Utility types",
      "summary": "Partial, Pick, Omit and Record in practice.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface User { id: number; name: string; email: string; role: string; }\n\ntype UserPreview = Pick<User, \"id\" | \"name\">;\ntype UserUpdate = Partial<Omit<User, \"id\">>;\n\nconst base: User = { id: 1, name: \"Aayush\", email: \"aayush@example.com\", role: \"Developer\" };\nconst preview: UserPreview = { id: base.id, name: base.name };\nconst roleCounts: Record<string, number> = { Developer: 12, Designer: 5, Manager: 3 };\n\nexport default function App() {\n  const [update, setUpdate] = useState<UserUpdate>({});\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Utility types</h5>\n        <p className=\"small text-secondary\">Pick → {preview.id}: {preview.name}</p>\n        <input className=\"form-control mb-2\" placeholder=\"New name (Partial)\" value={update.name ?? \"\"} onChange={(e) => setUpdate({ ...update, name: e.target.value })} />\n        <p className=\"small mb-2\">Draft update: {JSON.stringify(update)}</p>\n        <div className=\"d-flex gap-2\">\n          {Object.entries(roleCounts).map(([r, n]) => <span className=\"badge bg-primary\" key={r}>{r}: {n}</span>)}\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ts-props",
      "track": "typescript",
      "module": "Module 3 – Utility Types & Props",
      "title": "Typed component props",
      "summary": "Strongly typed props with unions and optional values.",
      "tags": [],
      "code": "import React from \"react\";\n\ntype Tone = \"success\" | \"warning\" | \"danger\";\n\nfunction Badge({ label, tone, outline }: { label: string; tone: Tone; outline?: boolean }) {\n  return <span className={`badge ${outline ? `border border-${tone} text-${tone}` : `bg-${tone}`}`}>{label}</span>;\n}\n\ninterface RowProps { name: string; status: Tone; amount: number; }\n\nfunction Row({ name, status, amount }: RowProps) {\n  return (\n    <tr>\n      <td>{name}</td>\n      <td><Badge label={status} tone={status} /></td>\n      <td className=\"text-end\">${amount}</td>\n    </tr>\n  );\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Typed props</h5>\n        <table className=\"table mb-0\">\n          <tbody>\n            <Row name=\"Order 1\" status=\"success\" amount={129} />\n            <Row name=\"Order 2\" status=\"warning\" amount={89} />\n            <Row name=\"Order 3\" status=\"danger\" amount={45} />\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
