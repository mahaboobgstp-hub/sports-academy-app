import { useState } from "react";
import BookingFilters from "./components/BookingFilters";
import BookingTable from "./components/BookingTable";
import BookingActionsDrawer from "./components/BookingActionsDrawer";
import "./ManageBookings.css";

export default function ManageBookings() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Manage Bookings</h1>

      <BookingFilters />

      <BookingTable onManage={setSelectedBooking} />

      {selectedBooking && (
        <BookingActionsDrawer
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  );
}
