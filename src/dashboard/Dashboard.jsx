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
  return (
    <div className="dashboard-page">

      {/* CEO OVERVIEW */}
      <section className="dashboard-section">
        <h2>CEO Overview</h2>

        <div className="kpi-grid">
          <div className="kpi-card">Revenue MTD<br /><strong>₹ 8.1L</strong></div>
          <div className="kpi-card">Active Students<br /><strong>680</strong></div>
          <div className="kpi-card">Occupancy<br /><strong>72%</strong></div>
          <div className="kpi-card">New Enrollments<br /><strong>94</strong></div>
        </div>

        <div className="chart-card">
          <h3>Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* PROGRAM PERFORMANCE */}
      <section className="dashboard-section">
        <h2>Program Performance</h2>

        <div className="chart-card">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={programPerformance}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* LOCATION PERFORMANCE */}
      <section className="dashboard-section">
        <h2>Location Performance</h2>

        <div className="chart-card">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={locationPerformance}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* SALES EXECUTIVES */}
      <section className="dashboard-section">
        <h2>Sales Executives Performance</h2>

        <div className="chart-card">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesPerformance}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#9333ea" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ACADEMY PERFORMANCE */}
      <section className="dashboard-section">
        <h2>Academy Performance</h2>

        <div className="chart-card">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={academyOccupancy}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
              >
                {academyOccupancy.map((entry, index) => (
                  <Cell key={index} fill={PIE_COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

    </div>
  );
}
