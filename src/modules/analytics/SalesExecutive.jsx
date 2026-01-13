import SectionCard from "./components/SectionCard";

export default function SalesExecutive() {
  return (
    <div className="sales-page">

      <div className="sales-header">
        Sales Executive Performance
      </div>

      <div className="sales-summary">
        <div className="sales-card">
          <div className="sales-card-label">Total Leads</div>
          <div className="sales-card-value">420</div>
        </div>

        <div className="sales-card">
          <div className="sales-card-label">Conversions</div>
          <div className="sales-card-value">148</div>
        </div>

        <div className="sales-card">
          <div className="sales-card-label">Conversion Rate</div>
          <div className="sales-card-value">35%</div>
        </div>
      </div>

      <table className="sales-table table-hover">
        <thead>
          <tr>
            <th>Executive</th>
            <th>Leads</th>
            <th>Conversions</th>
            <th>Rate</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>120</td>
            <td>42</td>
            <td className="sales-good">35%</td>
            <td>₹3,10,000</td>
          </tr>
          <tr>
            <td>Anita</td>
            <td>95</td>
            <td>22</td>
            <td className="sales-average">23%</td>
            <td>₹1,60,000</td>
          </tr>
          <tr>
            <td>Vikram</td>
            <td>80</td>
            <td>14</td>
            <td className="sales-poor">18%</td>
            <td>₹1,05,000</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

