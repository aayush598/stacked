import type { LabTrack } from "../types";

export const protected_routesTrack: LabTrack = {
  "id": "protected-routes",
  "title": "Authentication and Protected Routes",
  "description": "Login gates, route guards, role-based access, session persistence and logout.",
  "priority": 16,
  "modules": [
    "Module 1 – Login Gate",
    "Module 2 – Roles & Persistence",
    "Module 3 – Guards & Logout"
  ],
  "examples": [
    {
      "id": "guard-login",
      "track": "protected-routes",
      "module": "Module 1 – Login Gate",
      "title": "Login gate",
      "summary": "Show a login screen until the user signs in.",
      "tags": [],
      "code": "import React, { useState, FormEvent } from \"react\";\n\nexport default function App() {\n  const [user, setUser] = useState(\"\");\n  const [email, setEmail] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n\n  function login(e: FormEvent) {\n    e.preventDefault();\n    if (/^\\S+@\\S+\\.\\S+$/.test(email) && password.length >= 6) setUser(email);\n  }\n\n  if (user) {\n    return (\n      <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n        <div className=\"card-body\">\n          <h5>Protected page</h5>\n          <p className=\"text-secondary\">Only signed-in users see this.</p>\n          <button className=\"btn btn-outline-danger\" onClick={() => setUser(\"\")}>Sign out</button>\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Please sign in</h5>\n        <form onSubmit={login}>\n          <input className=\"form-control mb-2\" placeholder=\"Email\" value={email} onChange={(e) => setEmail(e.target.value)} />\n          <input type=\"password\" className=\"form-control mb-3\" placeholder=\"Password (6+)\" value={password} onChange={(e) => setPassword(e.target.value)} />\n          <button className=\"btn btn-primary w-100\">Sign in</button>\n        </form>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "guard-wrapper",
      "track": "protected-routes",
      "module": "Module 1 – Login Gate",
      "title": "ProtectedRoute wrapper",
      "summary": "Reusable guard component for pages.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nfunction ProtectedRoute({ user, children }: { user: string | null; children: React.ReactNode }) {\n  if (!user) return <div className=\"alert alert-warning mb-0\">Access denied. Please sign in first.</div>;\n  return <>{children}</>;\n}\n\nexport default function App() {\n  const [user, setUser] = useState<string | null>(null);\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Route guard</h5>\n        <button className=\"btn btn-sm btn-primary mb-3\" onClick={() => setUser(user ? null : \"Aayush\")}>\n          {user ? \"Sign out\" : \"Sign in\"}\n        </button>\n        <ProtectedRoute user={user}>\n          <div className=\"alert alert-success mb-0\">\n            <strong>Secret dashboard</strong>\n            <p className=\"mb-0 small\">Visible only when a user exists.</p>\n          </div>\n        </ProtectedRoute>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "guard-role",
      "track": "protected-routes",
      "module": "Module 2 – Roles & Persistence",
      "title": "Role-based access",
      "summary": "Admins see more than regular users.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ntype Role = \"guest\" | \"user\" | \"admin\";\n\nexport default function App() {\n  const [role, setRole] = useState<Role>(\"guest\");\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Roles</h5>\n        <div className=\"btn-group mb-3\">\n          {([\"guest\", \"user\", \"admin\"] as Role[]).map((r) => (\n            <button key={r} className={`btn btn-sm ${role === r ? \"btn-primary\" : \"btn-outline-primary\"}`} onClick={() => setRole(r)}>{r}</button>\n          ))}\n        </div>\n        <div className=\"alert alert-secondary\">Public content</div>\n        {role !== \"guest\" && <div className=\"alert alert-info\">User content — visible to user and admin</div>}\n        {role === \"admin\" && <div className=\"alert alert-danger mb-0\">Admin panel — visible to admin only</div>}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "guard-session",
      "track": "protected-routes",
      "module": "Module 2 – Roles & Persistence",
      "title": "Session persistence",
      "summary": "Restore the session from localStorage.",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\n\nexport default function App() {\n  const [user, setUser] = useState<string | null>(null);\n  const [ready, setReady] = useState(false);\n\n  useEffect(() => {\n    try { setUser(localStorage.getItem(\"lab.sessionUser\")); } catch { /* ignore */ }\n    setReady(true);\n  }, []);\n\n  function signIn() {\n    try { localStorage.setItem(\"lab.sessionUser\", \"Aayush\"); } catch { /* ignore */ }\n    setUser(\"Aayush\");\n  }\n  function signOut() {\n    try { localStorage.removeItem(\"lab.sessionUser\"); } catch { /* ignore */ }\n    setUser(null);\n  }\n\n  if (!ready) return <div className=\"text-secondary\">Restoring session…</div>;\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Session</h5>\n        {user ? (\n          <div className=\"alert alert-success\">\n            Signed in as <strong>{user}</strong>\n            <button className=\"btn btn-sm btn-outline-danger d-block mt-2\" onClick={signOut}>Sign out</button>\n          </div>\n        ) : (\n          <button className=\"btn btn-primary\" onClick={signIn}>Sign in</button>\n        )}\n        <p className=\"form-text mt-2 mb-0\">Reload the page — the session persists in localStorage.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "guard-logout",
      "track": "protected-routes",
      "module": "Module 3 – Guards & Logout",
      "title": "Logout & redirect",
      "summary": "Sign out and return to the login view.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [user, setUser] = useState(\"Aayush\");\n  const [notice, setNotice] = useState(\"\");\n\n  function logout() {\n    setUser(\"\");\n    setNotice(\"You have been signed out.\");\n  }\n\n  if (!user) {\n    return (\n      <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 440 }}>\n        <div className=\"card-body text-center\">\n          <h5>Signed out</h5>\n          {notice && <div className=\"alert alert-info py-2\">{notice}</div>}\n          <button className=\"btn btn-primary\" onClick={() => { setUser(\"Aayush\"); setNotice(\"\"); }}>Sign back in</button>\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5>Account</h5>\n        <p className=\"text-secondary\">Signed in as <strong>{user}</strong></p>\n        <button className=\"btn btn-outline-danger\" onClick={logout}>Log out</button>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
