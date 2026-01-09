import "./ProductSaleViewModal.css";

export default function ProductSaleViewModal({ open, onClose, sale }) {
  if (!open || !sale) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Product Sale Details</h3>

        <div className="detail-grid">
          <div>
            <label>Order ID</label>
            <span>{sale.id}</span>
          </div>

          <div>
            <label>Date</label>
            <span>{sale.date}</span>
          </div>

          <div>
            <label>Product</label>
            <span>{sale.product}</span>
          </div>

          <div>
            <label>Category</label>
            <span>{sale.category}</span>
          </div>

          <div>
            <label>Quantity</label>
            <span>{sale.qty}</span>
          </div>

          <div>
            <label>Unit Price</label>
            <span>₹{sale.unitPrice}</span>
          </div>

          <div>
            <label>Total Amount</label>
            <span>₹{sale.qty * sale.unitPrice}</span>
          </div>

          <div>
            <label>Payment Mode</label>
            <span>{sale.payment}</span>
          </div>

          <div>
            <label>Status</label>
            <span
              className={
                sale.status === "Refunded" ? "status-refunded" : "status-completed"
              }
            >
              {sale.status}
            </span>
          </div>
        </div>

        <div className="modal-actions">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
