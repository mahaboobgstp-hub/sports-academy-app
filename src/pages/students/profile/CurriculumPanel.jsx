const curriculum = [
  {
    phase: "Foundation",
    topics: ["Ball Handling", "Passing Basics", "Footwork"]
  },
  {
    phase: "Intermediate",
    topics: ["Shooting Form", "Defense Positioning", "Game Awareness"]
  },
  {
    phase: "Advanced",
    topics: ["Fast Break", "Pick & Roll", "Match Play"]
  }
];

export default function CurriculumPanel() {
  return (
    <div className="card">
      <h3>Curriculum</h3>

      <div className="curriculum-row">
        {curriculum.map(level => (
          <div key={level.phase} className="curriculum-column">
            <strong>{level.phase}</strong>
            <ul>
              {level.topics.map(topic => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
