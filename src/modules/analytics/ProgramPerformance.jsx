import SectionCard from "./components/SectionCard";

export default function ProgramPerformance() {
  return (
    <div className="program-page">

      <div className="program-header">
        Program Performance
      </div>

      <div className="program-summary">
        <div className="program-card">
          <div className="program-card-label">Total Programs</div>
          <div className="program-card-value">14</div>
        </div>

        <div className="program-card">
          <div className="program-card-label">Profitable Programs</div>
          <div className="program-card-value">9</div>
        </div>

        <div className="program-card">
          <div className="program-card-label">Avg Margin</div>
          <div className="program-card-value">32%</div>
        </div>
      </div>

      <div className="program-section">
        <table className="program-table table-hover">
          <thead>
            <tr>
              <th>Program</th>
              <th>Level</th>
              <th>Revenue</th>
              <th>Cost</th>
              <th>Profit</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basketball</td>
              <td>Beginner</td>
              <td>₹4,00,000</td>
              <td>₹2,50,000</td>
              <td className="sales-good">₹1,50,000</td>
              <td>37%</td>
            </tr>
            <tr>
              <td>Football</td>
              <td>Advanced</td>
              <td>₹3,20,000</td>
              <td>₹3,10,000</td>
              <td className="sales-poor">₹10,000</td>
              <td>3%</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
