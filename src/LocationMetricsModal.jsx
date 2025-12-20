import { useState } from "react";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const HOURS = ["6:00","7:00","8:00","9:00","10:00","11:00","12:00"];
const PROGRAMS = ["ballsnbabies","midlevel","jr","all boys"];

export default function LocationMetricsModal({ location, onClose }) {
  const [schedule, setSchedule] = useState({});

  const toggleHour = (day, hour) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        hours: {
          ...prev[day]?.hours,
          [hour]: prev[day]?.hours?.[hour] || {
            program: "",
            seats: "",
            price: ""
          }
        }
      }
    }));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{location.name} – Weekly Pattern</h3>

        {DAYS.map(day => (
          <div key={day} className="day-row">
            <strong>{day}</strong>

            <details>
              <summary>Select Hours</summary>

              {HOURS.map(hour => (
                <div key={hour} className="hour-row">
                  <input
                    type="checkbox"
                    onChange={() => toggleHour(day, hour)}
                  />
                  <span>{hour}</span>

                  {schedule[day]?.hours?.[hour] && (
                    <>
                      <select>
                        {PROGRAMS.map(p => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>

                      <input placeholder="Seats" />
                      <input placeholder="Price" />
                    </>
                  )}
                </div>
              ))}
            </details>

            <button className="small-btn">
              Edit specific weeks
            </button>
          </div>
        ))}

        <button onClick={onClose}>Save</button>
      </div>
    </div>
  );
}
