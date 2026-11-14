import type { LabTrack } from "../types";

export const axiosTrack: LabTrack = {
  "id": "axios",
  "title": "API Integration with Axios",
  "description": "GET, POST, PUT, DELETE, params, headers, error handling and concurrent requests. API calls are mocked in the playground.",
  "priority": 4,
  "modules": [
    "Module 1 – GET & Loading",
    "Module 2 – Create, Update & Delete",
    "Module 3 – Headers, Errors & Concurrency"
  ],
  "examples": [
    {
      "id": "axios-get",
      "track": "axios",
      "module": "Module 1 – GET & Loading",
      "title": "GET with loading & error",
      "summary": "Fetch a list on mount with loading and error states.",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\nimport axios from \"axios\";\n\ninterface Item { id: number; name: string; }\n\nexport default function App() {\n  const [items, setItems] = useState<Item[]>([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(\"\");\n\n  useEffect(() => {\n    let alive = true;\n    axios.get(\"/api/items\")\n      .then((res) => { if (alive) setItems(res.data.data); })\n      .catch(() => { if (alive) setError(\"Failed to load items\"); })\n      .finally(() => { if (alive) setLoading(false); });\n    return () => { alive = false; };\n  }, []);\n\n  if (loading) return <div className=\"spinner-border text-primary\" role=\"status\" />;\n  if (error) return <div className=\"alert alert-danger\">{error}</div>;\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Fetched items</h5>\n        <ul className=\"list-group\">\n          {items.map((i) => <li className=\"list-group-item\" key={i.id}>{i.name}</li>)}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "axios-post",
      "track": "axios",
      "module": "Module 2 – Create, Update & Delete",
      "title": "POST with loading & success",
      "summary": "Submit a form and show loading, success or error.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\nimport axios from \"axios\";\n\nexport default function App() {\n  const [name, setName] = useState(\"\");\n  const [email, setEmail] = useState(\"\");\n  const [saving, setSaving] = useState(false);\n  const [message, setMessage] = useState(\"\");\n  const [error, setError] = useState(\"\");\n\n  async function submit(e: FormEvent) {\n    e.preventDefault();\n    if (!name.trim() || !/^\\S+@\\S+\\.\\S+$/.test(email)) { setError(\"Enter a name and valid email\"); return; }\n    setSaving(true); setError(\"\"); setMessage(\"\");\n    try {\n      const res = await axios.post(\"/api/users\", { name, email });\n      setMessage(res.data.message);\n      setName(\"\"); setEmail(\"\");\n    } catch {\n      setError(\"Could not save. Try again.\");\n    } finally {\n      setSaving(false);\n    }\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Create user</h5>\n        <form onSubmit={submit}>\n          <input className=\"form-control mb-2\" placeholder=\"Name\" value={name} onChange={(e) => setName(e.target.value)} />\n          <input className=\"form-control mb-3\" placeholder=\"Email\" value={email} onChange={(e) => setEmail(e.target.value)} />\n          <button className=\"btn btn-primary\" disabled={saving}>\n            {saving ? <><span className=\"spinner-border spinner-border-sm me-2\" />Saving…</> : \"Save\"}\n          </button>\n        </form>\n        {message && <div className=\"alert alert-success mt-3 mb-0 py-2\">{message}</div>}\n        {error && <div className=\"alert alert-danger mt-3 mb-0 py-2\">{error}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "axios-put-delete",
      "track": "axios",
      "module": "Module 2 – Create, Update & Delete",
      "title": "PUT & DELETE",
      "summary": "Update an item with PUT and remove it with DELETE.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\nimport axios from \"axios\";\n\ninterface Item { id: number; name: string; }\n\nexport default function App() {\n  const [items, setItems] = useState<Item[]>([{ id: 1, name: \"Draft post\" }, { id: 2, name: \"Old post\" }]);\n  const [log, setLog] = useState(\"\");\n\n  async function rename(item: Item) {\n    const name = `${item.name} (updated)`;\n    await axios.put(`/api/items/${item.id}`, { name });\n    setItems((p) => p.map((i) => (i.id === item.id ? { ...i, name } : i)));\n    setLog(`PUT /api/items/${item.id} → updated`);\n  }\n\n  async function remove(id: number) {\n    await axios.delete(`/api/items/${id}`);\n    setItems((p) => p.filter((i) => i.id !== id));\n    setLog(`DELETE /api/items/${id} → removed`);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 540 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Update & delete</h5>\n        <ul className=\"list-group mb-2\">\n          {items.map((i) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={i.id}>\n              {i.name}\n              <span className=\"d-flex gap-1\">\n                <button className=\"btn btn-sm btn-outline-primary\" onClick={() => rename(i)}>PUT</button>\n                <button className=\"btn btn-sm btn-outline-danger\" onClick={() => remove(i.id)}>DELETE</button>\n              </span>\n            </li>\n          ))}\n          {items.length === 0 && <li className=\"list-group-item text-secondary\">No items.</li>}\n        </ul>\n        {log && <div className=\"alert alert-info py-2 mb-0 small\">{log}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "axios-params",
      "track": "axios",
      "module": "Module 3 – Headers, Errors & Concurrency",
      "title": "Query params & search",
      "summary": "Send query params with GET and render results.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\nimport axios from \"axios\";\n\ninterface Result { id: number; name: string; }\n\nexport default function App() {\n  const [q, setQ] = useState(\"\");\n  const [results, setResults] = useState<Result[] | null>(null);\n  const [loading, setLoading] = useState(false);\n\n  async function search(e: FormEvent) {\n    e.preventDefault();\n    setLoading(true);\n    const res = await axios.get(\"/api/search\", { params: { q, limit: 10 } });\n    setResults(res.data.data);\n    setLoading(false);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Search with params</h5>\n        <form onSubmit={search} className=\"input-group mb-3\">\n          <input className=\"form-control\" placeholder=\"Search…\" value={q} onChange={(e) => setQ(e.target.value)} />\n          <button className=\"btn btn-primary\" disabled={loading}>{loading ? \"…\" : \"Search\"}</button>\n        </form>\n        <p className=\"small text-secondary\">Request: GET /api/search?q={q || \"…\"}&limit=10</p>\n        {results && (\n          <ul className=\"list-group\">\n            {results.map((r) => <li className=\"list-group-item\" key={r.id}>{r.name}</li>)}\n          </ul>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "axios-headers",
      "track": "axios",
      "module": "Module 3 – Headers, Errors & Concurrency",
      "title": "Auth headers",
      "summary": "Attach a bearer token to axios requests.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\nimport axios from \"axios\";\n\nexport default function App() {\n  const [token, setToken] = useState(\"demo-token-123\");\n  const [log, setLog] = useState(\"\");\n  const [loading, setLoading] = useState(false);\n\n  async function load() {\n    setLoading(true);\n    await axios.get(\"/api/me\", { headers: { Authorization: `Bearer ${token}` } });\n    setLog(`GET /api/me with Authorization: Bearer ${token}`);\n    setLoading(false);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Headers & token</h5>\n        <label className=\"form-label\">Bearer token</label>\n        <input className=\"form-control mb-2\" value={token} onChange={(e) => setToken(e.target.value)} />\n        <button className=\"btn btn-primary\" onClick={load} disabled={loading}>{loading ? \"Loading…\" : \"Call protected API\"}</button>\n        {log && <div className=\"alert alert-success mt-3 mb-0 py-2 small font-monospace\">{log}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "axios-errors",
      "track": "axios",
      "module": "Module 3 – Headers, Errors & Concurrency",
      "title": "Error handling & retry",
      "summary": "Catch an API failure and offer a retry.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\nimport axios from \"axios\";\n\nexport default function App() {\n  const [error, setError] = useState(\"\");\n  const [loading, setLoading] = useState(false);\n\n  async function load(fail: boolean) {\n    setLoading(true); setError(\"\");\n    try {\n      await axios.get(fail ? \"/api/fail\" : \"/api/ok\");\n      setError(\"\");\n    } catch (e) {\n      const err = e as { response?: { status?: number; data?: { message?: string } } };\n      setError(`${err.response?.status ?? 500}: ${err.response?.data?.message ?? \"Request failed\"}`);\n    } finally {\n      setLoading(false);\n    }\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Error handling</h5>\n        <div className=\"d-flex gap-2\">\n          <button className=\"btn btn-outline-danger\" onClick={() => load(true)} disabled={loading}>Trigger error</button>\n          <button className=\"btn btn-primary\" onClick={() => load(false)} disabled={loading}>{loading ? \"Loading…\" : \"Retry\"}</button>\n        </div>\n        {error ? <div className=\"alert alert-danger mt-3 mb-0 py-2\">{error}</div> : <div className=\"alert alert-success mt-3 mb-0 py-2\">No errors yet.</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "axios-concurrent",
      "track": "axios",
      "module": "Module 3 – Headers, Errors & Concurrency",
      "title": "Concurrent requests (Promise.all)",
      "summary": "Load two endpoints in parallel and render both.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\nimport axios from \"axios\";\n\nexport default function App() {\n  const [data, setData] = useState<{ users: string[]; posts: string[] } | null>(null);\n  const [loading, setLoading] = useState(false);\n\n  async function load() {\n    setLoading(true);\n    const [users, posts] = await Promise.all([\n      axios.get(\"/api/users\"),\n      axios.get(\"/api/posts\"),\n    ]);\n    setData({\n      users: users.data.data.map((u: { name: string }) => u.name),\n      posts: posts.data.data.map((p: { name: string }) => p.name),\n    });\n    setLoading(false);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 600 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Promise.all</h5>\n        <button className=\"btn btn-primary mb-3\" onClick={load} disabled={loading}>{loading ? \"Loading…\" : \"Load both endpoints\"}</button>\n        {data && (\n          <div className=\"row g-3\">\n            <div className=\"col-md-6\">\n              <h6>Users</h6>\n              <ul className=\"list-group\">{data.users.map((u) => <li className=\"list-group-item\" key={u}>{u}</li>)}</ul>\n            </div>\n            <div className=\"col-md-6\">\n              <h6>Posts</h6>\n              <ul className=\"list-group\">{data.posts.map((p) => <li className=\"list-group-item\" key={p}>{p}</li>)}</ul>\n            </div>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
