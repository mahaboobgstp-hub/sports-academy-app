export function toggleStatus(current) {
  const order = ["present", "absent", "holiday", null];
  const index = order.indexOf(current);
  return order[(index + 1) % order.length];
}
