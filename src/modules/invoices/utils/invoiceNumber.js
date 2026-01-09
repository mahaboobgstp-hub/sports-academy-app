/**
 * Invoice Number Generator
 * Format: INV-YYYYMM-XXXX
 * Example: INV-202601-0007
 */

export function generateInvoiceNumber({
  prefix = "INV",
  date = new Date(),
  lastSequence = 0
}) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const sequence = String(lastSequence + 1).padStart(4, "0");

  return `${prefix}-${year}${month}-${sequence}`;
}

/**
 * Extracts sequence number from invoice number
 * Example: INV-202601-0007 → 7
 */
export function parseInvoiceSequence(invoiceNumber = "") {
  const parts = invoiceNumber.split("-");
  if (parts.length !== 3) return 0;
  return Number(parts[2]) || 0;
}
