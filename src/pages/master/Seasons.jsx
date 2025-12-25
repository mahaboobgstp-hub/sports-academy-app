import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Seasons() {
  const [seasons, setSeasons] = useState([]);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [planningLocked, setPlanningLocked] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    loadSeasons();
  }, []);

  async function loadSeasons() {
    const { data, error } = await supabase
      .from("seasons")
      .select("*")
      .order("start_date", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setSeasons(data || []);
  }

  async function saveSeason() {
    if (!name || !code || !academicYear || !startDate || !endDate) {
      alert("All mandatory fields are required");
      return;
    }

    // ensure only one default season
    if (isDefault) {
      await supabase
        .from("seasons")
        .update({ is_default: false })
        .neq("id", 0);
    }

    const { error } = await supabase.from("seasons").insert([
      {
        name,
        code,
        academic_year: academicYear,
        start_date: startDate,
        end_date: endDate,
        is_default: isDefault,
        planning_locked: planningLocked,
        notes
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }
    setAcademicYear("");
    setName("");
    setCode("");
    setStartDate("");
    setEndDate("");
    setIsDefault(false);
    setPlanningLocked(false);
    setNotes("");

    loadSeasons();
  }

  return (
    <div>
      <h3>Seasons</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 12
        }}
      >
        <input placeholder="Academic Year (e.g. 2025-26)" value={academicYear} onChange={e => setAcademicYear(e.target.value)} />
        <input placeholder="Season Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Season Code" value={code} onChange={e => setCode(e.target.value)} />
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </div>

      <div style={{ display: "flex", gap: 20, marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={isDefault}
            onChange={e => setIsDefault(e.target.checked)}
          />{" "}
          Default Season
        </label>

        <label>
          <input
            type="checkbox"
            checked={planningLocked}
            onChange={e => setPlanningLocked(e.target.checked)}
          />{" "}
          Planning Locked
        </label>
      </div>

      <textarea
        placeholder="Internal Notes"
        value={notes}
        onChange={e => setNotes(e.target.value)}
        style={{ width: "100%", marginBottom: 12 }}
      />

      <button onClick={saveSeason}>Add Season</button>

      <table width="100%" border="1" cellPadding="6" style={{ marginTop: 16 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Period</th>
            <th>Default</th>
            <th>Planning Locked</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {seasons.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.code}</td>
              <td>{s.start_date} → {s.end_date}</td>
              <td>{s.is_default ? "Yes" : "No"}</td>
              <td>{s.planning_locked ? "Yes" : "No"}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
