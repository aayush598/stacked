import type { LabTrack } from "../types";

export const chartsTrack: LabTrack = {
  "id": "charts",
  "title": "Charts and Statistics",
  "description": "Build bar, line, donut and progress charts with plain React and SVG/CSS — no chart libraries.",
  "priority": 17,
  "modules": [
    "Module 1 – Bars & Lines",
    "Module 2 – Donut & Stats",
    "Module 3 – Progress"
  ],
  "examples": [
    {
      "id": "chart-bar",
      "track": "charts",
      "module": "Module 1 – Bars & Lines",
      "title": "Bar chart",
      "summary": "CSS bars scaled to the maximum value.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst data = [\n  { label: \"Mon\", value: 12 },\n  { label: \"Tue\", value: 19 },\n  { label: \"Wed\", value: 8 },\n  { label: \"Thu\", value: 22 },\n  { label: \"Fri\", value: 16 },\n];\nconst max = Math.max(...data.map((d) => d.value));\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 560 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Weekly sales</h5>\n        <div className=\"d-flex align-items-end gap-3\" style={{ height: 200 }}>\n          {data.map((d) => (\n            <div className=\"flex-fill text-center d-flex flex-column justify-content-end h-100\" key={d.label}>\n              <div className=\"small text-secondary\">{d.value}</div>\n              <div className=\"bg-primary rounded-top\" style={{ height: `${(d.value / max) * 140}px` }} />\n              <div className=\"small mt-1\">{d.label}</div>\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "chart-line",
      "track": "charts",
      "module": "Module 1 – Bars & Lines",
      "title": "Line chart (SVG)",
      "summary": "Plot points on a polyline.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst values = [5, 9, 6, 12, 10, 15, 13];\nconst w = 320, h = 140, pad = 20;\nconst max = Math.max(...values);\nconst points = values.map((v, i) => {\n  const x = pad + (i * (w - pad * 2)) / (values.length - 1);\n  const y = h - pad - (v / max) * (h - pad * 2);\n  return `${x},${y}`;\n}).join(\" \");\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Trend</h5>\n        <svg viewBox={`0 0 ${w} ${h}`} className=\"w-100 border rounded\" role=\"img\" aria-label=\"Line chart\">\n          <polyline points={points} fill=\"none\" stroke=\"#0d6efd\" strokeWidth={3} />\n          {values.map((v, i) => {\n            const x = pad + (i * (w - pad * 2)) / (values.length - 1);\n            const y = h - pad - (v / max) * (h - pad * 2);\n            return <circle key={i} cx={x} cy={y} r={4} fill=\"#0d6efd\" />;\n          })}\n        </svg>\n        <p className=\"form-text mb-0 mt-2\">Plain SVG polyline — no chart library.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "chart-donut",
      "track": "charts",
      "module": "Module 2 – Donut & Stats",
      "title": "Donut chart",
      "summary": "SVG stroke-dasharray donut.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst segments = [\n  { label: \"Direct\", value: 45, color: \"#0d6efd\" },\n  { label: \"Search\", value: 30, color: \"#198754\" },\n  { label: \"Social\", value: 25, color: \"#ffc107\" },\n];\nconst total = segments.reduce((s, x) => s + x.value, 0);\nconst r = 50, c = 2 * Math.PI * r;\nlet offset = 0;\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body text-center\">\n        <h5 className=\"mb-3\">Traffic sources</h5>\n        <svg viewBox=\"0 0 140 140\" width={160} height={160}>\n          <g transform=\"translate(70,70) rotate(-90)\">\n            {segments.map((s) => {\n              const len = (s.value / total) * c;\n              const el = <circle key={s.label} r={r} fill=\"none\" stroke={s.color} strokeWidth={20} strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />;\n              offset += len;\n              return el;\n            })}\n          </g>\n          <text x=\"70\" y=\"75\" textAnchor=\"middle\" fontSize=\"16\" fontWeight=\"600\">{total}%</text>\n        </svg>\n        <div className=\"d-flex justify-content-center gap-3 mt-2 small\">\n          {segments.map((s) => <span key={s.label}><span className=\"d-inline-block rounded-circle me-1\" style={{ width: 10, height: 10, background: s.color }} />{s.label}</span>)}\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "chart-stats",
      "track": "charts",
      "module": "Module 2 – Donut & Stats",
      "title": "Stat cards with sparklines",
      "summary": "KPI cards with tiny inline trends.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst cards = [\n  { label: \"Revenue\", value: \"$18.2k\", change: \"+12%\", up: true, series: [4, 7, 5, 9, 8, 12] },\n  { label: \"Users\", value: \"3,410\", change: \"+6%\", up: true, series: [3, 4, 6, 5, 7, 8] },\n  { label: \"Refunds\", value: \"24\", change: \"-3%\", up: false, series: [9, 7, 8, 5, 6, 4] },\n];\n\nexport default function App() {\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 760 }}>\n      <div className=\"row g-3\">\n        {cards.map((c) => {\n          const max = Math.max(...c.series);\n          const pts = c.series.map((v, i) => `${i * 20},${30 - (v / max) * 25}`).join(\" \");\n          return (\n            <div className=\"col-md-4\" key={c.label}>\n              <div className=\"card shadow-sm h-100\">\n                <div className=\"card-body\">\n                  <div className=\"text-secondary small\">{c.label}</div>\n                  <div className=\"fs-4 fw-semibold\">{c.value}</div>\n                  <div className={`small ${c.up ? \"text-success\" : \"text-danger\"}`}>{c.up ? \"▲\" : \"▼\"} {c.change}</div>\n                  <svg viewBox=\"0 0 100 30\" className=\"w-100 mt-2\" height={30}>\n                    <polyline points={pts} fill=\"none\" stroke={c.up ? \"#198754\" : \"#dc3545\"} strokeWidth={2} />\n                  </svg>\n                </div>\n              </div>\n            </div>\n          );\n        })}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "chart-progress",
      "track": "charts",
      "module": "Module 3 – Progress",
      "title": "Progress statistics",
      "summary": "Progress bars with labels and values.",
      "tags": [],
      "code": "import React from \"react\";\n\nconst goals = [\n  { label: \"Tasks completed\", value: 72 },\n  { label: \"Sprint progress\", value: 45 },\n  { label: \"Storage used\", value: 88 },\n];\n\nexport default function App() {\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Progress</h5>\n        {goals.map((g) => (\n          <div className=\"mb-3\" key={g.label}>\n            <div className=\"d-flex justify-content-between small mb-1\"><span>{g.label}</span><span>{g.value}%</span></div>\n            <div className=\"progress\" style={{ height: 10 }}>\n              <div className={`progress-bar ${g.value > 80 ? \"bg-danger\" : g.value > 60 ? \"bg-success\" : \"bg-primary\"}`} style={{ width: `${g.value}%` }} />\n            </div>\n          </div>\n        ))}\n        <p className=\"form-text mb-0\">Color changes with the percentage.</p>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
