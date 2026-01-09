export default function CoachDashboard() {
  return (
    <div style={{ padding: 20 }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h2>Coach Dashboard</h2>
        <div style={{ color: "#555" }}>
          Welcome, Coach Rahul
        </div>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 32
        }}
      >
        <SummaryCard title="Today's Classes" value="3" />
        <SummaryCard title="Total Students" value="28" />
        <SummaryCard title="Attendance Pending" value="5" />
        <SummaryCard title="Parent Questions" value="2" />
      </div>

      {/* Today's Batches */}
      <div style={{ marginBottom: 32 }}>
        <h3>Today's Batches</h3>

        <BatchCard
          time="6:00 – 7:00 PM"
          program="Beginner Basketball"
          location="Whitefield Arena"
          students={12}
        />

        <BatchCard
          time="7:00 – 8:00 PM"
          program="Intermediate Basketball"
          location="Whitefield Arena"
          students={10}
        />
      </div>

      {/* Quick Actions */}
      <div>
        <h3>Quick Actions</h3>
        <div style={{ display: "flex", gap: 12 }}>
          <button>Mark Attendance</button>
          <button>View Students</button>
          <button>Answer Questions</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function SummaryCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: 16,
        background: "#fff"
      }}
    >
      <div style={{ fontSize: 14, color: "#555" }}>{title}</div>
      <div style={{ fontSize: 24, fontWeight: "bold" }}>{value}</div>
    </div>
  );
}

function BatchCard({ time, program, location, students }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: 16,
        marginTop: 12,
        background: "#fff"
      }}
    >
      <div style={{ fontWeight: "bold" }}>{program}</div>
      <div>{time}</div>
      <div>{location}</div>
      <div style={{ fontSize: 13, color: "#555" }}>
        Students: {students}
      </div>
    </div>
  );
}

