"use client";

import { FormEvent, useRef, useState } from "react";

export function Ex3UncontrolledRef() {
  const nameRef = useRef<HTMLInputElement>(null);
  const [read, setRead] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setRead(nameRef.current?.value ?? "");
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <label className="form-label">Name (uncontrolled, useRef)</label>
      <input type="text" className="form-control mb-2" defaultValue="Rahul" ref={nameRef} />
      <div className="form-text mb-3">Typing does not trigger React state; value read from DOM on submit.</div>
      <button className="btn btn-secondary" type="submit">Read &amp; Submit</button>
      {read ? <div className="alert alert-secondary mt-3 mb-0 py-2">Ref value: {read}</div> : null}
    </form>
  );
}
