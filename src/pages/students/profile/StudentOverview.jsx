//import studentImg from "../../../../assets/student.png";
//import coachImg from "../../../../assets/coach.png";
import { useState } from "react";
import EnrollmentInfo from "../components/EnrollmentInfo";
import StudentHistoryModal from "../components/StudentHistoryModal";


export default function StudentOverview({ isCoach }) {
  const [showHistory, setShowHistory] = useState(false);
  const studentEnrollments = [
  {
    id: "e1",
    studentId: "stu1",
    year: "2023-24",
    season: "Summer",
    location: "Indiranagar",
    program: "U-10 Basketball",
    classTime: "Mon–Wed, 4:30–5:30 PM",
  },
  {
    id: "e2",
    studentId: "stu1",
    year: "2024-25",
    season: "Winter",
    location: "Whitefield",
    program: "U-12 Basketball",
    classTime: "Tue–Thu, 5:00–6:00 PM",
  },
  {
    id: "e3",
    studentId: "stu1",
    year: "2025-26",
    season: "Summer",
    location: "Indiranagar",
    program: "U-12 Basketball",
    classTime: "Mon–Wed, 5:30–6:30 PM",
  },
];


  return (
    <>
    <div className="card">
      <div className="header-row">
        
        {/* Student */}
        <div className="person">
          <img
            src="/assets/student.png"
            alt="Student"
            className="avatar"
          />
          <div>
            <strong>Arjun Kumar</strong>
            <div>Age: 11 · U-12 · Basketball</div>
          </div>
        </div>

       
 
  <EnrollmentInfo
    status="active"
    year="2025-26"
    season="Summer"
    location="Indiranagar"
    program="U-12 Basketball"
    classTime="Mon–Wed, 5:30–6:30 PM"
  />
     {isCoach && (
  <button
    className="history-btn"
    onClick={() => setShowHistory(true)}
  >
    Student History
  </button>
)}

        {/* Coach */}
        <div className="person">
          <img
            src="/assets/coach.png"
            alt="Coach"
            className="avatar"
          />
          <div>
            <strong>Coach Rahul</strong>
            <div>Head Basketball Coach</div>
          </div>
        </div>

      </div>
    </div>
    {/* ✅ MODAL GOES HERE */}
      {showHistory && (
        <StudentHistoryModal
          enrollments={studentEnrollments}
          onClose={() => setShowHistory(false)}
        />
      )}
    </>
  );
}
 
