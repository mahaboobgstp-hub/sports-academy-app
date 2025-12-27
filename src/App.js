import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Sports from "./pages/master/Sports";
import Seasons from "./pages/master/Seasons";
import Programs from "./pages/master/Programs";
import Locations from "./pages/master/Locations";
import Products from "./pages/master/Products";



/* ===== SEASONS ===== */
import AcademicEventForm from "./AcademicEventForm";

/* ===== BOOKINGS ===== */

import BookingPage from "./bookings/BookingPage";


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
          <Route path="/master/sports" element={<Sports />} />
          <Route path="/planner" element={<ProgramPlanner />} />
          <Route path="/master/seasons" element={<Seasons />} />
          <Route path="/master/programs" element={<Programs />} />
          <Route path="/master/locations" element={<Locations />} /> 
          <Route path="/master/products" element={<Products />} />

          {/* SEASONS */}
          <Route path="/seasons/create" element={<AcademicEventForm />} />
          <Route path="/seasons/edit" element={<AcademicEventForm />} />
          <Route path="/create" element={<AcademicEventForm />} />

          {/* BOOKINGS */}
          
          <Route path="/bookings" element={<BookingPage />} />


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
