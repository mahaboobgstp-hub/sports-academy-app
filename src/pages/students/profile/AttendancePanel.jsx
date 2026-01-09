const attendanceData = [
  "P", "P", "A", "P", "P", "H", "P", "P", "P", "A",
  "P", "P", "P", "H", "P", "A", "P", "P", "P", "P"
];
// P = Present, A = Absent, H = Holiday

export default function AttendancePanel() {
  return (
    <div className="card">
      <h3>Attendance</h3>

      <div className="attendance-summary">
        <div>Total Classes: 24</div>
        <div>Attendance: 83%</div>
      </div>

      <div className="attendance-grid">
        {attendanceData.map((status, index) => (
          <div
            key={index}
            className={`attendance-cell ${status}`}
            title={
              status === "P"
                ? "Present"
                : status === "A"
                ? "Absent"
                : "Holiday"
            }
          />
        ))}
      </div>

      <div className="attendance-legend">
        <span><i className="present" /> Present</span>
        <span><i className="absent" /> Absent</span>
        <span><i className="holiday" /> Holiday</span>
      </div>
    </div>
  );
}
