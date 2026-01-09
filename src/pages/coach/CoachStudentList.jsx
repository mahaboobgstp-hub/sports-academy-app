import { useNavigate } from "react-router-dom";

export default function CoachStudentList() {
  const navigate = useNavigate();

  const students = [
    {
      id: "stu1",
      name: "Arjun Kumar",
      ageGroup: "U-12",
      program: "Beginner Basketball",
      attendanceToday: null
    },
    {
      id: "stu2",
      name: "Rohan Singh",
      ageGroup: "U-10",
      program: "Beginner Basketball",
      attendanceToday: "Present"
    },
    {
      id: "stu3",
      name: "Ayaan Khan",
      ageGroup: "U-12",
      program: "Intermediate Basketball",
      attendanceToday: "Absent"
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>My Students</h2>

      <div style={{ marginTop: 16 }}>
        {students.map((s) => (
          <StudentRow
            key={s.id}
            student={s}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- ROW ---------- */

function StudentRow({ student, navigate }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 2fr 1fr 2fr",
        gap: 12,
        alignItems: "center",
        padding: 12,
        borderBottom: "1px solid #eee"
      }}
    >
      <strong>{student.name}</strong>

      <div>{student.ageGroup}</div>

      <div>{student.program}</div>

      <div>
        {student.attendanceToday ?? (
          <span style={{ color: "#999" }}>Not marked</span>
        )}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button>Mark Attendance</button>

        {/* ✅ COACH MODE NAVIGATION */}
        <button
          onClick={() =>
            navigate(`/students/${student.id}?mode=coach`)
          }
        >
          View / Update
        </button>
      </div>
    </div>
  );
}
