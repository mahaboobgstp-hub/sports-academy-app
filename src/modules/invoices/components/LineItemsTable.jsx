export default function LineItemsTable({
  items,
  invoiceType = "GST",
  onAddItem,
  onUpdateItem,
  onRemoveItem
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Line Items</h2>
        <button
          onClick={onAddItem}
          className="text-blue-600 text-sm font-medium"
        >
          + Add Item
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-9 gap-2 text-sm font-medium text-gray-600">
        <div className="col-span-2">Item</div>
        <div>Description</div>
        <div>HSN / SAC</div>
        <div>Qty</div>
        <div>Rate (₹)</div>
        <div>Discount (₹)</div>
        <div>Tax %</div>
        <div></div>
      </div>

      {/* Rows */}
      {items.map((item, index) => {
        const amount =
          item.qty * item.rate - (item.discount || 0);
        return (
          <div
            key={index}
            className="grid grid-cols-9 gap-2 items-center border-t pt-2"
          >
            <input
              className="border rounded px-2 py-1 col-span-2"
              placeholder="Item name"
              value={item.name}
              onChange={(e) =>
                onUpdateItem(index, "name", e.target.value)
              }
            />

            <input
              className="border rounded px-2 py-1"
              placeholder="Description"
              value={item.description}
              onChange={(e) =>
                onUpdateItem(index, "description", e.target.value)
              }
            />

            <input
              className="border rounded px-2 py-1"
              placeholder="HSN / SAC"
              value={item.hsn}
              onChange={(e) =>
                onUpdateItem(index, "hsn", e.target.value)
              }
            />

            <input
              type="number"
              className="border rounded px-2 py-1"
              value={item.qty}
              min={1}
              onChange={(e) =>
                onUpdateItem(index, "qty", Number(e.target.value))
              }
            />

            <input
              type="number"
              className="border rounded px-2 py-1"
              value={item.rate}
              onChange={(e) =>
                onUpdateItem(index, "rate", Number(e.target.value))
              }
            />

            <input
              type="number"
              className="border rounded px-2 py-1"
              value={item.discount}
              onChange={(e) =>
                onUpdateItem(index, "discount", Number(e.target.value))
              }
            />

            <input
              type="number"
              className="border rounded px-2 py-1"
              disabled={invoiceType !== "GST"}
              value={item.tax}
              onChange={(e) =>
                onUpdateItem(index, "tax", Number(e.target.value))
              }
            />

            <div className="text-right text-sm font-medium">
              ₹ {amount.toFixed(2)}
            </div>

            <button
              onClick={() => onRemoveItem(index)}
              className="text-red-500 text-sm"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
          }
