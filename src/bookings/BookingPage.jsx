import "./BookingPage.css";

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
            <option>Select Season</option>
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
