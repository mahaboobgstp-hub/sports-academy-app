import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Sports from "./pages/master/Sports";


/* ===== SEASONS ===== */
import AcademicEventForm from "./AcademicEventForm";

/* ===== BOOKINGS ===== */
import BookingPage from "./BookingPage";
import BookingWizard from "./bookings/BookingWizard";

/* ===== CORE ===== */
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";

/* ===== PROGRAMPLANNER ===== */
import ProgramPlanner from "./pages/planner/ProgramPlanner";


import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layoutoutes wrapped by layout ONCE */}
        <Route element={<AppLayout />}>

          <Route path="/" element={<Dashboard />} />
          <Route path="/planner" element={<ProgramPlanner />} />
          <Route path="/master/sports" element={<Sports />} />
  

          {/* SEASONS */}
          <Route path="/seasons/create" element={<AcademicEventForm />} />
          <Route path="/seasons/edit" element={<AcademicEventForm />} />
          <Route path="/create" element={<AcademicEventForm />} />

          {/* BOOKINGS */}
          <Route path="/book" element={<BookingWizard />} />
          <Route path="/book1" element={<BookingPage />} />

          {/* FUTURE ERP SCREENS */}
          <Route path="/programs" element={<Placeholder title="Programs" />} />
          <Route path="/locations" element={<Placeholder title="Locations" />} />
          <Route path="/products" element={<Placeholder title="Products" />} />
          <Route path="/analytics" element={<Placeholder title="Analytics" />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
