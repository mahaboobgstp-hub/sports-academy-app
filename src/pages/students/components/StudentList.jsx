import StudentCard from "./StudentCard";

export default function StudentList() {
  const students = [
    { id: 1, name: "Aarav", sport: "Football" },
    { id: 2, name: "Diya", sport: "Badminton" }
  ];

  return (
    <div>
      {students.map(s => (
        <StudentCard key={s.id} student={s} />
      ))}
    </div>
  );
}

