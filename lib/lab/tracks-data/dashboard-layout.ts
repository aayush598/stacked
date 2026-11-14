import type { LabTrack } from "../types";

export const dashboard_layoutTrack: LabTrack = {
  "id": "dashboard-layout",
  "title": "Dashboard and Admin Layout",
  "description": "Sidebar/topbar shells, stat cards, tables and responsive admin navigation.",
  "priority": 8,
  "modules": [
    "Module 1 – Layout Shell",
    "Module 2 – Stats & Tables",
    "Module 3 – Responsive Admin"
  ],
  "examples": [
    {
      "id": "dash-shell",
      "track": "dashboard-layout",
      "module": "Module 1 – Layout Shell",
      "title": "Sidebar + topbar shell",
      "summary": "Classic admin layout with sidebar and header.",
      "tags": [],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div className=\"border rounded overflow-hidden d-flex\" style={{ minHeight: 420 }}>\n      <aside className=\"text-bg-dark p-3 d-none d-md-block\" style={{ width: 190 }}>\n        <h6 className=\"text-uppercase text-secondary small\">Admin</h6>\n        <ul className=\"nav flex-column\">\n          <li className=\"nav-item\"><a className=\"nav-link text-white active\" href=\"#\">Dashboard</a></li>\n          <li className=\"nav-item\"><a className=\"nav-link text-white-50\" href=\"#\">Orders</a></li>\n          <li className=\"nav-item\"><a className=\"nav-link text-white-50\" href=\"#\">Customers</a></li>\n          <li className=\"nav-item\"><a className=\"nav-link text-white-50\" href=\"#\">Settings</a></li>\n        </ul>\n      </aside>\n      <div className=\"flex-fill d-flex flex-column\">\n        <header className=\"border-bottom p-3 d-flex justify-content-between align-items-center\">\n          <strong>Dashboard</strong>\n          <span className=\"badge bg-primary\">Admin</span>\n        </header>\n        <main className=\"p-3\">\n          <h5>Welcome back</h5>\n          <p className=\"text-secondary mb-0\">This is the content area of the admin layout.</p>\n        </main>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "dash-stats",
      "track": "dashboard-layout",
      "module": "Module 2 – Stats & Tables",
      "title": "Stat cards",
      "summary": "A row of KPI cards with trends.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst stats = [\n  { label: \"Revenue\", value: \"$24,500\", trend: \"+12%\", up: true },\n  { label: \"Orders\", value: \"1,240\", trend: \"+8%\", up: true },\n  { label: \"Customers\", value: \"860\", trend: \"+3%\", up: true },\n  { label: \"Refunds\", value: \"18\", trend: \"-2%\", up: false },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 720 }}>\n      <h5 className=\"mb-3\">Overview</h5>\n      <div className=\"row g-3\">\n        {stats.map((s) => (\n          <div className=\"col-6 col-lg-3\" key={s.label}>\n            <div className=\"card shadow-sm h-100\">\n              <div className=\"card-body\">\n                <div className=\"text-secondary small\">{s.label}</div>\n                <div className=\"fs-4 fw-semibold\">{s.value}</div>\n                <div className={`small ${s.up ? \"text-success\" : \"text-danger\"}`}>{s.up ? \"▲\" : \"▼\"} {s.trend}</div>\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "dash-table",
      "track": "dashboard-layout",
      "module": "Module 2 – Stats & Tables",
      "title": "Recent orders table",
      "summary": "Dashboard table with status badges.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst orders = [\n  { id: \"#1001\", customer: \"Aayush\", total: 129, status: \"Paid\" },\n  { id: \"#1002\", customer: \"Meera\", total: 89, status: \"Pending\" },\n  { id: \"#1003\", customer: \"Ravi\", total: 45, status: \"Refunded\" },\n];\n\nexport default function App() {\n  const badge = (s: string) => (s === \"Paid\" ? \"bg-success\" : s === \"Pending\" ? \"bg-warning text-dark\" : \"bg-secondary\");\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 680 }}>\n      <div className=\"card-header d-flex justify-content-between align-items-center\">\n        <strong>Recent orders</strong>\n        <button className=\"btn btn-sm btn-outline-primary\">View all</button>\n      </div>\n      <div className=\"table-responsive\">\n        <table className=\"table mb-0\">\n          <thead><tr><th>Order</th><th>Customer</th><th>Status</th><th className=\"text-end\">Total</th></tr></thead>\n          <tbody>\n            {orders.map((o) => (\n              <tr key={o.id}>\n                <td className=\"fw-semibold\">{o.id}</td><td>{o.customer}</td>\n                <td><span className={`badge ${badge(o.status)}`}>{o.status}</span></td>\n                <td className=\"text-end\">${o.total}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "dash-responsive",
      "track": "dashboard-layout",
      "module": "Module 3 – Responsive Admin",
      "title": "Collapsible sidebar",
      "summary": "Toggle the sidebar open/closed.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(true);\n  return (\n    <div className=\"border rounded overflow-hidden\" style={{ minHeight: 380 }}>\n      <header className=\"border-bottom p-2 d-flex align-items-center gap-2\">\n        <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setOpen((o) => !o)}>{open ? \"◀\" : \"▶\"} Menu</button>\n        <strong>Admin</strong>\n      </header>\n      <div className=\"d-flex\" style={{ minHeight: 330 }}>\n        {open && (\n          <aside className=\"border-end p-3\" style={{ width: 180 }}>\n            <ul className=\"nav flex-column\">\n              <li className=\"nav-item\"><a className=\"nav-link active px-0\" href=\"#\">Dashboard</a></li>\n              <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Orders</a></li>\n              <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Reports</a></li>\n            </ul>\n          </aside>\n        )}\n        <main className=\"p-3 flex-fill\">\n          <h6>Content area</h6>\n          <p className=\"text-secondary mb-0\">Toggle the menu to expand or collapse the sidebar.</p>\n        </main>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "dash-sections",
      "track": "dashboard-layout",
      "module": "Module 3 – Responsive Admin",
      "title": "Switch admin sections",
      "summary": "Sidebar navigation swaps the content pane.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst sections = [\"Dashboard\", \"Orders\", \"Customers\", \"Settings\"];\n\nexport default function App() {\n  const [active, setActive] = useState(\"Dashboard\");\n  return (\n    <div className=\"border rounded overflow-hidden d-flex\" style={{ minHeight: 360 }}>\n      <aside className=\"border-end p-2\" style={{ width: 170 }}>\n        <ul className=\"nav nav-pills flex-column\">\n          {sections.map((s) => (\n            <li className=\"nav-item\" key={s}>\n              <button className={`nav-link text-start w-100 ${active === s ? \"active\" : \"\"}`} onClick={() => setActive(s)}>{s}</button>\n            </li>\n          ))}\n        </ul>\n      </aside>\n      <main className=\"p-3 flex-fill\">\n        <h5>{active}</h5>\n        {active === \"Dashboard\" && <div className=\"alert alert-primary mb-0\">Key metrics and charts go here.</div>}\n        {active === \"Orders\" && <div className=\"alert alert-info mb-0\">A table of recent orders.</div>}\n        {active === \"Customers\" && <div className=\"alert alert-success mb-0\">Customer list and details.</div>}\n        {active === \"Settings\" && <div className=\"alert alert-secondary mb-0\">Profile and app settings.</div>}\n      </main>\n    </div>\n  );\n}\n"
    }
  ]
};
