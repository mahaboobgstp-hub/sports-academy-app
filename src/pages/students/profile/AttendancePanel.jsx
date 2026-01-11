const attendanceData = [
  { day: "01", status: "P" },
  { day: "02", status: "P" },
  { day: "03", status: "A" },
  { day: "04", status: "P" },
  { day: "05", status: "P" },
  { day: "06", status: "H" },
  { day: "07", status: "P" },
  { day: "08", status: "P" },
  { day: "09", status: "P" },
  { day: "10", status: "A" },
  { day: "11", status: "P" },
  { day: "12", status: "P" },
  { day: "13", status: "P" },
  { day: "14", status: "H" },
  { day: "15", status: "P" },
  { day: "16", status: "A" },
  { day: "17", status: "P" },
  { day: "18", status: "P" },
  { day: "19", status: "P" },
  { day: "20", status: "P" }
];

// P = Present, A = Absent, H = Holiday

export default function AttendancePanel({ isCoach }) {

  return (
    <div className="card">
      <h3>Attendance</h3>

      <div className="attendance-summary">
        <div>Total Classes: 24</div>
        <div>Attendance: 83%</div>
      </div>

      {isCoach ? <CoachAttendanceView /> : <ParentAttendanceGrid />}

           <div className="attendance-grid">
  {attendanceData.map((item, index) => (
    <div
      key={index}
      className={`attendance-cell ${item.status}`}
      title={
        item.status === "P"
          ? "Present"
          : item.status === "A"
          ? "Absent"
          : "Holiday"
      }
    >
      <span className="attendance-date">{item.day}</span>
    </div>
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

function CoachAttendanceView() {
  return <div>Coach Attendance View</div>;
}

function ParentAttendanceGrid() {
  return <div>Parent Attendance Grid</div>;
}
