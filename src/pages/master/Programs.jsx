import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Programs() {
  const [sports, setSports] = useState([]);
  const [programs, setPrograms] = useState([]);

  const payload = {
  name,
  code,
  sport_id,
  program_type,
  skill_level,
  gender,
  status,
  description,

  duration_minutes: duration ? Number(duration) : null,
  default_seats: defaultSeats ? Number(defaultSeats) : null,
  default_price: defaultPrice ? Number(defaultPrice) : null,
  age_min: ageMin ? Number(ageMin) : null,
  age_max: ageMax ? Number(ageMax) : null,
};

const { error } = await supabase
  .from("programs")
  .insert([payload]);

if (error) {
  alert(error.message);
  console.error(error);
  return;
}

  useEffect(() => {
    loadSports();
    loadPrograms();
  }, []);

  async function loadSports() {
    const { data } = await supabase
      .from("sports")
      .select("id,name")
      .order("name");
    setSports(data || []);
  }

  async function loadPrograms() {
    const { data } = await supabase
      .from("programs")
      .select("id,name,code,program_type,duration_minutes,default_seats,status,sports(name)")
      .order("created_at", { ascending: false });

    setPrograms(data || []);
  }

  function updateField(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function saveProgram() {
    if (!form.name || !form.code || !form.sport_id) {
      alert("Program Name, Code and Sport are required");
      return;
    }

    const { error } = await supabase.from("programs").insert([form]);

    if (error) {
      alert(error.message);
      return;
    }

    setForm({
      sport_id: "",
      name: "",
      code: "",
      program_type: "",
      duration_minutes: "",
      default_seats: "",
      skill_level: "",
      gender: "",
      age_min: "",
      age_max: "",
      default_price: "",
      description: "",
      status: "ACTIVE"
    });

    loadPrograms();
  }

  return (
    <div>
      <h3>Programs</h3>

      <div className="form-grid">
        <input placeholder="Program Name" value={form.name} onChange={e => updateField("name", e.target.value)} />
        <input placeholder="Program Code" value={form.code} onChange={e => updateField("code", e.target.value)} />

        <select value={form.sport_id} onChange={e => updateField("sport_id", e.target.value)}>
          <option value="">Select Sport</option>
          {sports.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>

        <input placeholder="Program Type" value={form.program_type} onChange={e => updateField("program_type", e.target.value)} />
        <input placeholder="Duration (minutes)" value={form.duration_minutes} onChange={e => updateField("duration_minutes", e.target.value)} />
        <input placeholder="Default Seats" value={form.default_seats} onChange={e => updateField("default_seats", e.target.value)} />
        <input placeholder="Skill Level" value={form.skill_level} onChange={e => updateField("skill_level", e.target.value)} />
        <input placeholder="Gender" value={form.gender} onChange={e => updateField("gender", e.target.value)} />
        <input placeholder="Age Min" value={form.age_min} onChange={e => updateField("age_min", e.target.value)} />
        <input placeholder="Age Max" value={form.age_max} onChange={e => updateField("age_max", e.target.value)} />
        <input placeholder="Default Price" value={form.default_price} onChange={e => updateField("default_price", e.target.value)} />

        <select value={form.status} onChange={e => updateField("status", e.target.value)}>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <input placeholder="Description" value={form.description} onChange={e => updateField("description", e.target.value)} />
        <button onClick={saveProgram}>Add</button>
      </div>

      <table border="1" width="100%" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Sport</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Seats</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {programs.length === 0 && (
            <tr><td colSpan="7" align="center">No programs yet</td></tr>
          )}
          {programs.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.code}</td>
              <td>{p.sports?.name}</td>
              <td>{p.program_type}</td>
              <td>{p.duration_minutes}</td>
              <td>{p.default_seats}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
