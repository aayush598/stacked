"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const existingUser = { name: "Aayush", email: "aayush@mail.com", role: "Developer" };

export function Ex7Prepopulate() {
  const [form, setForm] = useState(existingUser);
  const [saved, setSaved] = useState<string | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaved(JSON.stringify(form));
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <div className="alert alert-info py-2">Loaded existing data into form (edit mode).</div>
      <div className="mb-2"><label className="form-label">Name</label><input name="name" value={form.name} onChange={handleChange} className="form-control" /></div>
      <div className="mb-2"><label className="form-label">Email</label><input name="email" value={form.email} onChange={handleChange} className="form-control" /></div>
      <div className="mb-3"><label className="form-label">Role</label>
        <select name="role" value={form.role} onChange={handleChange} className="form-select">
          <option>Developer</option><option>Designer</option><option>Manager</option>
        </select>
      </div>
      <button className="btn btn-success" type="submit">Save Changes</button>
      {saved ? <div className="form-text mt-2">Saved: {saved}</div> : null}
    </form>
  );
}
