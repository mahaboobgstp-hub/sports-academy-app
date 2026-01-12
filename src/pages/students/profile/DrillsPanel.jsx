/*export default function DrillsPanel({ isCoach }) {
  const drills = {
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

  return (
    <div className="card">
      <h3>Training Drills</h3>

      <div className="drills-row">*/

      /* COMPLETED */
     /*   <div className="drill-column completed">
          <strong>Completed</strong>
          <ul>
            {drills.completed.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>

      /* IN PROGRESS */
        /*<div className="drill-column progress">
          <strong>In Progress</strong>
          <ul>
            {drills.inProgress.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>*/

        /* UPCOMING */
      /*  <div className="drill-column upcoming">
          <strong>Upcoming</strong>
          <ul>
            {drills.upcoming.map((d) => (
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
  });

  function moveDrill(drill, from, to) {
    if (!isCoach) return;

    setDrills({
      ...drills,
      [from]: drills[from].filter(d => d !== drill),
      [to]: [...drills[to], drill]
    });
  }

  return (
    <div className="card">
      <h3>Training Drills</h3>

      <div className="drills-row">
        <Column
          title="Completed"
          items={drills.completed}
        />

        <Column
          title="In Progress"
          items={drills.inProgress}
          action={isCoach ? (d) => moveDrill(d, "inProgress", "completed") : null}
          actionLabel="Complete"
        />

        <Column
          title="Upcoming"
          items={drills.upcoming}
          action={isCoach ? (d) => moveDrill(d, "upcoming", "inProgress") : null}
          actionLabel="Start"
        />
      </div>
    </div>
  );
}

function Column({ title, items, action, actionLabel }) {
  return (
    <div className="drill-column">
      <strong>{title}</strong>
      <ul>
        {items.map(d => (
          <li key={d}>
            {d}
            {action && (
              <button onClick={() => action(d)}>
                {actionLabel}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


