import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "../../styles/table.css";


export default function Sports() {
  const [sports, setSports] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    loadSports();
  }, []);

  async function loadSports() {
    const { data } = await supabase
      .from("sports")
      .select("*")
      .order("created_at", { ascending: false });

    setSports(data || []);
  }

  async function saveSport() {
  if (!name || !code) {
    alert("Name and Code are required");
    return;
  }

  const { error } = await supabase
    .from("sports")
    .insert([{ name, code }]);

  if (error) {
    console.error("Supabase insert error:", error);
    alert(error.message);
    return;
  }

  setName("");
  setCode("");
  loadSports();
}


  return (
    <div>
      <h3>Sports</h3>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Sport Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Code"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button onClick={saveSport}>Add</button>
      </div>

      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sports.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.code}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
