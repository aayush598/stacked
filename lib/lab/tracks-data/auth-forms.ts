import type { LabTrack } from "../types";

export const auth_formsTrack: LabTrack = {
  "id": "auth-forms",
  "title": "Login and Registration",
  "description": "Login, registration, combined auth screens and a simulated auth flow.",
  "priority": 7,
  "modules": [
    "Module 1 – Login",
    "Module 2 – Registration",
    "Module 3 – Combined Auth Flow"
  ],
  "examples": [
    {
      "id": "auth-login",
      "track": "auth-forms",
      "module": "Module 1 – Login",
      "title": "Login form",
      "summary": "Email and password with validation and loading.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\n\nexport default function App() {\n  const [v, setV] = useState({ email: \"\", password: \"\" });\n  const [errors, setErrors] = useState<Record<string, string>>({});\n  const [loading, setLoading] = useState(false);\n  const [done, setDone] = useState(\"\");\n\n  function submit(e: FormEvent) {\n    e.preventDefault();\n    const err: Record<string, string> = {};\n    if (!/^\\S+@\\S+\\.\\S+$/.test(v.email)) err.email = \"Valid email required\";\n    if (v.password.length < 6) err.password = \"Minimum 6 characters\";\n    setErrors(err);\n    if (Object.keys(err).length) return;\n    setLoading(true);\n    setTimeout(() => { setLoading(false); setDone(`Welcome, ${v.email}`); }, 700);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Sign in</h5>\n        <form onSubmit={submit} noValidate>\n          <div className=\"mb-2\">\n            <label className=\"form-label\">Email</label>\n            <input className={`form-control ${errors.email ? \"is-invalid\" : \"\"}`} value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} />\n            {errors.email && <div className=\"invalid-feedback\">{errors.email}</div>}\n          </div>\n          <div className=\"mb-3\">\n            <label className=\"form-label\">Password</label>\n            <input type=\"password\" className={`form-control ${errors.password ? \"is-invalid\" : \"\"}`} value={v.password} onChange={(e) => setV({ ...v, password: e.target.value })} />\n            {errors.password && <div className=\"invalid-feedback\">{errors.password}</div>}\n          </div>\n          <button className=\"btn btn-primary w-100\" disabled={loading}>{loading ? \"Signing in…\" : \"Sign in\"}</button>\n        </form>\n        {done && <div className=\"alert alert-success mt-3 mb-0 py-2\">{done}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "auth-register",
      "track": "auth-forms",
      "module": "Module 2 – Registration",
      "title": "Registration form",
      "summary": "Name, email, password and confirm with validation.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\n\nexport default function App() {\n  const [v, setV] = useState({ name: \"\", email: \"\", password: \"\", confirm: \"\" });\n  const [errors, setErrors] = useState<Record<string, string>>({});\n  const [done, setDone] = useState(\"\");\n\n  function submit(e: FormEvent) {\n    e.preventDefault();\n    const err: Record<string, string> = {};\n    if (!v.name.trim()) err.name = \"Name required\";\n    if (!/^\\S+@\\S+\\.\\S+$/.test(v.email)) err.email = \"Valid email required\";\n    if (v.password.length < 6) err.password = \"Minimum 6 characters\";\n    if (v.confirm !== v.password) err.confirm = \"Passwords do not match\";\n    setErrors(err);\n    setDone(Object.keys(err).length === 0 ? \"Account created!\" : \"\");\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 440 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Create account</h5>\n        <form onSubmit={submit} noValidate>\n          {([\"name\", \"email\", \"password\", \"confirm\"] as const).map((k) => (\n            <div className=\"mb-2\" key={k}>\n              <label className=\"form-label text-capitalize\">{k === \"confirm\" ? \"Confirm password\" : k}</label>\n              <input\n                type={k.includes(\"password\") || k === \"confirm\" ? \"password\" : k === \"email\" ? \"email\" : \"text\"}\n                className={`form-control ${errors[k] ? \"is-invalid\" : \"\"}`}\n                value={v[k]}\n                onChange={(e) => setV({ ...v, [k]: e.target.value })}\n              />\n              {errors[k] && <div className=\"invalid-feedback\">{errors[k]}</div>}\n            </div>\n          ))}\n          <button className=\"btn btn-success w-100 mt-2\">Register</button>\n        </form>\n        {done && <div className=\"alert alert-success mt-3 mb-0 py-2\">{done}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "auth-toggle",
      "track": "auth-forms",
      "module": "Module 3 – Combined Auth Flow",
      "title": "Login / Register toggle",
      "summary": "Switch between two auth screens in one card.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\n\nexport default function App() {\n  const [mode, setMode] = useState<\"login\" | \"register\">(\"login\");\n  const [v, setV] = useState({ email: \"\", password: \"\" });\n  const [msg, setMsg] = useState(\"\");\n\n  function submit(e: FormEvent) {\n    e.preventDefault();\n    if (!/^\\S+@\\S+\\.\\S+$/.test(v.email) || v.password.length < 6) { setMsg(\"Enter a valid email and 6+ char password\"); return; }\n    setMsg(mode === \"login\" ? `Logged in as ${v.email}` : `Registered ${v.email}`);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <ul className=\"nav nav-pills mb-3\">\n          <li className=\"nav-item\"><button className={`nav-link ${mode === \"login\" ? \"active\" : \"\"}`} onClick={() => { setMode(\"login\"); setMsg(\"\"); }}>Login</button></li>\n          <li className=\"nav-item\"><button className={`nav-link ${mode === \"register\" ? \"active\" : \"\"}`} onClick={() => { setMode(\"register\"); setMsg(\"\"); }}>Register</button></li>\n        </ul>\n        <form onSubmit={submit}>\n          <input className=\"form-control mb-2\" placeholder=\"Email\" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} />\n          <input type=\"password\" className=\"form-control mb-3\" placeholder=\"Password\" value={v.password} onChange={(e) => setV({ ...v, password: e.target.value })} />\n          <button className={`btn w-100 ${mode === \"login\" ? \"btn-primary\" : \"btn-success\"}`}>{mode === \"login\" ? \"Sign in\" : \"Create account\"}</button>\n        </form>\n        {msg && <div className=\"alert alert-info mt-3 mb-0 py-2\">{msg}</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "auth-remember",
      "track": "auth-forms",
      "module": "Module 3 – Combined Auth Flow",
      "title": "Remember me (localStorage)",
      "summary": "Persist the email between sessions.",
      "tags": [],
      "code": "import React, { useEffect, useState, FormEvent } from \"react\";\n\nexport default function App() {\n  const [email, setEmail] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n  const [remember, setRemember] = useState(false);\n  const [msg, setMsg] = useState(\"\");\n\n  useEffect(() => {\n    try {\n      const saved = localStorage.getItem(\"lab.rememberEmail\");\n      if (saved) { setEmail(saved); setRemember(true); }\n    } catch { /* ignore */ }\n  }, []);\n\n  function submit(e: FormEvent) {\n    e.preventDefault();\n    if (!/^\\S+@\\S+\\.\\S+$/.test(email)) { setMsg(\"Enter a valid email\"); return; }\n    try {\n      if (remember) localStorage.setItem(\"lab.rememberEmail\", email);\n      else localStorage.removeItem(\"lab.rememberEmail\");\n    } catch { /* ignore */ }\n    setMsg(remember ? \"Signed in and remembered.\" : \"Signed in (not remembered).\");\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Remember me</h5>\n        <form onSubmit={submit}>\n          <input className=\"form-control mb-2\" placeholder=\"Email\" value={email} onChange={(e) => setEmail(e.target.value)} />\n          <input type=\"password\" className=\"form-control mb-2\" placeholder=\"Password\" value={password} onChange={(e) => setPassword(e.target.value)} />\n          <div className=\"form-check mb-3\">\n            <input className=\"form-check-input\" type=\"checkbox\" id=\"remember\" checked={remember} onChange={(e) => setRemember(e.target.checked)} />\n            <label className=\"form-check-label\" htmlFor=\"remember\">Remember my email</label>\n          </div>\n          <button className=\"btn btn-primary w-100\">Sign in</button>\n        </form>\n        {msg && <div className=\"alert alert-info mt-3 mb-0 py-2\">{msg}</div>}\n        <p className=\"form-text mt-3 mb-0\">Reload the page — the email is restored from localStorage.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "auth-flow",
      "track": "auth-forms",
      "module": "Module 3 – Combined Auth Flow",
      "title": "Simulated auth flow",
      "summary": "Login → dashboard → logout with a fake user state.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\n\ninterface User { name: string; email: string; }\n\nexport default function App() {\n  const [user, setUser] = useState<User | null>(null);\n  const [email, setEmail] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n  const [error, setError] = useState(\"\");\n\n  function login(e: FormEvent) {\n    e.preventDefault();\n    if (!/^\\S+@\\S+\\.\\S+$/.test(email) || password.length < 6) { setError(\"Use a valid email and 6+ char password\"); return; }\n    setUser({ name: email.split(\"@\")[0], email });\n    setError(\"\");\n  }\n\n  if (user) {\n    return (\n      <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n        <div className=\"card-body text-center\">\n          <h5>Dashboard</h5>\n          <p className=\"text-secondary\">Signed in as <strong>{user.email}</strong></p>\n          <div className=\"alert alert-success\">Hello, {user.name}! This is a protected view.</div>\n          <button className=\"btn btn-outline-danger\" onClick={() => setUser(null)}>Log out</button>\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Sign in</h5>\n        <form onSubmit={login}>\n          <input className=\"form-control mb-2\" placeholder=\"Email\" value={email} onChange={(e) => setEmail(e.target.value)} />\n          <input type=\"password\" className=\"form-control mb-3\" placeholder=\"Password\" value={password} onChange={(e) => setPassword(e.target.value)} />\n          <button className=\"btn btn-primary w-100\">Sign in</button>\n        </form>\n        {error && <div className=\"alert alert-danger mt-3 mb-0 py-2\">{error}</div>}\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
