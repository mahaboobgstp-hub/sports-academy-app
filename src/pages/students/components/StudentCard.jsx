import { useNavigate } from "react-router-dom";

export default function StudentCard({ student }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/students/${student.id}`)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 8,
        marginBottom: 12,
        cursor: "pointer"
      }}
    >
      <img
        src={student.photo}
        alt={student.name}
        width={60}
        height={60}
        style={{ borderRadius: "50%" }}
      />

      <div style={{ flex: 1 }}>
        <strong>{student.name}</strong>
        <div>{student.ageGroup} · {student.sport}</div>
        <div>{student.program}</div>
      </div>

      <div style={{ fontSize: 12, color: "#555" }}>
        Coach: {student.coach}
      </div>
    </div>
  );
}
