export default function CancelBookingModal({ booking, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-title text-red-600">Cancel Booking</h3>

        <div className="modal-body space-y-3">
          <div>
            <label>Cancellation Type</label>
            <select className="input">
              <option>Immediate</option>
              <option>End of Cycle</option>
            </select>
          </div>

          <div>
            <label>Reason</label>
            <textarea className="input" rows={3} />
          </div>

          <p className="text-sm text-red-500">
            ⚠ This action is irreversible
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Back</button>
          <button className="btn-danger">Confirm Cancel</button>
        </div>
      </div>
    </div>
  );
}
