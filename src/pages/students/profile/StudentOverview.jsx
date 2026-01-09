//import studentImg from "../../../assets/student.png";
//import coachImg from "../../../assets/coach.png";


export default function StudentOverview() {
  return (
    <div className="card">
      <div className="header-row">
        {/* Student */}
        <div className="person">
          <img src={studentImg} alt="Student" className="avatar" />
          <div>
            <h3>Arjun Kumar</h3>
            <div>Age: 11 · U-12 · Basketball</div>
          </div>
        </div>

        {/* Coach */}
        <div className="person">
          <img src={coachImg} alt="Coach" className="avatar" />
          <div>
            <h4>Coach Rahul</h4>
            <div>Head Basketball Coach</div>
          </div>
        </div>
      </div>

      {/* Program */}
      <div className="program-grid">
        <div><strong>Location:</strong> Whitefield Arena</div>
        <div><strong>Program:</strong> Beginner Basketball</div>
        <div><strong>Batch:</strong> Mon–Wed–Fri</div>
        <div><strong>Time:</strong> 6:00 – 7:00 PM</div>
        <div><strong>Enrolled:</strong> Jan 2024</div>
      </div>
    </div>
  );
}
