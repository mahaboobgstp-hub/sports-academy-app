import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Sports Academy ERP</h3>

      <div className="section">
        <div className="section-title">Dashboard</div>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="section">
        <div className="section-title">Scheduling</div>
        <Link to="/planner">Program Planner</Link>
        <Link to="/calendar">Calendar View</Link>
        <Link to="/paused">Paused / Cancelled</Link>
      </div>
      
      <div className="section">
        <div className="section-title">Master Data (Academy)</div>
        <Link to="/master/sports">Sports</Link>
        <Link to="master/seasons">Seasons</Link>
        <Link to="master/programs">Programs</Link>
        <Link to="master/locations">Locations</Link>
        <Link to="master/products">Products</Link>
      </div>

      
      <div className="section">
        <div className="section-title">Bookings</div>
        <Link to="/bookings">New Booking</Link>
        <Link to="/manage-bookings">Manage Bookings</Link>
      </div>

      <div className="section">
        <div className="section-title">Sales</div>
        <Link to="/payments">Payments</Link>
        <Link to="/product-sales">Product Sales</Link>
        <Link to="/invoices">Invoices</Link>
      </div>

      <div className="section">
        <div className="section-title">Analytics</div>
        <Link to="/analytics">Overview</Link>
        <Link to="/utilization">Utilization</Link>
        <Link to="/program-performance">Program Performance</Link>
        <Link to="/location-performance">Location Performance</Link>
        <Link to="/sales-executive">Sales Executive</Link>
      </div>

      <div className="section">
        <div className="section-title">Administration</div>
        <Link to="/users">Users & Roles</Link>
        <Link to="/pricing">Pricing Rules</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}

