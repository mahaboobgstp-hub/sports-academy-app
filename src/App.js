import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcademicEventForm from "./AcademicEventForm";
import BookingPage from "./BookingPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AcademicEventForm />} />
        <Route path="/create" element={<AcademicEventForm />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
