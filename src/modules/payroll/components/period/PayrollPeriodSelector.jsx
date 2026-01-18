export default function PayrollPeriodSelector({ period, setPeriod }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label>Payroll Period:</label>
      <input
        type="month"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      />
    </div>
  );
}
