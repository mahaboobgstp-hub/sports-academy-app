import SectionCard from "./components/SectionCard";

export default function Utilization() {
  return (
    <div className="utilization-page">

      <div className="utilization-header">
        Utilization Analytics
      </div>

      {/* SUMMARY */}
      <div className="utilization-summary">
        <div className="util-card">
          <div className="util-card-label">Total Slots</div>
          <div className="util-card-value">480</div>
        </div>

        <div className="util-card">
          <div className="util-card-label">Slots Utilized</div>
          <div className="util-card-value">355</div>
        </div>

        <div className="util-card">
          <div className="util-card-label">Utilization %</div>
          <div className="util-card-value">74%</div>
        </div>

        <div className="util-card">
          <div className="util-card-label">Idle Slots</div>
          <div className="util-card-value">125</div>
        </div>
      </div>

      {/* TABLE */}
      <div className="utilization-section">
        <div className="utilization-section-title">
          Slot-wise Utilization
        </div>

        <table className="utilization-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Court</th>
              <th>Time Slot</th>
              <th>Capacity</th>
              <th>Booked</th>
              <th>Utilization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Center A</td>
              <td>Court 1</td>
              <td>6:00 – 7:00 PM</td>
              <td>20</td>
              <td>18</td>
              <td className="util-high">90%</td>
            </tr>

            <tr>
              <td>Center A</td>
              <td>Court 2</td>
              <td>7:00 – 8:00 PM</td>
              <td>20</td>
              <td>12</td>
              <td className="util-medium">60%</td>
            </tr>

            <tr>
              <td>Center B</td>
              <td>Court 1</td>
              <td>5:00 – 6:00 PM</td>
              <td>16</td>
              <td>6</td>
              <td className="util-low">38%</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
