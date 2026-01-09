export default function ChangeBatchModal({ booking, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-title">Change Batch</h3>

        <div className="modal-body space-y-3">
          <div>
            <label>Current Batch</label>
            <input className="input" value={booking.batch} disabled />
          </div>

          <div>
            <label>New Batch</label>
            <select className="input">
              <option>Select batch</option>
              <option>Morning Batch</option>
              <option>Evening Batch</option>
            </select>
          </div>

          <div>
            <label>Effective Date</label>
            <input type="date" className="input" />
          </div>

          <div>
            <label>Reason</label>
            <textarea className="input" rows={3} />
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
