export default function AttendanceSummary({ summary }) {
  return (
    <div className="attendance-summary">
      <span>Present: {summary.present}</span>
      <span>Absent: {summary.absent}</span>
      <span>Holidays: {summary.holiday}</span>
    </div>
  );
}
