"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface Values { title: string; price: string }
interface Props {
  initialValues: Values;
  onSubmit: (values: Values) => void;
  submitLabel?: string;
}

function ProductForm({ initialValues, onSubmit, submitLabel = "Save" }: Props) {
  const [form, setForm] = useState<Values>(initialValues);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }
  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); onSubmit(form); }} className="border rounded p-2 bg-light">
      <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" />
      <input name="price" value={form.price} onChange={handleChange} className="form-control mb-2" type="number" placeholder="Price" />
      <button className="btn btn-success btn-sm" type="submit">{submitLabel}</button>
    </form>
  );
}

export function Ex8ReusableForm() {
  const [log, setLog] = useState<string[]>([]);
  return (
    <div className="p-3 border rounded bg-white">
      <p className="small text-muted mb-2">Same reusable component, different props (add vs edit):</p>
      <div className="mb-3">
        <div className="fw-semibold small mb-1">Add mode</div>
        <ProductForm initialValues={{ title: "", price: "" }} onSubmit={(v)=>setLog(l=>[`ADD ${JSON.stringify(v)}`,...l])} submitLabel="Add" />
      </div>
      <div className="mb-3">
        <div className="fw-semibold small mb-1">Edit mode (pre-populated)</div>
        <ProductForm initialValues={{ title: "Book", price: "199" }} onSubmit={(v)=>setLog(l=>[`UPDATE ${JSON.stringify(v)}`,...l])} submitLabel="Update" />
      </div>
      <div className="small fw-semibold">Parent received:</div>
      <pre className="bg-light p-2 small mb-0 rounded border" style={{maxHeight:120,overflow:"auto"}}>{log.join("\n") || "(submit a form above)"}</pre>
    </div>
  );
}
