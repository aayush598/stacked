import type { LabTrack } from "../types";

export const responsiveExtra: LabTrack = {
  "id": "responsive",
  "title": "Responsive Design",
  "description": "Bootstrap grid, responsive navbar/cards/tables, drawers and display utilities.",
  "priority": 14,
  "modules": [
    "Module 4 \u2013 Responsive Layouts",
    "Module 5 \u2013 Responsive Components",
    "Module 6 \u2013 Mobile UX"
  ],
  "examples": [
    {
      "id": "resp-stack",
      "track": "responsive",
      "module": "Module 4 \u2013 Responsive Layouts",
      "title": "Columns that stack",
      "summary": "Twelve-column grid reflows from one column to three.",
      "tags": ["responsive", "grid", "stacking"],
      "code": "import React from \"react\";\n\ninterface Panel { title: string; body: string; }\n\nconst panels: Panel[] = [\n  { title: \"One\", body: \"Full width on phones, half width from sm, one third from lg.\" },\n  { title: \"Two\", body: \"A long body text wraps inside the card without breaking the grid at any breakpoint.\" },\n  { title: \"Three\", body: \"Columns share the row until there is no room left, then they stack.\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 780 }}>\n      <h5 className=\"mb-1\">Stacking columns</h5>\n      <p className=\"small text-secondary\">Resize to watch <code>col-12 col-sm-6 col-lg-4</code> reflow.</p>\n      <div className=\"row g-3\">\n        {panels.map((p) => (\n          <div className=\"col-12 col-sm-6 col-lg-4\" key={p.title}>\n            <div className=\"card h-100 shadow-sm\">\n              <div className=\"card-body\">\n                <h6 className=\"card-title\">{p.title}</h6>\n                <p className=\"card-text small text-secondary mb-0\">{p.body}</p>\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-mobile-first",
      "track": "responsive",
      "module": "Module 4 \u2013 Responsive Layouts",
      "title": "Mobile-first classes",
      "summary": "Base classes apply first; breakpoint classes add up.",
      "tags": ["responsive", "mobile-first", "grid"],
      "code": "import React from \"react\";\n\nconst steps = [\"Design\", \"Build\", \"Test\", \"Ship\", \"Learn\"];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <h5 className=\"mb-1\">Mobile-first classes</h5>\n      <p className=\"small text-secondary\">Start at 12 columns, then raise the count only when there is room.</p>\n      <div className=\"row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2\">\n        {steps.map((s) => (\n          <div className=\"col\" key={s}>\n            <div className=\"border rounded p-3 bg-light h-100\">\n              <strong>{s}</strong>\n              <div className=\"small text-secondary\">1 col / md 2 cols / xl 3 cols</div>\n            </div>\n          </div>\n        ))}\n      </div>\n      <div className=\"alert alert-warning py-2 small mt-3 mb-0\">\n        You do not need <code>col-md-12</code> to undo a desktop size: mobile is already full width below md.\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-flex",
      "track": "responsive",
      "module": "Module 4 \u2013 Responsive Layouts",
      "title": "Flex direction and wrapping",
      "summary": "Switch between column and row, and wrap long items.",
      "tags": ["responsive", "flexbox", "wrapping"],
      "code": "import React from \"react\";\n\nconst tags = [\"React\", \"TypeScript\", \"Bootstrap\", \"Responsive design\", \"Accessibility\", \"A very long label that should wrap\"];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 640 }}>\n      <h5 className=\"mb-2\">Flex direction and wrapping</h5>\n      <div className=\"d-flex flex-column flex-md-row flex-wrap gap-2 border rounded p-3 mb-3\">\n        {tags.map((t) => (\n          <span className=\"badge text-bg-primary p-2 text-wrap text-start\" key={t}>{t}</span>\n        ))}\n      </div>\n      <div className=\"d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center justify-content-between gap-2 bg-light border rounded p-3\">\n        <strong className=\"text-break\">Stacked on mobile, split from sm up</strong>\n        <div className=\"d-flex gap-2\">\n          <button className=\"btn btn-sm btn-outline-secondary flex-fill\">Cancel</button>\n          <button className=\"btn btn-sm btn-primary flex-fill\">Save</button>\n        </div>\n      </div>\n      <div className=\"d-flex flex-nowrap gap-2 overflow-auto border rounded p-2 mt-3\">\n        {[\"Step 1\", \"Step 2\", \"Step 3\", \"Step 4\"].map((s) => (\n          <span className=\"badge text-bg-secondary text-nowrap\" key={s}>{s}</span>\n        ))}\n      </div>\n      <p className=\"form-text mb-0 mt-2\"><code>flex-column flex-md-row</code> changes direction; <code>flex-wrap</code> prevents overflow, while <code>flex-nowrap overflow-auto</code> makes a scroll strip.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-order",
      "track": "responsive",
      "module": "Module 4 \u2013 Responsive Layouts",
      "title": "Order classes",
      "summary": "Reorder visual columns without changing the DOM.",
      "tags": ["responsive", "order", "accessibility"],
      "code": "import React from \"react\";\n\nconst blocks = [\n  { id: \"main\", title: \"Main content\", order: \"order-2 order-md-1\", tone: \"bg-primary-subtle border-primary-subtle\" },\n  { id: \"side\", title: \"Sidebar\", order: \"order-1 order-md-2\", tone: \"bg-secondary-subtle border-secondary-subtle\" },\n  { id: \"promo\", title: \"Promotion\", order: \"order-3\", tone: \"bg-success-subtle border-success-subtle\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 720 }}>\n      <h5 className=\"mb-3\">Order classes</h5>\n      <div className=\"d-flex flex-column flex-md-row gap-2\">\n        {blocks.map((b) => (\n          <div className={`flex-fill border rounded p-3 ${b.order} ${b.tone}`} key={b.id}>\n            <h6 className=\"mb-1\">{b.title}</h6>\n            <p className=\"small mb-0\">Visual position: {b.order}</p>\n          </div>\n        ))}\n      </div>\n      <p className=\"form-text mb-0 mt-2\">Sidebar comes first on mobile but moves after main on md. Keyboard order stays the DOM order.</p>\n      <div className=\"d-flex gap-2 mt-2 small text-secondary\">\n        <span className=\"badge text-bg-light border\">order-1</span>\n        <span className=\"badge text-bg-light border\">order-2</span>\n        <span className=\"badge text-bg-light border\">order-3</span>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-container",
      "track": "responsive",
      "module": "Module 4 \u2013 Responsive Layouts",
      "title": "Container widths and gutters",
      "summary": "Compare fixed, fluid and breakpoint containers.",
      "tags": ["responsive", "container", "gutters"],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div>\n      <h5 className=\"mb-2\">Container widths</h5>\n      <div className=\"container border rounded p-2 mb-2 bg-white\"><code>.container</code> \u2014 fluid below lg, capped above.</div>\n      <div className=\"container-fluid border rounded p-2 mb-2 bg-light\"><code>.container-fluid</code> \u2014 always full width.</div>\n      <div className=\"container-md border rounded p-2 mb-3 bg-white\"><code>.container-md</code> \u2014 full width until md, then capped.</div>\n      <div className=\"container-xl border rounded p-2 mb-3 bg-light\"><code>.container-xl</code> \u2014 capped only from xl up.</div>\n      <div className=\"row g-0 border\">\n        <div className=\"col-6 p-2 bg-primary-subtle\">g-0</div>\n        <div className=\"col-6 p-2 bg-secondary-subtle text-end\">no gutter</div>\n      </div>\n      <div className=\"row g-3 mt-1 mb-3\">\n        <div className=\"col-6\"><div className=\"p-2 bg-success-subtle rounded\">g-3 gutter</div></div>\n        <div className=\"col-6\"><div className=\"p-2 bg-warning-subtle rounded\">g-3 gutter</div></div>\n      </div>\n      <div className=\"container border rounded p-2 bg-white\">\n        <div className=\"row g-2\">\n          <div className=\"col-6\"><div className=\"bg-info-subtle rounded p-2\">nested row</div></div>\n          <div className=\"col-6\"><div className=\"bg-info-subtle rounded p-2\">same gutters</div></div>\n        </div>\n      </div>\n      <p className=\"form-text mb-0 mt-2\">Rows use negative margins so their gutters stay aligned with the container padding.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-spacing",
      "track": "responsive",
      "module": "Module 4 \u2013 Responsive Layouts",
      "title": "Responsive spacing",
      "summary": "Scale padding and gaps at breakpoints.",
      "tags": ["responsive", "spacing", "utilities"],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 640 }}>\n      <div className=\"border rounded bg-white p-2 p-md-4 mb-3\">\n        <h6 className=\"mb-1\">Responsive padding</h6>\n        <p className=\"small text-secondary mb-0\">This card uses <code>p-2 p-md-4</code>.</p>\n      </div>\n      <div className=\"d-flex flex-column flex-md-row gap-2 gap-md-4 mb-3\">\n        {[\"A\", \"B\", \"C\"].map((x) => (\n          <div className=\"p-2 p-md-3 bg-primary-subtle rounded text-center flex-fill\" key={x}>{x}</div>\n        ))}\n      </div>\n      <div className=\"bg-dark text-white rounded p-3 px-md-5 mb-2\">\n        More horizontal room from md with <code>px-md-5</code>.\n      </div>\n      <div className=\"bg-secondary-subtle rounded p-0 p-lg-4 mb-2\">\n        <div className=\"bg-white rounded p-2\">Outer padding is <code>p-0 p-lg-4</code>; the inner box keeps its own padding.</div>\n      </div>\n      <div className=\"d-flex align-items-end gap-2 mb-2\" style={{ height: 70 }}>\n        <div className=\"bg-success-subtle rounded p-2 flex-fill\">Aligned bottom</div>\n        <div className=\"bg-success-subtle rounded p-2 flex-fill mt-auto\">mt-auto</div>\n      </div>\n      <p className=\"form-text mb-0\">Spacing utilities accept every breakpoint: <code>m-1 m-lg-4</code>, <code>gap-2 gap-xl-5</code>.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-hide-columns",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Hide table columns",
      "summary": "Drop low-priority columns as space shrinks.",
      "tags": ["responsive", "table", "display"],
      "code": "import React from \"react\";\n\ninterface User { id: number; name: string; role: string; city: string; email: string; }\n\nconst users: User[] = [\n  { id: 1, name: \"Aayush\", role: \"Developer\", city: \"Delhi\", email: \"aayush@example.com\" },\n  { id: 2, name: \"Meera\", role: \"Designer\", city: \"Mumbai\", email: \"meera@example.com\" },\n  { id: 3, name: \"Ravi\", role: \"Manager\", city: \"Pune\", email: \"ravi@example.com\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 720 }}>\n      <h5 className=\"mb-2\">Hide columns on small screens</h5>\n      <div className=\"table-responsive border rounded\">\n        <table className=\"table table-sm table-bordered align-middle mb-0\">\n          <thead className=\"table-light\">\n            <tr>\n              <th>#</th>\n              <th>Name</th>\n              <th className=\"d-none d-md-table-cell\">Role</th>\n              <th className=\"d-none d-lg-table-cell\">City</th>\n              <th className=\"d-none d-md-table-cell\">Email</th>\n            </tr>\n          </thead>\n          <tbody>\n            {users.map((u) => (\n              <tr key={u.id}>\n                <td>{u.id}</td>\n                <td>{u.name}</td>\n                <td className=\"d-none d-md-table-cell\">{u.role}</td>\n                <td className=\"d-none d-lg-table-cell\">{u.city}</td>\n                <td className=\"d-none d-md-table-cell text-break\">{u.email}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n      <p className=\"form-text mb-0 mt-2\">Role and email appear from md; city waits until lg. Use <code>d-md-table-cell</code>, not just <code>d-md-block</code>.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-typography",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Responsive typography",
      "summary": "Use fs utilities, display swaps and clamp text.",
      "tags": ["responsive", "typography", "utilities"],
      "code": "import React from \"react\";\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 620 }}>\n      <div className=\"d-md-none\">\n        <h1 className=\"fs-3\">Mobile heading</h1>\n        <p className=\"fs-6 text-secondary\">Body text stays at fs-6.</p>\n      </div>\n      <div className=\"d-none d-md-block\">\n        <h1 className=\"display-5\">Desktop heading</h1>\n        <p className=\"fs-5 text-secondary\">Larger text only where there is room.</p>\n      </div>\n      <p className=\"fw-semibold mb-2\" style={{ fontSize: \"clamp(1rem, 4vw, 2rem)\" }}>Fluid text with clamp()</p>\n      <p className=\"fs-1 mb-1\">fs-1</p>\n      <p className=\"fs-6 text-truncate mb-2\">A long single line that truncates instead of wrapping on small screens</p>\n      <div className=\"d-flex align-items-baseline gap-2 mb-2\">\n        <span className=\"fs-4\">fs-4</span>\n        <span className=\"small text-secondary\">relative scale utilities</span>\n      </div>\n      <p className=\"text-break mb-2\">AnUnbrokenIdentifierThatWouldOtherwiseOverflowEveryContainerOnSmallScreens</p>\n      <p className=\"small text-secondary mb-2\">Bootstrap has <code>fs-1</code> to <code>fs-6</code> but no <code>fs-md-*</code>; pair sizes with display utilities or a clamp style.</p>\n      <p className=\"small text-secondary mb-0\">Resize to compare the swapped headings; <code>display-5</code> plus <code>fs-5</code> keeps the hierarchy clear.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-images",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Fluid images and aspect ratios",
      "summary": "Images shrink to fit and reserve space.",
      "tags": ["responsive", "images", "aspect-ratio"],
      "code": "import React from \"react\";\n\nconst IMG = \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%230d6efd'/%3E%3Ctext x='400' y='235' font-size='36' fill='white' text-anchor='middle'%3EResponsive%3C/text%3E%3C/svg%3E\";\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 680 }}>\n      <h5 className=\"mb-2\">Fluid images</h5>\n      <img src={IMG} alt=\"Blue responsive placeholder\" className=\"img-fluid rounded border mb-3\" />\n      <div className=\"row g-3\">\n        <div className=\"col-12 col-sm-6\">\n          <div className=\"ratio ratio-16x9 rounded overflow-hidden border\">\n            <img src={IMG} alt=\"Wide placeholder\" className=\"w-100 h-100 object-fit-cover\" />\n          </div>\n        </div>\n        <div className=\"col-12 col-sm-6\">\n          <div className=\"ratio ratio-1x1 rounded overflow-hidden border\">\n            <img src={IMG} alt=\"Square placeholder\" className=\"w-100 h-100 object-fit-cover\" />\n          </div>\n        </div>\n      </div>\n      <p className=\"form-text mb-0 mt-2\"><code>img-fluid</code> sets max-width 100%; <code>ratio</code> reserves height so content does not jump while loading.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-form",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Stacked vs inline forms",
      "summary": "Fields stack on phones and sit inline on wide screens.",
      "tags": ["responsive", "forms", "grid"],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [name, setName] = useState(\"\");\n  const [email, setEmail] = useState(\"\");\n  const [sent, setSent] = useState(false);\n\n  function submit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault();\n    setSent(true);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 680 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Responsive form</h5>\n        <form onSubmit={submit}>\n          <div className=\"row g-2 align-items-end\">\n            <div className=\"col-12 col-md-4\">\n              <label className=\"form-label\" htmlFor=\"resp-form-name\">Name</label>\n              <input id=\"resp-form-name\" className=\"form-control\" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} required />\n            </div>\n            <div className=\"col-12 col-md-5\">\n              <label className=\"form-label\" htmlFor=\"resp-form-email\">Email</label>\n              <input id=\"resp-form-email\" type=\"email\" className=\"form-control\" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />\n            </div>\n            <div className=\"col-12 col-md-auto\">\n              <button className=\"btn btn-primary w-100\" type=\"submit\">Subscribe</button>\n            </div>\n          </div>\n        </form>\n        {sent && <div className=\"alert alert-success mt-3 mb-0 py-2 small text-break\">Submitted {name} ({email})</div>}\n        <p className=\"form-text mb-0 mt-2\">On phones each field takes a full row and the button is full width.</p>\n      </div>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-modal",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Fullscreen modal on mobile",
      "summary": "Manual modal that fills the screen below sm.",
      "tags": ["responsive", "modal", "state"],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div className=\"position-relative border rounded p-3 bg-light\" style={{ minHeight: 360 }}>\n      <h5>Fullscreen on mobile</h5>\n      <p className=\"small text-secondary\"><code>modal-fullscreen-sm-down</code> is edge-to-edge below 576px and centered above.</p>\n      <button className=\"btn btn-primary\" onClick={() => setOpen(true)}>Open modal</button>\n      {open && (\n        <div className=\"position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center\" style={{ background: \"rgba(0,0,0,0.45)\", zIndex: 10 }}>\n          <div className=\"modal d-block position-static w-100 m-0\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"resp-modal-title\">\n            <div className=\"modal-dialog modal-fullscreen-sm-down modal-dialog-centered modal-dialog-scrollable mb-0\">\n              <div className=\"modal-content\">\n                <div className=\"modal-header\">\n                  <h5 className=\"modal-title\" id=\"resp-modal-title\">Confirm changes</h5>\n                  <button type=\"button\" className=\"btn-close\" aria-label=\"Close\" onClick={() => setOpen(false)}></button>\n                </div>\n                <div className=\"modal-body\">\n                  <p className=\"mb-2\">This body can scroll on a short phone screen.</p>\n                  <p className=\"mb-0 text-secondary\">On a phone the dialog takes the full viewport; on a desktop it stays centered. The backdrop and close buttons are plain React state, not Bootstrap JS.</p>\n                </div>\n                <div className=\"modal-footer\">\n                  <button className=\"btn btn-outline-secondary\" onClick={() => setOpen(false)}>Cancel</button>\n                  <button className=\"btn btn-primary\" onClick={() => setOpen(false)}>Save</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n}"
    },
    {
      "id": "resp-card-list",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Cards to list on mobile",
      "summary": "Same data as cards on desktop and rows on mobile.",
      "tags": ["responsive", "cards", "list"],
      "code": "import React from \"react\";\n\ninterface Item { id: number; name: string; meta: string; }\n\nconst items: Item[] = [\n  { id: 1, name: \"Quarterly report with a long title\", meta: \"Updated 2 hours ago\" },\n  { id: 2, name: \"Design review\", meta: \"Updated yesterday\" },\n  { id: 3, name: \"Release checklist\", meta: \"Updated last week\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <h5 className=\"mb-3\">Cards on desktop, list on mobile</h5>\n      <div className=\"d-md-none\">\n        <ul className=\"list-group\">\n          {items.map((i) => (\n            <li className=\"list-group-item d-flex align-items-center gap-2\" key={i.id}>\n              <div className=\"bg-primary-subtle rounded flex-shrink-0\" style={{ width: 48, height: 48 }} />\n              <div style={{ minWidth: 0 }}>\n                <div className=\"fw-semibold text-truncate\">{i.name}</div>\n                <div className=\"small text-secondary\">{i.meta}</div>\n              </div>\n            </li>\n          ))}\n        </ul>\n      </div>\n      <div className=\"d-none d-md-block\">\n        <div className=\"row g-3\">\n          {items.map((i) => (\n            <div className=\"col-12 col-md-4\" key={i.id}>\n              <div className=\"card h-100 shadow-sm\">\n                <div className=\"ratio ratio-4x3 bg-primary-subtle rounded-top\" />\n                <div className=\"card-body\">\n                  <h6 className=\"text-truncate mb-1\">{i.name}</h6>\n                  <p className=\"small text-secondary mb-0\">{i.meta}</p>\n                </div>\n              </div>\n            </div>\n          ))}\n        </div>\n      </div>\n      <p className=\"form-text mb-0 mt-2\">Two layouts share one array. <code>text-truncate</code> needs a constrained parent, so the flex child sets <code>minWidth: 0</code>.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-table-scroll",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Scrollable table wrapper",
      "summary": "Keep wide tables usable with a horizontal wrapper.",
      "tags": ["responsive", "table", "overflow"],
      "code": "import React from \"react\";\n\nconst rows = [\n  { id: 1, name: \"Aayush\", email: \"aayush@example.com\", note: \"Prefers email contact\", total: \"125000\" },\n  { id: 2, name: \"Meera\", email: \"meera@example.com\", note: \"Invoices go to finance\", total: \"84000\" },\n  { id: 3, name: \"Ravi\", email: \"ravi@example.com\", note: \"Needs a purchase order\", total: \"230500\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 680 }}>\n      <h5 className=\"mb-2\">Scrollable table</h5>\n      <div className=\"table-responsive border rounded\">\n        <table className=\"table table-striped table-hover align-middle mb-0\" style={{ minWidth: 640 }}>\n          <thead className=\"table-light\">\n            <tr><th>ID</th><th>Name</th><th>Email</th><th>Note</th><th className=\"text-nowrap\">Total</th></tr>\n          </thead>\n          <tbody>\n            {rows.map((r) => (\n              <tr key={r.id}>\n                <td>{r.id}</td>\n                <td className=\"text-nowrap\">{r.name}</td>\n                <td className=\"text-nowrap\">{r.email}</td>\n                <td>{r.note}</td>\n                <td className=\"text-nowrap\">{r.total}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n      <p className=\"form-text mb-0 mt-2\">The table has <code>minWidth: 640</code>, so small screens scroll inside the wrapper. Use <code>table-responsive-md</code> to scroll only below md.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-breakpoint",
      "track": "responsive",
      "module": "Module 5 \u2013 Responsive Components",
      "title": "Breakpoint indicator",
      "summary": "Exactly one badge shows at each viewport size.",
      "tags": ["responsive", "breakpoints", "display"],
      "code": "import React from \"react\";\n\nconst marks = [\n  { label: \"XS < 576\", cls: \"d-inline d-sm-none\", tone: \"text-bg-danger\" },\n  { label: \"SM 576+\", cls: \"d-none d-sm-inline d-md-none\", tone: \"text-bg-warning\" },\n  { label: \"MD 768+\", cls: \"d-none d-md-inline d-lg-none\", tone: \"text-bg-info\" },\n  { label: \"LG 992+\", cls: \"d-none d-lg-inline d-xl-none\", tone: \"text-bg-primary\" },\n  { label: \"XL 1200+\", cls: \"d-none d-xl-inline d-xxl-none\", tone: \"text-bg-success\" },\n  { label: \"XXL 1400+\", cls: \"d-none d-xxl-inline\", tone: \"text-bg-dark\" },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 600 }}>\n      <h5 className=\"mb-2\">Current breakpoint</h5>\n      <div className=\"d-flex flex-wrap gap-2\">\n        {marks.map((m) => (\n          <span className={`badge p-2 ${m.cls} ${m.tone}`} key={m.label}>{m.label}</span>\n        ))}\n      </div>\n      <div className=\"d-none d-md-block alert alert-success py-2 small mt-3 mb-0\">This panel appears from md up.</div>\n      <p className=\"small text-secondary mt-2 mb-0\">Each badge is hidden by the next breakpoint, so resizing swaps the visible label.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-navbar-collapse",
      "track": "responsive",
      "module": "Module 6 \u2013 Mobile UX",
      "title": "Manual navbar collapse",
      "summary": "Toggle the menu with state and close it after a click.",
      "tags": ["responsive", "navbar", "state"],
      "code": "import React, { useState } from \"react\";\n\nconst links = [\"Home\", \"Projects\", \"Reports\", \"Settings\"];\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  const [active, setActive] = useState(\"Home\");\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <nav className=\"navbar navbar-expand-md navbar-dark bg-dark rounded px-3\">\n        <span className=\"navbar-brand text-truncate\" style={{ maxWidth: 180 }}>A Very Long Brand Name</span>\n        <button className=\"navbar-toggler\" type=\"button\" aria-expanded={open} aria-controls=\"resp-nav-menu\" aria-label=\"Toggle navigation\" onClick={() => setOpen((o) => !o)}>\n          <span className=\"navbar-toggler-icon\"></span>\n        </button>\n        <div id=\"resp-nav-menu\" className={`collapse navbar-collapse ${open ? \"show\" : \"\"}`}>\n          <ul className=\"navbar-nav ms-auto\">\n            {links.map((l) => (\n              <li className=\"nav-item\" key={l}>\n                <a className={`nav-link ${active === l ? \"active\" : \"\"}`} href=\"#\" onClick={(e) => { e.preventDefault(); setActive(l); setOpen(false); }}>{l}</a>\n              </li>\n            ))}\n          </ul>\n        </div>\n      </nav>\n      <p className=\"form-text mt-2 mb-0\">The menu closes after a link is chosen, and the long brand truncates on narrow screens.</p>\n    </div>\n  );\n}"
    },
    {
      "id": "resp-sidebar-drawer",
      "track": "responsive",
      "module": "Module 6 \u2013 Mobile UX",
      "title": "Sidebar drawer with backdrop",
      "summary": "Sidebar is static on lg and overlays on mobile.",
      "tags": ["responsive", "sidebar", "drawer"],
      "code": "import React, { useState } from \"react\";\n\nconst nav = [\"Dashboard\", \"Orders\", \"Customers\", \"Reports\"];\n\nfunction NavList({ onPick }: { onPick?: () => void }) {\n  return (\n    <ul className=\"nav flex-column\">\n      {nav.map((n) => (\n        <li className=\"nav-item\" key={n}>\n          <a className=\"nav-link px-0\" href=\"#\" onClick={(e) => { e.preventDefault(); onPick?.(); }}>{n}</a>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div className=\"position-relative border rounded overflow-hidden bg-white\" style={{ minHeight: 340 }}>\n      <header className=\"d-flex d-lg-none align-items-center justify-content-between border-bottom p-2\">\n        <strong>Acme</strong>\n        <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setOpen(true)} aria-label=\"Open menu\">\u2630</button>\n      </header>\n      <div className=\"d-flex\" style={{ minHeight: 300 }}>\n        <aside className=\"d-none d-lg-block border-end p-2\" style={{ width: 200 }}><NavList /></aside>\n        <main className=\"p-3 flex-fill\">\n          <h6>Dashboard</h6>\n          <p className=\"small text-secondary mb-0\">On mobile the menu opens as a drawer over the content.</p>\n        </main>\n      </div>\n      {open && (\n        <div className=\"position-absolute top-0 start-0 w-100 h-100 d-lg-none\" style={{ zIndex: 20 }}>\n          <div className=\"position-absolute top-0 start-0 w-100 h-100 bg-dark\" style={{ opacity: 0.4 }} onClick={() => setOpen(false)} />\n          <aside className=\"position-absolute top-0 start-0 h-100 bg-white border-end p-3 shadow\" style={{ width: 220, zIndex: 21 }}>\n            <button className=\"btn btn-sm btn-outline-secondary mb-3\" onClick={() => setOpen(false)}>Close</button>\n            <NavList onPick={() => setOpen(false)} />\n          </aside>\n        </div>\n      )}\n    </div>\n  );\n}"
    },
    {
      "id": "resp-sticky",
      "track": "responsive",
      "module": "Module 6 \u2013 Mobile UX",
      "title": "Sticky header and footer",
      "summary": "Header and footer stay visible inside a scroll box.",
      "tags": ["responsive", "sticky", "overflow"],
      "code": "import React from \"react\";\n\nconst rows = Array.from({ length: 12 }, (_, i) => ({\n  id: i + 1,\n  label: \"Item \" + (i + 1),\n  detail: \"Scrollable content row that demonstrates sticky positioning.\",\n}));\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 560 }}>\n      <h5 className=\"mb-2\">Sticky header and footer</h5>\n      <div className=\"border rounded overflow-auto\" style={{ height: 260 }}>\n        <div className=\"position-sticky top-0 bg-dark text-white p-2 d-flex justify-content-between\" style={{ zIndex: 2 }}>\n          <span>Header</span><span className=\"small\">sticky top</span>\n        </div>\n        <ul className=\"list-group list-group-flush\">\n          {rows.map((r) => (\n            <li className=\"list-group-item\" key={r.id}>\n              <strong>{r.label}</strong>\n              <div className=\"small text-secondary\">{r.detail}</div>\n            </li>\n          ))}\n        </ul>\n        <div className=\"position-sticky bottom-0 bg-primary text-white p-2 d-flex justify-content-between\">\n          <span>Footer</span><span className=\"small\">sticky bottom</span>\n        </div>\n      </div>\n      <p className=\"form-text mb-0 mt-2\">Sticky elements stick inside the nearest scrolling box, not the page. A parent with <code>overflow: hidden</code> would break this.</p>\n    </div>\n  );\n}"
    }
  ]
};
