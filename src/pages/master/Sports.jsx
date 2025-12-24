import { useEffect, useState } from "react";

export default function Sports() {
  const [sports, setSports] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/sports?select=*`,
      {
        headers: {
          apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
        }
      }
    );
    const data = await res.json();
    setSports(data);
  };

  const addSport = async () => {
    await fetch(
      `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/sports`,
      {
        method: "POST",
        headers: {
          apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
          Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, code })
      }
    );
    setName("");
    setCode("");
    fetchSports();
  };

  return (
    <div>
      <h3>Sports</h3>

      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
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
        <button onClick={addSport}>Add Sport</button>
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
