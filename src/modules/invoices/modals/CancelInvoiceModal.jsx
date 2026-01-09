export default function CancelInvoiceModal({
  open,
  invoiceNo,
  onClose,
  onConfirm
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold text-red-600">
          Cancel Invoice
        </h2>

        <div className="text-sm text-gray-700">
          Are you sure you want to cancel invoice{" "}
          <span className="font-semibold">{invoiceNo}</span>?
        </div>

        <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700">
          This action cannot be undone. Cancelled invoices remain
          in records for audit & GST compliance.
        </div>

        <div>
          <label className="block text-sm mb-1">
            Cancellation Reason
          </label>
          <textarea
            rows={3}
            placeholder="Reason for cancellation"
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Keep Invoice
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Cancel Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
