/**
 * Calculates GST breakup for invoice items
 * Supports CGST/SGST (intra-state) and IGST (inter-state)
 */

export function calculateSubtotal(items = []) {
  return items.reduce(
    (sum, item) =>
      sum + item.qty * item.rate - (item.discount || 0),
    0
  );
}

export function calculateTotalTax(items = []) {
  return items.reduce((sum, item) => {
    const taxableValue =
      item.qty * item.rate - (item.discount || 0);
    const taxRate = item.tax || 0;
    return sum + (taxableValue * taxRate) / 100;
  }, 0);
}

export function calculateGSTBreakup({
  items = [],
  invoiceType = "GST",
  placeOfSupply = "",
  academyState = ""
}) {
  const subtotal = calculateSubtotal(items);

  if (invoiceType !== "GST") {
    return {
      subtotal,
      cgst: 0,
      sgst: 0,
      igst: 0,
      totalTax: 0,
      grandTotal: subtotal
    };
  }

  const totalTax = calculateTotalTax(items);
  const isInterState =
    placeOfSupply && academyState &&
    placeOfSupply !== academyState;

  const cgst = !isInterState ? totalTax / 2 : 0;
  const sgst = !isInterState ? totalTax / 2 : 0;
  const igst = isInterState ? totalTax : 0;

  return {
    subtotal,
    cgst,
    sgst,
    igst,
    totalTax,
    grandTotal: subtotal + totalTax
  };
}
