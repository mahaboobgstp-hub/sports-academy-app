import { useState } from "react";
import BookingFilters from "./components/BookingFilters";
import BookingTable from "./components/BookingTable";
import BookingActionsDrawer from "./components/BookingActionsDrawer";
import "./ManageBookings.css";

export default function ManageBookings() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  return (
    <div className="manage-bookings">
  <h1>Manage Bookings</h1>

  <div className="booking-filters">...</div>

  <div className="booking-table-wrapper">
    <table className="booking-table">...</table>
  </div>
</div>

    
  );
}
