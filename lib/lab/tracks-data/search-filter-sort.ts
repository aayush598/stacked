import type { LabTrack } from "../types";

export const search_filter_sortTrack: LabTrack = {
  "id": "search-filter-sort",
  "title": "Search, Filter and Sorting",
  "description": "Debounced search, multi-field filters, sorting and combined list views.",
  "priority": 6,
  "modules": [
    "Module 1 – Search",
    "Module 2 – Filters & Sorting",
    "Module 3 – Combined"
  ],
  "examples": [
    {
      "id": "sfs-search",
      "track": "search-filter-sort",
      "module": "Module 1 – Search",
      "title": "Debounced search",
      "summary": "Search a list with a debounce delay.",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\n\nconst items = [\"React\", \"Redux\", \"Router\", \"Next.js\", \"Remix\", \"Vue\", \"Svelte\", \"Angular\"];\n\nexport default function App() {\n  const [query, setQuery] = useState(\"\");\n  const [debounced, setDebounced] = useState(\"\");\n\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(query), 350);\n    return () => clearTimeout(id);\n  }, [query]);\n\n  const results = items.filter((i) => i.toLowerCase().includes(debounced.toLowerCase()));\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Search</h5>\n        <input className=\"form-control mb-2\" placeholder=\"Search libraries…\" value={query} onChange={(e) => setQuery(e.target.value)} />\n        <p className=\"small text-secondary\">Debounced: “{debounced}” · {results.length} result(s)</p>\n        <ul className=\"list-group\">\n          {results.map((r) => <li className=\"list-group-item\" key={r}>{r}</li>)}\n          {results.length === 0 && <li className=\"list-group-item text-secondary\">No matches.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "sfs-filter",
      "track": "search-filter-sort",
      "module": "Module 2 – Filters & Sorting",
      "title": "Category + price filter",
      "summary": "Filter by category and a maximum price.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst products = [\n  { name: \"Laptop\", category: \"Electronics\", price: 999 },\n  { name: \"Phone\", category: \"Electronics\", price: 699 },\n  { name: \"Novel\", category: \"Books\", price: 15 },\n  { name: \"T-Shirt\", category: \"Clothing\", price: 20 },\n  { name: \"Monitor\", category: \"Electronics\", price: 250 },\n];\n\nexport default function App() {\n  const [category, setCategory] = useState(\"\");\n  const [max, setMax] = useState(1000);\n\n  const rows = products.filter((p) => (!category || p.category === category) && p.price <= max);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 540 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Filters</h5>\n        <div className=\"row g-2 mb-3\">\n          <div className=\"col-6\">\n            <select className=\"form-select\" value={category} onChange={(e) => setCategory(e.target.value)}>\n              <option value=\"\">All categories</option>\n              <option>Electronics</option><option>Books</option><option>Clothing</option>\n            </select>\n          </div>\n          <div className=\"col-6\">\n            <label className=\"form-label small mb-0\">Max price: ${max}</label>\n            <input type=\"range\" className=\"form-range\" min={10} max={1000} step={10} value={max} onChange={(e) => setMax(Number(e.target.value))} />\n          </div>\n        </div>\n        <ul className=\"list-group\">\n          {rows.map((p) => (\n            <li className=\"list-group-item d-flex justify-content-between\" key={p.name}>\n              <span>{p.name} <span className=\"text-secondary small\">· {p.category}</span></span>\n              <strong>${p.price}</strong>\n            </li>\n          ))}\n          {rows.length === 0 && <li className=\"list-group-item text-secondary\">Nothing matches these filters.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "sfs-multi-filter",
      "track": "search-filter-sort",
      "module": "Module 2 – Filters & Sorting",
      "title": "Multi-select filters",
      "summary": "Checkbox groups combined with a select.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst products = [\n  { name: \"iPhone\", brand: \"Apple\", category: \"Phone\" },\n  { name: \"MacBook\", brand: \"Apple\", category: \"Laptop\" },\n  { name: \"Galaxy\", brand: \"Samsung\", category: \"Phone\" },\n  { name: \"ThinkPad\", brand: \"Lenovo\", category: \"Laptop\" },\n];\n\nexport default function App() {\n  const [brands, setBrands] = useState<string[]>([]);\n  const [category, setCategory] = useState(\"\");\n\n  function toggle(b: string) {\n    setBrands((s) => (s.includes(b) ? s.filter((x) => x !== b) : [...s, b]));\n  }\n\n  const rows = products.filter(\n    (p) => (brands.length === 0 || brands.includes(p.brand)) && (!category || p.category === category)\n  );\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 540 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Multi filters</h5>\n        <div className=\"mb-2\">\n          <label className=\"form-label small\">Brands</label>\n          <div>\n            {[\"Apple\", \"Samsung\", \"Lenovo\"].map((b) => (\n              <div className=\"form-check form-check-inline\" key={b}>\n                <input className=\"form-check-input\" type=\"checkbox\" id={`b-${b}`} checked={brands.includes(b)} onChange={() => toggle(b)} />\n                <label className=\"form-check-label\" htmlFor={`b-${b}`}>{b}</label>\n              </div>\n            ))}\n          </div>\n        </div>\n        <select className=\"form-select mb-3\" value={category} onChange={(e) => setCategory(e.target.value)}>\n          <option value=\"\">All categories</option><option>Phone</option><option>Laptop</option>\n        </select>\n        <ul className=\"list-group\">\n          {rows.map((p) => (\n            <li className=\"list-group-item d-flex justify-content-between\" key={p.name}>\n              {p.name}<span className=\"badge bg-secondary\">{p.brand}</span>\n            </li>\n          ))}\n          {rows.length === 0 && <li className=\"list-group-item text-secondary\">No results.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "sfs-sort",
      "track": "search-filter-sort",
      "module": "Module 2 – Filters & Sorting",
      "title": "Sorting",
      "summary": "Sort by name, price or rating.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst rows = [\n  { name: \"Laptop\", price: 999, rating: 4.5 },\n  { name: \"Mouse\", price: 20, rating: 4.8 },\n  { name: \"Monitor\", price: 250, rating: 4.2 },\n  { name: \"Keyboard\", price: 45, rating: 4.6 },\n];\n\nexport default function App() {\n  const [sort, setSort] = useState(\"name\");\n\n  const sorted = [...rows].sort((a, b) => {\n    if (sort === \"price\") return a.price - b.price;\n    if (sort === \"rating\") return b.rating - a.rating;\n    return a.name.localeCompare(b.name);\n  });\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 540 }}>\n      <div className=\"card-body\">\n        <div className=\"d-flex justify-content-between align-items-center mb-3\">\n          <h5 className=\"mb-0\">Sort</h5>\n          <select className=\"form-select form-select-sm\" style={{ width: 160 }} value={sort} onChange={(e) => setSort(e.target.value)}>\n            <option value=\"name\">Name</option>\n            <option value=\"price\">Price (low → high)</option>\n            <option value=\"rating\">Rating (high → low)</option>\n          </select>\n        </div>\n        <ul className=\"list-group\">\n          {sorted.map((r) => (\n            <li className=\"list-group-item d-flex justify-content-between\" key={r.name}>\n              <span>{r.name} <span className=\"text-warning small\">★ {r.rating}</span></span>\n              <strong>${r.price}</strong>\n            </li>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "sfs-combined",
      "track": "search-filter-sort",
      "module": "Module 3 – Combined",
      "title": "Search + filter + sort",
      "summary": "Combine all three with a result count and reset.",
      "tags": [],
      "code": "import React, { useMemo, useState } from \"react\";\n\nconst data = [\n  { name: \"Laptop\", category: \"Electronics\", price: 999 },\n  { name: \"Phone\", category: \"Electronics\", price: 699 },\n  { name: \"Novel\", category: \"Books\", price: 15 },\n  { name: \"T-Shirt\", category: \"Clothing\", price: 20 },\n  { name: \"Monitor\", category: \"Electronics\", price: 250 },\n];\n\nexport default function App() {\n  const [q, setQ] = useState(\"\");\n  const [category, setCategory] = useState(\"\");\n  const [sort, setSort] = useState(\"relevance\");\n\n  const rows = useMemo(() => {\n    let out = data.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) && (!category || p.category === category));\n    if (sort === \"low\") out = [...out].sort((a, b) => a.price - b.price);\n    if (sort === \"high\") out = [...out].sort((a, b) => b.price - a.price);\n    return out;\n  }, [q, category, sort]);\n\n  function reset() { setQ(\"\"); setCategory(\"\"); setSort(\"relevance\"); }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 600 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Search + filter + sort</h5>\n        <div className=\"row g-2 mb-3\">\n          <div className=\"col-12 col-md-5\"><input className=\"form-control\" placeholder=\"Search…\" value={q} onChange={(e) => setQ(e.target.value)} /></div>\n          <div className=\"col-6 col-md-3\">\n            <select className=\"form-select\" value={category} onChange={(e) => setCategory(e.target.value)}>\n              <option value=\"\">All</option><option>Electronics</option><option>Books</option><option>Clothing</option>\n            </select>\n          </div>\n          <div className=\"col-6 col-md-4\">\n            <select className=\"form-select\" value={sort} onChange={(e) => setSort(e.target.value)}>\n              <option value=\"relevance\">Relevance</option><option value=\"low\">Price ↑</option><option value=\"high\">Price ↓</option>\n            </select>\n          </div>\n        </div>\n        <div className=\"d-flex justify-content-between align-items-center mb-2\">\n          <span className=\"small text-secondary\">{rows.length} result(s)</span>\n          <button className=\"btn btn-sm btn-outline-secondary\" onClick={reset}>Reset</button>\n        </div>\n        <ul className=\"list-group\">\n          {rows.map((p) => (\n            <li className=\"list-group-item d-flex justify-content-between\" key={p.name}>\n              <span>{p.name} <span className=\"text-secondary small\">· {p.category}</span></span><strong>${p.price}</strong>\n            </li>\n          ))}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "sfs-empty",
      "track": "search-filter-sort",
      "module": "Module 3 – Combined",
      "title": "Empty / no-results state",
      "summary": "Show a helpful empty state with a reset action.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nconst items = [\"Apple\", \"Banana\", \"Cherry\", \"Mango\"];\n\nexport default function App() {\n  const [q, setQ] = useState(\"\");\n  const results = items.filter((i) => i.toLowerCase().includes(q.toLowerCase()));\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Empty state</h5>\n        <input className=\"form-control mb-3\" placeholder=\"Search fruit…\" value={q} onChange={(e) => setQ(e.target.value)} />\n        {results.length > 0 ? (\n          <ul className=\"list-group\">\n            {results.map((r) => <li className=\"list-group-item\" key={r}>{r}</li>)}\n          </ul>\n        ) : (\n          <div className=\"text-center border rounded p-4\">\n            <div className=\"display-6 mb-2\">∅</div>\n            <p className=\"mb-2 text-secondary\">No results for “{q}”.</p>\n            <button className=\"btn btn-sm btn-primary\" onClick={() => setQ(\"\")}>Clear search</button>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
