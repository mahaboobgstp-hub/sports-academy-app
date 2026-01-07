import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./ProgramPlanner.css";

/* ===== CONSTANTS ===== */

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const TIME_SLOTS = [
  "06:00-07:00","07:00-08:00","08:00-09:00","09:00-10:00",
  "10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00",
  "14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00",
  "18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00",
  "22:00-23:00","23:00-23:59"
];

const getFirstDateForDayInSeason = (dayName, season) => {
  if (!season?.start_date || !season?.end_date) return null;

  const dayIndexMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  };

  const targetDayIndex = dayIndexMap[dayName];
  const start = new Date(season.start_date);
  const end = new Date(season.end_date);

  const date = new Date(start);

  while (date <= end) {
    if (date.getDay() === targetDayIndex) {
      return date;
    }
    date.setDate(date.getDate() + 1);
  }

  return null;
};

const formatDateWithDay = (date) => {
  if (!date) return "";

  const d = String(date.getDate()).padStart(2, "0");
  const m = date.toLocaleString("en-GB", { month: "short" });
  const y = date.getFullYear();
  const day = date.toLocaleString("en-GB", { weekday: "long" });

  return `${d}-${m}-${y} ${day}`;
};



function getWeekDatesBetween(startDate, endDate, dayName) {
  if (!startDate || !endDate) return [];

  const dayIndexMap = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  };

 
  


  const targetDay = dayIndexMap[dayName];
  const dates = [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  // move start date to first matching weekday
  while (start.getDay() !== targetDay) {
    start.setDate(start.getDate() + 1);
  }

  while (start <= end) {
    dates.push(new Date(start));
    start.setDate(start.getDate() + 7);
  }

  return dates.map(d =>
    d.toISOString().slice(0, 10) // YYYY-MM-DD
  );
}

export default function ProgramPlanner() {

  const [newTimeSlot, setNewTimeSlot] = useState("");
  const [newSeats, setNewSeats] = useState("");
  const [weekEditor, setWeekEditor] = useState(null);
  const [locationClassFee, setLocationClassFee] = useState({});
  const [selectedOverrideDate, setSelectedOverrideDate] = useState(null);
  const [dateOverrides, setDateOverrides] = useState({
  // "2026-01-12": {
  //   "07:00-08:00": 10,
  //   "08:00-09:00": 12
  // }
});



  /* ===== MASTER DATA ===== */
  const [sports, setSports] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [programMasters, setProgramMasters] = useState([]);
  const [locationsMaster, setLocationsMaster] = useState([]);

  /* ===== CONTEXT ===== */
  const [selectedSeasonId, setSelectedSeasonId] = useState("");

  // ===== WEEK STATE =====
const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
const [seasonWeeks, setSeasonWeeks] = useState([]);
const [showWeekPicker, setShowWeekPicker] = useState(false);


   function updateLocationFee(locationKey, value) {
  setLocationClassFee(prev => ({
    ...prev,
    [locationKey]: value
  }));
}
  
function getScheduleForDate(date, weekdayTemplate) {
  return dateOverrides[date] || weekdayTemplate;
}


  function getWeeksBetween(startDate, endDate) {
  if (!startDate || !endDate) return [];

  const weeks = [];
  let current = new Date(startDate);

  // align to week start (Monday)
  current.setDate(current.getDate() - ((current.getDay() + 6) % 7));

  const end = new Date(endDate);

  while (current <= end) {
    const weekStart = new Date(current);
    const weekEnd = new Date(current);
    weekEnd.setDate(weekEnd.getDate() + 6);

    weeks.push({
      start: weekStart.toISOString().slice(0, 10),
      end: weekEnd.toISOString().slice(0, 10)
    });

    current.setDate(current.getDate() + 7);
  }

  return weeks;
}


  /* ===== PLANNER STATE ===== */
  const [programs, setPrograms] = useState([]);

  const selectedSeason = seasons.find(s => s.id === selectedSeasonId);

  // ===== WEEK GENERATION (MONDAY-BASED) =====
useEffect(() => {
  if (!selectedSeason?.start_date || !selectedSeason?.end_date) return;

  const weeks = [];

  const start = new Date(selectedSeason.start_date);
  const end = new Date(selectedSeason.end_date);

  // move to first Monday
  while (start.getDay() !== 1) {
    start.setDate(start.getDate() + 1);
  }

  let weekIndex = 0;
  const cursor = new Date(start);

  while (cursor <= end) {
    const weekStart = new Date(cursor);
    const weekEnd = new Date(cursor);
    weekEnd.setDate(weekEnd.getDate() + 6);

    weeks.push({
      index: weekIndex,
      label: `Week ${weekIndex + 1}`,
      start: weekStart.toISOString().slice(0, 10),
      end: weekEnd.toISOString().slice(0, 10)
    });

    cursor.setDate(cursor.getDate() + 7);
    weekIndex++;
  }

  setSeasonWeeks(weeks);
  setSelectedWeekIndex(0); // default to Week 1
}, [selectedSeason]);


  /* ===== LOAD MASTER DATA ===== */
  useEffect(() => {
    loadSports();
    loadSeasons();
    loadPrograms();
    loadLocations();
  }, []);

  const loadSports = async () => {
    const { data } = await supabase.from("sports").select("id,name");
    setSports(data || []);
  };

  const loadSeasons = async () => {
    const { data } = await supabase
      .from("seasons")
      .select("id,name,start_date,end_date");
    setSeasons(data || []);
  };

  const loadPrograms = async () => {
    const { data } = await supabase.from("programs").select("id,name");
    setProgramMasters(data || []);
  };

  const loadLocations = async () => {
    const { data } = await supabase.from("locations").select("id,name");
    setLocationsMaster(data || []);
  };
useEffect(() => {
  if (!selectedSeason?.start_date || !selectedSeason?.end_date) return;

  const weeks = getWeeksBetween(
    selectedSeason.start_date,
    selectedSeason.end_date
  );

  setSeasonWeeks(weeks);
  setSelectedWeekIndex(0); // default = Week 1
}, [selectedSeason]);

  /* ===== ADD FUNCTIONS ===== */

  const addProgram = () => {
    setPrograms([
      ...programs,
      {
        id: Date.now(),
        programId: "",
        totalSeats: "",
        locations: [],
        locked: false
      }
    ]);
  };

  const addLocation = (pIndex) => {
    const updated = [...programs];
    updated[pIndex].locations.push({
      id: Date.now(),
      locationId: "",
      seatsAllocated: "",
      courts: [],
      saved: false
    });
    setPrograms(updated);
  };

  const addCourt = (pIndex, lIndex) => {
    const updated = [...programs];
    updated[pIndex].locations[lIndex].courts.push({
      id: Date.now(),
      courtName: "",
      seatsAllocated: "",
      days: [],
      collapsed: false,
      saved: false
    });
    setPrograms(updated);
  };

  const addHours = (pIndex, lIndex, cIndex) => {
    const updated = [...programs];
    updated[pIndex].locations[lIndex].courts[cIndex].days =
      DAYS.map(day => ({
        dayName: day,
        timeSlots: [],
        overrides: {},
        showWeeks: false
      }));
    setPrograms(updated);
  };
const formatDateWithDay = (dateInput) => {
  const date = new Date(dateInput);

  const day = String(date.getDate()).padStart(2, "0");

  const month = date
    .toLocaleString("en-GB", { month: "short" })
    .toUpperCase(); // JAN, FEB

  const year = date.getFullYear();

  const weekday = date
    .toLocaleString("en-GB", { weekday: "long" })
    .toUpperCase(); // SATURDAY

  return `${day}-${month}-${year} ${weekday}`;
};

  function getDateForDayInWeek(week, dayName) {
  const dayIndexMap = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  };

  const start = new Date(week.startDate);
  const date = new Date(start);
  date.setDate(start.getDate() + dayIndexMap[dayName]);
  return date;
}

  

  /* ===== UI ===== */

  return (
    <div className="planner-page">

      {/* ===== TOP CONTEXT ===== */}
      <div className="planner-header">
        <select>
          <option>Select Sport</option>
          {sports.map(s => (
            <option key={s.id}>{s.name}</option>
          ))}
        </select>

        <select
          value={selectedSeasonId}
          onChange={(e) => setSelectedSeasonId(e.target.value)}
        >
          <option>Select Season</option>
          {seasons.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <input value={selectedSeason?.start_date || ""} disabled />
        <input value={selectedSeason?.end_date || ""} disabled />
      </div>

      {/* ===== PROGRAMS ===== */}
      <div className="planner-section">
        {/* ===== WEEK HEADER ===== */}
{seasonWeeks.length > 0 && (
  <div className="week-header">
    <div className="week-title">
      <strong>
        Week {selectedWeekIndex + 1} :
      </strong>{" "}
      {formatDateWithDay(seasonWeeks[selectedWeekIndex].start)} →{" "}
      {formatDateWithDay(seasonWeeks[selectedWeekIndex].end)}
    </div>

    <button
      className="sub-btn"
      onClick={() => setShowWeekPicker(true)}
    >
      Edit Week
    </button>
  </div>
)}

        <div className="section-header">
          <h3>Programs</h3>
          <button onClick={addProgram}>+ Add Program</button>
        </div>

        {programs.map((p, pIndex) => (
          <div key={p.id} className="program-card">

            <div className="program-row">
              <select>
                <option>Select Program</option>
                {programMasters.map(pm => (
                  <option key={pm.id}>{pm.name}</option>
                ))}
              </select>

              <input placeholder="Total Seats" />
              <input placeholder="Allocated" disabled />
              <input placeholder="Pending" disabled />

              <button
  className="sub-btn save-program-btn"
  onClick={() => {
    const updated = [...programs];
    updated[pIndex].locked = true; // mark program as saved
    setPrograms(updated);
  }}
>
  Save Program
</button>
            </div>

            <button className="sub-btn" onClick={() => addLocation(pIndex)}>
              + Add Location
            </button>

            {p.locations.map((loc, lIndex) => (
              <div key={loc.id} className="location-row">

                <select>
                  <option>Select Location</option>
                  {locationsMaster.map(l => (
                    <option key={l.id}>{l.name}</option>
                  ))}
                </select>

                <input placeholder="Seats Allocated" />

                <input
  type="number"
  placeholder="Class Fee / Hour"
  value={locationClassFee[`${pIndex}-${lIndex}`] || ""}
  onChange={(e) =>
    updateLocationFee(`${pIndex}-${lIndex}`, e.target.value)
  }
/>


                <button className="sub-btn" onClick={() => addCourt(pIndex, lIndex)}>
                  + Add Court
                </button>

                <button
                  className="sub-btn"
                  onClick={() => {
                    const updated = [...programs];
                    updated[pIndex].locations[lIndex].saved =
                      !updated[pIndex].locations[lIndex].saved;
                    setPrograms(updated);
                  }}
                >
                  {loc.saved ? "Location Saved" : "Save Location"}
                </button>

                {loc.courts.map((court, cIndex) => (
                  <div key={court.id} className="court-row">

                    <input placeholder="Court Name" />
                    <input placeholder="Seats Allocated" />

                    <button
                      className="sub-btn"
                      onClick={() => addHours(pIndex, lIndex, cIndex)}
                    >
                      + Add Hours
                    </button>

                    <button
                      className="sub-btn"
                      onClick={() => {
                        const updated = [...programs];
                        updated[pIndex]
                          .locations[lIndex]
                          .courts[cIndex]
                          .collapsed =
                          !updated[pIndex]
                            .locations[lIndex]
                            .courts[cIndex]
                            .collapsed;
                        setPrograms(updated);
                      }}
                    >
                      {court.collapsed ? "Expand" : "Collapse"}
                    </button>

                    <button
                      className="sub-btn"
                      onClick={() => {
                        const updated = [...programs];
                        updated[pIndex]
                          .locations[lIndex]
                          .courts[cIndex]
                          .saved =
                          !updated[pIndex]
                            .locations[lIndex]
                            .courts[cIndex]
                            .saved;
                        setPrograms(updated);
                      }}
                    >
                      {court.saved ? "Court Saved" : "Save Court"}
                    </button>

                    {!court.collapsed && court.days.map((day, dIndex) => (
                      <div key={dIndex} className="day-row day-grid">

                        <strong style={{ minWidth: "160px" }}>
  {formatDateWithDay(
    getFirstDateForDayInSeason(day.dayName, selectedSeason)
  )}
</strong>

                      
                        <select
                          value={newTimeSlot}
                          onChange={(e) => setNewTimeSlot(e.target.value)}
                        >
                          <option value="">Select Time</option>
                          {TIME_SLOTS.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>

                        <input
                          placeholder="Seats"
                          value={newSeats}
                          onChange={(e) => setNewSeats(e.target.value)}
                          style={{ width: "80px" }}
                        />

                        <button
                          className="sub-btn"
                          onClick={() => {
                            if (!newTimeSlot || !newSeats) return;

                            const updated = [...programs];
                            updated[pIndex]
                              .locations[lIndex]
                              .courts[cIndex]
                              .days[dIndex]
                              .timeSlots.push({
                                slot: newTimeSlot,
                                seats: newSeats
                              });
                            setPrograms(updated);
                          }}
                        >
                          + Add
                        </button>

                        {day.timeSlots.map((ts, i) => (
                          <div key={i} className="time-pill">
                            <span>{ts.slot}</span>
                            <strong>{ts.seats}</strong>
                            <button
                              onClick={() => {
                                const updated = [...programs];
                                updated[pIndex]
                                  .locations[lIndex]
                                  .courts[cIndex]
                                  .days[dIndex]
                                  .timeSlots.splice(i, 1);
                                setPrograms(updated);
                              }}
                            >
                              ✕
                            </button>
                          </div>
                        ))}

                        <div className="day-total">
                          Total:{" "}
                          {day.timeSlots.reduce(
                            (sum, t) => sum + Number(t.seats || 0),
                            0
                          )}
                        </div>

                        <button
                          className="sub-btn"
                          onClick={() => {
  const day =
    programs[pIndex]
      .locations[lIndex]
      .courts[cIndex]
      .days[dIndex];

  const weekDates = getWeekDatesBetween(
    selectedSeason?.start_date,
    selectedSeason?.end_date,
    day.dayName
  );

  setWeekEditor({
    pIndex,
    lIndex,
    cIndex,
    dIndex,
    dayName: day.dayName,
    weekDates
  });
}}
                          
                        >
                          Edit Weeks
                        </button>

                      </div>
                    ))}

                  </div>
                ))}

              </div>
            ))}

          </div>
        ))}
      </div>

      {weekEditor && (
  <div className="modal-backdrop">
    <div className="modal large">

      <h3>
        Edit Weeks – {
          programs[weekEditor.pIndex]
            .locations[weekEditor.lIndex]
            .courts[weekEditor.cIndex]
            .days[weekEditor.dIndex]
            .dayName
        }
      </h3>

      {/* DATE LIST */}
     <div className="edit-weeks">
  {weekDates.map(date => (
    <button
      key={date}
      className={
        selectedOverrideDate === date
          ? "week-btn active"
          : "week-btn"
      }
      onClick={() => setSelectedOverrideDate(date)}
    >
      {formatDateWithDay(new Date(date))}
    </button>
  ))}
</div>


      {/* DATE-SPECIFIC EDITOR */}
      {weekEditor.selectedDate && (
        <div className="week-day-editor">
          <h4>{formatDateWithDay(weekEditor.selectedDate)}</h4>

          {/* reuse same time-slot UI here */}
          {/* IMPORTANT: bind to overrides[date] instead of day.timeSlots */}
        </div>
      )}

      <button
        className="sub-btn"
        onClick={() => setWeekEditor(null)}
      >
        Close
      </button>

    </div>
  </div>
)}

      {/* ===== WEEK PICKER MODAL ===== */}
{showWeekPicker && (
  <div className="modal-backdrop">
    <div className="modal large">

      <h3>Select Week</h3>

      <div className="week-picker-grid">
        {seasonWeeks.map((week, index) => (
          <button
            key={index}
            className={`week-picker-btn ${
              index === selectedWeekIndex ? "active" : ""
            }`}
            onClick={() => {
              setSelectedWeekIndex(index);
              setShowWeekPicker(false);
            }}
          >
            <div><strong>Week {index + 1}</strong></div>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>
              {formatDateWithDay(week.start)} → {formatDateWithDay(week.end)}
            </div>
          </button>
        ))}
      </div>

      <button
        className="sub-btn"
        onClick={() => setShowWeekPicker(false)}
      >
        Close
      </button>

    </div>
  </div>
)}


    </div>
  );
}
