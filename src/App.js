import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

/* ===== SEASONS ===== */
import SeasonForm from "./pages/seasons/SeasonForm";
import AcademicEventForm from "./AcademicEventForm";

/* ===== BOOKINGS ===== */
import BookingPage from "./BookingPage";
import BookingForm from "./bookings/BookingForm";

/* ===== CORE ===== */
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

        {/* =====================================================
            SEASONS (ERP CORRECT ROUTES)
        ===================================================== */}

        {/* CREATE SEASON */}
        <Route
          path="/seasons/create"
          element={
            <AppLayout>
              <SeasonForm />
            </AppLayout>
          }
        />

        {/* EDIT SEASON */}
        <Route
          path="/seasons/edit"
          element={
            <AppLayout>
              <SeasonForm />
            </AppLayout>
          }
        />

        {/* =====================================================
            LEGACY (KEEP TEMPORARILY – DO NOT DELETE)
            This ensures nothing breaks while migrating
        ===================================================== */}
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

        {/* ===== FUTURE ERP SCREENS ===== */}
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
