import { useNavigate } from "react-router-dom";

export default function StudentCard({ student }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/students/${student.id}`)}
      style={{
        padding: 12,
        border: "1px solid #ccc",
        marginBottom: 8,
        cursor: "pointer"
      }}
    >
      <strong>{student.name}</strong>
      <div>{student.sport}</div>
    </div>
  );
}

