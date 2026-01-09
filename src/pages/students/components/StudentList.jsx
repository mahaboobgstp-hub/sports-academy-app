import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  if (!students || students.length === 0) {
    return <div>No students found</div>;
  }

  return (
    <div style={{ marginTop: 20 }}>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
