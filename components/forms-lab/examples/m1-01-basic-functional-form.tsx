"use client";

import { FormEvent, useState } from "react";

export function Ex1BasicFunctionalForm() {
  const [msg, setMsg] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg("Form submitted (default prevented)");
  }
  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <h5 className="mb-3">Basic Form</h5>
      <div className="mb-3">
        <label htmlFor="b-name" className="form-label">Name</label>
        <input id="b-name" type="text" className="form-control" placeholder="Enter name" />
      </div>
      <div className="mb-3">
        <label htmlFor="b-email" className="form-label">Email</label>
        <input id="b-email" type="email" className="form-control" placeholder="Enter email" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {msg ? <div className="alert alert-success mt-3 mb-0 py-2">{msg}</div> : null}
    </form>
  );
}
