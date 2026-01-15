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

      {skillLevels.map((skill) => (
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

/*const skills = [
  { name: "Dribbling", level: 2 },
  { name: "Passing", level: 3 },
  { name: "Shooting", level: 2 },
  { name: "Defense", level: 1 },
  { name: "Game Awareness", level: 2 }
];*/

/*export default function SkillsPanel({ isCoach }) {
  return (
    <div className="card">
      <h3>Skill Progress</h3>

      {skillLevels.map((skill) => (
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
          </div>*/

        /*  <span className="skill-label">
            {skill.level === 1
              ? "Beginner"
              : skill.level === 2
              ? "Intermediate"
              : "Advanced"}
          </span>*/
           {/* 👇 HELPER TEXT — PUT IT HERE */}
         /* {isCoach && (
            <small style={{ color: "#888", marginLeft: 8 }}>
              Click to update
            </small>
          )}
        </div>
      ))}
    </div>
  );
}*/

import { useState } from "react";

const LEVEL_LABEL = {
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced"
};

export default function SkillsPanel({ isCoach }) {
  const [skillLevels, setSkillLevels] = useState([
  {
    level: "Beginner",
    locked: false,
    skills: [
      { name: "Dribbling", completed: true },
      { name: "Passing", completed: true },
      { name: "Defense", completed: false },
      { name: "Game Awareness", completed: false },
    ],
  },
  {
    level: "Intermediate",
    locked: true,
    skills: [
      { name: "Crossover Dribble", completed: false },
      { name: "Shooting Form", completed: false },
      { name: "Defensive Positioning", completed: false },
    ],
  },
  {
    level: "Advanced",
    locked: true,
    skills: [
      { name: "Pick & Roll", completed: false },
      { name: "Fast Break Decision", completed: false },
      { name: "Match Play", completed: false },
    ],
  },
]);


  function updateLevel(skillName, newLevel) {
    if (!isCoach) return;

    setSkills(
      skillLevels.map((s) =>
        s.name === skillName ? { ...s, level: newLevel } : s
      )
    );
  }

  return (
    <div className="card">
      <h3>Skill Progress</h3>

      {skillLevels.map((skill) => (
        <div
          key={skill.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 10
          }}
        >
          <strong style={{ width: 150 }}>
            {skill.name}
          </strong>

          {/* BASKETBALL ICONS */}
          <div style={{ display: "flex", gap: 6 }}>
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                onClick={() => updateLevel(skill.name, i)}
                style={{
                  fontSize: 20,
                  cursor: isCoach ? "pointer" : "default",
                  opacity: i <= skill.level ? 1 : 0.3
                }}
              >
                🏀
              </span>
            ))}
          </div>

          {/* LEVEL TEXT */}
          <span style={{ color: "#555", width: 110 }}>
            {LEVEL_LABEL[skill.level]}
          </span>

          {/* HELPER TEXT */}
          {isCoach && (
            <small style={{ color: "#888" }}>
              Click to update
            </small>
          )}
        </div>
      ))}
    </div>
  );
}
