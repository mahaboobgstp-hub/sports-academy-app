import "./BookingPage.css";

const DUMMY_SEASONS = [
  { id: "s1", name: "Summer 2025" },
  { id: "s2", name: "Winter 2025" }
];

const DUMMY_PROGRAMS = [
  { id: "p1", name: "Beginner Program" },
  { id: "p2", name: "Advanced Program" }
];

const DUMMY_LOCATIONS = [
  { id: "l1", name: "Main Campus" },
  { id: "l2", name: "City School" }
];

const DUMMY_COURTS = [
  { id: "c1", name: "Court A" },
  { id: "c2", name: "Court B" }
];

const DUMMY_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday"
];

const DUMMY_TIME_SLOTS = [
  "6:00 – 7:00 AM",
  "7:00 – 8:00 AM",
  "8:00 – 9:00 AM"
];


export default function BookingPage() {
  return (
    <div className="booking-page">

      {/* PAGE HEADER */}
      <div className="booking-header">
        <h1>Academy Booking</h1>
      </div>

      {/* EVENT & LOCATION */}
      <div className="booking-card">
        <div className="booking-card-title">Event & Location</div>

        <div className="booking-grid">
          <select>
           <option value="">Select Season</option>
{DUMMY_SEASONS.map(s => (
  <option key={s.id} value={s.id}>{s.name}</option>
))}
<option value="">Select Program</option>
{DUMMY_PROGRAMS.map(p => (
  <option key={p.id} value={p.id}>{p.name}</option>
))}
<option value="">Select Location</option>
{DUMMY_LOCATIONS.map(l => (
  <option key={l.id} value={l.id}>{l.name}</option>
))}
<option value="">Select Court</option>
{DUMMY_COURTS.map(c => (
  <option key={c.id} value={c.id}>{c.name}</option>
))}
<option value="">Select Day</option>
{DUMMY_DAYS.map(d => (
  <option key={d} value={d}>{d}</option>
))}
<option value="">Select Time Slot</option>
{DUMMY_TIME_SLOTS.map(t => (
  <option key={t} value={t}>{t}</option>
))}

          </select>

          <select>
            <option>Select Program</option>
          </select>

          <select>
            <option>Select Location</option>
          </select>

          <select>
            <option>Select Court</option>
          </select>
        </div>
      </div>

      {/* CLASS SELECTION */}
      <div className="booking-card">
        <div className="booking-card-title">Class Selection</div>
        <div className="booking-card-actions">
        <button type="button" className="secondary-btn">
        + Add Day
        </button>
        </div>


        <div className="booking-grid">
          <select>
            <option>Select Day</option>
          </select>

          <select>
            <option>Select Time Slot</option>
          </select>
        </div>

        <div className="booking-grid booking-stats">
          <input disabled defaultValue="Total Seats: -" />
          <input disabled defaultValue="Seats Booked: -" />
          <input disabled defaultValue="Seats Available: -" />
        </div>
      </div>

      {/* STUDENT DETAILS */}
      <div className="booking-card">
        <div className="booking-card-title">Student Details</div>

        <div className="booking-grid">
          <input placeholder="Student Name" />
          <input placeholder="Age" />
          <input placeholder="Parent Mobile" />
        </div>
      </div>

      {/* ACTION */}
      <div className="booking-actions">
        <button className="primary-btn">Proceed to Payment</button>
      </div>

    </div>
  );
}
