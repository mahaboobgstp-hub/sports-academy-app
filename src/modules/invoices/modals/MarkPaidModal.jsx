export default function MarkPaidModal({
  open,
  invoiceNo,
  amountDue = 0,
  onClose,
  onConfirm
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold">Mark Invoice as Paid</h2>

        <div className="text-sm text-gray-600">
          Invoice: <span className="font-medium">{invoiceNo}</span>
        </div>

        <div className="bg-gray-50 rounded p-3 text-sm">
          <div className="flex justify-between">
            <span>Amount Due</span>
            <span className="font-semibold">₹ {amountDue.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm mb-1">Payment Date</label>
            <input type="date" className="border rounded px-3 py-2 w-full" />
          </div>

          <div>
            <label className="block text-sm mb-1">Payment Mode</label>
            <select className="border rounded px-3 py-2 w-full">
              <option>Cash</option>
              <option>UPI</option>
              <option>Bank Transfer</option>
              <option>Cheque</option>
              <option>Card</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Reference / Notes</label>
            <input
              placeholder="Transaction ID / Notes"
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Mark Paid
          </button>
        </div>
      </div>
    </div>
  );
          }
