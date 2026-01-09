import InvoiceStatusBadge from "./InvoiceStatusBadge";

export default function InvoiceTable({ invoices }) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 text-sm text-gray-700">
          <tr>
            <th className="p-3 text-left">Invoice No</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">GSTIN</th>
            <th className="p-3 text-right">Tax (₹)</th>
            <th className="p-3 text-right">Amount (₹)</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Due Date</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{invoice.id}</td>
              <td className="p-3">{invoice.date}</td>
              <td className="p-3">{invoice.customer}</td>
              <td className="p-3">
                {invoice.gstin || <span className="text-gray-400">—</span>}
              </td>
              <td className="p-3 text-right">{invoice.tax.toLocaleString()}</td>
              <td className="p-3 text-right font-semibold">
                {invoice.amount.toLocaleString()}
              </td>
              <td className="p-3">
                <InvoiceStatusBadge status={invoice.status} />
              </td>
              <td className="p-3">{invoice.dueDate}</td>
              <td className="p-3 text-center space-x-2">
                <button className="text-blue-600 text-sm hover:underline">
                  View
                </button>
                <button className="text-gray-600 text-sm hover:underline">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
