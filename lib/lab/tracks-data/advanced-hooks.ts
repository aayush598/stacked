import type { LabTrack } from "../types";

export const advanced_hooksTrack: LabTrack = {
  "id": "advanced-hooks",
  "title": "Advanced React Hooks",
  "description": "useReducer, context+reducer, custom fetch hooks, memoization and refs.",
  "priority": 19,
  "modules": [
    "Module 1 – Reducer & Context",
    "Module 2 – Custom Hooks",
    "Module 3 – Performance & Refs"
  ],
  "examples": [
    {
      "id": "adv-reducer",
      "track": "advanced-hooks",
      "module": "Module 1 – Reducer & Context",
      "title": "useReducer cart",
      "summary": "A shopping cart reducer with actions.",
      "tags": [],
      "code": "import React, { useReducer } from \"react\";\n\ninterface CartItem { id: number; name: string; price: number; qty: number; }\ntype Action =\n  | { type: \"add\"; item: { id: number; name: string; price: number } }\n  | { type: \"inc\"; id: number }\n  | { type: \"dec\"; id: number }\n  | { type: \"remove\"; id: number };\n\nfunction reducer(state: CartItem[], action: Action): CartItem[] {\n  switch (action.type) {\n    case \"add\": {\n      const found = state.find((i) => i.id === action.item.id);\n      return found\n        ? state.map((i) => (i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i))\n        : [...state, { ...action.item, qty: 1 }];\n    }\n    case \"inc\": return state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i));\n    case \"dec\": return state.map((i) => (i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));\n    case \"remove\": return state.filter((i) => i.id !== action.id);\n    default: return state;\n  }\n}\n\nconst catalogue = [{ id: 1, name: \"Keyboard\", price: 40 }, { id: 2, name: \"Mouse\", price: 20 }];\n\nexport default function App() {\n  const [cart, dispatch] = useReducer(reducer, []);\n  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Reducer cart</h5>\n        <div className=\"d-flex gap-2 mb-3\">\n          {catalogue.map((c) => <button className=\"btn btn-sm btn-outline-primary\" key={c.id} onClick={() => dispatch({ type: \"add\", item: c })}>Add {c.name}</button>)}\n        </div>\n        <ul className=\"list-group mb-2\">\n          {cart.map((i) => (\n            <li className=\"list-group-item d-flex justify-content-between align-items-center\" key={i.id}>\n              <span>{i.name} × {i.qty}</span>\n              <span className=\"d-flex gap-1 align-items-center\">\n                <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => dispatch({ type: \"dec\", id: i.id })}>−</button>\n                <button className=\"btn btn-sm btn-outline-secondary\" onClick={() => dispatch({ type: \"inc\", id: i.id })}>+</button>\n                <button className=\"btn btn-sm btn-outline-danger\" onClick={() => dispatch({ type: \"remove\", id: i.id })}>×</button>\n              </span>\n            </li>\n          ))}\n          {cart.length === 0 && <li className=\"list-group-item text-secondary\">Cart is empty.</li>}\n        </ul>\n        <div className=\"text-end fw-semibold\">Total: ${total}</div>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "adv-context-reducer",
      "track": "advanced-hooks",
      "module": "Module 1 – Reducer & Context",
      "title": "Context + reducer",
      "summary": "Share reducer state with context.",
      "tags": [],
      "code": "import React, { createContext, useContext, useReducer } from \"react\";\n\ninterface State { count: number; }\ntype Action = { type: \"inc\" } | { type: \"dec\" } | { type: \"reset\" };\n\nfunction reducer(state: State, action: Action): State {\n  if (action.type === \"inc\") return { count: state.count + 1 };\n  if (action.type === \"dec\") return { count: state.count - 1 };\n  return { count: 0 };\n}\n\nconst Ctx = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);\n\nfunction Counter() {\n  const ctx = useContext(Ctx);\n  if (!ctx) return null;\n  return (\n    <div className=\"text-center\">\n      <div className=\"display-6\">{ctx.state.count}</div>\n      <div className=\"d-flex gap-2 justify-content-center\">\n        <button className=\"btn btn-outline-secondary\" onClick={() => ctx.dispatch({ type: \"dec\" })}>−</button>\n        <button className=\"btn btn-outline-secondary\" onClick={() => ctx.dispatch({ type: \"reset\" })}>Reset</button>\n        <button className=\"btn btn-primary\" onClick={() => ctx.dispatch({ type: \"inc\" })}>+</button>\n      </div>\n    </div>\n  );\n}\n\nexport default function App() {\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Context + reducer</h5>\n        <Ctx.Provider value={{ state, dispatch }}><Counter /></Ctx.Provider>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "adv-usefetch",
      "track": "advanced-hooks",
      "module": "Module 2 – Custom Hooks",
      "title": "Custom useFetch hook",
      "summary": "Reusable data-fetching hook (axios mocked).",
      "tags": [],
      "code": "import React, { useEffect, useState } from \"react\";\nimport axios from \"axios\";\n\nfunction useFetch<T>(url: string) {\n  const [data, setData] = useState<T | null>(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(\"\");\n\n  useEffect(() => {\n    let alive = true;\n    setLoading(true);\n    axios.get(url)\n      .then((res) => { if (alive) setData(res.data as T); })\n      .catch(() => { if (alive) setError(\"Failed to load\"); })\n      .finally(() => { if (alive) setLoading(false); });\n    return () => { alive = false; };\n  }, [url]);\n\n  return { data, loading, error };\n}\n\nexport default function App() {\n  const { data, loading, error } = useFetch<{ message: string; data: { id: number; name: string }[] }>(\"/api/users\");\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useFetch</h5>\n        {loading && <div className=\"spinner-border spinner-border-sm text-primary\" />}\n        {error && <div className=\"alert alert-danger mb-0\">{error}</div>}\n        {data && (\n          <ul className=\"list-group\">\n            {data.data.map((u) => <li className=\"list-group-item\" key={u.id}>{u.name}</li>)}\n          </ul>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "adv-usememo",
      "track": "advanced-hooks",
      "module": "Module 3 – Performance & Refs",
      "title": "useMemo for expensive work",
      "summary": "Cache a derived result between renders.",
      "tags": [],
      "code": "import React, { useMemo, useState } from \"react\";\n\nfunction slowSum(n: number) {\n  let total = 0;\n  for (let i = 0; i < n; i++) total += i;\n  return total;\n}\n\nexport default function App() {\n  const [n, setN] = useState(2000000);\n  const [text, setText] = useState(\"\");\n\n  const sum = useMemo(() => slowSum(n), [n]);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useMemo</h5>\n        <label className=\"form-label small\">Sum size: {n.toLocaleString()}</label>\n        <input type=\"range\" className=\"form-range\" min={100000} max={5000000} step={100000} value={n} onChange={(e) => setN(Number(e.target.value))} />\n        <div className=\"alert alert-primary py-2\">Sum = {sum.toLocaleString()}</div>\n        <input className=\"form-control\" placeholder=\"Type here — sum is not recomputed\" value={text} onChange={(e) => setText(e.target.value)} />\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "adv-callback-memo",
      "track": "advanced-hooks",
      "module": "Module 3 – Performance & Refs",
      "title": "useCallback + memo",
      "summary": "Keep callbacks stable for memoized children.",
      "tags": [],
      "code": "import React, { memo, useCallback, useState } from \"react\";\n\nconst Row = memo(function Row({ label, onClick }: { label: string; onClick: (l: string) => void }) {\n  return <button className=\"list-group-item list-group-item-action\" onClick={() => onClick(label)}>{label}</button>;\n});\n\nconst items = [\"Alpha\", \"Beta\", \"Gamma\", \"Delta\"];\n\nexport default function App() {\n  const [picked, setPicked] = useState(\"\");\n  const [count, setCount] = useState(0);\n\n  const onPick = useCallback((l: string) => setPicked(l), []);\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useCallback + memo</h5>\n        <div className=\"list-group mb-2\">{items.map((i) => <Row key={i} label={i} onClick={onPick} />)}</div>\n        <p className=\"small text-secondary mb-2\">Picked: {picked || \"—\"}</p>\n        <button className=\"btn btn-sm btn-outline-primary\" onClick={() => setCount((c) => c + 1)}>Unrelated re-render: {count}</button>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "adv-ref-timer",
      "track": "advanced-hooks",
      "module": "Module 3 – Performance & Refs",
      "title": "useRef timer control",
      "summary": "Store a timer id in a ref.",
      "tags": [],
      "code": "import React, { useRef, useState } from \"react\";\n\nexport default function App() {\n  const [ms, setMs] = useState(0);\n  const timer = useRef<number | null>(null);\n\n  function start() {\n    if (timer.current !== null) return;\n    timer.current = window.setInterval(() => setMs((m) => m + 100), 100);\n  }\n  function stop() {\n    if (timer.current !== null) { clearInterval(timer.current); timer.current = null; }\n  }\n  function reset() { stop(); setMs(0); }\n\n  return (\n    <div className=\"card shadow-sm mx-auto text-center\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">useRef stopwatch</h5>\n        <div className=\"display-6 mb-3\">{(ms / 1000).toFixed(1)}s</div>\n        <div className=\"d-flex justify-content-center gap-2\">\n          <button className=\"btn btn-success\" onClick={start}>Start</button>\n          <button className=\"btn btn-warning\" onClick={stop}>Stop</button>\n          <button className=\"btn btn-outline-secondary\" onClick={reset}>Reset</button>\n        </div>\n        <p className=\"form-text mt-3 mb-0\">The interval id lives in a ref, so it survives re-renders.</p>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
