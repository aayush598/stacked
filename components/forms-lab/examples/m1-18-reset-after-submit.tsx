"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const initial = { name: "", email: "" };

export function Ex6ResetAfterSubmit() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setSent(false);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setForm(initial); // reset after submission
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      {sent && <div className="alert alert-success py-2">Submitted &amp; form reset to initial values.</div>}
      <div className="mb-2">
        <label className="form-label">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="form-control" type="email" />
      </div>
      <button className="btn btn-primary" type="submit">Submit &amp; Reset</button>
      <div className="form-text mt-2">Current state: {JSON.stringify(form)}</div>
    </form>
  );
}
