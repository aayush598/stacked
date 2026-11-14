import type { LabTrack } from "../types";

export const responsiveTrack: LabTrack = {
  "id": "responsive",
  "title": "Responsive Design",
  "description": "Bootstrap grid, responsive navbar/cards/tables, drawers and display utilities.",
  "priority": 14,
  "modules": [
    "Module 1 – Grid & Breakpoints",
    "Module 2 – Responsive Components",
    "Module 3 – Utilities & Mobile"
  ],
  "examples": [
    {
      "id": "resp-grid",
      "track": "responsive",
      "module": "Module 1 – Grid & Breakpoints",
      "title": "Grid & breakpoints",
      "summary": "Columns that reflow by breakpoint.",
      "tags": [],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <h5 className=\"mb-3\">Grid</h5>\n      <div className=\"row g-2\">\n        <div className=\"col-12 col-sm-6 col-lg-3\"><div className=\"bg-primary text-white p-3 rounded text-center\">col-12 / sm-6 / lg-3</div></div>\n        <div className=\"col-12 col-sm-6 col-lg-3\"><div className=\"bg-primary text-white p-3 rounded text-center\">col-12 / sm-6 / lg-3</div></div>\n        <div className=\"col-12 col-sm-6 col-lg-3\"><div className=\"bg-primary text-white p-3 rounded text-center\">col-12 / sm-6 / lg-3</div></div>\n        <div className=\"col-12 col-sm-6 col-lg-3\"><div className=\"bg-primary text-white p-3 rounded text-center\">col-12 / sm-6 / lg-3</div></div>\n      </div>\n      <p className=\"form-text mt-3 mb-0\">Resize the preview to see the columns stack.</p>\n    </div>\n  );\n}\n"
    },
    {
      "id": "resp-navbar",
      "track": "responsive",
      "module": "Module 2 – Responsive Components",
      "title": "Responsive navbar",
      "summary": "Collapse menu behind a toggle.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div style={{ maxWidth: 700 }}>\n      <nav className=\"navbar navbar-expand-md bg-dark navbar-dark rounded px-3\">\n        <span className=\"navbar-brand\">Brand</span>\n        <button className=\"navbar-toggler\" onClick={() => setOpen((o) => !o)}><span className=\"navbar-toggler-icon\" /></button>\n        <div className={`collapse navbar-collapse ${open ? \"show\" : \"\"}`}>\n          <ul className=\"navbar-nav ms-auto\">\n            <li className=\"nav-item\"><a className=\"nav-link active\" href=\"#\">Home</a></li>\n            <li className=\"nav-item\"><a className=\"nav-link\" href=\"#\">Features</a></li>\n            <li className=\"nav-item\"><a className=\"nav-link\" href=\"#\">Pricing</a></li>\n          </ul>\n        </div>\n      </nav>\n      <p className=\"form-text mt-2 mb-0\">On narrow screens the links collapse behind the toggler.</p>\n    </div>\n  );\n}\n"
    },
    {
      "id": "resp-cards",
      "track": "responsive",
      "module": "Module 2 – Responsive Components",
      "title": "Responsive cards",
      "summary": "Cards stack on mobile and sit in a row on desktop.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst items = [\"Fast\", \"Reliable\", \"Secure\"];\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <div className=\"row g-3\">\n        {items.map((i) => (\n          <div className=\"col-12 col-md-4\" key={i}>\n            <div className=\"card shadow-sm h-100\"><div className=\"card-body text-center\"><h6>{i}</h6><p className=\"small text-secondary mb-0\">Responsive column.</p></div></div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "resp-table",
      "track": "responsive",
      "module": "Module 3 – Utilities & Mobile",
      "title": "Responsive table",
      "summary": "Scroll table horizontally on small screens.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst rows = [\n  { id: 1, name: \"Aayush\", role: \"Developer\", city: \"Delhi\" },\n  { id: 2, name: \"Meera\", role: \"Designer\", city: \"Mumbai\" },\n  { id: 3, name: \"Ravi\", role: \"Manager\", city: \"Pune\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 680 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Responsive table</h5>\n        <div className=\"table-responsive\">\n          <table className=\"table table-bordered mb-0\">\n            <thead><tr><th>ID</th><th>Name</th><th>Role</th><th>City</th><th>Email</th></tr></thead>\n            <tbody>{rows.map((r) => <tr key={r.id}><td>{r.id}</td><td>{r.name}</td><td>{r.role}</td><td>{r.city}</td><td>{r.name.toLowerCase()}@example.com</td></tr>)}</tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "resp-sidebar",
      "track": "responsive",
      "module": "Module 3 – Utilities & Mobile",
      "title": "Mobile drawer sidebar",
      "summary": "Sidebar becomes a drawer on small screens.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div className=\"border rounded overflow-hidden\" style={{ minHeight: 340 }}>\n      <header className=\"d-flex d-md-none align-items-center gap-2 border-bottom p-2\">\n        <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setOpen(true)}>☰</button>\n        <strong>App</strong>\n      </header>\n      <div className=\"d-flex\">\n        <aside className={`border-end p-3 ${open ? \"d-block position-absolute bg-white h-100\" : \"d-none\"} d-md-block`} style={{ width: 180, zIndex: 5 }}>\n          <button className=\"btn btn-sm btn-outline-secondary d-md-none mb-2\" onClick={() => setOpen(false)}>Close</button>\n          <ul className=\"nav flex-column\">\n            <li className=\"nav-item\"><a className=\"nav-link px-0 active\" href=\"#\">Home</a></li>\n            <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Reports</a></li>\n            <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Settings</a></li>\n          </ul>\n        </aside>\n        <main className=\"p-3 flex-fill\">\n          <h6>Main content</h6>\n          <p className=\"text-secondary mb-0\">The sidebar is always visible on desktop and a drawer on mobile.</p>\n        </main>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "resp-utilities",
      "track": "responsive",
      "module": "Module 3 – Utilities & Mobile",
      "title": "Display utilities",
      "summary": "Show/hide content per breakpoint.",
      "tags": [],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Display utilities</h5>\n        <div className=\"alert alert-primary d-block d-md-none mb-2\">Visible on mobile only (d-md-none)</div>\n        <div className=\"alert alert-success d-none d-md-block mb-2\">Visible on md and up (d-md-block)</div>\n        <div className=\"alert alert-secondary mb-0\">Always visible</div>\n        <p className=\"form-text mt-2 mb-0\">Resize to test <code>d-none d-md-block</code>.</p>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
