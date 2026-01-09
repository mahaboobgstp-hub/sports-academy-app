import { useState } from "react";

export default function CoachDrillUpdate() {
  const [drills, setDrills] = useState({
    upcoming: [
      "Pick & Roll Basics",
      "Fast Break Decision Making"
    ],
    inProgress: [
      "Crossover Dribble",
      "Defensive Stance"
    ],
    completed: [
      "Right-hand Dribble Control",
      "Chest Pass Accuracy"
    ]
  });

  function moveDrill(drill, from, to) {
    setDrills((prev) => ({
      ...prev,
      [from]: prev[from].filter((d) => d !== drill),
      [to]: [...prev[to], drill]
    }));
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Training Drills</h2>

      <div style={{ color: "#555", marginBottom: 16 }}>
        Arjun Kumar · U-12 · Basketball
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        }}
      >
        <DrillColumn
          title="Upcoming"
          drills={drills.upcoming}
          onMove={(d) => moveDrill(d, "upcoming", "inProgress")}
          actionLabel="Start"
        />

        <DrillColumn
          title="In Progress"
          drills={drills.inProgress}
          onMove={(d) => moveDrill(d, "inProgress", "completed")}
          actionLabel="Complete"
        />

        <DrillColumn
          title="Completed"
          drills={drills.completed}
        />
      </div>
    </div>
  );
}

/* ---------- COLUMN ---------- */

function DrillColumn({ title, drills, onMove, actionLabel }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: 16,
        background: "#fff"
      }}
    >
      <h4>{title}</h4>

      {drills.length === 0 && (
        <div style={{ color: "#999", fontSize: 13 }}>
          No drills
        </div>
      )}

      {drills.map((d) => (
        <div
          key={d}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
            padding: 8,
            background: "#f5f5f5",
            borderRadius: 6
          }}
        >
          <span>{d}</span>

          {onMove && (
            <button onClick={() => onMove(d)}>
              {actionLabel}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
