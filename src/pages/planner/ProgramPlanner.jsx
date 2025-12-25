import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./ProgramPlanner.css";

export default function ProgramPlanner() {
  const [programs, setPrograms] = useState([]);

  // ===== MASTER DATA =====
  const [sports, setSports] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [programMasters, setProgramMasters] = useState([]);

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
      .select("id, name");

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

        <select>
          <option>Select Season</option>
          {seasons.map(s => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <input value="01-01-2026" disabled />
        <input value="31-03-2026" disabled />
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
