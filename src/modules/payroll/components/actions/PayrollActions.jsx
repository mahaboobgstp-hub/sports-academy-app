export default function PayrollActions({ processPayroll }) {
  return (
    <div style={{ marginTop: 16 }}>
      <button onClick={processPayroll}>Process Payroll</button>
    </div>
  );
}
