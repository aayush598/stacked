import type { LabTrack } from "../types";

export const notificationsTrack: LabTrack = {
  "id": "notifications",
  "title": "Notifications and Alerts",
  "description": "Inline alerts, toasts, a notification bell, notification center and confirmations.",
  "priority": 18,
  "modules": [
    "Module 1 – Alerts",
    "Module 2 – Toasts",
    "Module 3 – Notification Center"
  ],
  "examples": [
    {
      "id": "notif-alert",
      "track": "notifications",
      "module": "Module 1 – Alerts",
      "title": "Inline alerts",
      "summary": "Success, info, warning and danger alerts.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst kinds = [\"success\", \"info\", \"warning\", \"danger\"] as const;\ntype Kind = typeof kinds[number];\n\nexport default function App() {\n  const [kind, setKind] = useState<Kind>(\"success\");\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Alerts</h5>\n        <div className=\"d-flex gap-2 mb-3 flex-wrap\">\n          {kinds.map((k) => (\n            <button key={k} className={`btn btn-sm btn-outline-${k}`} onClick={() => setKind(k)}>{k}</button>\n          ))}\n        </div>\n        <div className={`alert alert-${kind} mb-0`}>\n          This is a <strong>{kind}</strong> alert. Use it for inline feedback.\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "notif-toast",
      "track": "notifications",
      "module": "Module 2 – Toasts",
      "title": "Toast stack",
      "summary": "Stack auto-dismissing toasts.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface T { id: number; text: string; tone: string; }\n\nexport default function App() {\n  const [toasts, setToasts] = useState<T[]>([]);\n\n  function push(text: string, tone: string) {\n    const id = Date.now();\n    setToasts((p) => [...p, { id, text, tone }]);\n    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 2600);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Toasts</h5>\n        <div className=\"d-flex gap-2\">\n          <button className=\"btn btn-success\" onClick={() => push(\"Saved!\", \"success\")}>Success</button>\n          <button className=\"btn btn-warning\" onClick={() => push(\"Check your input\", \"warning\")}>Warning</button>\n          <button className=\"btn btn-danger\" onClick={() => push(\"Request failed\", \"danger\")}>Error</button>\n        </div>\n      </div>\n      <div className=\"position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2\" style={{ zIndex: 1080 }}>\n        {toasts.map((t) => (\n          <div key={t.id} className={`alert alert-${t.tone} shadow-sm mb-0 py-2`}>{t.text}</div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "notif-bell",
      "track": "notifications",
      "module": "Module 3 – Notification Center",
      "title": "Notification bell",
      "summary": "Bell with unread badge and dropdown.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst initial = [\n  { id: 1, text: \"New order #1001\", read: false },\n  { id: 2, text: \"Payment received\", read: false },\n  { id: 3, text: \"Weekly report ready\", read: true },\n];\n\nexport default function App() {\n  const [items, setItems] = useState(initial);\n  const [open, setOpen] = useState(false);\n  const unread = items.filter((i) => !i.read).length;\n\n  function markAll() { setItems((p) => p.map((i) => ({ ...i, read: true }))); }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center\">\n          <h5 className=\"mb-0\">Notifications</h5>\n          <div className=\"position-relative\">\n            <button className=\"btn btn-outline-secondary\" onClick={() => setOpen((o) => !o)}>\n              🔔 {unread > 0 && <span className=\"badge bg-danger ms-1\">{unread}</span>}\n            </button>\n            {open && (\n              <div className=\"border rounded bg-white shadow-sm position-absolute end-0 mt-1 p-2\" style={{ width: 260, zIndex: 10 }}>\n                {items.map((i) => (\n                  <div className={`small py-1 ${i.read ? \"text-secondary\" : \"fw-semibold\"}`} key={i.id}>• {i.text}</div>\n                ))}\n                <button className=\"btn btn-sm btn-primary w-100 mt-2\" onClick={markAll}>Mark all read</button>\n              </div>\n            )}\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "notif-center",
      "track": "notifications",
      "module": "Module 3 – Notification Center",
      "title": "Notification list",
      "summary": "Read/unread list with actions.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface N { id: number; title: string; read: boolean; }\n\nexport default function App() {\n  const [items, setItems] = useState<N[]>([\n    { id: 1, title: \"Server deployment finished\", read: false },\n    { id: 2, title: \"New comment on your post\", read: false },\n    { id: 3, title: \"Password changed\", read: true },\n  ]);\n\n  function toggle(id: number) { setItems((p) => p.map((n) => (n.id === id ? { ...n, read: !n.read } : n))); }\n  const unread = items.filter((i) => !i.read).length;\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center mb-2\">\n          <h5 className=\"mb-0\">Inbox</h5>\n          <span className=\"badge bg-primary\">{unread} unread</span>\n        </div>\n        <ul className=\"list-group\">\n          {items.map((n) => (\n            <li className={`list-group-item d-flex justify-content-between align-items-center ${n.read ? \"text-secondary\" : \"\"}`} key={n.id}>\n              <span>{n.read ? \"○\" : \"●\"} {n.title}</span>\n              <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => toggle(n.id)}>{n.read ? \"Mark unread\" : \"Mark read\"}</button>\n            </li>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "notif-confirm",
      "track": "notifications",
      "module": "Module 3 – Notification Center",
      "title": "Confirmation dialog",
      "summary": "Ask before a destructive action.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  const [done, setDone] = useState(\"\");\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body text-center\">\n        <h5>Danger zone</h5>\n        <button className=\"btn btn-danger\" onClick={() => setOpen(true)}>Delete account</button>\n        {done && <div className=\"alert alert-info mt-3 mb-0 py-2\">{done}</div>}\n      </div>\n      {open && (\n        <div className=\"modal d-block\" style={{ background: \"rgba(0,0,0,.5)\" }}>\n          <div className=\"modal-dialog modal-dialog-centered modal-sm\">\n            <div className=\"modal-content\">\n              <div className=\"modal-body text-center\">\n                <div className=\"fs-3\">⚠️</div>\n                <p className=\"mb-0\">This action cannot be undone.</p>\n              </div>\n              <div className=\"modal-footer justify-content-center\">\n                <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setOpen(false)}>Cancel</button>\n                <button className=\"btn btn-sm btn-danger\" onClick={() => { setOpen(false); setDone(\"Account deletion cancelled in this demo.\"); }}>Confirm</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n}\n"
    }
  ]
};
