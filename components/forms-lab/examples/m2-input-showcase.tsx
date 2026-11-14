"use client";

import { ChangeEvent, useState } from "react";

type FormState = {
  text: string; email: string; password: string; number: string; tel: string; url: string; search: string;
  date: string; time: string; color: string; range: string; bio: string; role: string;
  gender: string; agree: boolean; skills: string[];
};

export function Ex9AllInputsShowcase() {
  const [s, setS] = useState<FormState>({
    text: "", email: "", password: "", number: "", tel: "", url: "", search: "",
    date: "", time: "", color: "#0d6efd", range: "50", bio: "", role: "user",
    gender: "male", agree: false, skills: [],
  });

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target;
    const name = target.name as keyof FormState;
    if (target instanceof HTMLInputElement && target.type === "checkbox" && name === "agree") {
      setS((p) => ({ ...p, agree: target.checked }));
      return;
    }
    setS((p) => ({ ...p, [name]: target.value }));
  }

  function toggleSkill(skill: string) {
    setS((p) => ({ ...p, skills: p.skills.includes(skill) ? p.skills.filter((x) => x !== skill) : [...p.skills, skill] }));
  }

  return (
    <div className="p-3 border rounded bg-white" style={{ fontSize: 14 }}>
      <div className="row g-2">
        <div className="col-6"><label className="form-label mb-1">Text</label><input name="text" className="form-control form-control-sm" value={s.text} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Email</label><input name="email" type="email" className="form-control form-control-sm" value={s.email} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Password</label><input name="password" type="password" className="form-control form-control-sm" value={s.password} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Number</label><input name="number" type="number" className="form-control form-control-sm" value={s.number} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Tel</label><input name="tel" type="tel" className="form-control form-control-sm" value={s.tel} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">URL</label><input name="url" type="url" className="form-control form-control-sm" value={s.url} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Search</label><input name="search" type="search" className="form-control form-control-sm" value={s.search} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Date</label><input name="date" type="date" className="form-control form-control-sm" value={s.date} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Time</label><input name="time" type="time" className="form-control form-control-sm" value={s.time} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Color</label><input name="color" type="color" className="form-control form-control-color form-control-sm" value={s.color} onChange={onChange} /></div>
        <div className="col-12"><label className="form-label mb-1">Range ({s.range})</label><input name="range" type="range" className="form-range" value={s.range} onChange={onChange} /></div>
        <div className="col-12"><label className="form-label mb-1">Textarea</label><textarea name="bio" className="form-control form-control-sm" rows={2} value={s.bio} onChange={onChange} /></div>
        <div className="col-6"><label className="form-label mb-1">Select</label>
          <select name="role" className="form-select form-select-sm" value={s.role} onChange={onChange}><option value="user">User</option><option value="admin">Admin</option><option value="guest">Guest</option></select>
        </div>
        <div className="col-6"><label className="form-label mb-1 d-block">Radio (gender)</label>
          {(["male", "female", "other"] as const).map((g) => (
            <label key={g} className="form-check form-check-inline mb-0">
              <input className="form-check-input" type="radio" name="gender" value={g} checked={s.gender === g} onChange={onChange} /> <span className="form-check-label">{g}</span>
            </label>
          ))}
        </div>
        <div className="col-12"><label className="form-label mb-1 d-block">Checkbox group (skills)</label>
          {["React", "TypeScript", "Bootstrap"].map((sk) => (
            <label key={sk} className="form-check form-check-inline mb-0">
              <input className="form-check-input" type="checkbox" checked={s.skills.includes(sk)} onChange={() => toggleSkill(sk)} /> <span className="form-check-label">{sk}</span>
            </label>
          ))}
        </div>
        <div className="col-12"><label className="form-check mb-0"><input name="agree" className="form-check-input" type="checkbox" checked={s.agree} onChange={onChange} /> <span className="form-check-label">Single checkbox (agree)</span></label></div>
      </div>
      <p className="form-text mt-3 mb-1">Live state (controlled):</p>
      <pre className="bg-light p-2 small mb-0 rounded border" style={{ maxHeight: 180, overflow: "auto" }}>{JSON.stringify(s, null, 2)}</pre>
    </div>
  );
}
