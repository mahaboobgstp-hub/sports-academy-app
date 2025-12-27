import "./BookingPage.css";

export default function BookingPage() {
  return (
    <div className="page-container">

      <div className="card">
        <div className="card-header">
          <h2>Academy Booking</h2>
        </div>

        <div className="card-body">

          {/* EVENT & LOCATION */}
          <div className="form-section">
            <div className="section-title">Event & Location</div>

            <div className="form-row">
              <select className="select">
                <option>Select Season</option>
              </select>

              <select className="select">
                <option>Select Program</option>
              </select>

              <select className="select">
                <option>Select Location</option>
              </select>

              <select className="select">
                <option>Select Court</option>
              </select>
            </div>
          </div>

          {/* CLASS SELECTION */}
          <div className="form-section">
            <div className="section-title">Class Selection</div>

            <div className="form-row">
              <select className="select">
                <option>Select Day</option>
              </select>

              <select className="select">
                <option>Select Time Slot</option>
              </select>
            </div>

            <div className="form-row">
              <input className="input" defaultValue="Total Seats: -" disabled />
              <input className="input" defaultValue="Available Seats: -" disabled />
            </div>
          </div>

          {/* STUDENT DETAILS */}
          <div className="form-section">
            <div className="section-title">Student Details</div>

            <div className="form-row">
              <input className="input" placeholder="Student Name" />
              <input className="input" placeholder="Age" />
              <input className="input" placeholder="Parent Mobile" />
            </div>
          </div>

        </div>

        <div className="card-footer">
          <button className="primary-btn">Proceed to Payment</button>
        </div>
      </div>

    </div>
  );
}
