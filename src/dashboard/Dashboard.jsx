import { useState } from "react";
import "./Dashboard.css";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

/* ---------------- DUMMY DATA ---------------- */

// CEO – Revenue Trend
const revenueData = [
  { month: "Jan", revenue: 420000 },
  { month: "Feb", revenue: 510000 },
  { month: "Mar", revenue: 640000 },
  { month: "Apr", revenue: 720000 },
  { month: "May", revenue: 810000 },
];

// Program Performance
const programPerformance = [
  { name: "Beginner", revenue: 280000 },
  { name: "Intermediate", revenue: 350000 },
  { name: "Advanced", revenue: 210000 },
];

// Location Performance
const locationPerformance = [
  { name: "Main Campus", students: 320 },
  { name: "City School", students: 210 },
  { name: "North Branch", students: 150 },
];

// Sales Executive Performance
const salesPerformance = [
  { name: "Rahul", bookings: 48 },
  { name: "Anita", bookings: 62 },
  { name: "Vikram", bookings: 39 },
];

// Academy Performance (Occupancy)
const academyOccupancy = [
  { name: "Occupied", value: 72 },
  { name: "Available", value: 28 },
];

const PIE_COLORS = ["#2563eb", "#e5e7eb"];

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {
 const [season, setSeason] = useState("2025-26");
  const [month, setMonth] = useState("May");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  return (
    <div className="ceo-dashboard">
 <div className="ceo-title">CEO Overview</div>
  {/* FILTER BAR */}
  <div className="dashboard-filter-row">

    <div className="dashboard-filter-item">
      <label className="filter-label">Season</label>
      <select className="filter-input">
        <option>2025-26</option>
        <option>2024-25</option>
      </select>
    </div>

    <div className="dashboard-filter-item">
      <label className="filter-label">Month</label>
      <select className="filter-input">
        <option>May</option>
        <option>April</option>
      </select>
    </div>

    <div className="dashboard-filter-item">
      <label className="filter-label">From Date</label>
      <input type="date" className="filter-input" />
    </div>

    <div className="dashboard-filter-item">
      <label className="filter-label">To Date</label>
      <input type="date" className="filter-input" />
    </div>

  </div>
   

      {/* ===== KPI GRID (12 METRICS) ===== */}
      <div className="ceo-metrics-grid">

        {/* ROW 1 */}
        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Revenue MTD</div>
          <div className="ceo-metric-value">₹8.1L</div>
          <div className="ceo-metric-sub metric-positive">▲ 9%</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Revenue YTD</div>
          <div className="ceo-metric-value">₹62.4L</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Active Students</div>
          <div className="ceo-metric-value">680</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">New Enrollments</div>
          <div className="ceo-metric-value">94</div>
        </div>

        {/* ROW 2 */}
        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Occupancy</div>
          <div className="ceo-metric-value">72%</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Idle Capacity</div>
          <div className="ceo-metric-value">28%</div>
          <div className="ceo-metric-sub metric-negative">Needs action</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Avg Revenue / Student</div>
          <div className="ceo-metric-value">₹9,180</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Churn Rate</div>
          <div className="ceo-metric-value">4.2%</div>
        </div>

        {/* ROW 3 */}
        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Top Program Margin</div>
          <div className="ceo-metric-value">38%</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Lowest Program Margin</div>
          <div className="ceo-metric-value">6%</div>
          <div className="ceo-metric-sub metric-negative">Review</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Coach Cost %</div>
          <div className="ceo-metric-value">41%</div>
        </div>

        <div className="ceo-metric-card">
          <div className="ceo-metric-label">Outstanding Dues</div>
          <div className="ceo-metric-value">₹1.2L</div>
        </div>

      </div>
 <div className="comparison-row">

        <div className="comparison-card">
          <div className="comparison-title">Top Location (Revenue)</div>
          <div className="comparison-value">Center A</div>
          <div className="comparison-sub comp-positive">₹2.4L this month</div>
        </div>

        <div className="comparison-card">
          <div className="comparison-title">Top Program</div>
          <div className="comparison-value">Basketball</div>
          <div className="comparison-sub comp-positive">38% margin</div>
        </div>

        <div className="comparison-card">
          <div className="comparison-title">Best Sales Executive</div>
          <div className="comparison-value">Rahul</div>
          <div className="comparison-sub comp-positive">₹3.1L revenue</div>
        </div>

        <div className="comparison-card">
          <div className="comparison-title">Today vs Last Year</div>
          <div className="comparison-value">₹42,000</div>
          <div className="comparison-sub comp-positive">▲ 11%</div>
        </div>

        <div className="comparison-card">
          <div className="comparison-title">Month vs LY Same Month</div>
          <div className="comparison-value">₹8.1L</div>
          <div className="comparison-sub comp-neutral">▲ 6%</div>
        </div>

      </div>

      
      {/* ===== COMPACT CHARTS ===== */}
      <div className="ceo-charts">

        <div className="ceo-chart-card">
          <div className="ceo-chart-title">Revenue Trend</div>
          {/* existing chart component */}
        </div>

        <div className="ceo-chart-card">
          <div className="ceo-chart-title">Program Performance</div>
          {/* existing chart component */}
        </div>

      </div>

    </div>
  );
}
