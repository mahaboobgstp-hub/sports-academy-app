import KPICard from "./components/KPICard";
import SectionCard from "./components/SectionCard";
import PlaceholderChart from "./components/PlaceholderChart";
import "./styles/analytics.css";

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
        <div className="chart-placeholder">Chart Placeholder</div>
      </div>
    </div>
  );
}

