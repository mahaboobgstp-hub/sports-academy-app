export default function BookingActionsDrawer({ booking, onClose }) {
  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl p-5 z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Manage Booking</h2>
        <button onClick={onClose} className="text-xl">✕</button>
      </div>

      <div className="text-sm space-y-1 mb-6">
        <p><b>Student:</b> {booking.student}</p>
        <p><b>Program:</b> {booking.program}</p>
        <p><b>Batch:</b> {booking.batch}</p>
        <p><b>Status:</b> {booking.status}</p>
      </div>

      <div className="space-y-2">
        <button className="drawer-btn">Change Batch</button>
        <button className="drawer-btn">Extend Dates</button>
        <button className="drawer-btn">Pause Booking</button>
        <button className="drawer-btn">Resume Booking</button>
        <button className="drawer-btn text-red-600">Cancel Booking</button>
        <button className="drawer-btn">Refund</button>
        <button className="drawer-btn">View History</button>
      </div>
    </div>
  );
}
