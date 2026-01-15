export default function StudentHistoryModal({ enrollments, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">

        <div className="modal-header">
          <h3>Student Enrollment History</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <table className="history-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Season</th>
              <th>Location</th>
              <th>Program</th>
              <th>Class Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {enrollments?.length > 0 ? (
              enrollments.map((e) =>  (
              <tr key={e.id}>
                <td>{e.year}</td>
                <td>{e.season}</td>
                <td>{e.location}</td>
                <td>{e.program}</td>
                <td>{e.classTime}</td>
                <td>
                  <button
                    className="link-btn"
                    onClick={() =>
                      window.location.href =
                        `/students/${e.studentId}?enrollmentId=${e.id}&mode=coach`
                    }
                  >
                    Detailed
                  </button>
                </td>
              </tr>
            )))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
