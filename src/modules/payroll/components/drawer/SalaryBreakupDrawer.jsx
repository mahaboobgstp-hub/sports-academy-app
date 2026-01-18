export default function SalaryBreakupDrawer({ employee, onClose }) {
  if (!employee) return null;

  return (
    <div style={{ position: "fixed", right: 0, top: 0, width: 300, background: "#fff", height: "100%", padding: 16 }}>
      <h3>{employee.name}</h3>
      <p>Basic: {employee.basic}</p>
      <p>HRA: {employee.hra}</p>
      <p>Deductions: {employee.deductions}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
