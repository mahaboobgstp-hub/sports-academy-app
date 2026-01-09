import { useState } from "react";

export default function CreateInvoice() {
  const [invoiceType, setInvoiceType] = useState("GST");
  const [items, setItems] = useState([
    {
      name: "",
      description: "",
      hsn: "",
      qty: 1,
      rate: 0,
      discount: 0,
      tax: 18
    }
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { name: "", description: "", hsn: "", qty: 1, rate: 0, discount: 0, tax: 18 }
    ]);
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateSubtotal = () =>
    items.reduce((sum, i) => sum + i.qty * i.rate - i.discount, 0);

  const calculateTax = () =>
    invoiceType === "GST"
      ? items.reduce(
          (sum, i) =>
            sum + ((i.qty * i.rate - i.discount) * i.tax) / 100,
          0
        )
      : 0;

  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const total = subtotal + tax;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Create Invoice</h1>

      {/* Invoice Meta */}
      <div className="bg-white p-4 rounded-lg shadow grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Invoice Date</label>
          <input type="date" className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-sm">Due Date</label>
          <input type="date" className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-sm">Invoice Type</label>
          <select
            className="border rounded px-3 py-2 w-full"
            value={invoiceType}
            onChange={(e) => setInvoiceType(e.target.value)}
          >
            <option value="GST">GST</option>
            <option value="NON_GST">Non-GST</option>
          </select>
        </div>
        <div>
          <label className="block text-sm">Place of Supply</label>
          <input
            type="text"
            placeholder="State"
            className="border rounded px-3 py-2 w-full"
          />
        </div>
      </div>

      {/* Customer */}
      <div className="bg-white p-4 rounded-lg shadow grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm">Customer Name</label>
          <input className="border rounded px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block text-sm">GSTIN</label>
          <input
            disabled={invoiceType !== "GST"}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm">Billing Address</label>
          <textarea className="border rounded px-3 py-2 w-full" rows={2} />
        </div>
      </div>

      {/* Line Items */}
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold">Line Items</h2>

        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-8 gap-2 items-end border-b pb-3"
          >
            <input
              placeholder="Item"
              className="border rounded px-2 py-1 col-span-2"
              value={item.name}
              onChange={(e) =>
                updateItem(index, "name", e.target.value)
              }
            />
            <input
              placeholder="HSN/SAC"
              className="border rounded px-2 py-1"
              value={item.hsn}
              onChange={(e) =>
                updateItem(index, "hsn", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Qty"
              className="border rounded px-2 py-1"
              value={item.qty}
              onChange={(e) =>
                updateItem(index, "qty", Number(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Rate"
              className="border rounded px-2 py-1"
              value={item.rate}
              onChange={(e) =>
                updateItem(index, "rate", Number(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Discount"
              className="border rounded px-2 py-1"
              value={item.discount}
              onChange={(e) =>
                updateItem(index, "discount", Number(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Tax %"
              disabled={invoiceType !== "GST"}
              className="border rounded px-2 py-1"
              value={item.tax}
              onChange={(e) =>
                updateItem(index, "tax", Number(e.target.value))
              }
            />
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addItem}
          className="text-blue-600 text-sm font-medium"
        >
          + Add Item
        </button>
      </div>

      {/* Summary */}
      <div className="bg-white p-4 rounded-lg shadow w-1/3 ml-auto space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </div>
        {invoiceType === "GST" && (
          <div className="flex justify-between">
            <span>GST</span>
            <span>₹ {tax.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-semibold border-t pt-2">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 border rounded">Save Draft</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Issue Invoice
        </button>
      </div>
    </div>
  );
}
