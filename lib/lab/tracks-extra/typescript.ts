import type { LabTrack } from "../types";

export const typescriptExtra: LabTrack = {
  "id": "typescript",
  "title": "TypeScript Interfaces and Types",
  "description": "Interfaces, optional/readonly fields, unions, generics, utility types and typed props.",
  "priority": 11,
  "modules": [
    "Module 4 \u2013 Type Operators",
    "Module 5 \u2013 Advanced Types",
    "Module 6 \u2013 TypeScript with React"
  ],
  "examples": [
    {
      "id": "typescript-readonly",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "readonly and Readonly<T>",
      "summary": "Prevent reassignment with readonly properties and Readonly<T>.",
      "tags": ["typescript", "readonly"],
      "code": "import React from \"react\";\n\ninterface User {\n  readonly id: number;\n  name: string;\n  readonly roles: readonly string[];\n}\n\ntype Settings = Readonly<{ theme: string; compact: boolean }>;\n\nconst user: User = { id: 1, name: \"Aayush\", roles: [\"admin\", \"editor\"] };\nconst settings: Settings = { theme: \"dark\", compact: true };\n\n// user.id = 2;                 // Error: cannot assign to readonly\n// user.roles.push(\"viewer\");   // Error: readonly array\n// settings.theme = \"light\";    // Error: Readonly<T>\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">{\"readonly & Readonly<T>\"}</h5>\n        <ul className=\"list-group mb-3\">\n          <li className=\"list-group-item d-flex justify-content-between\">\n            <span>id</span><span className=\"badge bg-secondary\">readonly {user.id}</span>\n          </li>\n          <li className=\"list-group-item d-flex justify-content-between\">\n            <span>name</span><span>{user.name}</span>\n          </li>\n          <li className=\"list-group-item d-flex justify-content-between\">\n            <span>roles</span><span>{user.roles.join(\", \")}</span>\n          </li>\n        </ul>\n        <div className=\"alert alert-info mb-0 py-2 small\">\n          theme={settings.theme}, compact={String(settings.compact)}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-extends",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "Interface extends",
      "summary": "Build a hierarchy with interface inheritance.",
      "tags": ["typescript", "interfaces"],
      "code": "import React from \"react\";\n\ninterface Person {\n  id: number;\n  name: string;\n}\n\ninterface Employee extends Person {\n  department: string;\n  salary: number;\n}\n\ninterface Manager extends Employee {\n  reports: number;\n}\n\nconst people: Person[] = [{ id: 1, name: \"Aayush\" }];\nconst staff: Employee[] = [{ id: 2, name: \"Meera\", department: \"Design\", salary: 72000 }];\nconst leads: Manager[] = [{ id: 3, name: \"Ravi\", department: \"Engineering\", salary: 95000, reports: 6 }];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Interface extends</h5>\n        <table className=\"table table-sm align-middle mb-0\">\n          <thead>\n            <tr><th>Name</th><th>Department</th><th>Salary</th><th>Reports</th></tr>\n          </thead>\n          <tbody>\n            {[...staff, ...leads].map((employee) => {\n              const reports = \"reports\" in employee ? employee.reports : \"\u2014\";\n              return (\n                <tr key={employee.id}>\n                  <td>{employee.name}</td>\n                  <td>{employee.department}</td>\n                  <td>${employee.salary.toLocaleString()}</td>\n                  <td>{reports}</td>\n                </tr>\n              );\n            })}\n          </tbody>\n        </table>\n        <p className=\"form-text mb-0 mt-2\">\n          Person \u2192 Employee \u2192 Manager \u00b7 {people.length} person, {staff.length} employee, {leads.length} manager.\n        </p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-intersection",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "Intersection types",
      "summary": "Combine type aliases with the & operator.",
      "tags": ["typescript", "intersection"],
      "code": "import React from \"react\";\n\ntype Base = { id: number; title: string };\ntype Timestamps = { createdAt: string; updatedAt: string };\ntype Tagged = { tags: string[] };\ntype Auditable = { createdBy: string };\n\ntype Article = Base & Timestamps & Tagged & Auditable;\n\nconst article: Article = {\n  id: 7,\n  title: \"Understanding intersections\",\n  createdAt: \"2026-01-10\",\n  updatedAt: \"2026-02-02\",\n  tags: [\"typescript\", \"types\"],\n  createdBy: \"aayush\",\n};\n\nfunction summary(item: Article): string {\n  return `${item.title} \u00b7 ${item.tags.length} tags \u00b7 by ${item.createdBy}`;\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Intersection types</h5>\n        <p className=\"mb-2\">{summary(article)}</p>\n        <ul className=\"list-group list-group-flush mb-3\">\n          <li className=\"list-group-item d-flex justify-content-between\"><span>createdAt</span><span>{article.createdAt}</span></li>\n          <li className=\"list-group-item d-flex justify-content-between\"><span>updatedAt</span><span>{article.updatedAt}</span></li>\n          <li className=\"list-group-item d-flex justify-content-between\"><span>id</span><span>{article.id}</span></li>\n        </ul>\n        <div className=\"d-flex gap-2\">\n          {article.tags.map((tag) => <span className=\"badge bg-primary\" key={tag}>{tag}</span>)}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-literal",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "Literal union types",
      "summary": "Restrict values to an exact set of string literals.",
      "tags": ["typescript", "literal"],
      "code": "import React, { useState } from \"react\";\n\ntype Status = \"idle\" | \"loading\" | \"success\" | \"error\";\n\nconst statuses: Status[] = [\"idle\", \"loading\", \"success\", \"error\"];\n\nconst badge: Record<Status, string> = {\n  idle: \"bg-secondary\",\n  loading: \"bg-info text-dark\",\n  success: \"bg-success\",\n  error: \"bg-danger\",\n};\n\nexport default function App() {\n  const [status, setStatus] = useState<Status>(\"idle\");\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Literal unions</h5>\n        <div className=\"d-flex flex-wrap gap-2 mb-3\">\n          {statuses.map((value) => (\n            <button\n              key={value}\n              className={`btn btn-sm ${status === value ? \"btn-dark\" : \"btn-outline-dark\"}`}\n              onClick={() => setStatus(value)}\n            >\n              {value}\n            </button>\n          ))}\n        </div>\n        <div className=\"alert alert-light border mb-0\">\n          Current status: <span className={`badge ${badge[status]}`}>{status}</span>\n        </div>\n        <p className=\"form-text mb-0 mt-3\">Only these four strings satisfy the Status type.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-generic-constraints",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "Generic constraints",
      "summary": "Constrain a generic parameter to objects with an id.",
      "tags": ["typescript", "generics", "constraints"],
      "code": "import React from \"react\";\n\ntype Identifiable = { id: number };\n\ninterface User extends Identifiable { name: string }\ninterface Product extends Identifiable { title: string; price: number }\n\nfunction findById<T extends Identifiable>(items: T[], id: number): T | undefined {\n  return items.find((item) => item.id === id);\n}\n\nconst users: User[] = [\n  { id: 1, name: \"Aayush\" },\n  { id: 2, name: \"Meera\" },\n];\n\nconst products: Product[] = [\n  { id: 101, title: \"Keyboard\", price: 89 },\n  { id: 102, title: \"Monitor\", price: 249 },\n];\n\nconst user = findById(users, 2);\nconst product = findById(products, 101);\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">{\"<T extends { id: number }>\"}</h5>\n        <div className=\"alert alert-primary py-2\">\n          User #{user?.id}: <strong>{user?.name ?? \"not found\"}</strong>\n        </div>\n        <div className=\"alert alert-success py-2 mb-0\">\n          Product #{product?.id}: <strong>{product?.title ?? \"not found\"}</strong> \u00b7 ${product?.price}\n        </div>\n        <p className=\"form-text mb-0 mt-3\">The constraint guarantees every item has an id field.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-keyof",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "keyof and indexed access",
      "summary": "Read properties safely with keyof and T[K].",
      "tags": ["typescript", "keyof"],
      "code": "import React from \"react\";\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst user: User = { id: 1, name: \"Aayush\", email: \"aayush@example.com\" };\nconst columns: (keyof User)[] = [\"id\", \"name\", \"email\"];\n\nfunction get<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\ntype UserKey = keyof User;\nconst highlighted: UserKey = \"email\";\n\n// const bad: keyof User = \"age\"; // Error: \"age\" is not a key of User\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">keyof indexing</h5>\n        <table className=\"table table-sm mb-3\">\n          <thead><tr><th>Key</th><th>Value</th></tr></thead>\n          <tbody>\n            {columns.map((key) => (\n              <tr key={key} className={key === highlighted ? \"table-warning\" : \"\"}>\n                <td><code>{key}</code></td>\n                <td>{String(get(user, key))}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n        <p className=\"form-text mb-0\">Highlighted key type: <code>{highlighted}</code></p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-typeof",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "typeof type operator",
      "summary": "Derive a type from an existing value.",
      "tags": ["typescript", "typeof"],
      "code": "import React from \"react\";\n\nconst defaults = {\n  theme: \"light\",\n  pageSize: 10,\n  showSidebar: true,\n};\n\ntype Settings = typeof defaults;\n\nconst overrides: Partial<Settings> = { theme: \"dark\" };\nconst merged: Settings = { ...defaults, ...overrides };\n\nfunction makeUser(name: string, age: number) {\n  return { name, age, active: true };\n}\n\ntype NewUser = ReturnType<typeof makeUser>;\nconst newUser: NewUser = makeUser(\"Meera\", 28);\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">typeof operator</h5>\n        <ul className=\"list-group mb-3\">\n          <li className=\"list-group-item d-flex justify-content-between\"><span>theme</span><span>{merged.theme}</span></li>\n          <li className=\"list-group-item d-flex justify-content-between\"><span>pageSize</span><span>{merged.pageSize}</span></li>\n          <li className=\"list-group-item d-flex justify-content-between\"><span>showSidebar</span><span>{String(merged.showSidebar)}</span></li>\n        </ul>\n        <div className=\"alert alert-info py-2 mb-0 small\">\n          NewUser: {newUser.name}, age {newUser.age}, active {String(newUser.active)}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-record",
      "track": "typescript",
      "module": "Module 4 \u2013 Type Operators",
      "title": "Record and dictionaries",
      "summary": "Model keyed lookups with Record<K, V>.",
      "tags": ["typescript", "record", "dictionary"],
      "code": "import React, { useState } from \"react\";\n\ntype Role = \"admin\" | \"editor\" | \"viewer\";\n\nconst permissions: Record<Role, string[]> = {\n  admin: [\"read\", \"write\", \"delete\", \"invite\"],\n  editor: [\"read\", \"write\"],\n  viewer: [\"read\"],\n};\n\nconst counts: Record<Role, number> = { admin: 2, editor: 5, viewer: 11 };\n\nconst roleBadge: Record<Role, string> = {\n  admin: \"bg-danger\",\n  editor: \"bg-primary\",\n  viewer: \"bg-secondary\",\n};\n\nexport default function App() {\n  const [role, setRole] = useState<Role>(\"admin\");\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Record&lt;K, V&gt;</h5>\n        <div className=\"btn-group mb-3\">\n          {(Object.keys(permissions) as Role[]).map((item) => (\n            <button key={item} className={`btn btn-sm ${role === item ? \"btn-dark\" : \"btn-outline-dark\"}`} onClick={() => setRole(item)}>\n              {item}\n            </button>\n          ))}\n        </div>\n        <p>\n          <span className={`badge ${roleBadge[role]} me-2`}>{role}</span>\n          {counts[role]} users\n        </p>\n        <div className=\"d-flex flex-wrap gap-2\">\n          {permissions[role].map((permission) => (\n            <span className=\"badge bg-light text-dark border\" key={permission}>{permission}</span>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-partial-pick-omit",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Partial, Pick and Omit",
      "summary": "Shape preview, update and full types from one interface.",
      "tags": ["typescript", "utility-types"],
      "code": "import React from \"react\";\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  role: \"admin\" | \"editor\";\n}\n\ntype UserPreview = Pick<User, \"id\" | \"name\">;\ntype UserUpdate = Partial<Omit<User, \"id\">>;\n\nconst user: User = { id: 4, name: \"Aayush\", email: \"old@example.com\", role: \"editor\" };\nconst preview: UserPreview = { id: user.id, name: user.name };\nconst patch: UserUpdate = { email: \"new@example.com\" };\nconst updated: User = { ...user, ...patch };\n\nconst patchKeys = Object.keys(patch) as (keyof UserUpdate)[];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Partial \u00b7 Pick \u00b7 Omit</h5>\n        <div className=\"card bg-light border-0 mb-3\">\n          <div className=\"card-body py-2\">\n            <div className=\"small text-secondary\">Pick&lt;User, \"id\" | \"name\"&gt;</div>\n            <strong>{preview.name}</strong> \u00b7 #{preview.id}\n          </div>\n        </div>\n        <ul className=\"list-group mb-3\">\n          <li className=\"list-group-item d-flex justify-content-between\"><span>email</span><span>{updated.email}</span></li>\n          <li className=\"list-group-item d-flex justify-content-between\"><span>role</span><span>{updated.role}</span></li>\n        </ul>\n        <p className=\"form-text mb-0\">\n          Update keys: <code>{patchKeys.join(\", \")}</code> \u00b7 id is omitted from updates.\n        </p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-exclude-extract",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Exclude and Extract",
      "summary": "Filter union members with built-in type helpers.",
      "tags": ["typescript", "exclude", "extract"],
      "code": "import React from \"react\";\n\ntype DomEvent = \"click\" | \"keydown\" | \"mousemove\" | \"scroll\" | \"focus\";\n\ntype UserEvent = Exclude<DomEvent, \"mousemove\" | \"scroll\">;\ntype PointerEvent = Extract<DomEvent, \"click\" | \"mousemove\" | \"pointerdown\">;\ntype FocusEvent = Extract<DomEvent, \"focus\" | \"blur\">;\n\nconst userEvents: UserEvent[] = [\"click\", \"keydown\", \"focus\"];\nconst pointerEvents: PointerEvent[] = [\"click\", \"mousemove\"];\nconst focusEvents: FocusEvent[] = [\"focus\"];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Exclude &amp; Extract</h5>\n        <p className=\"small text-secondary mb-1\">UserEvent = Exclude&lt;DomEvent, \"mousemove\" | \"scroll\"&gt;</p>\n        <div className=\"d-flex flex-wrap gap-2 mb-3\">\n          {userEvents.map((event) => <span className=\"badge bg-primary\" key={event}>{event}</span>)}\n        </div>\n        <p className=\"small text-secondary mb-1\">PointerEvent = Extract&lt;DomEvent, \"click\" | \"mousemove\" | \"pointerdown\"&gt;</p>\n        <div className=\"d-flex flex-wrap gap-2 mb-3\">\n          {pointerEvents.map((event) => <span className=\"badge bg-success\" key={event}>{event}</span>)}\n        </div>\n        <p className=\"small text-secondary mb-1\">FocusEvent keeps only matching members</p>\n        <div className=\"d-flex flex-wrap gap-2\">\n          {focusEvents.map((event) => <span className=\"badge bg-dark\" key={event}>{event}</span>)}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-returntype-parameters",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "ReturnType and Parameters",
      "summary": "Reuse function input and output types without repetition.",
      "tags": ["typescript", "returntype", "parameters"],
      "code": "import React from \"react\";\n\nfunction createUser(name: string, age: number, admin = false) {\n  return {\n    id: Math.floor(Math.random() * 1000),\n    name,\n    age,\n    admin,\n    createdAt: new Date().toISOString().slice(0, 10),\n  };\n}\n\ntype User = ReturnType<typeof createUser>;\ntype CreateArgs = Parameters<typeof createUser>;\n\nconst args: CreateArgs = [\"Meera\", 28, true];\nconst user: User = createUser(...args);\n\nfunction formatUser(value: User): string {\n  return `${value.name} (${value.age}) \u2014 ${value.admin ? \"admin\" : \"member\"}`;\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">ReturnType &amp; Parameters</h5>\n        <div className=\"alert alert-primary py-2\">{formatUser(user)}</div>\n        <table className=\"table table-sm mb-0\">\n          <tbody>\n            <tr><th>id</th><td>{user.id}</td></tr>\n            <tr><th>createdAt</th><td>{user.createdAt}</td></tr>\n            <tr><th>args</th><td><code>{JSON.stringify(args)}</code></td></tr>\n          </tbody>\n        </table>\n        <p className=\"form-text mb-0 mt-2\">CreateArgs is the exact tuple accepted by createUser.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-enum",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "enum vs const object",
      "summary": "Compare a string enum with an as-const object.",
      "tags": ["typescript", "enum", "as-const"],
      "code": "import React, { useState } from \"react\";\n\nenum Priority {\n  Low = \"LOW\",\n  Medium = \"MEDIUM\",\n  High = \"HIGH\",\n}\n\nconst Status = {\n  Draft: \"draft\",\n  Published: \"published\",\n  Archived: \"archived\",\n} as const;\n\ntype Status = (typeof Status)[keyof typeof Status];\n\nconst priorityBadge: Record<Priority, string> = {\n  [Priority.Low]: \"bg-secondary\",\n  [Priority.Medium]: \"bg-warning text-dark\",\n  [Priority.High]: \"bg-danger\",\n};\n\nexport default function App() {\n  const [priority, setPriority] = useState<Priority>(Priority.Medium);\n  const [status, setStatus] = useState<Status>(Status.Draft);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">enum vs const object</h5>\n        <div className=\"btn-group mb-3\">\n          {(Object.values(Priority) as Priority[]).map((value) => (\n            <button key={value} className={`btn btn-sm ${priority === value ? \"btn-dark\" : \"btn-outline-dark\"}`} onClick={() => setPriority(value)}>\n              {value}\n            </button>\n          ))}\n        </div>\n        <p>Priority: <span className={`badge ${priorityBadge[priority]}`}>{priority}</span></p>\n        <div className=\"d-flex gap-2 mb-3\">\n          {(Object.values(Status) as Status[]).map((value) => (\n            <button key={value} className={`btn btn-sm ${status === value ? \"btn-primary\" : \"btn-outline-primary\"}`} onClick={() => setStatus(value)}>\n              {value}\n            </button>\n          ))}\n        </div>\n        <p className=\"form-text mb-0\">Status type is derived from the const object values.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-tuple",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Tuples and labeled tuples",
      "summary": "Fixed-length arrays with positional and named slots.",
      "tags": ["typescript", "tuple"],
      "code": "import React from \"react\";\n\ntype Point = [number, number];\ntype NamedPoint = [x: number, y: number];\ntype Entry = readonly [key: string, value: number];\ntype Range = [start: number, end: number, step?: number];\n\nconst origin: Point = [0, 0];\nconst point: NamedPoint = [3, 4];\nconst entries: Entry[] = [[\"a\", 1], [\"b\", 2]];\n\nfunction distance([x1, y1]: Point, [x2, y2]: Point): number {\n  return Math.hypot(x2 - x1, y2 - y1);\n}\n\nfunction width([start, end]: Range): number {\n  return end - start;\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Tuples</h5>\n        <table className=\"table table-sm mb-3\">\n          <tbody>\n            <tr><th>origin</th><td><code>[{origin.join(\", \")}]</code></td></tr>\n            <tr><th>point</th><td><code>[{point.join(\", \")}]</code></td></tr>\n            <tr><th>distance</th><td>{distance(origin, point).toFixed(2)}</td></tr>\n            <tr><th>width</th><td>{width([10, 45])}</td></tr>\n          </tbody>\n        </table>\n        <div className=\"d-flex gap-2\">\n          {entries.map(([key, value]) => (\n            <span className=\"badge bg-secondary\" key={key}>{key}: {value}</span>\n          ))}\n        </div>\n        <p className=\"form-text mb-0 mt-3\">Entry is a readonly tuple; the third Range slot is optional.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-function-types",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Function type signatures",
      "summary": "Type callbacks, predicates and generic mappers.",
      "tags": ["typescript", "functions", "callbacks"],
      "code": "import React, { useState } from \"react\";\n\ntype Mapper<T, U> = (value: T, index: number) => U;\ntype Predicate<T> = (value: T) => boolean;\ntype Handler = (event: string) => void;\n\nconst double: Mapper<number, number> = (value) => value * 2;\nconst isEven: Predicate<number> = (value) => value % 2 === 0;\nconst numbers = [1, 2, 3, 4, 5];\n\nfunction apply<T, U>(items: T[], mapper: Mapper<T, U>): U[] {\n  return items.map(mapper);\n}\n\nexport default function App() {\n  const [last, setLast] = useState(\"none\");\n  const log: Handler = (event) => setLast(event);\n\n  const doubled = apply(numbers, double);\n  const evens = numbers.filter(isEven);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Function types</h5>\n        <div className=\"d-flex gap-2 mb-3\">\n          <button className=\"btn btn-sm btn-outline-primary\" onClick={() => log(\"doubled\")}>Log doubled</button>\n          <button className=\"btn btn-sm btn-outline-success\" onClick={() => log(\"evens\")}>Log evens</button>\n        </div>\n        <p className=\"mb-2\">Doubled: {doubled.join(\", \")}</p>\n        <p className=\"mb-2\">Evens: {evens.join(\", \")}</p>\n        <div className=\"alert alert-secondary py-2 mb-0 small\">Last handler call: {last}</div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-discriminated",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Discriminated unions",
      "summary": "Switch on a shared literal field and render each variant.",
      "tags": ["typescript", "unions", "narrowing"],
      "code": "import React from \"react\";\n\ntype Notification =\n  | { kind: \"success\"; message: string }\n  | { kind: \"warning\"; message: string; retry: boolean }\n  | { kind: \"error\"; message: string; code: number };\n\nconst notifications: Notification[] = [\n  { kind: \"success\", message: \"Profile saved\" },\n  { kind: \"warning\", message: \"Slow connection\", retry: true },\n  { kind: \"error\", message: \"Upload failed\", code: 500 },\n];\n\nfunction render(item: Notification) {\n  switch (item.kind) {\n    case \"success\":\n      return <span className=\"badge bg-success\">{item.message}</span>;\n    case \"warning\":\n      return <span className=\"badge bg-warning text-dark\">{item.message}{item.retry ? \" \u00b7 retry\" : \"\"}</span>;\n    case \"error\":\n      return <span className=\"badge bg-danger\">{item.code}: {item.message}</span>;\n    default:\n      const exhaustive: never = item;\n      return exhaustive;\n  }\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Discriminated union</h5>\n        <ul className=\"list-group\">\n          {notifications.map((item, index) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={index}>\n              <code className=\"small\">{item.kind}</code>\n              {render(item)}\n            </li>\n          ))}\n        </ul>\n        <p className=\"form-text mb-0 mt-3\">The never check makes the switch exhaustive.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-narrowing",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "typeof and in narrowing",
      "summary": "Narrow primitive, array and object unions safely.",
      "tags": ["typescript", "narrowing"],
      "code": "import React from \"react\";\n\ntype Value = string | number | string[] | { label: string };\ntype ApiResult = { data: string } | { error: string };\n\nconst values: Value[] = [\"hello\", 42, [\"a\", \"b\"], { label: \"box\" }];\n\nfunction describe(value: Value): string {\n  if (typeof value === \"string\") return `string: ${value.toUpperCase()}`;\n  if (typeof value === \"number\") return `number: ${value.toFixed(2)}`;\n  if (Array.isArray(value)) return `array: ${value.join(\" / \")}`;\n  return `object: ${value.label}`;\n}\n\nfunction unwrap(result: ApiResult): string {\n  if (\"error\" in result) return `error: ${result.error}`;\n  return `data: ${result.data}`;\n}\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Narrowing</h5>\n        <ul className=\"list-group mb-3\">\n          {values.map((value, index) => (\n            <li className=\"list-group-item small\" key={index}>{describe(value)}</li>\n          ))}\n        </ul>\n        <div className=\"alert alert-info mb-0 py-2 small\">\n          {unwrap({ data: \"OK\" })} \u00b7 {unwrap({ error: \"Timeout\" })}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-type-guard",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Custom type guards",
      "summary": "Use a predicate returning `value is Type`.",
      "tags": ["typescript", "type-guard", "predicate"],
      "code": "import React from \"react\";\n\ninterface Cat {\n  kind: \"cat\";\n  name: string;\n  meows: boolean;\n}\n\ninterface Dog {\n  kind: \"dog\";\n  name: string;\n  barks: boolean;\n}\n\ntype Pet = Cat | Dog;\n\nfunction isCat(pet: Pet): pet is Cat {\n  return pet.kind === \"cat\";\n}\n\nfunction isDog(pet: Pet): pet is Dog {\n  return pet.kind === \"dog\";\n}\n\nconst pets: Pet[] = [\n  { kind: \"cat\", name: \"Milo\", meows: true },\n  { kind: \"dog\", name: \"Rex\", barks: true },\n  { kind: \"cat\", name: \"Luna\", meows: false },\n];\n\nconst cats = pets.filter(isCat);\nconst dogs = pets.filter(isDog);\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Type guards</h5>\n        <p className=\"small text-secondary mb-1\">Cats ({cats.length})</p>\n        <div className=\"d-flex flex-wrap gap-2 mb-3\">\n          {cats.map((cat) => (\n            <span className={`badge ${cat.meows ? \"bg-primary\" : \"bg-secondary\"}`} key={cat.name}>{cat.name}</span>\n          ))}\n        </div>\n        <p className=\"small text-secondary mb-1\">Dogs ({dogs.length})</p>\n        <div className=\"d-flex flex-wrap gap-2\">\n          {dogs.map((dog) => (\n            <span className={`badge ${dog.barks ? \"bg-success\" : \"bg-secondary\"}`} key={dog.name}>{dog.name}</span>\n          ))}\n        </div>\n        <p className=\"form-text mb-0 mt-3\">After filter(isCat) the array is typed Cat[].</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-satisfies",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "satisfies operator",
      "summary": "Validate a value while preserving its literal types.",
      "tags": ["typescript", "satisfies"],
      "code": "import React from \"react\";\n\nconst palette = {\n  primary: \"#0d6efd\",\n  success: \"#198754\",\n  danger: \"#dc3545\",\n} satisfies Record<string, string>;\n\ntype ColorName = keyof typeof palette;\nconst names = Object.keys(palette) as ColorName[];\n\nconst routes = {\n  home: \"/\",\n  users: \"/users\",\n  settings: \"/settings\",\n} satisfies Record<string, `/${string}`>;\n\n// const broken = { primary: 123 } satisfies Record<string, string>; // Error\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">satisfies</h5>\n        <div className=\"row g-2 mb-3\">\n          {names.map((name) => (\n            <div className=\"col-4\" key={name}>\n              <div className=\"border rounded p-2 text-center\">\n                <div className=\"rounded mb-1\" style={{ height: 32, background: palette[name] }} />\n                <small><code>{name}</code></small>\n              </div>\n            </div>\n          ))}\n        </div>\n        <p className=\"small text-secondary mb-1\">Routes checked against `/` prefixed strings:</p>\n        <div className=\"d-flex flex-wrap gap-2\">\n          {(Object.keys(routes) as (keyof typeof routes)[]).map((key) => (\n            <span className=\"badge bg-light text-dark border\" key={key}>{key} \u2192 {routes[key]}</span>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-as-const",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "as const",
      "summary": "Freeze literals and derive unions from arrays and objects.",
      "tags": ["typescript", "as-const", "literals"],
      "code": "import React, { useState } from \"react\";\n\nconst ROLES = [\"admin\", \"editor\", \"viewer\"] as const;\ntype Role = (typeof ROLES)[number];\n\nconst config = {\n  theme: \"dark\",\n  pageSize: 20,\n} as const;\n\ntype Theme = typeof config.theme | \"light\";\ntype PageSize = typeof config.pageSize;\n\nconst roleBadge: Record<Role, string> = {\n  admin: \"bg-danger\",\n  editor: \"bg-primary\",\n  viewer: \"bg-secondary\",\n};\n\nexport default function App() {\n  const [role, setRole] = useState<Role>(\"editor\");\n  const [theme, setTheme] = useState<Theme>(config.theme);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">as const</h5>\n        <div className=\"btn-group mb-3\">\n          {ROLES.map((item) => (\n            <button key={item} className={`btn btn-sm ${role === item ? \"btn-dark\" : \"btn-outline-dark\"}`} onClick={() => setRole(item)}>\n              {item}\n            </button>\n          ))}\n        </div>\n        <p>Role: <span className={`badge ${roleBadge[role]}`}>{role}</span></p>\n        <p className=\"mb-2\">Theme: <code>{theme}</code></p>\n        <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setTheme(theme === \"dark\" ? \"light\" : \"dark\")}>Toggle theme</button>\n        <p className=\"form-text mb-0 mt-3\">PageSize is the literal type {config.pageSize}, not number.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-index-signature",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Index signatures",
      "summary": "Describe objects with dynamic string keys.",
      "tags": ["typescript", "index-signature"],
      "code": "import React from \"react\";\n\ninterface Scores {\n  [subject: string]: number;\n}\n\ntype Headers = Record<string, string>;\n\nconst scores: Scores = {\n  math: 92,\n  science: 88,\n  art: 95,\n  history: 79,\n};\n\nconst headers: Headers = {\n  \"content-type\": \"application/json\",\n  authorization: \"Bearer token\",\n};\n\nfunction total(values: Scores): number {\n  return Object.values(values).reduce((sum, value) => sum + value, 0);\n}\n\nconst entries = Object.entries(scores);\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Index signatures</h5>\n        <table className=\"table table-sm mb-2\">\n          <thead><tr><th>Subject</th><th className=\"text-end\">Score</th></tr></thead>\n          <tbody>\n            {entries.map(([subject, score]) => (\n              <tr key={subject}><td>{subject}</td><td className=\"text-end\">{score}</td></tr>\n            ))}\n          </tbody>\n        </table>\n        <p className=\"mb-2\">Total: <strong>{total(scores)}</strong> \u00b7 Average: {(total(scores) / entries.length).toFixed(1)}</p>\n        <p className=\"form-text mb-0\">Headers keys: {Object.keys(headers).join(\", \")}</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-mapped",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Mapped types",
      "summary": "Transform every key of an object type.",
      "tags": ["typescript", "mapped-types"],
      "code": "import React from \"react\";\n\ninterface Form {\n  name: string;\n  email: string;\n  age: number;\n}\n\ntype Flags<T> = { [K in keyof T]: boolean };\ntype Optional<T> = { [K in keyof T]?: T[K] };\ntype ReadonlyDeep<T> = { readonly [K in keyof T]: T[K] };\n\nconst fields: (keyof Form)[] = [\"name\", \"email\", \"age\"];\nconst touched: Flags<Form> = { name: true, email: false, age: false };\nconst errors: Optional<Form> = { email: \"Required\" };\nconst snapshot: ReadonlyDeep<Form> = { name: \"Aayush\", email: \"a@example.com\", age: 30 };\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Mapped types</h5>\n        <ul className=\"list-group mb-3\">\n          {fields.map((field) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={field}>\n              <span><code>{field}</code> = {String(snapshot[field])}</span>\n              <span className=\"d-flex gap-2\">\n                <span className={`badge ${touched[field] ? \"bg-success\" : \"bg-light text-dark border\"}`}>\n                  {touched[field] ? \"touched\" : \"untouched\"}\n                </span>\n                {errors[field] && <span className=\"badge bg-danger\">{errors[field]}</span>}\n              </span>\n            </li>\n          ))}\n        </ul>\n        <p className=\"form-text mb-0\">Flags&lt;T&gt;, Optional&lt;T&gt; and ReadonlyDeep&lt;T&gt; are all mapped.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-conditional",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Conditional types",
      "summary": "Choose types with extends and infer.",
      "tags": ["typescript", "conditional-types", "infer"],
      "code": "import React from \"react\";\n\ntype IsString<T> = T extends string ? true : false;\ntype ElementOf<T> = T extends (infer U)[] ? U : never;\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\ntype NonNull<T> = T extends null | undefined ? never : T;\n\nconst stringFlag: IsString<\"hello\"> = true;\nconst numberFlag: IsString<42> = false;\nconst element: ElementOf<number[]> = 3;\nconst unwrapped: Unwrap<Promise<string>> = \"resolved\";\nconst present: NonNull<string | null> = \"value\";\n\nconst rows = [\n  { type: \"IsString<'hello'>\", value: String(stringFlag) },\n  { type: \"IsString<42>\", value: String(numberFlag) },\n  { type: \"ElementOf<number[]>\", value: String(element) },\n  { type: \"Unwrap<Promise<string>>\", value: unwrapped },\n  { type: \"NonNull<string | null>\", value: present },\n];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Conditional types</h5>\n        <table className=\"table table-sm mb-0\">\n          <thead><tr><th>Type expression</th><th>Value</th></tr></thead>\n          <tbody>\n            {rows.map((row) => (\n              <tr key={row.type}>\n                <td><code className=\"small\">{row.type}</code></td>\n                <td>{row.value}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-template-literal",
      "track": "typescript",
      "module": "Module 5 \u2013 Advanced Types",
      "title": "Template literal types",
      "summary": "Compose string literal types from unions.",
      "tags": ["typescript", "template-literal-types"],
      "code": "import React from \"react\";\n\ntype Size = \"sm\" | \"md\" | \"lg\";\ntype BtnClass = `btn-${Size}`;\ntype HandlerName = `on${Capitalize<\"click\" | \"change\" | \"focus\">}`;\n\nconst sizes: Size[] = [\"sm\", \"md\", \"lg\"];\nconst classes: Record<Size, BtnClass> = {\n  sm: \"btn-sm\",\n  md: \"btn-md\",\n  lg: \"btn-lg\",\n};\n\nconst handlers: HandlerName[] = [\"onClick\", \"onChange\", \"onFocus\"];\n\nconst messages: Record<BtnClass, string> = {\n  \"btn-sm\": \"Compact\",\n  \"btn-md\": \"Default\",\n  \"btn-lg\": \"Large\",\n};\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Template literal types</h5>\n        <div className=\"d-flex gap-2 mb-3\">\n          {sizes.map((size) => (\n            <button key={size} className={`btn btn-primary ${classes[size]}`}>\n              {messages[classes[size]]}\n            </button>\n          ))}\n        </div>\n        <p className=\"small text-secondary mb-1\">Derived handler names:</p>\n        <div className=\"d-flex flex-wrap gap-2\">\n          {handlers.map((name) => <span className=\"badge bg-dark\" key={name}>{name}</span>)}\n        </div>\n        <p className=\"form-text mb-0 mt-3\"><code>{'`btn-${Size}`'}</code> expands to three exact strings.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-event-types",
      "track": "typescript",
      "module": "Module 6 \u2013 TypeScript with React",
      "title": "React event types",
      "summary": "Type form, input, button and keyboard handlers.",
      "tags": ["typescript", "react", "events"],
      "code": "import React, { useState } from \"react\";\nimport type { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from \"react\";\n\nexport default function App() {\n  const [name, setName] = useState(\"\");\n  const [log, setLog] = useState<string[]>([]);\n\n  function add(entry: string) {\n    setLog((prev) => [entry, ...prev].slice(0, 4));\n  }\n\n  function onChange(e: ChangeEvent<HTMLInputElement>) {\n    setName(e.target.value);\n  }\n\n  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {\n    if (e.key === \"Enter\") add(\"keydown: Enter\");\n  }\n\n  function onClick(e: MouseEvent<HTMLButtonElement>) {\n    add(`click: ${e.currentTarget.textContent ?? \"button\"}`);\n  }\n\n  function onSubmit(e: FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    add(`submit: ${name.trim() || \"(empty)\"}`);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">React event types</h5>\n        <form onSubmit={onSubmit} className=\"mb-3\">\n          <input className=\"form-control mb-2\" value={name} onChange={onChange} onKeyDown={onKeyDown} placeholder=\"Type and press Enter\" />\n          <button className=\"btn btn-sm btn-primary\">Submit</button>\n        </form>\n        <button className=\"btn btn-sm btn-outline-secondary mb-3\" onClick={onClick}>Sample click</button>\n        <ul className=\"list-group list-group-flush\">\n          {log.map((entry, index) => <li className=\"list-group-item small\" key={index}>{entry}</li>)}\n          {log.length === 0 && <li className=\"list-group-item small text-secondary\">No events yet.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-usestate-generic",
      "track": "typescript",
      "module": "Module 6 \u2013 TypeScript with React",
      "title": "Generic useState",
      "summary": "Type state as primitives, objects, unions and nullable values.",
      "tags": ["typescript", "react", "usestate"],
      "code": "import React, { useState } from \"react\";\n\ninterface User {\n  id: number;\n  name: string;\n}\n\ntype Phase = \"idle\" | \"loading\" | \"ready\";\n\nexport default function App() {\n  const [count, setCount] = useState<number>(0);\n  const [user, setUser] = useState<User | null>(null);\n  const [phase, setPhase] = useState<Phase>(\"idle\");\n\n  function load() {\n    setPhase(\"loading\");\n    setTimeout(() => {\n      setUser({ id: 1, name: \"Meera\" });\n      setPhase(\"ready\");\n    }, 700);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useState&lt;T&gt;</h5>\n        <div className=\"d-flex align-items-center gap-2 mb-3\">\n          <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setCount((value) => value - 1)}>\u2212</button>\n          <span className=\"badge bg-dark fs-6\">{count}</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setCount((value) => value + 1)}>+</button>\n        </div>\n        <div className=\"alert alert-info py-2\">\n          Phase: <strong>{phase}</strong> \u00b7 User: <strong>{user ? user.name : \"none\"}</strong>\n        </div>\n        <button className=\"btn btn-primary btn-sm\" onClick={load} disabled={phase === \"loading\"}>Load user</button>\n        <p className=\"form-text mb-0 mt-3\">user is User | null, so the render must narrow before using name.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "typescript-api-types",
      "track": "typescript",
      "module": "Module 6 \u2013 TypeScript with React",
      "title": "Typed axios response",
      "summary": "Type an API envelope and consume it with axios generics.",
      "tags": ["typescript", "react", "axios"],
      "code": "import React, { useState } from \"react\";\nimport axios from \"axios\";\n\ninterface User {\n  id: number;\n  firstName: string;\n  lastName: string;\n  email: string;\n}\n\ninterface ApiResponse<T> {\n  users: T;\n  total: number;\n  skip: number;\n  limit: number;\n}\n\ntype LoadState = \"idle\" | \"loading\" | \"error\" | \"done\";\n\nexport default function App() {\n  const [state, setState] = useState<LoadState>(\"idle\");\n  const [users, setUsers] = useState<User[]>([]);\n  const [total, setTotal] = useState(0);\n  const [error, setError] = useState(\"\");\n\n  async function load() {\n    setState(\"loading\");\n    setError(\"\");\n    try {\n      const res = await axios.get<ApiResponse<User[]>>(\"https://dummyjson.com/users?limit=3\");\n      setUsers(res.data.users);\n      setTotal(res.data.total);\n      setState(\"done\");\n    } catch (err) {\n      setError(err instanceof Error ? err.message : \"Request failed\");\n      setState(\"error\");\n    }\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Typed axios response</h5>\n        <button className=\"btn btn-primary btn-sm\" onClick={load} disabled={state === \"loading\"}>\n          {state === \"loading\" ? \"Loading\u2026\" : \"Load users\"}\n        </button>\n        {state === \"error\" && <div className=\"alert alert-danger mt-3 mb-0 py-2 small\">{error}</div>}\n        {state === \"done\" && (\n          <>\n            <ul className=\"list-group list-group-flush mt-3\">\n              {users.map((user) => (\n                <li className=\"list-group-item d-flex justify-content-between\" key={user.id}>\n                  <span>{user.firstName} {user.lastName}</span>\n                  <span className=\"small text-secondary\">{user.email}</span>\n                </li>\n              ))}\n            </ul>\n            <p className=\"form-text mb-0\">Showing {users.length} of {total} users.</p>\n          </>\n        )}\n      </div>\n    </div>\n  );\n}"
    }
  ]
};
