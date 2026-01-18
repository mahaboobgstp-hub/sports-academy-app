export function generateDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
