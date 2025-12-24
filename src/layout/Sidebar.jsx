import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Sports Academy ERP</h3>

      <div className="section">
        <div className="section-title">Dashboard</div>
        <Link to="/">Dashboard</Link>
      </div>

      <div className="section">
        <div className="section-title">Scheduling</div>
        <Link to="/planner">Program Planner</Link>
        <Link to="/calendar">Calendar View</Link>
        <Link to="/paused">Paused / Cancelled</Link>
      </div>
      
      <div className="section">
        <div className="section-title">Master Data (Academy)</div>
        <Link to="/seasons">Sports</Link>
        <Link to="/seasons">Seasons</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/courts">Courts</Link>
        <Link to="/products">Products</Link>
      </div>

      
      <div className="section">
        <div className="section-title">Bookings</div>
        <Link to="/book">New Booking</Link>
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

