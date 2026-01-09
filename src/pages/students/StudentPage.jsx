import { useState } from "react";
import "./StudentPage.css";

export default function StudentPage() {
  const [mobile, setMobile] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="student-page">

      {/* SEARCH */}
      <div className="student-search">
        <input
          placeholder="Enter Parent Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button>Search</button>
      </div>

      {/* STUDENT LIST */}
      <div className="student-list">
        {students.length === 0 && (
          <div className="empty">
            No students loaded
          </div>
        )}
      </div>

      {/* STUDENT PROFILE */}
      {selectedStudent && (
        <div className="student-profile">
          Student Profile
        </div>
      )}

    </div>
  );
}

