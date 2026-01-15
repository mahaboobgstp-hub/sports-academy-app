export default function EnrollmentInfo({
  status = "active",
  year,
  season,
  location,
  program,
  classTime,
}) {
  return (
    <div className="enrolment-info">
      
     <div className="class-meta-grid">
       
      <div className={`enrolment-status ${status}`}>
        Enrolment: {status === "active" ? "Active" : "Inactive"}
      </div>

      
        <div><strong>Year:</strong> {year}</div>
        <div><strong>Season:</strong> {season}</div>
        <div><strong>Location:</strong> {location}</div>
        <div><strong>Program:</strong> {program}</div>
        <div><strong>Class Time:</strong> {classTime}</div>
      </div>

    </div>
  );
}
