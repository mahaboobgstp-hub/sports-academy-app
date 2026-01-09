export default function RefundModal({ booking, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3 className="modal-title">Initiate Refund</h3>

        <div className="modal-body space-y-3">
          <div>
            <label>Refund Type</label>
            <select className="input">
              <option>Full</option>
              <option>Partial</option>
            </select>
          </div>

          <div>
            <label>Refund Mode</label>
            <select className="input">
              <option>Wallet</option>
              <option>Bank Transfer</option>
            </select>
          </div>

          <div>
            <label>Amount</label>
            <input type="number" className="input" />
          </div>

          <div>
            <label>Remarks</label>
            <textarea className="input" rows={3} />
          </div>

          <p className="text-xs text-blue-600">
            ℹ Requires accounts approval
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
