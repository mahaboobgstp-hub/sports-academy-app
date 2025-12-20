const DAY_INDEX = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};

function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit"
  });
}

function getDatesForDay(startDate, endDate, dayName) {
  const dates = [];
  const targetDay = DAY_INDEX[dayName];

  let current = new Date(startDate);
  current.setHours(0, 0, 0, 0);

  // Move to first required weekday
  while (current.getDay() !== targetDay) {
    current.setDate(current.getDate() + 1);
  }

  // Collect all matching weekdays
  while (current <= endDate) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 7);
  }

  return dates;
}

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

export default function LocationMetricsModal({
  location,
  seasonStartDate,
  seasonEndDate,
  onClose
}) {
  if (!seasonStartDate || !seasonEndDate) return null;

const seasonStart = new Date(seasonStartDate);
const seasonEnd = new Date(seasonEndDate);

  const [weekEditor, setWeekEditor] = useState(null);
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

            {DAYS.map(day => {
  const dayDates = getDatesForDay(seasonStart, seasonEnd, day);

  return (

              <div key={day} className="day-block">
                <div className="day-header">
  <strong>{formatDate(dayDates[0])}</strong> {day}
  <button
    className="link-btn"
    onClick={() => setWeekEditor({ day, dates: dayDates })}
  >
    Edit weeks
  </button>
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
             );
})}
          </div>
        ))}
         {weekEditor && (
  <div className="week-modal">
    <h4>{weekEditor.day} – All Dates</h4>

    {weekEditor.dates.map((date, i) => (
      <div key={i} style={{ marginBottom: "6px" }}>
        <button
          onClick={() =>
            alert(
              `Editing ${date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "2-digit"
              })}`
            )
          }
        >
          {date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "2-digit"
          })}
        </button>
      </div>
    ))}

    <button onClick={() => setWeekEditor(null)}>Close</button>
  </div>
)}
   
        <button onClick={onClose}>Save & Close</button>
      </div>
    </div>
  );
}
