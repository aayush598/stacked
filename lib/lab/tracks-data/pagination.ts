import type { LabTrack } from "../types";

export const paginationTrack: LabTrack = {
  "id": "pagination",
  "title": "Pagination",
  "description": "Client-side pagination, page numbers, page-size controls, paginated tables and server-style paging.",
  "priority": 12,
  "modules": [
    "Module 1 – Client-side",
    "Module 2 – Controls",
    "Module 3 – Tables & Server-style"
  ],
  "examples": [
    {
      "id": "page-basic",
      "track": "pagination",
      "module": "Module 1 – Client-side",
      "title": "Basic pagination",
      "summary": "Slice a list into pages with prev/next.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst items = Array.from({ length: 17 }, (_, i) => `Item ${i + 1}`);\nconst perPage = 5;\n\nexport default function App() {\n  const [page, setPage] = useState(1);\n  const pages = Math.ceil(items.length / perPage);\n  const visible = items.slice((page - 1) * perPage, page * perPage);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Pagination</h5>\n        <ul className=\"list-group mb-3\">\n          {visible.map((i) => <li className=\"list-group-item\" key={i}>{i}</li>)}\n        </ul>\n        <div className=\"d-flex justify-content-between align-items-center\">\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>\n          <span className=\"small text-secondary\">Page {page} / {pages}</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "page-numbers",
      "track": "pagination",
      "module": "Module 2 – Controls",
      "title": "Numbered page buttons",
      "summary": "Render clickable page numbers.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst items = Array.from({ length: 32 }, (_, i) => `Row ${i + 1}`);\nconst perPage = 4;\n\nexport default function App() {\n  const [page, setPage] = useState(1);\n  const pages = Math.ceil(items.length / perPage);\n  const visible = items.slice((page - 1) * perPage, page * perPage);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Page numbers</h5>\n        <ul className=\"list-group mb-3\">\n          {visible.map((i) => <li className=\"list-group-item\" key={i}>{i}</li>)}\n        </ul>\n        <nav>\n          <ul className=\"pagination pagination-sm mb-0 flex-wrap\">\n            <li className={`page-item ${page === 1 ? \"disabled\" : \"\"}`}><button className=\"page-link\" onClick={() => setPage(page - 1)}>«</button></li>\n            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (\n              <li className={`page-item ${n === page ? \"active\" : \"\"}`} key={n}><button className=\"page-link\" onClick={() => setPage(n)}>{n}</button></li>\n            ))}\n            <li className={`page-item ${page === pages ? \"disabled\" : \"\"}`}><button className=\"page-link\" onClick={() => setPage(page + 1)}>»</button></li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "page-size",
      "track": "pagination",
      "module": "Module 2 – Controls",
      "title": "Page size selector",
      "summary": "Change rows per page and reset to page 1.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst items = Array.from({ length: 23 }, (_, i) => `Item ${i + 1}`);\n\nexport default function App() {\n  const [size, setSize] = useState(5);\n  const [page, setPage] = useState(1);\n  const pages = Math.ceil(items.length / size);\n  const visible = items.slice((page - 1) * size, page * size);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 500 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center mb-3\">\n          <h5 className=\"mb-0\">Page size</h5>\n          <select className=\"form-select form-select-sm\" style={{ width: 100 }} value={size} onChange={(e) => { setSize(Number(e.target.value)); setPage(1); }}>\n            <option value={5}>5 / page</option><option value={10}>10 / page</option><option value={20}>20 / page</option>\n          </select>\n        </div>\n        <ul className=\"list-group mb-3\">\n          {visible.map((i) => <li className=\"list-group-item\" key={i}>{i}</li>)}\n        </ul>\n        <div className=\"d-flex justify-content-between align-items-center\">\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>\n          <span className=\"small text-secondary\">Page {page} / {pages} · {items.length} items</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "page-table",
      "track": "pagination",
      "module": "Module 3 – Tables & Server-style",
      "title": "Paginated table",
      "summary": "Pagination applied to a data table.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst rows = Array.from({ length: 26 }, (_, i) => ({\n  id: i + 1,\n  name: `Customer ${i + 1}`,\n  email: `user${i + 1}@example.com`,\n}));\n\nexport default function App() {\n  const [page, setPage] = useState(1);\n  const perPage = 6;\n  const pages = Math.ceil(rows.length / perPage);\n  const visible = rows.slice((page - 1) * perPage, page * perPage);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 640 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Paginated table</h5>\n        <div className=\"table-responsive\">\n          <table className=\"table table-striped mb-2\">\n            <thead><tr><th>#</th><th>Name</th><th>Email</th></tr></thead>\n            <tbody>\n              {visible.map((r) => <tr key={r.id}><td>{r.id}</td><td>{r.name}</td><td>{r.email}</td></tr>)}\n            </tbody>\n          </table>\n        </div>\n        <div className=\"d-flex justify-content-between align-items-center\">\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>\n          <span className=\"small text-secondary\">{page} / {pages}</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "page-server",
      "track": "pagination",
      "module": "Module 3 – Tables & Server-style",
      "title": "Server-style pagination",
      "summary": "Simulate server paging with loading state (axios mocked).",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\nimport axios from \"axios\";\n\nconst all = Array.from({ length: 34 }, (_, i) => `Record ${i + 1}`);\nconst perPage = 5;\n\nexport default function App() {\n  const [page, setPage] = useState(1);\n  const [rows, setRows] = useState<string[]>([]);\n  const [loading, setLoading] = useState(true);\n  const pages = Math.ceil(all.length / perPage);\n\n  useEffect(() => {\n    let alive = true;\n    setLoading(true);\n    axios.get(`/api/records?page=${page}&limit=${perPage}`)\n      .then(() => {\n        if (!alive) return;\n        setRows(all.slice((page - 1) * perPage, page * perPage));\n      })\n      .finally(() => { if (alive) setLoading(false); });\n    return () => { alive = false; };\n  }, [page]);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Server-style paging</h5>\n        <p className=\"small text-secondary font-monospace\">GET /api/records?page={page}&limit={perPage}</p>\n        {loading ? (\n          <div className=\"py-4 text-center\"><div className=\"spinner-border text-primary\" /></div>\n        ) : (\n          <ul className=\"list-group mb-3\">\n            {rows.map((r) => <li className=\"list-group-item\" key={r}>{r}</li>)}\n          </ul>\n        )}\n        <div className=\"d-flex justify-content-between align-items-center\">\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === 1 || loading} onClick={() => setPage(page - 1)}>Prev</button>\n          <span className=\"small text-secondary\">Page {page} / {pages}</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" disabled={page === pages || loading} onClick={() => setPage(page + 1)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
