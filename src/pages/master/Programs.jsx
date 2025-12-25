import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Programs() {
  const [sports, setSports] = useState([]);
  const [programs, setPrograms] = useState([]);

  const [sportId, setSportId] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

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
      .select("id,name,code,status,sports(name)")
      .order("created_at", { ascending: false });
    setPrograms(data || []);
  }

  async function saveProgram() {
    if (!sportId || !name || !code) {
      alert("Sport, Name, Code required");
      return;
    }

    const { error } = await supabase.from("programs").insert([
      {
        sport_id: sportId,
        name,
        code
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    setCode("");
    loadPrograms();
  }

  return (
    <div>
      <h3>Programs</h3>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <select value={sportId} onChange={e => setSportId(e.target.value)}>
          <option value="">Select Sport</option>
          {sports.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <input placeholder="Program Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Code" value={code} onChange={e => setCode(e.target.value)} />
        <button onClick={saveProgram}>Add</button>
      </div>

      <table border="1" width="100%" cellPadding="6">
        <thead>
          <tr>
            <th>Sport</th>
            <th>Name</th>
            <th>Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {programs.map(p => (
            <tr key={p.id}>
              <td>{p.sports?.name}</td>
              <td>{p.name}</td>
              <td>{p.code}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
