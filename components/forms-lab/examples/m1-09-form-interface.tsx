"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string; // optional
  bio?: string;   // optional
}

const initialValues: RegisterForm = { firstName: "", lastName: "", email: "" };

export function Ex5FormInterface() {
  const [form, setForm] = useState<RegisterForm>(initialValues);
  const [out, setOut] = useState<RegisterForm | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOut(form);
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <div className="row g-2">
        <div className="col-sm-6"><label className="form-label">First Name *</label><input name="firstName" value={form.firstName} onChange={handleChange} className="form-control" required /></div>
        <div className="col-sm-6"><label className="form-label">Last Name *</label><input name="lastName" value={form.lastName} onChange={handleChange} className="form-control" required /></div>
      </div>
      <div className="mt-2"><label className="form-label">Email *</label><input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required /></div>
      <div className="mt-2"><label className="form-label">Phone (optional)</label><input name="phone" value={form.phone ?? ""} onChange={handleChange} className="form-control" placeholder="Optional" /></div>
      <div className="mt-2 mb-3"><label className="form-label">Bio (optional)</label><textarea name="bio" value={form.bio ?? ""} onChange={handleChange} className="form-control" rows={2} placeholder="Optional" /></div>
      <button className="btn btn-primary" type="submit">Submit</button>
      <pre className="bg-light p-2 small mt-3 mb-0 rounded border">{JSON.stringify(form, null, 2)}</pre>
      {out ? <div className="alert alert-success mt-2 mb-0 py-2">Typed submit OK (see state above)</div> : null}
    </form>
  );
}
