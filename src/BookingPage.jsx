import "./BookingPage.css";


export default function BookingPage() {
  return (
    
      <div className="booking-page">

  <div className="booking-title">Academy Booking</div>

  {/* Event & Location */}
  <div className="booking-card">
    <div className="booking-section-title">Event & Location</div>

    <div className="booking-row">
      <select><option>Select Season</option></select>
      <select><option>Basketball</option></select>
      <select><option>Select Location</option></select>
      <select><option>Select Program</option></select>
    </div>
  </div>

  {/* Class Selection */}
  <div className="booking-card">
    <div className="booking-section-title">Class Selection</div>

    <div className="booking-row">
      <select><option>Select Class</option></select>
      <select><option>Monday</option></select>
      <select><option>6–7 AM</option></select>
      <select><option>Court A</option></select>
    </div>

    <div className="booking-row">
      <input value="Seats Available: 12" disabled />
    </div>
  </div>

  {/* Student Details */}
  <div className="booking-card">
    <div className="booking-section-title">Student & Parent Details</div>

    <div className="booking-row">
      <input placeholder="Student Name" />
      <input placeholder="Age" />
      <input placeholder="Parent Name" />
      <input placeholder="Mobile Number" />
    </div>

    <div className="booking-row">
      <input placeholder="Email" />
    </div>
  </div>

  {/* Products & Payment */}
  <div className="booking-card">
    <div className="booking-section-title">Products & Payment</div>

    <div className="booking-summary">
      <div><strong>Mandatory:</strong> Jersey ₹1500</div>
      <div>
        <label><input type="checkbox" /> Basketball ₹1200</label><br />
        <label><input type="checkbox" /> Wrist Support ₹500</label>
      </div>

      <div><strong>Class Price:</strong> ₹2000</div>
      <div><strong>Total:</strong> ₹3500</div>
    </div>
  </div>

  {/* Actions */}
  <div className="booking-actions">
    <label>
      <input type="checkbox" /> I agree to terms & conditions
    </label>

    <button className="sub-btn">Book & Pay</button>
  </div>

</div>
