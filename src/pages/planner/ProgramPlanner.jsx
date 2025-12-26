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

export default function ProgramPlanner() {

  const [newTimeSlot, setNewTimeSlot] = useState("");
  const [newSeats, setNewSeats] = useState("");
  const [weekEditor, setWeekEditor] = useState(null);
// structure later: { pIndex, lIndex, cIndex, dIndex }



  /* ===== MASTER DATA ===== */
  const [sports, setSports] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [programMasters, setProgramMasters] = useState([]);
  const [locationsMaster, setLocationsMaster] = useState([]);

  /* ===== CONTEXT ===== */
  const [selectedSeasonId, setSelectedSeasonId] = useState("");

  /* ===== PLANNER STATE ===== */
  const [programs, setPrograms] = useState([]);

  const selectedSeason = seasons.find(s => s.id === selectedSeasonId);

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

  /* ===== ADD FUNCTIONS (BASELINE + ADDITIVE FLAGS) ===== */

  const addProgram = () => {
    setPrograms([
      ...programs,
      {
        id: Date.now(),
        programId: "",
        totalSeats: "",
        locations: [],
        locked: false        // ✅ ADDITIVE
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
      saved: false          // ✅ ADDITIVE
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
      saved: false          // ✅ ADDITIVE
    });
    setPrograms(updated);
  };

  const addHours = (pIndex, lIndex, cIndex) => {
    const updated = [...programs];
    updated[pIndex].locations[lIndex].courts[cIndex].days =
      DAYS.map(day => ({
  dayName: day,
  timeSlots: [],   // ✅ NEW: holds time + seats pairs
  overrides: {},      
  showWeeks: false
}));
setPrograms(updated);
};


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
        <div className="section-header">
          <h3>Programs</h3>
          <button onClick={addProgram}>+ Add Program</button>
        </div>

        {programs.map((p, pIndex) => (
          <div key={p.id} className="program-card">

            {/* PROGRAM ROW */}
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

              {/* PROGRAM LOCK */}
              <button
                className="sub-btn"
                onClick={() => {
                  const updated = [...programs];
                  updated[pIndex].locked = !updated[pIndex].locked;
                  setPrograms(updated);
                }}
              >
                {p.locked ? "Unlock Program" : "Lock Program"}
              </button>
            </div>

            <button
              className="sub-btn"
              onClick={() => addLocation(pIndex)}
            >
              + Add Location
            </button>

            {/* ===== LOCATIONS ===== */}
            {p.locations.map((loc, lIndex) => (
              <div key={loc.id} className="location-row">

                <select>
                  <option>Select Location</option>
                  {locationsMaster.map(l => (
                    <option key={l.id}>{l.name}</option>
                  ))}
                </select>

                <input placeholder="Seats Allocated" />

                <button
                  className="sub-btn"
                  onClick={() => addCourt(pIndex, lIndex)}
                >
                  + Add Court
                </button>

                {/* LOCATION SAVE */}
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

                {/* ===== COURTS ===== */}
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

                    {/* COURT SAVE */}
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

                    {/* ===== DAYS ===== */}
                    {!court.collapsed && court.days.map((day, dIndex) => (
                      <div className="day-row">

  <strong style={{ minWidth: "90px" }}>{day.dayName}</strong>

  {/* TIME DROPDOWN */}
  <select
    value={newTimeSlot}
    onChange={(e) => setNewTimeSlot(e.target.value)}
  >
    <option value="">Select Time</option>
    {TIME_SLOTS.map(t => (
      <option key={t} value={t}>{t}</option>
    ))}
  </select>

  {/* SEATS INPUT */}
  <input
    placeholder="Seats"
    value={newSeats}
    onChange={(e) => setNewSeats(e.target.value)}
    style={{ width: "80px" }}
  />

  {/* ADD BUTTON */}
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
      //setNewTimeSlot("");
      //setNewSeats("");
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
    setWeekEditor({
      pIndex,
      lIndex,
      cIndex,
      dIndex
    });
  }}
>
  Edit Weeks
</button>


  </div>


                        
                      </div>
                    ))}

                  </div>
                ))}

              </div>
            ))}

          </div>
        ))}
      </div>
    </div>
            ))}
{weekEditor && (
  <div className="modal-backdrop">
    <div className="modal">
      <h3>
        Edit Weeks – {
          programs[weekEditor.pIndex]
            .locations[weekEditor.lIndex]
            .courts[weekEditor.cIndex]
            .days[weekEditor.dIndex]
            .dayName
        }
      </h3>

      <p>Week-wise editor will appear here</p>

      <button
        className="sub-btn"
        onClick={() => setWeekEditor(null)}
      >
        Close
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

  );
}
