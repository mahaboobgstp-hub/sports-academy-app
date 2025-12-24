import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

/* ===== SEASONS ===== */
import AcademicEventForm from "./AcademicEventForm";

/* ===== BOOKINGS ===== */
import BookingPage from "./BookingPage";
import BookingWizard from "./bookings/BookingWizard";

/* ===== CORE ===== */
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        {/* SEASONS */}
        <Route
          path="/seasons/create"
          element={
            <AppLayout>
              <AcademicEventForm />
            </AppLayout>
          }
        />

        <Route
          path="/seasons/edit"
          element={
            <AppLayout>
              <AcademicEventForm />
            </AppLayout>
          }
        />

        {/* LEGACY */}
        <Route
          path="/create"
          element={
            <AppLayout>
              <AcademicEventForm />
            </AppLayout>
          }
        />

        {/* BOOKINGS */}
        <Route
          path="/book"
          element={
            <AppLayout>
              <BookingWizard />
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

        {/* FUTURE */}
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
