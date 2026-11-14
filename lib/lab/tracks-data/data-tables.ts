import type { LabTrack } from "../types";

export const data_tablesTrack: LabTrack = {
  "id": "data-tables",
  "title": "Data Tables and Lists",
  "description": "Render, sort, select, filter and paginate tables and lists — a very high priority assessment area.",
  "priority": 3,
  "modules": [
    "Module 1 – Table Basics",
    "Module 2 – Sort, Select & Filter",
    "Module 3 – Responsive & Paginated Tables"
  ],
  "examples": [
    {
      "id": "table-basic",
      "track": "data-tables",
      "module": "Module 1 – Table Basics",
      "title": "Basic data table",
      "summary": "Render an array of objects as a Bootstrap table.",
      "tags": [],
      "code": "import React from \"react\";\n\ninterface Employee { id: number; name: string; role: string; salary: number; }\n\nconst rows: Employee[] = [\n  { id: 1, name: \"Aayush\", role: \"Developer\", salary: 60000 },\n  { id: 2, name: \"Meera\", role: \"Designer\", salary: 55000 },\n  { id: 3, name: \"Ravi\", role: \"Manager\", salary: 80000 },\n];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 640 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Employees</h5>\n        <table className=\"table table-striped mb-0\">\n          <thead>\n            <tr><th>#</th><th>Name</th><th>Role</th><th className=\"text-end\">Salary</th></tr>\n          </thead>\n          <tbody>\n            {rows.map((r) => (\n              <tr key={r.id}>\n                <td>{r.id}</td><td>{r.name}</td><td>{r.role}</td>\n                <td className=\"text-end\">${r.salary.toLocaleString()}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "table-sort",
      "track": "data-tables",
      "module": "Module 2 – Sort, Select & Filter",
      "title": "Sortable columns",
      "summary": "Click a header to sort ascending or descending.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface Row { name: string; price: number; stock: number; }\ntype Key = \"name\" | \"price\" | \"stock\";\n\nconst data: Row[] = [\n  { name: \"Laptop\", price: 999, stock: 5 },\n  { name: \"Mouse\", price: 20, stock: 50 },\n  { name: \"Monitor\", price: 250, stock: 12 },\n  { name: \"Keyboard\", price: 45, stock: 30 },\n];\n\nexport default function App() {\n  const [key, setKey] = useState<Key>(\"name\");\n  const [dir, setDir] = useState<1 | -1>(1);\n\n  function sortBy(k: Key) {\n    if (k === key) setDir((d) => (d === 1 ? -1 : 1));\n    else { setKey(k); setDir(1); }\n  }\n\n  const sorted = [...data].sort((a, b) => {\n    if (a[key] < b[key]) return -1 * dir;\n    if (a[key] > b[key]) return 1 * dir;\n    return 0;\n  });\n\n  const arrow = (k: Key) => (k === key ? (dir === 1 ? \" ▲\" : \" ▼\") : \"\");\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 620 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Sortable table</h5>\n        <table className=\"table mb-0\">\n          <thead>\n            <tr>\n              <th role=\"button\" onClick={() => sortBy(\"name\")}>Name{arrow(\"name\")}</th>\n              <th role=\"button\" onClick={() => sortBy(\"price\")}>Price{arrow(\"price\")}</th>\n              <th role=\"button\" onClick={() => sortBy(\"stock\")}>Stock{arrow(\"stock\")}</th>\n            </tr>\n          </thead>\n          <tbody>\n            {sorted.map((r) => (\n              <tr key={r.name}><td>{r.name}</td><td>${r.price}</td><td>{r.stock}</td></tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "table-select",
      "track": "data-tables",
      "module": "Module 2 – Sort, Select & Filter",
      "title": "Row selection & select-all",
      "summary": "Select rows with checkboxes and act on the selection.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface Row { id: number; name: string; }\n\nconst rows: Row[] = [\n  { id: 1, name: \"Task one\" },\n  { id: 2, name: \"Task two\" },\n  { id: 3, name: \"Task three\" },\n];\n\nexport default function App() {\n  const [selected, setSelected] = useState<number[]>([]);\n  const all = selected.length === rows.length;\n\n  function toggle(id: number) {\n    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));\n  }\n  function toggleAll() {\n    setSelected(all ? [] : rows.map((r) => r.id));\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center mb-2\">\n          <h5 className=\"mb-0\">Select rows</h5>\n          <span className=\"badge bg-primary\">{selected.length} selected</span>\n        </div>\n        <table className=\"table mb-0\">\n          <thead>\n            <tr>\n              <th style={{ width: 40 }}><input className=\"form-check-input\" type=\"checkbox\" checked={all} onChange={toggleAll} /></th>\n              <th>Task</th>\n            </tr>\n          </thead>\n          <tbody>\n            {rows.map((r) => (\n              <tr key={r.id}>\n                <td><input className=\"form-check-input\" type=\"checkbox\" checked={selected.includes(r.id)} onChange={() => toggle(r.id)} /></td>\n                <td>{r.name}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n        <button className=\"btn btn-sm btn-danger mt-3\" disabled={selected.length === 0} onClick={() => setSelected([])}>\n          Clear selection\n        </button>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "table-filter",
      "track": "data-tables",
      "module": "Module 2 – Sort, Select & Filter",
      "title": "Search & filter inside a table",
      "summary": "Combine text search with a category filter.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface Row { name: string; category: string; price: number; }\n\nconst data: Row[] = [\n  { name: \"Laptop\", category: \"Electronics\", price: 999 },\n  { name: \"Novel\", category: \"Books\", price: 15 },\n  { name: \"T-Shirt\", category: \"Clothing\", price: 20 },\n  { name: \"Phone\", category: \"Electronics\", price: 699 },\n];\n\nexport default function App() {\n  const [query, setQuery] = useState(\"\");\n  const [category, setCategory] = useState(\"\");\n\n  const rows = data.filter((r) =>\n    r.name.toLowerCase().includes(query.toLowerCase()) && (!category || r.category === category)\n  );\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 620 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Filter table</h5>\n        <div className=\"row g-2 mb-3\">\n          <div className=\"col-7\"><input className=\"form-control\" placeholder=\"Search name…\" value={query} onChange={(e) => setQuery(e.target.value)} /></div>\n          <div className=\"col-5\">\n            <select className=\"form-select\" value={category} onChange={(e) => setCategory(e.target.value)}>\n              <option value=\"\">All categories</option>\n              <option>Electronics</option><option>Books</option><option>Clothing</option>\n            </select>\n          </div>\n        </div>\n        <table className=\"table table-hover mb-0\">\n          <thead><tr><th>Name</th><th>Category</th><th className=\"text-end\">Price</th></tr></thead>\n          <tbody>\n            {rows.map((r) => (\n              <tr key={r.name}><td>{r.name}</td><td>{r.category}</td><td className=\"text-end\">${r.price}</td></tr>\n            ))}\n            {rows.length === 0 && <tr><td colSpan={3} className=\"text-secondary\">No matches.</td></tr>}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "table-paginated",
      "track": "data-tables",
      "module": "Module 3 – Responsive & Paginated Tables",
      "title": "Paginated table",
      "summary": "Page through rows with a page-size selector.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst rows = Array.from({ length: 23 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));\n\nexport default function App() {\n  const [page, setPage] = useState(1);\n  const [size, setSize] = useState(5);\n  const pages = Math.max(1, Math.ceil(rows.length / size));\n  const start = (page - 1) * size;\n  const visible = rows.slice(start, start + size);\n\n  function changeSize(n: number) { setSize(n); setPage(1); }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center mb-2\">\n          <h5 className=\"mb-0\">Paginated list</h5>\n          <select className=\"form-select form-select-sm\" style={{ width: 90 }} value={size} onChange={(e) => changeSize(Number(e.target.value))}>\n            <option value={5}>5 / page</option><option value={10}>10 / page</option>\n          </select>\n        </div>\n        <ul className=\"list-group mb-3\">\n          {visible.map((r) => <li className=\"list-group-item\" key={r.id}>{r.name}</li>)}\n        </ul>\n        <nav className=\"d-flex justify-content-between align-items-center\">\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>\n          <span className=\"small text-secondary\">Page {page} of {pages}</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>\n        </nav>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "table-responsive",
      "track": "data-tables",
      "module": "Module 3 – Responsive & Paginated Tables",
      "title": "Responsive table with badges & actions",
      "summary": "Horizontally scrollable table with status badges.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst orders = [\n  { id: \"#1001\", customer: \"Aayush\", status: \"Paid\", total: 129 },\n  { id: \"#1002\", customer: \"Meera\", status: \"Pending\", total: 89 },\n  { id: \"#1003\", customer: \"Ravi\", status: \"Cancelled\", total: 45 },\n];\n\nexport default function App() {\n  const badge = (s: string) => (s === \"Paid\" ? \"bg-success\" : s === \"Pending\" ? \"bg-warning text-dark\" : \"bg-danger\");\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 680 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Orders</h5>\n        <div className=\"table-responsive\">\n          <table className=\"table align-middle mb-0\">\n            <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th className=\"text-end\">Total</th><th className=\"text-end\">Actions</th></tr></thead>\n            <tbody>\n              {orders.map((o) => (\n                <tr key={o.id}>\n                  <td className=\"fw-semibold\">{o.id}</td>\n                  <td>{o.customer}</td>\n                  <td><span className={`badge ${badge(o.status)}`}>{o.status}</span></td>\n                  <td className=\"text-end\">${o.total}</td>\n                  <td className=\"text-end\"><button className=\"btn btn-sm btn-outline-primary\">View</button></td>\n                </tr>\n              ))}\n            </tbody>\n          </table>\n        </div>\n        <p className=\"form-text mb-0 mt-2\">Resize the pane — the table scrolls horizontally on small screens.</p>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
