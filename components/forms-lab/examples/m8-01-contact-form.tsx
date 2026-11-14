"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface Contact { name: string; email: string; message: string }
interface Errors { name?: string; email?: string; message?: string }

export function Ex10BootstrapContact() {
  const [form, setForm] = useState<Contact>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [ok, setOk] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setOk(false);
  }
  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }
  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) { setOk(true); setForm({ name:"", email:"", message:"" }); }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="p-3 border rounded bg-white">
      {ok && <div className="alert alert-success py-2">Submitted successfully (validated & reset)!</div>}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input name="name" value={form.name} onChange={handleChange} className={`form-control ${errors.name ? "is-invalid" : ""}`} />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} className={`form-control ${errors.email ? "is-invalid" : ""}`} />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea name="message" rows={3} value={form.message} onChange={handleChange} className={`form-control ${errors.message ? "is-invalid" : ""}`} />
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" type="submit">Send</button>
        <button className="btn btn-outline-secondary" type="button" onClick={()=>{setForm({name:"",email:"",message:""}); setErrors({}); setOk(false);}}>Reset</button>
      </div>
    </form>
  );
}
