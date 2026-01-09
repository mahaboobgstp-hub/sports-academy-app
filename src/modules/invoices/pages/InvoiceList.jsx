import invoices from "../data/mockInvoices";
import InvoiceTable from "../components/InvoiceTable";

export default function InvoiceList() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Invoices</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          + Create Invoice
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-wrap gap-4">
        <input
          type="date"
          className="border rounded px-3 py-2"
        />
        <input
          type="date"
          className="border rounded px-3 py-2"
        />
        <select className="border rounded px-3 py-2">
          <option>Status</option>
          <option>Draft</option>
          <option>Issued</option>
          <option>Paid</option>
          <option>Overdue</option>
        </select>
        <input
          type="text"
          placeholder="Search Invoice / Customer"
          className="border rounded px-3 py-2 flex-1 min-w-[220px]"
        />
      </div>

      {/* Table */}
      <InvoiceTable invoices={invoices} />
    </div>
  );
}
