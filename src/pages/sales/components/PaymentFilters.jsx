export default function PaymentFilters() {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-wrap gap-4 items-end">
      <div>
        <label className="text-sm">From Date</label>
        <input type="date" className="border p-2 rounded w-full" />
      </div>

      <div>
        <label className="text-sm">To Date</label>
        <input type="date" className="border p-2 rounded w-full" />
      </div>

      <div>
        <label className="text-sm">Payment Mode</label>
        <select className="border p-2 rounded w-full">
          <option>All</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
          <option>Bank Transfer</option>
        </select>
      </div>

      <div>
        <label className="text-sm">Status</label>
        <select className="border p-2 rounded w-full">
          <option>All</option>
          <option>Paid</option>
          <option>Partial</option>
          <option>Pending</option>
          <option>Refunded</option>
        </select>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Apply Filters
      </button>
    </div>
  );
}
