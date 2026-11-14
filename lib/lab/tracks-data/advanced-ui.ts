import type { LabTrack } from "../types";

export const advanced_uiTrack: LabTrack = {
  "id": "advanced-ui",
  "title": "Advanced UI Components",
  "description": "Accordion, tabs, dropdown, tooltip, carousel and stepper built from scratch.",
  "priority": 20,
  "modules": [
    "Module 1 – Disclosure & Tabs",
    "Module 2 – Menus & Overlays",
    "Module 3 – Carousel & Stepper"
  ],
  "examples": [
    {
      "id": "ui-accordion",
      "track": "advanced-ui",
      "module": "Module 1 – Disclosure & Tabs",
      "title": "Accordion",
      "summary": "Expand one section at a time.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst faqs = [\n  { q: \"What is React?\", a: \"A library for building user interfaces with components.\" },\n  { q: \"What are hooks?\", a: \"Functions that let components use state and lifecycle features.\" },\n  { q: \"Why TypeScript?\", a: \"It adds static types that catch errors early.\" },\n];\n\nexport default function App() {\n  const [open, setOpen] = useState<number | null>(0);\n  return (\n    <div className=\"accordion mx-auto\" style={{ maxWidth: 520 }}>\n      {faqs.map((f, i) => (\n        <div className=\"accordion-item\" key={f.q}>\n          <h2 className=\"accordion-header\">\n            <button className={`accordion-button ${open === i ? \"\" : \"collapsed\"}`} onClick={() => setOpen(open === i ? null : i)}>{f.q}</button>\n          </h2>\n          {open === i && <div className=\"accordion-body text-secondary small\">{f.a}</div>}\n        </div>\n      ))}\n    </div>\n  );\n}\n"
    },
    {
      "id": "ui-tabs",
      "track": "advanced-ui",
      "module": "Module 1 – Disclosure & Tabs",
      "title": "Tabs with pills",
      "summary": "Pill tabs with dynamic content.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst tabs = [\n  { id: \"profile\", label: \"Profile\", body: \"Profile settings and avatar.\" },\n  { id: \"account\", label: \"Account\", body: \"Email, password and security.\" },\n  { id: \"billing\", label: \"Billing\", body: \"Invoices and payment methods.\" },\n];\n\nexport default function App() {\n  const [active, setActive] = useState(\"profile\");\n  const current = tabs.find((t) => t.id === active);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <ul className=\"nav nav-pills mb-3\">\n          {tabs.map((t) => (\n            <li className=\"nav-item\" key={t.id}>\n              <button className={`nav-link ${active === t.id ? \"active\" : \"\"}`} onClick={() => setActive(t.id)}>{t.label}</button>\n            </li>\n          ))}\n        </ul>\n        <div className=\"alert alert-light border mb-0\">{current?.body}</div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ui-dropdown",
      "track": "advanced-ui",
      "module": "Module 2 – Menus & Overlays",
      "title": "Dropdown menu",
      "summary": "Toggle a menu and choose an action.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [open, setOpen] = useState(false);\n  const [action, setAction] = useState(\"\");\n  const items = [\"Edit\", \"Duplicate\", \"Archive\", \"Delete\"];\n\n  function pick(a: string) { setAction(a); setOpen(false); }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Dropdown</h5>\n        <div className=\"position-relative d-inline-block\">\n          <button className=\"btn btn-outline-secondary\" onClick={() => setOpen((o) => !o)}>Actions ▾</button>\n          {open && (\n            <div className=\"border rounded bg-white shadow-sm position-absolute mt-1 py-1\" style={{ minWidth: 160, zIndex: 10 }}>\n              {items.map((i) => (\n                <button key={i} className={`dropdown-item ${i === \"Delete\" ? \"text-danger\" : \"\"}`} onClick={() => pick(i)}>{i}</button>\n              ))}\n            </div>\n          )}\n        </div>\n        {action && <div className=\"alert alert-info mt-3 mb-0 py-2\">Selected: {action}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ui-tooltip",
      "track": "advanced-ui",
      "module": "Module 2 – Menus & Overlays",
      "title": "Tooltip",
      "summary": "Show a tooltip on hover or focus.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [show, setShow] = useState(false);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body text-center\">\n        <h5 className=\"mb-4\">Tooltip</h5>\n        <div className=\"position-relative d-inline-block\">\n          <button\n            className=\"btn btn-primary\"\n            onMouseEnter={() => setShow(true)}\n            onMouseLeave={() => setShow(false)}\n            onFocus={() => setShow(true)}\n            onBlur={() => setShow(false)}\n          >\n            Hover me\n          </button>\n          {show && (\n            <div className=\"position-absolute bg-dark text-white rounded px-2 py-1 small\" style={{ bottom: \"calc(100% + 6px)\", left: \"50%\", transform: \"translateX(-50%)\", whiteSpace: \"nowrap\" }}>\n              Helpful tooltip text\n            </div>\n          )}\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ui-carousel",
      "track": "advanced-ui",
      "module": "Module 3 – Carousel & Stepper",
      "title": "Carousel",
      "summary": "Prev/next slides with dots.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst slides = [\n  { title: \"Slide one\", color: \"bg-primary\" },\n  { title: \"Slide two\", color: \"bg-success\" },\n  { title: \"Slide three\", color: \"bg-warning\" },\n];\n\nexport default function App() {\n  const [i, setI] = useState(0);\n  const slide = slides[i];\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Carousel</h5>\n        <div className={`${slide.color} text-white rounded d-flex align-items-center justify-content-center`} style={{ height: 160 }}>\n          <strong>{slide.title}</strong>\n        </div>\n        <div className=\"d-flex justify-content-between align-items-center mt-3\">\n          <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setI((i - 1 + slides.length) % slides.length)}>Prev</button>\n          <div className=\"d-flex gap-1\">\n            {slides.map((s, idx) => (\n              <button key={s.title} className={`btn btn-sm rounded-circle ${idx === i ? \"btn-primary\" : \"btn-outline-secondary\"}`} style={{ width: 12, height: 12, padding: 0 }} onClick={() => setI(idx)} aria-label={`Go to ${s.title}`} />\n            ))}\n          </div>\n          <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => setI((i + 1) % slides.length)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "ui-stepper",
      "track": "advanced-ui",
      "module": "Module 3 – Carousel & Stepper",
      "title": "Stepper",
      "summary": "Step through a process with progress.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst steps = [\"Account\", \"Profile\", \"Confirm\"];\n\nexport default function App() {\n  const [step, setStep] = useState(0);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Stepper</h5>\n        <div className=\"d-flex align-items-center mb-3\">\n          {steps.map((s, i) => (\n            <React.Fragment key={s}>\n              <div className={`rounded-circle d-flex align-items-center justify-content-center ${i <= step ? \"bg-primary text-white\" : \"bg-body-secondary text-secondary\"}`} style={{ width: 30, height: 30, fontSize: 13 }}>{i + 1}</div>\n              {i < steps.length - 1 && <div className={`flex-fill mx-1 ${i < step ? \"bg-primary\" : \"bg-body-secondary\"}`} style={{ height: 3 }} />}\n            </React.Fragment>\n          ))}\n        </div>\n        <div className=\"alert alert-light border\">\n          Step {step + 1}: <strong>{steps[step]}</strong>\n          <p className=\"mb-0 small text-secondary\">Content for the {steps[step].toLowerCase()} step.</p>\n        </div>\n        <div className=\"d-flex gap-2\">\n          <button className=\"btn btn-outline-secondary\" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>\n          <button className=\"btn btn-primary\" disabled={step === steps.length - 1} onClick={() => setStep(step + 1)}>Next</button>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
