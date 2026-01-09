export default function InvoiceView() {
  return (
    <div className="p-6 space-y-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between border-b pb-4">
          <div>
            <h1 className="text-xl font-bold">Sports Academy</h1>
            <p className="text-sm">GSTIN: 29ABCDE1234F1Z5</p>
            <p className="text-sm">Bangalore, Karnataka</p>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-semibold">INVOICE</h2>
            <p className="text-sm">Invoice #: INV-1003</p>
            <p className="text-sm">Date: 01-01-2026</p>
            <p className="text-sm">Due: 05-01-2026</p>
          </div>
        </div>

        {/* Billing */}
        <div className="mt-4 grid grid-cols-2">
          <div>
            <h3 className="font-semibold">Bill To</h3>
            <p>Elite Sports Academy</p>
            <p>GSTIN: 27AAECS1234Q1Z9</p>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>

        {/* Items */}
        <table className="w-full mt-6 border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="border p-2 text-left">Item</th>
              <th className="border p-2">Qty</th>
              <th className="border p-2">Rate</th>
              <th className="border p-2">Tax</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Annual Training Program</td>
              <td className="border p-2 text-center">1</td>
              <td className="border p-2 text-right">₹ 20,000</td>
              <td className="border p-2 text-right">18%</td>
              <td className="border p-2 text-right">₹ 23,600</td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mt-4">
          <div className="w-1/3 space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ 20,000</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹ 3,600</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹ 23,600</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t pt-4 text-sm">
          <p>Amount in words: Twenty Three Thousand Six Hundred Only</p>
          <p className="mt-2">This is a system generated invoice.</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button className="border px-4 py-2 rounded">Download PDF</button>
        <button className="border px-4 py-2 rounded">Print</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Mark as Paid
        </button>
      </div>
    </div>
  );
}
