import { useState } from "react";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const HOURS = ["6:00","7:00","8:00","9:00","10:00"];
const PROGRAMS = ["ballsnbabies","midlevel","jr","all boys"];

export default function LocationMetricsModal({ location, onClose }) {
  const [courts, setCourts] = useState([{ id: 1, name: "Court 1" }]);
  const [weekEditor, setWeekEditor] = useState(null);

  const addCourt = () => {
    setCourts([...courts, { id: courts.length + 1, name: `Court ${courts.length + 1}` }]);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal wide">
        <h3>{location.name} – Courts & Weekly Pattern</h3>

        <button onClick={addCourt}>+ Add Court</button>

        {courts.map(court => (
          <div key={court.id} className="court-block">
            <h4>{court.name}</h4>

            {DAYS.map(day => (
              <div key={day} className="day-row-inline">
  <span className="day-date">05-Jan-26</span>
  <strong>{day}</strong>


                <details>
                  <summary>Hours</summary>

                  {HOURS.map(hour => (
                    <div key={hour} className="hour-inline">
 

  <input type="checkbox" />
  <span>{hour}</span>

  <select>
    {PROGRAMS.map(p => (
      <option key={p}>{p}</option>
    ))}
  </select>

  <input placeholder="Seats" />
  <input placeholder="Price" />

  <label>
    <input type="checkbox" /> Pause
  </label>

  <label>
    <input type="checkbox" /> Cancel
  </label>
</div>

                  ))}
                </details>

                <button
                  className="link-btn"
                  onClick={() => setWeekEditor({ court, day })}
                >
                  Edit weeks
                </button>
              </div>
            ))}
          </div>
        ))}

        {weekEditor && (
          <div className="week-modal">
            <h4>
              {weekEditor.court.name} – {weekEditor.day}
            </h4>

            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>
                <input type="checkbox" /> Week {i + 1}
              </div>
            ))}

            <button onClick={() => setWeekEditor(null)}>Apply</button>
          </div>
        )}

        <button onClick={onClose}>Save & Close</button>
      </div>
    </div>
  );
}
