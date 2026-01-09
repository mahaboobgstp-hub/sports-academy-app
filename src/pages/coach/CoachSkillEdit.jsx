import { useState } from "react";

export default function CoachSkillEdit() {
  const [skills, setSkills] = useState([
    { name: "Dribbling", level: 2 },
    { name: "Passing", level: 3 },
    { name: "Shooting", level: 2 },
    { name: "Defense", level: 1 },
    { name: "Game Awareness", level: 2 }
  ]);

  function updateLevel(skillName, level) {
    setSkills(
      skills.map((s) =>
        s.name === skillName ? { ...s, level } : s
      )
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Update Skills</h2>

      <div style={{ color: "#555", marginBottom: 16 }}>
        Arjun Kumar · U-12 · Basketball
      </div>

      <div className="card">
        {skills.map((skill) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            onChange={updateLevel}
          />
        ))}
      </div>

      <button style={{ marginTop: 16 }}>
        Save Updates
      </button>
    </div>
  );
}

/* ---------- ROW ---------- */

function SkillRow({ skill, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "10px 0",
        borderBottom: "1px solid #eee"
      }}
    >
      <div style={{ width: 160 }}>
        {skill.name}
      </div>

      <div style={{ display: "flex", gap: 6 }}>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            onClick={() => onChange(skill.name, i)}
            style={{
              cursor: "pointer",
              fontSize: 20,
              opacity: i <= skill.level ? 1 : 0.25
            }}
            title={
              i === 1
                ? "Beginner"
                : i === 2
                ? "Intermediate"
                : "Advanced"
            }
          >
            🏀
          </span>
        ))}
      </div>

      <span style={{ fontSize: 13, color: "#555" }}>
        {skill.level === 1
          ? "Beginner"
          : skill.level === 2
          ? "Intermediate"
          : "Advanced"}
      </span>
    </div>
  );
}
