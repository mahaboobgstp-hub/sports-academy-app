import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcademicEventForm from "./AcademicEventForm";
import BookingPage from "./BookingPage";
import BookingWizard from "./bookings/BookingWizard";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AcademicEventForm />} />
        <Route path="/create" element={<AcademicEventForm />} />
        <Route path="/book1" element={<BookingPage />} />
        <Route path="/book" element={<BookingWizard />} />
   
      </Routes>
    </BrowserRouter>
  );
}
