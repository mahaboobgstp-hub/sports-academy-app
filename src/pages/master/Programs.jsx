import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [sports, setSports] = useState([]);

  const [form, setForm] = useState({
    name: "",
    code: "",
    sport_id: "",
    program_type: "",
    skill_level: "",
    gender: "",
    duration_minutes: "",
    default_seats: "",
    default_price: "",
    age_min: "",
    age_max: "",
    description: "",
    status: "ACTIVE"
  });

  useEffect(() => {
    loadSports();
    loadPrograms();
  }, []);

  async function loadSports() {
    const { data } = await supabase
      .from("sports")
      .select("id, name")
      .order("name");
    setSports(data || []);
  }

  async function loadPrograms() {
    const { data } = await supabase
      .from("programs")
      .select(`
        id,
        name,
        code,
        program_type,
        duration_minutes,
        default_seats,
        status,
        sports(name)
      `)
      .order("created_at", { ascending: false });

    setPrograms(data || []);
  }

  function updateField(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function saveProgram() {
    if (!form.name || !form.code || !form.sport_id) {
      alert("Program Name, Code and Sport are required");
      return;
    }

    const payload = {
      ...form,
      duration_minutes: form.duration_minutes ? Number(form.duration_minutes) : null,
      default_seats: form.default_seats ? Number(form.default_seats) : null,
      default_price: form.default_price ? Number(form.default_price) : null,
      age_min: form.age_min ? Number(form.age_min) : null,
      age_max: form.age_max ? Number(form.age_max) : null
    };

    const { error } = await supabase.from("programs").insert([payload]);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    setForm({
      name: "",
      code: "",
      sport_id: "",
      program_type: "",
      skill_level: "",
      gender: "",
      duration_minutes: "",
      default_seats: "",
      default_price: "",
      age_min: "",
      age_max: "",
      description: "",
      status: "ACTIVE"
    });

    loadPrograms();
  }

  return (
    <div>
      <h2>Programs</h2>

      <div className="form-grid">
        <input placeholder="Program Name" value={form.name}
          onChange={e => updateField("name", e.target.value)} />

        <input placeholder="Program Code" value={form.code}
          onChange={e => updateField("code", e.target.value)} />

        <select value={form.sport_id}
          onChange={e => updateField("sport_id", e.target.value)}>
          <option value="">Select Sport</option>
          {sports.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <input placeholder="Program Type"
          value={form.program_type}
          onChange={e => updateField("program_type", e.target.value)} />

        <input type="number" placeholder="Duration (minutes)"
          value={form.duration_minutes}
          onChange={e => updateField("duration_minutes", e.target.value)} />

        <input type="number" placeholder="Default Seats"
          value={form.default_seats}
          onChange={e => updateField("default_seats", e.target.value)} />

        <input placeholder="Skill Level"
          value={form.skill_level}
          onChange={e => updateField("skill_level", e.target.value)} />

        <input placeholder="Gender"
          value={form.gender}
          onChange={e => updateField("gender", e.target.value)} />

        <input type="number" placeholder="Age Min"
          value={form.age_min}
          onChange={e => updateField("age_min", e.target.value)} />

        <input type="number" placeholder="Age Max"
          value={form.age_max}
          onChange={e => updateField("age_max", e.target.value)} />

        <input type="number" placeholder="Default Price"
          value={form.default_price}
          onChange={e => updateField("default_price", e.target.value)} />

        <input placeholder="Description"
          value={form.description}
          onChange={e => updateField("description", e.target.value)} />

        <select value={form.status}
          onChange={e => updateField("status", e.target.value)}>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <button onClick={saveProgram}>Add Program</button>
      </div>

      <table width="100%" border="1" cellPadding="6">
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
            <tr>
              <td colSpan="7" align="center">No programs yet</td>
            </tr>
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
