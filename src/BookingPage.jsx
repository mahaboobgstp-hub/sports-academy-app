import "./BookingPage.css";

export default function BookingPage() {
  return (
    <div className="booking-page">

      {/* PAGE TITLE */}
      <div className="booking-title">Academy Booking</div>

      {/* EVENT & LOCATION */}
      <div className="booking-card">
        <div className="booking-section-title">Event & Location</div>

        <div className="booking-row">
          <select>
            <option>Select Season</option>
            <option>Season 1</option>
            <option>Season 2</option>
          </select>

          <select>
            <option>Select Sport</option>
            <option>Basketball</option>
            <option>Badminton</option>
          </select>

          <select>
            <option>Select Location</option>
            <option>School Location 1</option>
            <option>School Location 2</option>
          </select>

          <select>
            <option>Select Program</option>
            <option>Balls & Babies</option>
            <option>Mid Level</option>
            <option>Juniors</option>
          </select>
        </div>
      </div>

      {/* CLASS SELECTION */}
      <div className="booking-card">
        <div className="booking-section-title">Class Selection</div>

        <div className="booking-row">
          <select>
            <option>Select Class</option>
            <option>Beginner</option>
            <option>Advanced</option>
          </select>

          <select>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
          </select>

          <select>
            <option>6–7 AM</option>
            <option>7–8 AM</option>
            <option>8–9 AM</option>
          </select>

          <select>
            <option>Court A</option>
            <option>Court B</option>
          </select>
        </div>

        <div className="booking-row">
          <input value="Total Seats: 20" disabled />
          <input value="Seats Sold: 8" disabled />
          <input value="Seats Available: 12" disabled />
          <input value="Seats Expired: 0" disabled />
        </div>
      </div>

      {/* STUDENT & PARENT DETAILS */}
      <div className="booking-card">
        <div className="booking-section-title">Student & Parent Details</div>

        <div className="booking-row">
          <input placeholder="Student Name" />
          <input placeholder="Age" />
          <input placeholder="Parent Name" />
          <input placeholder="Mobile Number" />
        </div>

        <div className="booking-row">
          <input placeholder="Email Address" />
        </div>
      </div>

      {/* PRODUCTS & PAYMENT */}
      <div className="booking-card">
        <div className="booking-section-title">Products & Payment</div>

        <div className="booking-summary">
          <div><strong>Mandatory:</strong> Jersey ₹1500</div>

          <div>
            <label>
              <input type="checkbox" /> Basketball ₹1200
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" /> Wrist Support ₹500
            </label>
          </div>

          <div style={{ marginTop: "8px" }}>
            <strong>Class Price:</strong> ₹2000
          </div>

          <div>
            <strong>Total:</strong> ₹3500
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="booking-actions">
        <label>
          <input type="checkbox" /> I agree to terms & conditions
        </label>

        <button className="sub-btn">Book & Pay</button>
      </div>

    </div>
  );
}
