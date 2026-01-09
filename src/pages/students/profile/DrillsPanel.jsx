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

export default function DrillsPanel() {
  return (
    <div className="card">
      <h3>Training Drills</h3>

      <div className="drills-row">
        <div className="drill-column completed">
          <strong>Completed</strong>
          <ul>
            {drills.completed.map(d => (
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
}
