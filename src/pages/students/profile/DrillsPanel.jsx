/*const drills = {
  completed: [
    "Right-hand Dribble Control",
    "Chest Pass Accuracy",
    "Layup Basics"
  ],
  inProgress: [
    "Crossover Dribble",
    "Defensive Stance"
  ],
  upcoming: [
    "Pick & Roll Basics",
    "Fast Break Decision Making"
  ]
};

export default function DrillsPanel({ isCoach }) {
  return (
    <div className="card">
      <h3>Training Drills</h3>

      <div className="drills-row">
        <div className="drill-column completed">
          <strong>Completed</strong>
          <ul>
            {upcomingDrills.completed.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="drill-column progress">
          <strong>In Progress</strong>
          <ul>
            {drills.inProgress.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

        <div className="drill-column upcoming">
          <strong>Upcoming</strong>
          <ul>
            {drills.upcoming.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}*/


import { useState } from "react";

export default function DrillsPanel({ isCoach }) {
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
    <div className="card">
      <h3>Training Drills</h3>

      <div className="drills-row">

        {/* UPCOMING */}
        <div className="drill-column upcoming">
          <strong>Upcoming</strong>

          {drills.upcoming.map((d) => (
            <div key={d} className="drill-item">
              <span>{d}</span>

              {isCoach && (
                <button
                  onClick={() =>
                    moveDrill(d, "upcoming", "inProgress")
                  }
                >
                  Start
                </button>
              )}
            </div>
          ))}
        </div>

        {/* IN PROGRESS */}
        <div className="drill-column progress">
          <strong>In Progress</strong>

          {drills.inProgress.map((d) => (
            <div key={d} className="drill-item">
              <span>{d}</span>

              {isCoach && (
                <button
                  onClick={() =>
                    moveDrill(d, "inProgress", "completed")
                  }
                >
                  Complete
                </button>
              )}
            </div>
          ))}
        </div>

        {/* COMPLETED */}
        <div className="drill-column completed">
          <strong>Completed</strong>

          {drills.completed.map((d) => (
            <div key={d} className="drill-item">
              <span>{d}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

