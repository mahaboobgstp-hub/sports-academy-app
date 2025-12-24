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

    {/* Layout wrapper ONCE */}
    <Route element={<AppLayout />}>

      <Route path="/" element={<Dashboard />} />

      <Route path="/seasons/create" element={<AcademicEventForm />} />
      <Route path="/seasons/edit" element={<AcademicEventForm />} />
      <Route path="/create" element={<AcademicEventForm />} />

      <Route path="/book" element={<BookingWizard />} />
      <Route path="/book1" element={<BookingPage />} />

      <Route path="/programs" element={<Placeholder title="Programs" />} />
      <Route path="/locations" element={<Placeholder title="Locations" />} />
      <Route path="/products" element={<Placeholder title="Products" />} />
      <Route path="/analytics" element={<Placeholder title="Analytics" />} />

    </Route>

  </Routes>
</BrowserRouter>
