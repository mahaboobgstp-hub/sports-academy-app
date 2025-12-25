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
    const { data } = await supabase.from("sports").select("id, name");
    setSports(data || []);
  };

  const loadSeasons = async () => {
    const { data } = await supabase
      .from("seasons")
      .select("id, name, start_date, end_date");
    setSeasons(data || []);
  };

  const loadPrograms = async () => {
    const { data } = await supabase.from("programs").select("id, name");
    setProgramMasters(data || []);
  };

  const loadLocations = async () => {
    const { data } = await supabase.from("locations").select("id, name");
    setLocationsMaster(data || []);
  };

  /* ===== ADD FUNCTIONS (STATE ONLY) ===== */

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

  const addLocation = (pIndex) => {
    const updated = [...programs];
    updated[pIndex].locations.push({
      id: Date.now(),
      locationId: "",
      seatsAllocated: "",
      courts: []
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
      collapsed: false
    });
    setPrograms(updated);
  };

  const addHours = (pIndex, lIndex, cIndex) => {
    const updated = [...programs];
    updated[pIndex].locations[lIndex].courts[cIndex].days =
      DAYS.map(day => ({
        dayName: day,
        selectedHours: [],
        hourSeats: {},
        dayTotal: "",
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
            <option key={s.id} value={s.id}>{s.name}</option>
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
                  <option key={pm.id} value={pm.id}>{pm.name}</option>
                ))}
              </select>

              <input placeholder="Total Seats" />
              <input placeholder="Allocated" disabled />
              <input placeholder="Pending" disabled />
            </div>

            <button className="sub-btn" onClick={() => addLocation(pIndex)}>
              + Add Location
            </button>

            {/* LOCATIONS */}
            {p.locations.map((loc, lIndex) => (
              <div key={loc.id} className="location-row">

                <select>
                  <option>Select Location</option>
                  {locationsMaster.map(l => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>

                <input placeholder="Seats Allocated" />

                <button
                  className="sub-btn"
                  onClick={() => addCourt(pIndex, lIndex)}
                >
                  + Add Court
                </button>

                {/* COURTS */}
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
                        const ct =
                          updated[pIndex].locations[lIndex].courts[cIndex];
                        ct.collapsed = !ct.collapsed;
                        setPrograms(updated);
                      }}
                    >
                      {court.collapsed ? "Expand" : "Collapse"}
                    </button>

                    {/* DAYS */}
                    {!court.collapsed && court.days.map((day, dIndex) => (
                      <div key={day.dayName} className="day-row">

                        <strong>{day.dayName}</strong>

                        <select
                          multiple
                          value={day.selectedHours}
                          onChange={(e) => {
                            const values = Array.from(
                              e.target.selectedOptions
                            ).map(o => o.value);
                            const updated = [...programs];
                            updated[pIndex]
                              .locations[lIndex]
                              .courts[cIndex]
                              .days[dIndex]
                              .selectedHours = values;
                            setPrograms(updated);
                          }}
                        >
                          {TIME_SLOTS.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>

                        {/* SEATS PER HOUR */}
                        {day.selectedHours.map(slot => (
                          <div key={slot} className="hour-seat-row">
                            <span className="hour-label">{slot}</span>
                            <input
                              placeholder="Seats"
                              value={day.hourSeats[slot] || ""}
                              onChange={(e) => {
                                const updated = [...programs];
                                updated[pIndex]
                                  .locations[lIndex]
                                  .courts[cIndex]
                                  .days[dIndex]
                                  .hourSeats[slot] = e.target.value;
                                setPrograms(updated);
                              }}
                            />
                          </div>
                        ))}

                        <input placeholder="Day Total" disabled />

                        <button
                          className="sub-btn"
                          onClick={() => {
                            const updated = [...programs];
                            const d =
                              updated[pIndex]
                                .locations[lIndex]
                                .courts[cIndex]
                                .days[dIndex];
                            d.showWeeks = !d.showWeeks;
                            setPrograms(updated);
                          }}
                        >
                          Edit Weeks
                        </button>

                        {day.showWeeks && (
                          <div className="weeks-placeholder">
                            Week-wise editor will appear here
                          </div>
                        )}

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
  );
}
