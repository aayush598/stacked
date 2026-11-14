"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export function Ex2ControlledInput() {
  const [name, setName] = useState<string>("");
  const [submitted, setSubmitted] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(name);
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <label className="form-label">Name (controlled)</label>
      <input
        type="text"
        className="form-control mb-2"
        value={name}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <div className="form-text mb-3">Live value (from state): <strong>{name || "(empty)"}</strong></div>
      <button className="btn btn-primary" type="submit">Submit</button>
      {submitted ? <div className="alert alert-info mt-3 mb-0 py-2">Submitted: {submitted}</div> : null}
    </form>
  );
}
