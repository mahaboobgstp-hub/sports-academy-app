export default function PaymentFilters() {
  return (
    <div className="payment-filters">
      <div className="filter-group">
        <label>From Date</label>
        <input type="date" />
      </div>

      <div className="filter-group">
        <label>To Date</label>
        <input type="date" />
      </div>

      <div className="filter-group">
        <label>Payment Mode</label>
        <select>
          <option>All</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Status</label>
        <select>
          <option>All</option>
          <option>Paid</option>
          <option>Partial</option>
          <option>Pending</option>
        </select>
      </div>

      <button className="apply-btn">Apply Filters</button>
    </div>
  );
}
