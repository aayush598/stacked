import type { LabTrack } from "../types";

export const file_uploadTrack: LabTrack = {
  "id": "file-upload",
  "title": "File Upload and Image Preview",
  "description": "Single and multiple image previews, validation, drag & drop and FormData upload.",
  "priority": 15,
  "modules": [
    "Module 1 – Single & Preview",
    "Module 2 – Multiple & Validation",
    "Module 3 – Drag & Drop + API"
  ],
  "examples": [
    {
      "id": "upload-single",
      "track": "file-upload",
      "module": "Module 1 – Single & Preview",
      "title": "Single image preview",
      "summary": "Choose an image and preview it.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [url, setUrl] = useState(\"\");\n  const [name, setName] = useState(\"\");\n\n  function change(e: React.ChangeEvent<HTMLInputElement>) {\n    const file = e.target.files && e.target.files[0];\n    if (!file) return;\n    setName(file.name);\n    setUrl(URL.createObjectURL(file));\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Single upload</h5>\n        <input type=\"file\" accept=\"image/*\" className=\"form-control\" onChange={change} />\n        {url && (\n          <div className=\"mt-3 text-center\">\n            <img src={url} alt={name} className=\"img-fluid rounded border\" style={{ maxHeight: 200, objectFit: \"cover\" }} />\n            <div className=\"small text-secondary mt-2\">{name}</div>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "upload-multiple",
      "track": "file-upload",
      "module": "Module 2 – Multiple & Validation",
      "title": "Multiple images with remove",
      "summary": "Preview several files and remove individual ones.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\ninterface Pic { id: number; name: string; url: string; }\n\nexport default function App() {\n  const [pics, setPics] = useState<Pic[]>([]);\n\n  function change(e: React.ChangeEvent<HTMLInputElement>) {\n    const files = Array.from(e.target.files || []);\n    setPics((p) => [...p, ...files.map((f, i) => ({ id: Date.now() + i, name: f.name, url: URL.createObjectURL(f) }))]);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 520 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Multiple uploads</h5>\n        <input type=\"file\" accept=\"image/*\" multiple className=\"form-control\" onChange={change} />\n        <div className=\"row g-2 mt-1\">\n          {pics.map((p) => (\n            <div className=\"col-4\" key={p.id}>\n              <div className=\"border rounded p-1 position-relative\">\n                <img src={p.url} alt={p.name} className=\"rounded\" style={{ width: \"100%\", height: 70, objectFit: \"cover\" }} />\n                <button className=\"btn btn-sm btn-danger position-absolute top-0 end-0 m-1 py-0 px-1\" onClick={() => setPics((s) => s.filter((x) => x.id !== p.id))}>×</button>\n              </div>\n            </div>\n          ))}\n        </div>\n        <p className=\"form-text mb-0 mt-2\">{pics.length} file(s) selected.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "upload-validate",
      "track": "file-upload",
      "module": "Module 2 – Multiple & Validation",
      "title": "Type & size validation",
      "summary": "Reject non-images and files over 1 MB.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [ok, setOk] = useState<{ name: string; url: string } | null>(null);\n  const [error, setError] = useState(\"\");\n\n  function change(e: React.ChangeEvent<HTMLInputElement>) {\n    const file = e.target.files && e.target.files[0];\n    setError(\"\"); setOk(null);\n    if (!file) return;\n    if (!file.type.startsWith(\"image/\")) { setError(\"Only image files are allowed\"); return; }\n    if (file.size > 1024 * 1024) { setError(\"Image must be under 1 MB\"); return; }\n    setOk({ name: file.name, url: URL.createObjectURL(file) });\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 420 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Validation</h5>\n        <input type=\"file\" accept=\"image/*\" className={`form-control ${error ? \"is-invalid\" : \"\"}`} onChange={change} />\n        {error && <div className=\"invalid-feedback d-block\">{error}</div>}\n        {ok && (\n          <div className=\"mt-3\">\n            <img src={ok.url} alt={ok.name} className=\"img-fluid rounded border\" style={{ maxHeight: 180, objectFit: \"cover\" }} />\n            <div className=\"small text-success mt-1\">Accepted: {ok.name}</div>\n          </div>\n        )}\n        <p className=\"form-text mb-0 mt-2\">Allowed: images under 1 MB.</p>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "upload-drag",
      "track": "file-upload",
      "module": "Module 3 – Drag & Drop + API",
      "title": "Drag & drop zone",
      "summary": "Drop files onto a styled dropzone.",
      "tags": [],
      "code": "import React, { useState } from \"react\";\n\nexport default function App() {\n  const [over, setOver] = useState(false);\n  const [names, setNames] = useState<string[]>([]);\n\n  function drop(e: React.DragEvent) {\n    e.preventDefault();\n    setOver(false);\n    setNames((p) => [...p, ...Array.from(e.dataTransfer.files).map((f) => f.name)]);\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 480 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">Drag & drop</h5>\n        <div\n          onDragOver={(e) => { e.preventDefault(); setOver(true); }}\n          onDragLeave={() => setOver(false)}\n          onDrop={drop}\n          className={`border border-2 border-dashed rounded d-flex align-items-center justify-content-center text-center p-4 ${over ? \"border-primary bg-primary-subtle\" : \"bg-light\"}`}\n          style={{ minHeight: 160 }}\n        >\n          <div>\n            <div className=\"fs-4 mb-1\">⇪</div>\n            <div className=\"small text-secondary\">Drag files here</div>\n          </div>\n        </div>\n        <ul className=\"list-group mt-3\">\n          {names.map((n, i) => <li className=\"list-group-item\" key={`${n}-${i}`}>{n}</li>)}\n          {names.length === 0 && <li className=\"list-group-item text-secondary\">No files dropped yet.</li>}\n        </ul>\n      </div>\n    </div>\n  );\n}\n"
    },
    {
      "id": "upload-axios",
      "track": "file-upload",
      "module": "Module 3 – Drag & Drop + API",
      "title": "Upload with FormData (axios)",
      "summary": "Send files as multipart form data (mocked).",
      "tags": [],
      "code": "import React, { useState } from \"react\";\nimport axios from \"axios\";\n\nexport default function App() {\n  const [file, setFile] = useState<File | null>(null);\n  const [uploading, setUploading] = useState(false);\n  const [message, setMessage] = useState(\"\");\n\n  async function upload() {\n    if (!file) return;\n    setUploading(true); setMessage(\"\");\n    const fd = new FormData();\n    fd.append(\"file\", file);\n    try {\n      const res = await axios.post(\"/api/upload\", fd, { headers: { \"Content-Type\": \"multipart/form-data\" } });\n      setMessage(res.data.message);\n    } catch {\n      setMessage(\"Upload failed\");\n    } finally {\n      setUploading(false);\n    }\n  }\n\n  return (\n    <div className=\"card shadow-sm mx-auto\" style={{ maxWidth: 460 }}>\n      <div className=\"card-body\">\n        <h5 className=\"mb-3\">FormData upload</h5>\n        <input type=\"file\" className=\"form-control mb-2\" onChange={(e) => setFile((e.target.files && e.target.files[0]) || null)} />\n        <button className=\"btn btn-primary\" disabled={!file || uploading} onClick={upload}>{uploading ? \"Uploading…\" : \"Upload\"}</button>\n        {message && <div className=\"alert alert-success mt-3 mb-0 py-2\">{message}</div>}\n        <p className=\"form-text mt-2 mb-0\">The request is mocked; no real server is needed.</p>\n      </div>\n    </div>\n  );\n}\n"
    }
  ]
};
