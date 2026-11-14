"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormData = { name: string; email: string; age: string };
const initial: FormData = { name: "", email: "", age: "" };

export function Ex4ObjectState() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(form);
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <div className="mb-2">
        <label className="form-label">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Email" type="email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input name="age" value={form.age} onChange={handleChange} className="form-control" placeholder="Age" type="number" />
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
      <p className="form-text mt-3 mb-1">State object (updates live):</p>
      <pre className="bg-light p-2 small mb-0 rounded border">{JSON.stringify(form, null, 2)}</pre>
      {submitted ? <div className="alert alert-success mt-2 mb-0 py-2">Submitted snapshot: {JSON.stringify(submitted)}</div> : null}
    </form>
  );
}
