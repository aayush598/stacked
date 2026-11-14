import type { LabTrack } from "../types";

export const navigationTrack: LabTrack = {
  "id": "navigation",
  "title": "Navigation and Routing",
  "description": "Tabs, state-based routing, breadcrumbs, sidebar nav and 404 fallbacks.",
  "priority": 9,
  "modules": [
    "Module 1 – Tabs & Links",
    "Module 2 – Routing Simulation",
    "Module 3 – Nav Patterns"
  ],
  "examples": [
    {
      "id": "nav-tabs",
      "track": "navigation",
      "module": "Module 1 – Tabs & Links",
      "title": "Tabs",
      "summary": "Switch content with tab buttons.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst tabs = [\"Overview\", \"Details\", \"Reviews\"];\n\nexport default function App() {\n  const [tab, setTab] = useState(tabs[0]);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <ul className=\"nav nav-tabs mb-3\">\n          {tabs.map((t) => (\n            <li className=\"nav-item\" key={t}>\n              <button className={`nav-link ${tab === t ? \"active\" : \"\"}`} onClick={() => setTab(t)}>{t}</button>\n            </li>\n          ))}\n        </ul>\n        {tab === \"Overview\" && <p className=\"mb-0\">Overview content for the product.</p>}\n        {tab === \"Details\" && <p className=\"mb-0\">Specifications and dimensions.</p>}\n        {tab === \"Reviews\" && <p className=\"mb-0\">Customer reviews and ratings.</p>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "nav-router",
      "track": "navigation",
      "module": "Module 2 – Routing Simulation",
      "title": "State-based router",
      "summary": "Navigate between pages with state.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst pages: Record<string, { title: string; body: string }> = {\n  home: { title: \"Home\", body: \"Welcome to the home page.\" },\n  about: { title: \"About\", body: \"This app demonstrates routing with state.\" },\n  contact: { title: \"Contact\", body: \"Reach us at hello@example.com.\" },\n};\n\nexport default function App() {\n  const [route, setRoute] = useState(\"home\");\n  const page = pages[route];\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-header\">\n        <nav className=\"nav\">\n          {Object.keys(pages).map((r) => (\n            <button key={r} className={`nav-link ${route === r ? \"active\" : \"\"}`} onClick={() => setRoute(r)}>\n              {pages[r].title}\n            </button>\n          ))}\n        </nav>\n      </div>\n      <div className=\"card-body\">\n        <h5>{page.title}</h5>\n        <p className=\"mb-0 text-secondary\">{page.body}</p>\n        <p className=\"form-text mt-3 mb-0\">Current route: /{route}</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "nav-breadcrumbs",
      "track": "navigation",
      "module": "Module 3 – Nav Patterns",
      "title": "Breadcrumbs",
      "summary": "Show and navigate a path hierarchy.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [path, setPath] = useState<string[]>([\"Home\"]);\n  const trail = [\"Home\", \"Products\", \"Electronics\", \"Laptops\"];\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Breadcrumbs</h5>\n        <nav aria-label=\"breadcrumb\">\n          <ol className=\"breadcrumb\">\n            {trail.map((t, i) => (\n              <li className={`breadcrumb-item ${path[path.length - 1] === t ? \"active\" : \"\"}`} key={t}>\n                <button className=\"btn btn-link p-0 text-decoration-none\" onClick={() => setPath(trail.slice(0, i + 1))}>{t}</button>\n              </li>\n            ))}\n          </ol>\n        </nav>\n        <div className=\"alert alert-light border mb-0\">Path: {path.join(\" / \")}</div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "nav-sidebar",
      "track": "navigation",
      "module": "Module 3 – Nav Patterns",
      "title": "Sidebar nav with active state",
      "summary": "Highlight the current section.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst links = [\"Dashboard\", \"Analytics\", \"Reports\", \"Settings\"];\n\nexport default function App() {\n  const [active, setActive] = useState(\"Dashboard\");\n  return (\n    <div className=\"d-flex border rounded overflow-hidden\" style={{ maxWidth: 560, minHeight: 300 }}>\n      <aside className=\"text-bg-dark p-2\" style={{ width: 180 }}>\n        <ul className=\"nav flex-column\">\n          {links.map((l) => (\n            <li className=\"nav-item\" key={l}>\n              <button className={`nav-link text-start w-100 ${active === l ? \"text-white fw-semibold\" : \"text-white-50\"}`} onClick={() => setActive(l)}>\n                {l}\n              </button>\n            </li>\n          ))}\n        </ul>\n      </aside>\n      <main className=\"p-3 flex-fill\">\n        <h6>{active}</h6>\n        <p className=\"text-secondary mb-0\">You are viewing the {active.toLowerCase()} section.</p>\n      </main>\n    </div>\n  );\n}\n"
    },
    {
      "id": "nav-nested",
      "track": "navigation",
      "module": "Module 3 – Nav Patterns",
      "title": "Nested routes with params",
      "summary": "Simulate /users/:id detail routing.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst users = [\n  { id: 1, name: \"Aayush\", role: \"Developer\" },\n  { id: 2, name: \"Meera\", role: \"Designer\" },\n];\n\nexport default function App() {\n  const [id, setId] = useState<number | null>(null);\n  const user = users.find((u) => u.id === id);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Users</h5>\n        <div className=\"list-group mb-3\">\n          {users.map((u) => (\n            <button key={u.id} className={`list-group-item list-group-item-action ${id === u.id ? \"active\" : \"\"}`} onClick={() => setId(u.id)}>\n              {u.name}\n            </button>\n          ))}\n        </div>\n        {user ? (\n          <div className=\"border rounded p-3\">\n            <div className=\"small text-secondary mb-1\">Route: /users/{user.id}</div>\n            <strong>{user.name}</strong> · {user.role}\n            <button className=\"btn btn-sm btn-outline-secondary d-block mt-2\" onClick={() => setId(null)}>Back to list</button>\n          </div>\n        ) : (\n          <div className=\"text-secondary small\">Select a user to view /users/:id</div>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "nav-404",
      "track": "navigation",
      "module": "Module 3 – Nav Patterns",
      "title": "404 fallback",
      "summary": "Render a not-found view for unknown routes.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst valid = [\"/\", \"/about\", \"/contact\"];\n\nexport default function App() {\n  const [route, setRoute] = useState(\"/\");\n  const notFound = !valid.includes(route);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex gap-2 mb-3\">\n          {[...valid, \"/missing\"].map((r) => (\n            <button key={r} className={`btn btn-sm ${route === r ? \"btn-primary\" : \"btn-outline-secondary\"}`} onClick={() => setRoute(r)}>{r}</button>\n          ))}\n        </div>\n        {notFound ? (\n          <div className=\"text-center py-4\">\n            <div className=\"display-4\">404</div>\n            <p className=\"text-secondary\">No page matches {route}</p>\n            <button className=\"btn btn-primary\" onClick={() => setRoute(\"/\")}>Go home</button>\n          </div>\n        ) : (\n          <div className=\"alert alert-light border mb-0\">Showing page: {route}</div>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
