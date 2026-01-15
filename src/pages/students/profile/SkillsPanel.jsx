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
  const [skills, setSkills] = useState([
    { name: "Dribbling", level: 2 },
    { name: "Passing", level: 2 },
    { name: "Shooting", level: 3 },
    { name: "Defense", level: 1 },
    { name: "Game Awareness", level: 2 }
  ]);
const [unlockedLevels, setUnlockedLevels] = useState({
  intermediate: false,
  advanced: false,
});
const intermediateSkills = [
  "Crossover Dribble",
  "Shooting Form",
  "Defensive Positioning",
];

const advancedSkills = [
  "Pick & Roll",
  "Fast Break Decision",
  "Match Play",
];

  function updateLevel(skillName, newLevel) {
    if (!isCoach) return;

    setSkills(
      skills.map((s) =>
        s.name === skillName ? { ...s, level: newLevel } : s
      )
    );
  }

  return (
    <div className="card">
      <h3>Skill Progress</h3>

      {skills.map((skill) => (
        <div
          key={skill.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 10
          }}
        >
          <div
  style={{
    display: "flex",
    gap: "24px",
    marginTop: "24px",
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
           </div>
      ))}
      {/* INTERMEDIATE LEVEL (LOCKED SECTION) */}

  {/* INTERMEDIATE SKILLS */}
  <div
    style={{
      flex: 1,
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "12px",
      background: "#fafafa",
    }}
  >
  <strong>Intermediate Skills</strong>

  {!unlockedLevels.intermediate && (
    <div style={{ opacity: 0.5, marginTop: 8 }}>
      {intermediateSkills.map((s) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          🔒 {s}
        </div>
      ))}
    </div>
  )}

  {isCoach && !unlockedLevels.intermediate && (
    <button
      style={{ marginTop: 8, fontSize: 12 }}
      onClick={() =>
        setUnlockedLevels((p) => ({ ...p, intermediate: true }))
      }
    >
      Unlock Intermediate Level
    </button>
  )}
</div>

{/* ADVANCED LEVEL (LOCKED SECTION) */}
<div
    style={{
      flex: 1,
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "12px",
      background: "#fafafa",
    }}
  >
  <strong>Advanced Skills</strong>

  {!unlockedLevels.advanced && (
    <div style={{ opacity: 0.5, marginTop: 8 }}>
      {advancedSkills.map((s) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          🔒 {s}
        </div>
      ))}
    </div>
  )}

  {isCoach && !unlockedLevels.advanced && (
    <button
      style={{ marginTop: 8, fontSize: 12 }}
      onClick={() =>
        setUnlockedLevels((p) => ({ ...p, advanced: true }))
      }
    >
      Unlock Advanced Level
    </button>
  )}
</div>
</div>
    </div>
    
  );
}
