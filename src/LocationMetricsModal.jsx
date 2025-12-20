import { useState } from "react";
import { DAYS, HOURS, PROGRAMS } from "./data";

export default function LocationMetricsModal({ location, onClose }) {
  const [courts, setCourts] = useState([]);

  const addCourts = count => {
    setCourts(
      Array.from({ length: count }, (_, i) => ({
        name: `Court ${i + 1}`,
        schedule: {}
      }))
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{location.name} – Metrics</h3>

        <label>Number of Courts</label>
        <input
          type="number"
          min="1"
          onChange={e => addCourts(+e.target.value)}
        />

        {courts.map((court, cIdx) => (
          <div key={cIdx} className="court-block">
            <input
              value={court.name}
              onChange={e => {
                courts[cIdx].name = e.target.value;
                setCourts([...courts]);
              }}
            />

            {DAYS.map(day => (
              <div key={day} className="day-row">
                <strong>{day}</strong>
                <div className="hours">
                  {HOURS.map(hour => (
                    <div key={hour} className="hour-cell">
                      <input type="checkbox" />
                      <span>{hour}</span>
                      <input placeholder="Seats" type="number" />
                      <select>
                        {PROGRAMS.map(p => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        <button onClick={onClose}>Save</button>
      </div>
    </div>
  );
}
