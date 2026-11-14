import type { LabTrack } from "../types";

export const modalsTrack: LabTrack = {
  "id": "modals",
  "title": "Modals and Popups",
  "description": "Controlled modals, confirmations, form modals, nested dialogs, toasts and drawers.",
  "priority": 10,
  "modules": [
    "Module 1 – Basic Modals",
    "Module 2 – Forms & Confirmation",
    "Module 3 – Toasts & Drawers"
  ],
  "examples": [
    {
      "id": "modal-basic",
      "track": "modals",
      "module": "Module 1 – Basic Modals",
      "title": "Basic modal",
      "summary": "Open and close a controlled modal overlay.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body text-center\">\n        <h5>Modal demo</h5>\n        <button className=\"btn btn-primary\" onClick={() => setOpen(true)}>Open modal</button>\n      </div>\n      {open && (\n        <div className=\"modal d-block\" style={{ background: \"rgba(0,0,0,.5)\" }} role=\"dialog\" onClick={() => setOpen(false)}>\n          <div className=\"modal-dialog modal-dialog-centered\" onClick={(e) => e.stopPropagation()}>\n            <div className=\"modal-content\">\n              <div className=\"modal-header\">\n                <h5 className=\"modal-title\">Hello</h5>\n                <button className=\"btn-close\" onClick={() => setOpen(false)} />\n              </div>\n              <div className=\"modal-body\">This is a controlled modal built without extra libraries.</div>\n              <div className=\"modal-footer\">\n                <button className=\"btn btn-secondary\" onClick={() => setOpen(false)}>Close</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n}\n"
    },
    {
      "id": "modal-confirm",
      "track": "modals",
      "module": "Module 2 – Forms & Confirmation",
      "title": "Confirm delete modal",
      "summary": "Ask for confirmation before deleting.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [items, setItems] = useState([\"Report A\", \"Report B\", \"Report C\"]);\n  const [target, setTarget] = useState<string | null>(null);\n\n  function confirm() {\n    setItems((p) => p.filter((i) => i !== target));\n    setTarget(null);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Confirm delete</h5>\n        <ul className=\"list-group\">\n          {items.map((i) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={i}>\n              {i}<button className=\"btn btn-sm btn-outline-danger\" onClick={() => setTarget(i)}>Delete</button>\n            </li>\n          ))}\n          {items.length === 0 && <li className=\"list-group-item text-secondary\">Nothing left.</li>}\n        </ul>\n      </div>\n      {target && (\n        <div className=\"modal d-block\" style={{ background: \"rgba(0,0,0,.5)\" }}>\n          <div className=\"modal-dialog modal-dialog-centered\">\n            <div className=\"modal-content\">\n              <div className=\"modal-body\">Delete <strong>{target}</strong>? This cannot be undone.</div>\n              <div className=\"modal-footer\">\n                <button className=\"btn btn-outline-secondary\" onClick={() => setTarget(null)}>Cancel</button>\n                <button className=\"btn btn-danger\" onClick={confirm}>Delete</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n}\n"
    },
    {
      "id": "modal-form",
      "track": "modals",
      "module": "Module 2 – Forms & Confirmation",
      "title": "Form inside a modal",
      "summary": "Collect data in a modal and add it to a list.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  const [items, setItems] = useState<string[]>([]);\n  const [name, setName] = useState(\"\");\n\n  function save(e: FormEvent) {\n    e.preventDefault();\n    if (!name.trim()) return;\n    setItems((p) => [...p, name.trim()]);\n    setName(\"\"); setOpen(false);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center mb-3\">\n          <h5 className=\"mb-0\">Modal form</h5>\n          <button className=\"btn btn-primary btn-sm\" onClick={() => setOpen(true)}>Add item</button>\n        </div>\n        <ul className=\"list-group\">\n          {items.map((i) => <li className=\"list-group-item\" key={i}>{i}</li>)}\n          {items.length === 0 && <li className=\"list-group-item text-secondary\">No items yet.</li>}\n        </ul>\n      </div>\n      {open && (\n        <div className=\"modal d-block\" style={{ background: \"rgba(0,0,0,.5)\" }}>\n          <div className=\"modal-dialog modal-dialog-centered\">\n            <form className=\"modal-content\" onSubmit={save}>\n              <div className=\"modal-header\"><h5 className=\"modal-title\">New item</h5><button type=\"button\" className=\"btn-close\" onClick={() => setOpen(false)} /></div>\n              <div className=\"modal-body\"><input className=\"form-control\" placeholder=\"Item name\" value={name} onChange={(e) => setName(e.target.value)} autoFocus /></div>\n              <div className=\"modal-footer\">\n                <button type=\"button\" className=\"btn btn-outline-secondary\" onClick={() => setOpen(false)}>Cancel</button>\n                <button className=\"btn btn-primary\">Save</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n}\n"
    },
    {
      "id": "modal-nested",
      "track": "modals",
      "module": "Module 2 – Forms & Confirmation",
      "title": "Nested confirmation dialog",
      "summary": "Open a second dialog from inside a modal.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [settings, setSettings] = useState(false);\n  const [confirm, setConfirm] = useState(false);\n  const [saved, setSaved] = useState(\"\");\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body text-center\">\n        <h5>Nested dialogs</h5>\n        <button className=\"btn btn-primary\" onClick={() => setSettings(true)}>Open settings</button>\n        {saved && <div className=\"alert alert-success mt-3 mb-0 py-2\">{saved}</div>}\n      </div>\n      {settings && (\n        <div className=\"modal d-block\" style={{ background: \"rgba(0,0,0,.5)\" }}>\n          <div className=\"modal-dialog modal-dialog-centered\">\n            <div className=\"modal-content\">\n              <div className=\"modal-header\"><h5 className=\"modal-title\">Settings</h5><button className=\"btn-close\" onClick={() => setSettings(false)} /></div>\n              <div className=\"modal-body\">\n                <p className=\"mb-2\">Enable notifications?</p>\n                <button className=\"btn btn-outline-primary btn-sm\" onClick={() => setConfirm(true)}>Enable…</button>\n              </div>\n              <div className=\"modal-footer\"><button className=\"btn btn-secondary\" onClick={() => setSettings(false)}>Close</button></div>\n            </div>\n          </div>\n        </div>\n      )}\n      {confirm && (\n        <div className=\"modal d-block\" style={{ background: \"rgba(0,0,0,.65)\", zIndex: 1060 }}>\n          <div className=\"modal-dialog modal-sm modal-dialog-centered\">\n            <div className=\"modal-content\">\n              <div className=\"modal-body\">Confirm enabling notifications?</div>\n              <div className=\"modal-footer\">\n                <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setConfirm(false)}>No</button>\n                <button className=\"btn btn-sm btn-success\" onClick={() => { setConfirm(false); setSettings(false); setSaved(\"Notifications enabled.\"); }}>Yes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n}\n"
    },
    {
      "id": "modal-toast",
      "track": "modals",
      "module": "Module 3 – Toasts & Drawers",
      "title": "Toast notifications",
      "summary": "Stack toasts and auto-dismiss them.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface Toast { id: number; text: string; }\n\nexport default function App() {\n  const [toasts, setToasts] = useState<Toast[]>([]);\n\n  function push(text: string) {\n    const id = Date.now();\n    setToasts((p) => [...p, { id, text }]);\n    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 2500);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Toasts</h5>\n        <div className=\"d-flex gap-2\">\n          <button className=\"btn btn-success\" onClick={() => push(\"Saved successfully\")}>Success</button>\n          <button className=\"btn btn-danger\" onClick={() => push(\"Something went wrong\")}>Error</button>\n        </div>\n      </div>\n      <div className=\"position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2\" style={{ zIndex: 1080 }}>\n        {toasts.map((t) => (\n          <div key={t.id} className=\"toast show align-items-center text-bg-dark border-0\">\n            <div className=\"d-flex\">\n              <div className=\"toast-body\">{t.text}</div>\n              <button className=\"btn-close btn-close-white me-2 m-auto\" onClick={() => setToasts((p) => p.filter((x) => x.id !== t.id))} />\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "modal-drawer",
      "track": "modals",
      "module": "Module 3 – Toasts & Drawers",
      "title": "Offcanvas drawer",
      "summary": "Slide-in drawer with a backdrop.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body text-center\">\n        <h5>Drawer</h5>\n        <button className=\"btn btn-primary\" onClick={() => setOpen(true)}>Open drawer</button>\n      </div>\n      {open && <div className=\"position-fixed top-0 start-0 w-100 h-100\" style={{ background: \"rgba(0,0,0,.4)\", zIndex: 1040 }} onClick={() => setOpen(false)} />}\n      <div className=\"position-fixed top-0 end-0 h-100 bg-white shadow\" style={{ width: 280, transform: open ? \"translateX(0)\" : \"translateX(100%)\", transition: \"transform .25s ease\", zIndex: 1050 }}>\n        <div className=\"d-flex justify-content-between align-items-center p-3 border-bottom\">\n          <strong>Menu</strong><button className=\"btn-close\" onClick={() => setOpen(false)} />\n        </div>\n        <ul className=\"nav flex-column p-3\">\n          <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Profile</a></li>\n          <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Orders</a></li>\n          <li className=\"nav-item\"><a className=\"nav-link px-0\" href=\"#\">Sign out</a></li>\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
