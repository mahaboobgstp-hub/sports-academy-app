/*const skills = [
  { name: "Dribbling", level: 2 },
  { name: "Passing", level: 3 },
  { name: "Shooting", level: 2 },
  { name: "Defense", level: 1 },
  { name: "Game Awareness", level: 2 }
];

export default function SkillsPanel() {
  return (
    <div className="card">
      <h3>Skill Progress</h3>

      {skills.map((skill) => (
        <div key={skill.name} className="skill-row">
          <span>{skill.name}</span>
          <div className="skill-bars">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`bar ${i <= skill.level ? "active" : ""}`}
              />
            ))}
          </div>
          <span className="level-text">
            {["Low", "Medium", "High"][skill.level - 1]}
          </span>
        </div>
      ))}
    </div>
  );
}*/

const skills = [
  { name: "Dribbling", level: 2 },
  { name: "Passing", level: 3 },
  { name: "Shooting", level: 2 },
  { name: "Defense", level: 1 },
  { name: "Game Awareness", level: 2 }
];

export default function SkillsPanel({ isCoach }) {
  return (
    <div className="card">
      <h3>Skill Progress</h3>

      {skills.map((skill) => (
        <div key={skill.name} className="skill-row">
          <span className="skill-name">{skill.name}</span>

          <div className="skill-icons">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`ball ${i <= skill.level ? "filled" : ""}`}
                onClick={() => isCoach && updateLevel(skill.name, i)}
                style={{ cursor: isCoach ? "pointer" : "default" }}
              >
                🏀
              </span>
            ))}
          </div>

          <span className="skill-label">
            {skill.level === 1
              ? "Beginner"
              : skill.level === 2
              ? "Intermediate"
              : "Advanced"}
          </span>
           {/* 👇 HELPER TEXT — PUT IT HERE */}
          {isCoach && (
            <small style={{ color: "#888", marginLeft: 8 }}>
              Click to update
            </small>
          )}
        </div>
      ))}
    </div>
  );
}

