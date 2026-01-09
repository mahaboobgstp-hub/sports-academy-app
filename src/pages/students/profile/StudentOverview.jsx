//import studentImg from "../../../../assets/student.png";
//import coachImg from "../../../../assets/coach.png";

export default function StudentOverview() {
  return (
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
  );
}
