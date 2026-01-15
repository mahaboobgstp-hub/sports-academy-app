import StatusFilter from "./components/StatusFilter";
import ClassStatusTable from "./components/ClassStatusTable";
import { pausedCancelledClasses } from "./mockData";

export default function PausedCancelledClassesPage() {
  return (
     <div className="paused-page">

      <div className="paused-header">
        <h1>Paused / Cancelled Classes</h1>
        <p>
          Track paused batches, cancelled programs, refunds, make-ups & compliance
        </p>
      </div>

      <div className="paused-filters">
        <select><option>Season</option><option>Season 3</option></select>
       <div className="filter-item">
  <label>Date</label>
  <input
    type="date"
    className="filter-control"
  />
</div>
        <select><option>Status</option></select>
        <select><option>Program</option></select>
        <select><option>Location</option></select>
        <select><option>Refund Required</option></select>
      </div>

      <div className="paused-table-wrapper">
        <table className="paused-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Program</th>
              <th>Location</th>
              <th>Coach</th>
              <th>Status</th>
              <th>Effective From</th>
              <th>Reason</th>
              <th>Refund</th>
              <th>Make-Up</th>
              <th>Compliance</th>
            </tr>
          </thead>

          <tbody>
            {pausedCancelledClasses.map(item => (
              <tr key={item.classId}>
                <td><strong>{item.className}</strong></td>
                <td>{item.program}</td>
                <td>{item.location}</td>
                <td>{item.coach}</td>
                <td>
                  <span
                    className={`status-badge ${
                      item.status === "Paused"
                        ? "status-paused"
                        : "status-cancelled"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.pausedOrCancelledOn}</td>
                <td className="text-muted">{item.reason}</td>
                <td>{item.refundRequired ? "Yes" : "No"}</td>
                <td>{item.makeUpRequired ? "Yes" : "No"}</td>
                <td>
                  {item.complianceFlag ? (
                    <span className="compliance-warning">⚠ Action</span>
                  ) : (
                    "No"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
