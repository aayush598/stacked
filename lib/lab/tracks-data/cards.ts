import type { LabTrack } from "../types";

export const cardsTrack: LabTrack = {
  "id": "cards",
  "title": "Cards and Reusable Components",
  "description": "Card layouts, reusable prop-driven cards, product cards, stat cards and composition.",
  "priority": 13,
  "modules": [
    "Module 1 – Card Basics",
    "Module 2 – Reusable Cards",
    "Module 3 – Composition"
  ],
  "examples": [
    {
      "id": "card-basic",
      "track": "cards",
      "module": "Module 1 – Card Basics",
      "title": "Basic card",
      "summary": "A card with header, body and footer.",
      "tags": [],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 380 }}>\n      <div className=\"card-header\">Featured</div>\n      <div className=\"card-body\">\n        <h5 className=\"card-title\">Card title</h5>\n        <p className=\"card-text text-secondary\">A simple Bootstrap card with a header, body and footer.</p>\n        <button className=\"btn btn-primary\">Action</button>\n      </div>\n      <div className=\"card-footer text-secondary small\">Updated just now</div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "card-grid",
      "track": "cards",
      "module": "Module 1 – Card Basics",
      "title": "Card grid",
      "summary": "Responsive grid of cards.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst items = [\n  { title: \"Design\", text: \"Clean and consistent interfaces.\" },\n  { title: \"Build\", text: \"Ship features with confidence.\" },\n  { title: \"Scale\", text: \"Grow without breaking.\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <div className=\"row g-3\">\n        {items.map((i) => (\n          <div className=\"col-12 col-md-4\" key={i.title}>\n            <div className=\"card h-100 shadow-sm\">\n              <div className=\"card-body\">\n                <h6 className=\"card-title\">{i.title}</h6>\n                <p className=\"card-text text-secondary small mb-0\">{i.text}</p>\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "card-reusable",
      "track": "cards",
      "module": "Module 2 – Reusable Cards",
      "title": "Reusable Card component",
      "summary": "One component driven by typed props.",
      "tags": [],
      "code": "import React from \"react\";\n\ninterface CardProps {\n  title: string;\n  text: string;\n  action?: string;\n  onAction?: () => void;\n}\n\nfunction Card({ title, text, action, onAction }: CardProps) {\n  return (\n    <div className=\"card shadow-sm h-100\">\n      <div className=\"card-body\">\n        <h6 className=\"card-title\">{title}</h6>\n        <p className=\"card-text text-secondary small\">{text}</p>\n        {action && <button className=\"btn btn-sm btn-outline-primary\" onClick={onAction}>{action}</button>}\n      </div>\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 720 }}>\n      <div className=\"row g-3\">\n        <div className=\"col-md-6\"><Card title=\"Reusable\" text=\"Same component, different props.\" action=\"Learn more\" onAction={() => alert(\"Clicked reusable card\")} /></div>\n        <div className=\"col-md-6\"><Card title=\"Optional props\" text=\"The action button is optional.\" /></div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "card-product",
      "track": "cards",
      "module": "Module 2 – Reusable Cards",
      "title": "Product card",
      "summary": "Image, price, rating and actions.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [added, setAdded] = useState(false);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 300 }}>\n      <div className=\"bg-body-secondary d-flex align-items-center justify-content-center\" style={{ height: 140 }}>Product image</div>\n      <div className=\"card-body\">\n        <h6 className=\"card-title mb-1\">Wireless Headphones</h6>\n        <div className=\"text-warning small mb-2\">★★★★☆</div>\n        <div className=\"d-flex justify-content-between align-items-center\">\n          <strong>$79</strong>\n          <button className={`btn btn-sm ${added ? \"btn-success\" : \"btn-primary\"}`} onClick={() => setAdded((a) => !a)}>\n            {added ? \"Added ✓\" : \"Add to cart\"}\n          </button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "card-stat",
      "track": "cards",
      "module": "Module 3 – Composition",
      "title": "Stat card",
      "summary": "KPI card with trend and icon slot.",
      "tags": [],
      "code": "import React from \"react\";\n\nfunction StatCard({ label, value, trend, positive }: { label: string; value: string; trend: string; positive: boolean }) {\n  return (\n    <div className=\"card shadow-sm h-100\">\n      <div className=\"card-body\">\n        <div className=\"text-secondary small\">{label}</div>\n        <div className=\"fs-3 fw-semibold\">{value}</div>\n        <div className={`small ${positive ? \"text-success\" : \"text-danger\"}`}>{positive ? \"▲\" : \"▼\"} {trend}</div>\n      </div>\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 720 }}>\n      <div className=\"row g-3\">\n        <div className=\"col-6 col-md-4\"><StatCard label=\"Revenue\" value=\"$12.4k\" trend=\"+9%\" positive /></div>\n        <div className=\"col-6 col-md-4\"><StatCard label=\"Users\" value=\"1,280\" trend=\"+4%\" positive /></div>\n        <div className=\"col-6 col-md-4\"><StatCard label=\"Churn\" value=\"2.1%\" trend=\"-0.5%\" positive={false} /></div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "card-children",
      "track": "cards",
      "module": "Module 3 – Composition",
      "title": "Composition with children",
      "summary": "Build flexible cards using children slots.",
      "tags": [],
      "code": "import React from \"react\";\n\nfunction Panel({ title, children, footer }: { title: string; children: React.ReactNode; footer?: React.ReactNode }) {\n  return (\n    <div className=\"card shadow-sm\">\n      <div className=\"card-header fw-semibold\">{title}</div>\n      <div className=\"card-body\">{children}</div>\n      {footer && <div className=\"card-footer text-secondary small\">{footer}</div>}\n    </div>\n  );\n}\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 520 }}>\n      <Panel title=\"Composition\" footer=\"Footer slot\">\n        <p className=\"mb-2\">Children let callers pass arbitrary content.</p>\n        <div className=\"alert alert-info mb-0 py-2\">Any React node works here.</div>\n      </Panel>\n    </div>\n  );\n}\n"
    }
  ]
};
