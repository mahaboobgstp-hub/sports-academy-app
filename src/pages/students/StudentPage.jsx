import { useState } from "react";
import SearchPanel from "./components/SearchPanel";
import StudentList from "./components/StudentList";

export default function StudentPage() {
  const [students] = useState([
    {
      id: "stu1",
      name: "Arjun Kumar",
      ageGroup: "U-12",
      sport: "Basketball",
      program: "Beginner Batch",
      coach: "Coach Rahul",
      photo: "https://via.placeholder.com/60"
    },
    {
      id: "stu2",
      name: "Ananya Kumar",
      ageGroup: "U-10",
      sport: "Basketball",
      program: "Foundation Batch",
      coach: "Coach Rahul",
      photo: "https://via.placeholder.com/60"
    }
  ]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Students</h2>

      {/* Search */}
      <SearchPanel />

      {/* List */}
      <StudentList students={students} />
    </div>
  );
}
