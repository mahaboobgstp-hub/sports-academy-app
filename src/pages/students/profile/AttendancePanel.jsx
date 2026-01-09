const attendance = [
  { date: "01 Apr", status: "Present" },
  { date: "03 Apr", status: "Present" },
  { date: "05 Apr", status: "Absent" },
  { date: "08 Apr", status: "Present" }
];

export default function AttendancePanel() {
  return (
    <div className="card">
      <h3>Attendance</h3>

      <div className="attendance-summary">
        <div>Total Classes: 24</div>
        <div>Attendance: 83%</div>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a, i) => (
            <tr key={i}>
              <td>{a.date}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
