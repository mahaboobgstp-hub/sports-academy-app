export default function BookingActionsDrawer({ booking, onClose }) {
  return (
    <div className="booking-drawer">
      <div className="drawer-header">
        <h2>Manage Booking</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="drawer-details">
        <p><b>Student:</b> {booking.student}</p>
        <p><b>Program:</b> {booking.program}</p>
        <p><b>Batch:</b> {booking.batch}</p>
        <p><b>Status:</b> {booking.status}</p>
      </div>

      <div className="drawer-actions">
        <button>Change Batch</button>
        <button>Extend Dates</button>
        <button>Pause Booking</button>
        <button>Resume Booking</button>
        <button className="danger">Cancel Booking</button>
        <button>Refund</button>
        <button>View History</button>
      </div>
    </div>
  );
}
