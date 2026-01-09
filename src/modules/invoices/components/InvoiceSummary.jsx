export default function InvoiceSummary({
  items = [],
  invoiceType = "GST",
  placeOfSupply = "",
  academyState = "Karnataka"
}) {
  const subtotal = items.reduce(
    (sum, item) =>
      sum + item.qty * item.rate - (item.discount || 0),
    0
  );

  const totalTax = invoiceType === "GST"
    ? items.reduce(
        (sum, item) =>
          sum +
          ((item.qty * item.rate - (item.discount || 0)) *
            (item.tax || 0)) /
            100,
        0
      )
    : 0;

  const isInterState =
    invoiceType === "GST" &&
    placeOfSupply &&
    placeOfSupply !== academyState;

  const cgst = !isInterState ? totalTax / 2 : 0;
  const sgst = !isInterState ? totalTax / 2 : 0;
  const igst = isInterState ? totalTax : 0;

  const grandTotal = subtotal + totalTax;

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-sm ml-auto space-y-2">
      <h3 className="font-semibold text-gray-700 mb-2">
        Invoice Summary
      </h3>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>

      {invoiceType === "GST" && (
        <>
          {!isInterState && (
            <>
              <div className="flex justify-between text-sm">
                <span>CGST</span>
                <span>₹ {cgst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>SGST</span>
                <span>₹ {sgst.toFixed(2)}</span>
              </div>
            </>
          )}

          {isInterState && (
            <div className="flex justify-between text-sm">
              <span>IGST</span>
              <span>₹ {igst.toFixed(2)}</span>
            </div>
          )}
        </>
      )}

      <div className="flex justify-between font-semibold border-t pt-2 mt-2">
        <span>Grand Total</span>
        <span>₹ {grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
