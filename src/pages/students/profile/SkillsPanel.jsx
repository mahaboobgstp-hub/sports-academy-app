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
  // BEGINNER SKILLS (already unlocked)
  { name: "Dribbling", level: 2 },
  { name: "Passing", level: 2 },
  { name: "Shooting", level: 3 },
  { name: "Defense", level: 1 },
  { name: "Game Awareness", level: 2 },

  // INTERMEDIATE SKILLS (LOCKED INITIALLY)
  { name: "Crossover Dribble", level: 0 },
  { name: "Shooting Form", level: 0 },
  { name: "Defense", level: 0 },

  // ADVANCED SKILLS (LOCKED INITIALLY)
  { name: "Pick & Roll", level: 0 },
  { name: "Fast Break Decision", level: 0 },
  { name: "Match Play", level: 0 },
]);

/*const [unlockedLevels, setUnlockedLevels] = useState({
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
*/
 function updateLevel(skillName, newLevel) {
  if (!isCoach) return;

  setSkills((prev) =>
    prev.map((s) =>
      s.name === skillName
        ? { ...s, level: newLevel }
        : s
    )
  );
}


  return (
    <div className="card">
      <h3>Skill Progress</h3>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "24px",
    rowGap: "12px",
  }}
>
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
          
          <strong style={{ width: 150 }}>
            {skill.name}
          </strong>

          {/* BASKETBALL ICONS */}
          {/* BASKETBALLS + LOCK */}
<div style={{ display: "flex", gap: 6 }}>
  {[1, 2, 3].map((i) => (
    <span
      key={i}
      onClick={() => updateLevel(skill.name, i)}
      style={{
        fontSize: 20,
        cursor: isCoach ? "pointer" : "default",
        opacity: skill.level >= i ? 1 : 0.3
      }}
    >
      🏀
    </span>
  ))}
</div>
  {/* 🔒 LOCK ICON */}
  <span
        onClick={() => {
          if (!isCoach) return;

if (skill.level === 0) {
  // unlock → beginner
  updateLevel(skill.name, 1);
} else {
  // re-lock
  updateLevel(skill.name, 0);
}

        }}
        style={{
    fontSize: 18,
    cursor: isCoach ? "pointer" : "default",
    opacity: skill.level === 0 ? 1 : 0.5
  }}
>
  🔒
</span>


          {/* LEVEL TEXT */}
          <span style={{ color: "#555", width: 110 }}>
  {skill.level === 0 ? "Locked" : LEVEL_LABEL[skill.level]}
</span>
 </div>
 ))} 
    </div>
      </div>
    
  )}

