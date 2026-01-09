import { useState } from "react";

export default function CoachAttendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Arjun Kumar", status: null },
    { id: 2, name: "Rohan Singh", status: "Present" },
    { id: 3, name: "Ayaan Khan", status: null },
    { id: 4, name: "Vivaan Patel", status: "Absent" }
  ]);

  function markAttendance(id, status) {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Mark Attendance</h2>

      <div style={{ marginBottom: 12, color: "#555" }}>
        Beginner Basketball · 6:00 – 7:00 PM · Whitefield Arena
      </div>

      <div style={{ marginTop: 20 }}>
        {students.map((s) => (
          <AttendanceRow
            key={s.id}
            student={s}
            onMark={markAttendance}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- ROW ---------- */

function AttendanceRow({ student, onMark }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 2fr 1fr 1fr",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderBottom: "1px solid #eee"
      }}
    >
      <strong>{student.name}</strong>

      <div>
        {student.status ? (
          <span
            style={{
              color:
                student.status === "Present"
                  ? "#2e7d32"
                  : "#c62828"
            }}
          >
            {student.status}
          </span>
        ) : (
          <span style={{ color: "#999" }}>
            Not marked
          </span>
        )}
      </div>

      <button
        onClick={() => onMark(student.id, "Present")}
        disabled={student.status === "Present"}
      >
        Present
      </button>

      <button
        onClick={() => onMark(student.id, "Absent")}
        disabled={student.status === "Absent"}
      >
        Absent
      </button>
    </div>
  );
}
