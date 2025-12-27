import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./ProgramPlanner.css";

/* ================= CONSTANTS ================= */

const DAYS = [
  "Monday","Tuesday","Wednesday","Thursday",
  "Friday","Saturday","Sunday"
];

const TIME_SLOTS = [
  "06:00-07:00","07:00-08:00","08:00-09:00","09:00-10:00",
  "10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00",
  "14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00",
  "18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00",
  "22:00-23:00","23:00-23:59"
];

/* ================= HELPERS ================= */

const formatDateWithDay = (input) => {
  if (!input) return "";
  const d = new Date(input);
  if (isNaN(d)) return "";

  const dd = String(d.getDate()).padStart(2, "0");
  const mm = d.toLocaleString("en-GB", { month: "short" });
  const yy = d.getFullYear();
  const day = d.toLocaleString("en-GB", { weekday: "long" });

  return `${dd}-${mm}-${yy} ${day}`;
};

const getWeekDatesBetween = (start, end, dayName) => {
  if (!start || !end) return [];

  const map = {
    Sunday:0, Monday:1, Tuesday:2, Wednesday:3,
    Thursday:4, Friday:5, Saturday:6
  };

  const target = map[dayName];
  const dates = [];

  let d = new Date(start);
  const e = new Date(end);

  while (d.getDay() !== target) d.setDate(d.getDate() + 1);

  while (d <= e) {
    dates.push(d.toISOString().slice(0,10));
    d.setDate(d.getDate() + 7);
  }

  return dates;
};

/* ================= COMPONENT ================= */

export default function ProgramPlanner() {

  /* ===== UI STATE ===== */
  const [newTimeSlot, setNewTimeSlot] = useState("");
  const [newSeats, setNewSeats] = useState("");
  const [weekEditor, setWeekEditor] = useState(null);

  /* ===== MASTER DATA ===== */
  const [sports, setSports] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [programMasters, setProgramMasters] = useState([]);
  const [locationsMaster, setLocationsMaster] = useState([]);

  /* ===== CONTEXT ===== */
  const [selectedSeasonId, setSelectedSeasonId] = useState("");

  /* ===== PLANNER ===== */
  const [programs, setPrograms] = useState([]);

  const selectedSeason = seasons.find(s => s.id === selectedSeasonId);

  /* ================= LOAD MASTER DATA ================= */

  useEffect(() => {
    supabase.from("sports").select("id,name")
      .then(r => setSports(r.data || []));
    supabase.from("seasons").select("id,name,start_date,end_date")
      .then(r => setSeasons(r.data || []));
    supabase.from("programs").select("id,name")
      .then(r => setProgramMasters(r.data || []));
    supabase.from("locations").select("id,name")
      .then(r => setLocationsMaster(r.data || []));
  }, []);

  /* ================= ADD HANDLERS ================= */

  const addProgram = () => {
    setPrograms(p => [
      ...p,
      { id: Date.now(), locations: [], locked:false }
    ]);
  };

  const addLocation = (pIndex) => {
    setPrograms(p => {
      const u=[...p];
      u[pIndex].locations.push({
        id: Date.now(),
        courts: [],
        saved:false
      });
      return u;
    });
  };

  const addCourt = (pIndex,lIndex) => {
    setPrograms(p => {
      const u=[...p];
      u[pIndex].locations[lIndex].courts.push({
        id: Date.now(),
        days: [],
        collapsed:false,
        saved:false
      });
      return u;
    });
  };

  const addHours = (pIndex,lIndex,cIndex) => {
    setPrograms(p => {
      const u=[...p];
      u[pIndex].locations[lIndex].courts[cIndex].days =
        DAYS.map(d => ({
          dayName:d,
          timeSlots:[],
          overrides:{}
        }));
      return u;
    });
  };

  /* ================= SAFE DERIVED DATA ================= */

  const editorDay =
    weekEditor &&
    programs?.[weekEditor.pIndex]
      ?.locations?.[weekEditor.lIndex]
      ?.courts?.[weekEditor.cIndex]
      ?.days?.[weekEditor.dIndex];

  const slots =
    editorDay && weekEditor?.selectedDate
      ? editorDay.overrides?.[weekEditor.selectedDate] || editorDay.timeSlots
      : [];

  /* ================= UI ================= */

  return (
    <div className="planner-page">

      {/* ===== HEADER ===== */}
      <div className="planner-header">
        <select>
          <option>Select Sport</option>
          {sports.map(s => <option key={s.id}>{s.name}</option>)}
        </select>

        <select
          value={selectedSeasonId}
          onChange={e=>setSelectedSeasonId(e.target.value)}
        >
          <option>Select Season</option>
          {seasons.map(s =>
            <option key={s.id} value={s.id}>{s.name}</option>
          )}
        </select>

        <input disabled value={selectedSeason?.start_date || ""}/>
        <input disabled value={selectedSeason?.end_date || ""}/>
      </div>

      {/* ===== PROGRAMS ===== */}
      <div className="planner-section">
        <button onClick={addProgram}>+ Add Program</button>

        {programs.map((p,pIndex)=>(
          <div key={p.id} className="program-card">

            <button onClick={()=>addLocation(pIndex)}>
              + Add Location
            </button>

            {p.locations.map((l,lIndex)=>(
              <div key={l.id} className="location-row">

                <select>
                  <option>Select Location</option>
                  {locationsMaster.map(loc =>
                    <option key={loc.id}>{loc.name}</option>
                  )}
                </select>

                <button onClick={()=>addCourt(pIndex,lIndex)}>
                  + Add Court
                </button>

                {l.courts.map((c,cIndex)=>(
                  <div key={c.id} className="court-row">

                    <button onClick={()=>addHours(pIndex,lIndex,cIndex)}>
                      + Add Hours
                    </button>

                    {!c.collapsed && c.days.map((d,dIndex)=>(
                      <div key={dIndex} className="day-row day-grid">

                        <strong>
                          {formatDateWithDay(
                            getWeekDatesBetween(
                              selectedSeason?.start_date,
                              selectedSeason?.end_date,
                              d.dayName
                            )[0]
                          )}
                        </strong>

                        <select
                          value={newTimeSlot}
                          onChange={e=>setNewTimeSlot(e.target.value)}
                        >
                          <option value="">Select Time</option>
                          {TIME_SLOTS.map(t =>
                            <option key={t}>{t}</option>
                          )}
                        </select>

                        <input
                          value={newSeats}
                          placeholder="Seats"
                          onChange={e=>setNewSeats(e.target.value)}
                        />

                        <button onClick={()=>{
                          if(!newTimeSlot||!newSeats) return;
                          setPrograms(ps=>{
                            const u=[...ps];
                            u[pIndex].locations[lIndex].courts[cIndex]
                              .days[dIndex].timeSlots.push({
                                slot:newTimeSlot,
                                seats:newSeats
                              });
                            return u;
                          });
                        }}>+ Add</button>

                        <button onClick={()=>{
                          setWeekEditor({
                            pIndex,lIndex,cIndex,dIndex,
                            dayName:d.dayName,
                            weekDates:getWeekDatesBetween(
                              selectedSeason?.start_date,
                              selectedSeason?.end_date,
                              d.dayName
                            )
                          });
                        }}>
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

      {/* ===== WEEK EDITOR MODAL ===== */}
      {weekEditor && editorDay && (
        <div className="modal-backdrop">
          <div className="modal large">

            <h3>Edit Weeks – {editorDay.dayName}</h3>

            <div className="week-date-list">
              {weekEditor.weekDates.map(date=>(
                <button
                  key={date}
                  className={`week-date-btn ${
                    weekEditor.selectedDate===date ? "active":""
                  }`}
                  onClick={()=>setWeekEditor({
                    ...weekEditor,
                    selectedDate:date
                  })}
                >
                  {formatDateWithDay(date)}
                </button>
              ))}
            </div>

            {weekEditor.selectedDate && (
              <div className="week-day-editor">
                <h4>{formatDateWithDay(weekEditor.selectedDate)}</h4>

                {slots.map((ts,i)=>(
                  <div key={i} className="day-row">
                    <select value={ts.slot}>
                      {TIME_SLOTS.map(t =>
                        <option key={t}>{t}</option>
                      )}
                    </select>
                    <input value={ts.seats}/>
                  </div>
                ))}
              </div>
            )}

            <button onClick={()=>setWeekEditor(null)}>
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
