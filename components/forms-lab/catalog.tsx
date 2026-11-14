import type { ComponentType } from "react";
import { Ex1BasicFunctionalForm } from "./examples/m1-01-basic-functional-form";
import { Ex2ControlledInput } from "./examples/m1-04-controlled-component";
import { Ex3UncontrolledRef } from "./examples/m1-05-uncontrolled-ref";
import { Ex4ObjectState } from "./examples/m1-08-object-state";
import { Ex5FormInterface } from "./examples/m1-09-form-interface";
import { Ex6ResetAfterSubmit } from "./examples/m1-18-reset-after-submit";
import { Ex7Prepopulate } from "./examples/m1-19-prepopulate";
import { Ex8ReusableForm } from "./examples/m1-15-reusable-form";
import { Ex9AllInputsShowcase } from "./examples/m2-input-showcase";
import { Ex10BootstrapContact } from "./examples/m8-01-contact-form";

export type FormExample = {
  id: string;
  module: string;
  title: string;
  what: string;
  code: string;
  Component: ComponentType;
};

export const formModules = [
  "Module 1 – Fundamentals",
  "Module 2 – All Input Elements",
  "Module 3 – Event Handling",
  "Module 4 – State Management",
  "Module 5 – Basic Validation",
  "Module 6 – Advanced Validation",
  "Module 7 – Bootstrap Styling",
  "Module 8 – Complete Forms",
  "Module 9 – Axios Submission",
];

export const formExamples: FormExample[] = [
  {
    id: "m1-basic-functional",
    module: "Module 1 – Fundamentals",
    title: "1.1 Basic Functional Form Component",
    what: "A minimal React functional component rendering a form with labels, inputs and a submit button.",
    Component: Ex1BasicFunctionalForm,
    code: `import { FormEvent } from "react";

export function BasicFunctionalForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <h5 className="mb-3">Basic Form</h5>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" type="text" className="form-control" placeholder="Enter name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" type="email" className="form-control" placeholder="Enter email" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}`,
  },
  {
    id: "m1-controlled",
    module: "Module 1 – Fundamentals",
    title: "1.4 Controlled Component (useState)",
    what: "Input value is controlled by React state via value + onChange. You always know the current value.",
    Component: Ex2ControlledInput,
    code: `import { useState, ChangeEvent, FormEvent } from "react";

export function ControlledForm() {
  const [name, setName] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value); // state drives the input
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Submitted: " + name);
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <label className="form-label">Name (controlled)</label>
      <input
        type="text"
        className="form-control mb-2"
        value={name}                {/* value comes from state */}
        onChange={handleChange}
      />
      <div className="form-text mb-3">Live value: {name || "(empty)"}</div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
}`,
  },
  {
    id: "m1-uncontrolled",
    module: "Module 1 – Fundamentals",
    title: "1.5 Uncontrolled Component (useRef)",
    what: "Input keeps its own DOM value; React reads it via a ref on submit (no onChange state).",
    Component: Ex3UncontrolledRef,
    code: `import { useRef, FormEvent } from "react";

export function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = nameRef.current?.value ?? "";
    alert("Read from ref: " + value);
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <label className="form-label">Name (uncontrolled)</label>
      <input
        type="text"
        className="form-control mb-3"
        defaultValue="Rahul"         {/* initial only, not controlled */}
        ref={nameRef}
      />
      <button className="btn btn-secondary" type="submit">Read & Submit</button>
    </form>
  );
}`,
  },
  {
    id: "m1-object-state",
    module: "Module 1 – Fundamentals",
    title: "1.8 Object-Based Form State (single useState)",
    what: "All fields stored in one state object; a generic handler updates by input name using spread + computed key.",
    Component: Ex4ObjectState,
    code: `import { useState, ChangeEvent, FormEvent } from "react";

type FormData = { name: string; email: string; age: string };

const initial: FormData = { name: "", email: "", age: "" };

export function ObjectStateForm() {
  const [form, setForm] = useState<FormData>(initial);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value })); // computed key
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-white">
      <input name="name"  value={form.name}  onChange={handleChange} className="form-control mb-2" placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} className="form-control mb-2" placeholder="Email" type="email" />
      <input name="age"   value={form.age}   onChange={handleChange} className="form-control mb-3" placeholder="Age" type="number" />
      <button className="btn btn-primary" type="submit">Submit</button>
      <pre className="mt-3 bg-light p-2 small mb-0">{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}`,
  },
  {
    id: "m1-interface",
    module: "Module 1 – Fundamentals",
    title: "1.9 Form State Interface + 1.12 Optional Fields",
    what: "TypeScript interface defines form shape; optional properties (?) allow fields that may be missing.",
    Component: Ex5FormInterface,
    code: `interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;      // optional
  bio?: string;        // optional
}

const initialValues: RegisterForm = {
  firstName: "",
  lastName: "",
  email: "",
  // phone & bio omitted (optional)
};

const [form, setForm] = useState<RegisterForm>(initialValues);`,
  },
  {
    id: "m1-reset-after-submit",
    module: "Module 1 – Fundamentals",
    title: "1.18 Reset After Submission",
    what: "After successful submit, restore state to initial values to clear the form.",
    Component: Ex6ResetAfterSubmit,
    code: `const initial = { name: "", email: "" };

export function ResetForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setForm(initial); // clear all values
  }

  return (
    <form onSubmit={handleSubmit}>
      {sent && <div className="alert alert-success py-2">Submitted & reset!</div>}
      <input name="name" value={form.name} onChange={...} className="form-control mb-2" />
      <input name="email" value={form.email} onChange={...} className="form-control mb-3" />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}`,
  },
  {
    id: "m1-prepopulate",
    module: "Module 1 – Fundamentals",
    title: "1.19 Pre-populate / Edit Existing Data",
    what: "Initialize (or load) state with existing record so inputs show current values for editing.",
    Component: Ex7Prepopulate,
    code: `const existingUser = { name: "Aayush", email: "aayush@mail.com", role: "Developer" };

export function EditProfileForm() {
  // pre-populated from existing data (could come from props/API)
  const [form, setForm] = useState(existingUser);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  return (/* inputs show existingUser values immediately */);
}`,
  },
  {
    id: "m1-reusable",
    module: "Module 1 – Fundamentals",
    title: "1.15-1.16 Reusable Form Component + Props",
    what: "Form accepts initialValues and onSubmit callback via props so parent controls data flow.",
    Component: Ex8ReusableForm,
    code: `interface Props {
  initialValues: { title: string; price: string };
  onSubmit: (values: { title: string; price: string }) => void;
  submitLabel?: string;
}

export function ProductForm({ initialValues, onSubmit, submitLabel = "Save" }: Props) {
  const [form, setForm] = useState(initialValues);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" />
      <input name="price" value={form.price} onChange={handleChange} className="form-control mb-3" type="number" />
      <button className="btn btn-success">{submitLabel}</button>
    </form>
  );
}

// Parent
<ProductForm initialValues={{ title: "", price: "" }} onSubmit={v => save(v)} />
<ProductForm initialValues={{ title: "Book", price: "199" }} onSubmit={v => update(v)} submitLabel="Update" />`,
  },
  {
    id: "m2-inputs-showcase",
    module: "Module 2 – All Input Elements",
    title: "2.x Common HTML Inputs in React + Bootstrap",
    what: "Text, email, password, number, tel, url, textarea, date, time, select, radio, checkbox, range, file, color — controlled with proper event types.",
    Component: Ex9AllInputsShowcase,
    code: `// each with correct TS event type:
const [text, setText] = useState("");
const [agree, setAgree] = useState(false);
const [role, setRole] = useState("user");

<input type="text" className="form-control"
  value={text}
  onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />

<input type="checkbox" className="form-check-input"
  checked={agree}
  onChange={(e: ChangeEvent<HTMLInputElement>) => setAgree(e.target.checked)} />

<select className="form-select" value={role}
  onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

<textarea className="form-control"
  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMsg(e.target.value)} />`,
  },
  {
    id: "m8-contact",
    module: "Module 8 – Complete Forms",
    title: "8.1 Basic Contact Form (Bootstrap UI + Controlled + Validation shape)",
    what: "Complete contact form: Bootstrap layout, controlled state, simple required validation, submit/reset behavior.",
    Component: Ex10BootstrapContact,
    code: `interface Contact { name: string; email: string; message: string; }
interface Errors { name?: string; email?: string; message?: string; }

const [form, setForm] = useState<Contact>({ name:"", email:"", message:"" });
const [errors, setErrors] = useState<Errors>({});

function validate(): Errors {
  const e: Errors = {};
  if (!form.name.trim()) e.name = "Name is required";
  if (!/\\S+@\\S+\\.\\S+/.test(form.email)) e.email = "Valid email required";
  if (!form.message.trim()) e.message = "Message is required";
  return e;
}

function handleSubmit(ev: FormEvent<HTMLFormElement>) {
  ev.preventDefault();
  const e = validate();
  setErrors(e);
  if (Object.keys(e).length === 0) { /* submit */ }
}`,
  },
];
