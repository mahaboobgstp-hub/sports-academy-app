import SectionCard from "./components/SectionCard";

export default function LocationPerformance() {
  return (
    <div className="location-page">

      <div className="location-header">
        Location Performance
      </div>

      <table className="location-table table-hover">
        <thead>
          <tr>
            <th>Location</th>
            <th>Revenue</th>
            <th>Expenses</th>
            <th>Profit</th>
            <th>Margin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Center A</td>
            <td>₹6,00,000</td>
            <td>₹4,00,000</td>
            <td className="location-profit">₹2,00,000</td>
            <td>33%</td>
          </tr>
          <tr>
            <td>Center B</td>
            <td>₹4,20,000</td>
            <td>₹4,80,000</td>
            <td className="location-loss">-₹60,000</td>
            <td>-14%</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

