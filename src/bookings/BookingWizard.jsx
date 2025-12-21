import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({});

  const update = (k, v) =>
    setForm({ ...form, [k]: v });

  return (
    <div className="booking-form">
      <h2>Academy Booking</h2>

      {/* SECTION 1 */}
      <fieldset>
        <legend>Event & Location</legend>

        <select onChange={e => update("season", e.target.value)}>
          <option>Select Season</option>
          <option>Basketball Season 1 2025–26</option>
        </select>

        <input value="Basketball" readOnly />

        <select onChange={e => update("location", e.target.value)}>
          <option>Select Location</option>
          <option>Test School – Abu Dhabi</option>
        </select>

        <select onChange={e => update("program", e.target.value)}>
          <option>Select Program</option>
          <option>jr</option>
          <option>midlevel</option>
        </select>
      </fieldset>

      {/* SECTION 2 */}
      <fieldset>
        <legend>Class Selection</legend>

        <select onChange={e => update("class", e.target.value)}>
          <option>Select Class</option>
          <option>12-Jan-26 | 6–7 AM | Court A</option>
        </select>

        <input value="Monday" readOnly />
        <input value="6–7 AM" readOnly />
        <input value="Court A" readOnly />
        <input value="Seats Available: 12" readOnly />
      </fieldset>

      {/* SECTION 3 */}
      <fieldset>
        <legend>Student & Parent Details</legend>

        <input placeholder="Student Name" onChange={e => update("student", e.target.value)} />
        <input placeholder="Age" type="number" onChange={e => update("age", e.target.value)} />
        <input placeholder="Parent Name" onChange={e => update("parent", e.target.value)} />
        <input placeholder="Mobile Number" />
        <input placeholder="Email" />
      </fieldset>

      {/* SECTION 4 */}
      <fieldset>
        <legend>Products & Payment</legend>

        <p>Mandatory: Jersey ₹1500</p>

        <label>
          <input type="checkbox" /> Basketball ₹1200
        </label>

        <label>
          <input type="checkbox" /> Wrist Support ₹500
        </label>

        <p><b>Class Price:</b> ₹2000</p>
        <p><b>Total:</b> ₹3500</p>
      </fieldset>

      {/* SECTION 5 */}
      <label>
        <input type="checkbox" /> I agree to terms & conditions
      </label>

      <button>Book & Pay</button>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
