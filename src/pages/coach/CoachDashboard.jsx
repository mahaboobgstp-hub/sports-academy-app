import { useNavigate } from "react-router-dom";

export default function CoachDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      {/* HEADER */}
      <h2>Coach Dashboard</h2>
      <p style={{ color: "#666" }}>
        Welcome, Coach Rahul
      </p>

      {/* METRICS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginTop: 20
        }}
      >
        <StatCard label="Today's Classes" value="3" />
        <StatCard label="Total Students" value="28" />
        <StatCard label="Attendance Pending" value="5" />
        <StatCard label="Parent Questions" value="2" />
      </div>

      {/* TODAY'S BATCHES */}
      <h3 style={{ marginTop: 30 }}>Today's Batches</h3>

      <BatchCard
        program="Beginner Basketball"
        time="6:00 – 7:00 PM"
        location="Whitefield Arena"
        students={12}
      />

      <BatchCard
        program="Intermediate Basketball"
        time="7:00 – 8:00 PM"
        location="Whitefield Arena"
        students={10}
      />

      {/* QUICK ACTIONS */}
      <h3 style={{ marginTop: 30 }}>Quick Actions</h3>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => navigate("/coach/attendance")}
        >
          Mark Attendance
        </button>

        <button
          onClick={() => navigate("/coach/students")}
        >
          View Students
        </button>

        <button
          onClick={() => navigate("/coach/students")}
        >
          Answer Questions
        </button>
      </div>
    </div>
  );
}

/* ======================= */
/* 🔹 REUSABLE COMPONENTS */
/* ======================= */

function StatCard({ label, value }) {
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fff"
      }}
    >
      <div style={{ fontSize: 13, color: "#666" }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: "bold" }}>
        {value}
      </div>
    </div>
  );
}

function BatchCard({ program, time, location, students }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        marginTop: 12,
        background: "#fff"
      }}
    >
      <strong>{program}</strong>
      <div>{time}</div>
      <div>{location}</div>
      <div style={{ color: "#666", fontSize: 13 }}>
        Students: {students}
      </div>
    </div>
  );
}
