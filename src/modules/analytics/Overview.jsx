import KPICard from "./components/KPICard";
import SectionCard from "./components/SectionCard";
import PlaceholderChart from "./components/PlaceholderChart";


export default function Overview() {
  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div className="analytics-title">Analytics Overview</div>
      </div>

      <div className="analytics-kpis">
        <div className="kpi-card">
          <div className="kpi-label">Total Revenue</div>
          <div className="kpi-value">₹12,40,000</div>
          <div className="kpi-trend">▲ 8%</div>
        </div>
      </div>

      <div className="analytics-section">
        <div className="analytics-section-title">Revenue Trend</div>
        <div className="revenue-trend">

  {/* LEFT SUMMARY */}
  <div className="revenue-summary">
    <div className="revenue-metric">
      <div className="revenue-metric-label">Total Revenue (6 Months)</div>
      <div className="revenue-metric-value">₹48,60,000</div>
    </div>

    <div className="revenue-metric">
      <div className="revenue-metric-label">Monthly Average</div>
      <div className="revenue-metric-value">₹8,10,000</div>
    </div>

    <div className="revenue-metric">
      <div className="revenue-metric-label">Growth</div>
      <div className="revenue-metric-positive">▲ 12.4%</div>
    </div>
  </div>

  {/* RIGHT TABLE */}
  <div>
    <table className="revenue-table">
      <thead>
        <tr>
          <th>Month</th>
          <th>Revenue</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jan 2026</td>
          <td>₹7,40,000</td>
          <td className="util-medium">+4%</td>
        </tr>
        <tr>
          <td>Feb 2026</td>
          <td>₹7,90,000</td>
          <td className="util-medium">+7%</td>
        </tr>
        <tr>
          <td>Mar 2026</td>
          <td>₹8,30,000</td>
          <td className="util-high">+10%</td>
        </tr>
        <tr>
          <td>Apr 2026</td>
          <td>₹8,80,000</td>
          <td className="util-high">+12%</td>
        </tr>
        <tr>
          <td>May 2026</td>
          <td>₹7,60,000</td>
          <td className="util-low">-6%</td>
        </tr>
        <tr>
          <td>Jun 2026</td>
          <td>₹8,60,000</td>
          <td className="util-high">+13%</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

      </div>
    </div>
  );
}

