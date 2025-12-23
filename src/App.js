import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import AcademicEventForm from "./AcademicEventForm";
import BookingPage from "./BookingPage";
import BookingForm from "./bookings/BookingForm";

import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===== DASHBOARD ===== */}
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        {/* ===== SEASONS (CREATE / EDIT) ===== */}
        <Route
          path="/create"
          element={
            <AppLayout>
              <AcademicEventForm />
            </AppLayout>
          }
        />

        {/* ===== BOOKINGS ===== */}
        <Route
          path="/book"
          element={
            <AppLayout>
              <BookingForm />
            </AppLayout>
          }
        />

        <Route
          path="/book1"
          element={
            <AppLayout>
              <BookingPage />
            </AppLayout>
          }
        />

        {/* ===== FUTURE ERP SCREENS (SAFE PLACEHOLDERS) ===== */}
        <Route
          path="/programs"
          element={<AppLayout><Placeholder title="Programs" /></AppLayout>}
        />
        <Route
          path="/locations"
          element={<AppLayout><Placeholder title="Locations" /></AppLayout>}
        />
        <Route
          path="/products"
          element={<AppLayout><Placeholder title="Products" /></AppLayout>}
        />
        <Route
          path="/analytics"
          element={<AppLayout><Placeholder title="Analytics" /></AppLayout>}
        />

      </Routes>
    </BrowserRouter>
  );
}
