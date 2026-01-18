export default function PeriodSelector({ period, setPeriod }) {
  return (
    <div className="toolbar-field">
      <label>Period</label>
      <input
        type="month"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      />
    </div>
  );
}
