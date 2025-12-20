import { useState } from "react";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const TIME_SLOTS = [
  "6:00–7:00","7:00–8:00","8:00–9:00","9:00–10:00",
  "10:00–11:00","11:00–12:00","12:00–13:00",
  "13:00–14:00","14:00–15:00","15:00–16:00",
  "16:00–17:00","17:00–18:00","18:00–19:00",
  "19:00–20:00","20:00–21:00","21:00–22:00"
];
const PROGRAMS = ["ballsnbabies","midlevel","jr","all boys"];

export default function LocationMetricsModal({ location, onClose }) {
  const [courts, setCourts] = useState([
    { id: 1, name: "Main Court", schedule: {} }
  ]);

  const addCourt = () => {
    setCourts([
      ...courts,
      { id: courts.length + 1, name: "", schedule: {} }
    ]);
  };

  const addHour = (courtId, day) => {
    setCourts(courts.map(court => {
      if (court.id !== courtId) return court;

      const dayHours = court.schedule[day] || [];
      return {
        ...court,
        schedule: {
          ...court.schedule,
          [day]: [
            ...dayHours,
            { time: TIME_SLOTS[0], program: "", seats: "", price: "", pause: false, cancel: false }
          ]
        }
      };
    }));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal wide">
        <h3>{location.name} – Courts Schedule</h3>

        <button onClick={addCourt}>+ Add Court</button>

        {courts.map(court => (
          <div key={court.id} className="court-block">
            <input
              value={court.name}
              placeholder="Court name"
              onChange={e =>
                setCourts(courts.map(c =>
                  c.id === court.id ? { ...c, name: e.target.value } : c
                ))
              }
            />

            {DAYS.map(day => (
              <div key={day} className="day-block">
                <div className="day-header">
                  <strong>05-Jan-26</strong> {day}
                  <button className="link-btn">Edit weeks</button>
                </div>

                {(court.schedule[day] || []).map((row, i) => (
                  <div key={i} className="hour-inline">
                    <select>
                      {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                    </select>

                    <select>
                      {PROGRAMS.map(p => <option key={p}>{p}</option>)}
                    </select>

                    <input placeholder="Seats" />
                    <input placeholder="Price" />

                    <label><input type="checkbox" /> Pause</label>
                    <label><input type="checkbox" /> Cancel</label>
                  </div>
                ))}

                <button onClick={() => addHour(court.id, day)}>
                  + Add Hour
                </button>
              </div>
            ))}
          </div>
        ))}

        <button onClick={onClose}>Save & Close</button>
      </div>
    </div>
  );
}
