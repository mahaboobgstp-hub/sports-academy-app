export default function ExtendDateModal({ booking, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-title">Extend Booking Dates</h3>

        <div className="modal-body space-y-3">
          <div>
            <label>Current End Date</label>
            <input className="input" value={booking.end} disabled />
          </div>

          <div>
            <label>Extend By (Days)</label>
            <input type="number" className="input" />
          </div>

          <div>
            <label>Reason</label>
            <textarea className="input" rows={3} />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary">Extend</button>
        </div>
      </div>
    </div>
  );
}
