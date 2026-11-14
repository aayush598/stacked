import type { LabTrack } from "../types";

export const state_hooksTrack: LabTrack = {
  "id": "state-hooks",
  "title": "React State and Hooks",
  "description": "useState, useEffect, useRef, useReducer, useContext, useMemo/useCallback and custom hooks with runnable demos.",
  "priority": 5,
  "modules": [
    "Module 1 – Core Hooks",
    "Module 2 – Context, Reducer & Refs",
    "Module 3 – Performance & Custom Hooks"
  ],
  "examples": [
    {
      "id": "hooks-use-state",
      "track": "state-hooks",
      "module": "Module 1 – Core Hooks",
      "title": "useState: counter & toggle",
      "summary": "Basic state updates with numbers and booleans.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const [dark, setDark] = useState(false);\n\n  return (\n    <div className={`card shadow-sm mx-auto ${dark ? \"text-bg-dark\" : \"\"}`} style={{ maxWidth: 460 }}>\n      <div className=\"card-body text-center\">\n        <h5 className=\"mb-3\">useState</h5>\n        <p className=\"display-6 mb-2\">{count}</p>\n        <div className=\"d-flex justify-content-center gap-2 mb-3\">\n          <button className=\"btn btn-outline-secondary\" onClick={() => setCount((c) => c - 1)}>−1</button>\n          <button className=\"btn btn-primary\" onClick={() => setCount((c) => c + 1)}>+1</button>\n          <button className=\"btn btn-outline-danger\" onClick={() => setCount(0)}>Reset</button>\n        </div>\n        <div className=\"form-check form-switch d-inline-block\">\n          <input className=\"form-check-input\" type=\"checkbox\" id=\"dark\" checked={dark} onChange={(e) => setDark(e.target.checked)} />\n          <label className=\"form-check-label\" htmlFor=\"dark\">Dark theme</label>\n        </div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-controlled",
      "track": "state-hooks",
      "module": "Module 1 – Core Hooks",
      "title": "Controlled inputs",
      "summary": "State drives every field value.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [form, setForm] = useState({ first: \"\", last: \"\", agree: false });\n\n  function change(k: keyof typeof form, value: string | boolean) {\n    setForm((p) => ({ ...p, [k]: value }));\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Controlled inputs</h5>\n        <input className=\"form-control mb-2\" placeholder=\"First name\" value={form.first} onChange={(e) => change(\"first\", e.target.value)} />\n        <input className=\"form-control mb-2\" placeholder=\"Last name\" value={form.last} onChange={(e) => change(\"last\", e.target.value)} />\n        <div className=\"form-check mb-3\">\n          <input className=\"form-check-input\" type=\"checkbox\" id=\"agree\" checked={form.agree} onChange={(e) => change(\"agree\", e.target.checked)} />\n          <label className=\"form-check-label\" htmlFor=\"agree\">I agree</label>\n        </div>\n        <pre className=\"bg-body-secondary rounded p-2 small mb-0\">{JSON.stringify(form, null, 2)}</pre>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-use-effect",
      "track": "state-hooks",
      "module": "Module 1 – Core Hooks",
      "title": "useEffect: timer with cleanup",
      "summary": "Run an effect and clean it up on unmount.",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\n\nexport default function App() {\n  const [running, setRunning] = useState(true);\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    if (!running) return;\n    const id = setInterval(() => setSeconds((s) => s + 1), 1000);\n    return () => clearInterval(id);\n  }, [running]);\n\n  return (\n    <div className=\"card shadow-sm mx-auto text-center\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useEffect timer</h5>\n        <p className=\"display-6\">{seconds}s</p>\n        <div className=\"d-flex justify-content-center gap-2\">\n          <button className=\"btn btn-primary\" onClick={() => setRunning((r) => !r)}>{running ? \"Pause\" : \"Resume\"}</button>\n          <button className=\"btn btn-outline-secondary\" onClick={() => setSeconds(0)}>Reset</button>\n        </div>\n        <p className=\"form-text mt-3 mb-0\">The interval is cleared whenever the effect re-runs.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-use-ref",
      "track": "state-hooks",
      "module": "Module 2 – Context, Reducer & Refs",
      "title": "useRef: focus & previous value",
      "summary": "Access a DOM node and keep a value between renders.",
      "tags": [],
      "code": "import React, { useEffect, useRef, useState } from \"react\";\n\nexport default function App() {\n  const inputRef = useRef<HTMLInputElement>(null);\n  const [value, setValue] = useState(\"\");\n  const previous = useRef(\"\");\n\n  useEffect(() => {\n    inputRef.current?.focus();\n  }, []);\n\n  useEffect(() => {\n    previous.current = value;\n  }, [value]);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useRef</h5>\n        <div className=\"input-group mb-2\">\n          <input ref={inputRef} className=\"form-control\" placeholder=\"Type…\" value={value} onChange={(e) => setValue(e.target.value)} />\n          <button className=\"btn btn-outline-primary\" onClick={() => inputRef.current?.focus()}>Focus</button>\n        </div>\n        <p className=\"mb-0 small text-secondary\">Current: {value || \"—\"} · Previous: {previous.current || \"—\"}</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-use-reducer",
      "track": "state-hooks",
      "module": "Module 2 – Context, Reducer & Refs",
      "title": "useReducer: todos",
      "summary": "Manage related state with a reducer.",
      "tags": [],
      "code": "import React, { useReducer, useState } from \"react\";\n\ninterface Todo { id: number; text: string; done: boolean; }\ntype Action = { type: \"add\"; text: string } | { type: \"toggle\"; id: number } | { type: \"remove\"; id: number };\n\nfunction reducer(state: Todo[], action: Action): Todo[] {\n  switch (action.type) {\n    case \"add\": return [...state, { id: Date.now(), text: action.text, done: false }];\n    case \"toggle\": return state.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));\n    case \"remove\": return state.filter((t) => t.id !== action.id);\n    default: return state;\n  }\n}\n\nexport default function App() {\n  const [todos, dispatch] = useReducer(reducer, []);\n  const [text, setText] = useState(\"\");\n\n  function add(e: React.FormEvent) {\n    e.preventDefault();\n    if (!text.trim()) return;\n    dispatch({ type: \"add\", text: text.trim() });\n    setText(\"\");\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useReducer todos</h5>\n        <form onSubmit={add} className=\"input-group mb-3\">\n          <input className=\"form-control\" placeholder=\"New todo\" value={text} onChange={(e) => setText(e.target.value)} />\n          <button className=\"btn btn-primary\">Add</button>\n        </form>\n        <ul className=\"list-group\">\n          {todos.map((t) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={t.id}>\n              <label className={`mb-0 ${t.done ? \"text-decoration-line-through text-secondary\" : \"\"}`}>\n                <input className=\"form-check-input me-2\" type=\"checkbox\" checked={t.done} onChange={() => dispatch({ type: \"toggle\", id: t.id })} />\n                {t.text}\n              </label>\n              <button className=\"btn btn-sm btn-outline-danger\" onClick={() => dispatch({ type: \"remove\", id: t.id })}>×</button>\n            </li>\n          ))}\n          {todos.length === 0 && <li className=\"list-group-item text-secondary\">No todos yet.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-use-context",
      "track": "state-hooks",
      "module": "Module 2 – Context, Reducer & Refs",
      "title": "useContext: theme",
      "summary": "Share state without prop drilling.",
      "tags": [],
      "code": "import React, { createContext, useContext, useState } from \"react\";\n\nconst ThemeContext = createContext<{ theme: string; toggle: () => void }>({ theme: \"light\", toggle: () => {} });\n\nfunction Toolbar() {\n  const { theme, toggle } = useContext(ThemeContext);\n  return (\n    <div className={`p-3 rounded ${theme === \"dark\" ? \"text-bg-dark\" : \"bg-light border\"}`}>\n      <span className=\"me-2\">Current theme: <strong>{theme}</strong></span>\n      <button className=\"btn btn-sm btn-outline-primary\" onClick={toggle}>Toggle</button>\n    </div>\n  );\n}\n\nexport default function App() {\n  const [theme, setTheme] = useState(\"light\");\n  const toggle = () => setTheme((t) => (t === \"light\" ? \"dark\" : \"light\"));\n\n  return (\n    <div className=\"mx-auto\" style={{ maxWidth: 480 }}>\n      <ThemeContext.Provider value={{ theme, toggle }}>\n        <h5 className=\"mb-3\">useContext</h5>\n        <Toolbar />\n      </ThemeContext.Provider>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-memo-callback",
      "track": "state-hooks",
      "module": "Module 3 – Performance & Custom Hooks",
      "title": "useMemo & useCallback",
      "summary": "Avoid recomputation and stable callbacks.",
      "tags": [],
      "code": "import React, { memo, useCallback, useMemo, useState } from \"react\";\n\nconst List = memo(function List({ items, onPick }: { items: string[]; onPick: (v: string) => void }) {\n  return (\n    <ul className=\"list-group\">\n      {items.map((i) => <li className=\"list-group-item\" key={i} onClick={() => onPick(i)} role=\"button\">{i}</li>)}\n    </ul>\n  );\n});\n\nconst words = [\"react\", \"hooks\", \"state\", \"effect\", \"memo\", \"callback\", \"context\", \"reducer\"];\n\nexport default function App() {\n  const [query, setQuery] = useState(\"\");\n  const [picked, setPicked] = useState(\"\");\n\n  const filtered = useMemo(() => words.filter((w) => w.includes(query.toLowerCase())), [query]);\n  const onPick = useCallback((v: string) => setPicked(v), []);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useMemo & useCallback</h5>\n        <input className=\"form-control mb-2\" placeholder=\"Filter words…\" value={query} onChange={(e) => setQuery(e.target.value)} />\n        <List items={filtered} onPick={onPick} />\n        <p className=\"small text-secondary mt-2 mb-0\">Picked: {picked || \"—\"}</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "hooks-custom",
      "track": "state-hooks",
      "module": "Module 3 – Performance & Custom Hooks",
      "title": "Custom hook: useDebounced",
      "summary": "Extract reusable logic into a custom hook.",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\n\nfunction useDebounced(value: string, delay = 400) {\n  const [debounced, setDebounced] = useState(value);\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(id);\n  }, [value, delay]);\n  return debounced;\n}\n\nconst items = [\"React\", \"Redux\", \"Router\", \"Next.js\", \"Remix\", \"Vue\"];\n\nexport default function App() {\n  const [query, setQuery] = useState(\"\");\n  const debounced = useDebounced(query);\n  const results = items.filter((i) => i.toLowerCase().includes(debounced.toLowerCase()));\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useDebounced</h5>\n        <input className=\"form-control mb-2\" placeholder=\"Type to search…\" value={query} onChange={(e) => setQuery(e.target.value)} />\n        <p className=\"small text-secondary\">Typing: “{query}” · Debounced: “{debounced}”</p>\n        <ul className=\"list-group\">\n          {results.map((r) => <li className=\"list-group-item\" key={r}>{r}</li>)}\n          {results.length === 0 && <li className=\"list-group-item text-secondary\">No results.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
