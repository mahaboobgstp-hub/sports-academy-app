import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./ProgramPlanner.css";

export default function ProgramPlanner() {
 
  
  // ===== MASTER DATA =====
   const [programs, setPrograms] = useState([]);
  const [sports, setSports] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [programMasters, setProgramMasters] = useState([]);
  const [selectedSeasonId, setSelectedSeasonId] = useState("");

  // 2️⃣ DERIVED DATA (PASTE HERE 👇)
  const selectedSeason = seasons.find(
    s => s.id === selectedSeasonId
  );

  // ===== LOAD MASTER DATA ONLY =====
  useEffect(() => {
    loadSports();
    loadSeasons();
    loadPrograms();
  }, []);

  const loadSports = async () => {
    const { data, error } = await supabase
      .from("sports")
      .select("id, name");

    if (!error) setSports(data);
  };

  const loadSeasons = async () => {
    const { data, error } = await supabase
      .from("seasons")
      .select("id, name, start_date, end_date");

    if (!error) setSeasons(data);
  };

  const loadPrograms = async () => {
    const { data, error } = await supabase
      .from("programs")
      .select("id, name");

    if (!error) setProgramMasters(data);
  };

  const addProgram = () => {
    setPrograms([
      ...programs,
      {
        id: Date.now(),
        programId: "",
        totalSeats: "",
        locations: []
      }
    ]);
  };

  return (
    <div className="planner-page">

      {/* ===== TOP CONTEXT BAR (UNCHANGED) ===== */}
      <div className="planner-header">
        <select>
          <option>Select Sport</option>
          {sports.map(s => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

      <select
      value={selectedSeasonId}
      onChange={(e) => setSelectedSeasonId(e.target.value)}
      >
          <option>Select Season</option>
          {seasons.map(s => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <input value={selectedSeason?.start_date || ""} disabled />
        <input value={selectedSeason?.end_date || ""} disabled />

      </div>

      {/* ===== PROGRAM SECTION (UNCHANGED FLOW) ===== */}
      <div className="planner-section">
        <div className="section-header">
          <h3>Programs</h3>
          <button onClick={addProgram}>+ Add Program</button>
        </div>

        {programs.map((p) => (
          <div key={p.id} className="program-card">
            <div className="program-row">
              <select>
                <option>Select Program</option>
                {programMasters.map(pm => (
                  <option key={pm.id} value={pm.id}>
                    {pm.name}
                  </option>
                ))}
              </select>

              <input placeholder="Total Seats" />
              <input placeholder="Allocated" disabled />
              <input placeholder="Pending" disabled />
            </div>

            <button className="sub-btn">+ Add Location</button>
          </div>
        ))}
      </div>
    </div>
  );
}
