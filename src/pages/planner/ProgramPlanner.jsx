import { useState } from "react";
import "./ProgramPlanner.css";

export default function ProgramPlanner() {
  const [programs, setPrograms] = useState([]);

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

      {/* ===== TOP CONTEXT BAR ===== */}
      <div className="planner-header">
        <select>
          <option>Select Sport</option>
        </select>

        <select>
          <option>Select Season</option>
        </select>

        <input value="01-01-2026" disabled />
        <input value="31-03-2026" disabled />
      </div>

      {/* ===== PROGRAM SECTION ===== */}
      <div className="planner-section">
        <div className="section-header">
          <h3>Programs</h3>
          <button onClick={addProgram}>+ Add Program</button>
        </div>

        {programs.map((p, index) => (
          <div key={p.id} className="program-card">
            <div className="program-row">
              <select>
                <option>Select Program</option>
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
