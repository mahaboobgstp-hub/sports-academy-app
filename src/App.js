import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Sports from "./pages/master/Sports";
import Seasons from "./pages/master/Seasons";
import Programs from "./pages/master/Programs";
import Locations from "./pages/master/Locations";
import Products from "./pages/master/Products";
import StudentPage from "./pages/students/StudentPage";
import StudentProfile from "./pages/students/profile/StudentProfile";
import CoachDashboard from "./pages/coach/CoachDashboard";
import CoachStudentList from "./pages/coach/CoachStudentList";
import CoachAttendance from "./pages/coach/CoachAttendance";
import CoachSkillEdit from "./pages/coach/CoachSkillEdit";
import CoachDrillUpdate from "./pages/coach/CoachDrillUpdate";
import CoachQuestionReply from "./pages/coach/CoachQuestionReply";
import Sidebar from "./components/sidebar/Sidebar";
import CalendarPage from "../pages/calendar/CalendarPage";






/* ===== SEASONS ===== */
import AcademicEventForm from "./AcademicEventForm";

/* ===== BOOKINGS ===== */

import BookingPage from "./bookings/BookingPage";



/* ===== CORE ===== */
//import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";

/* ===== PROGRAMPLANNER ===== */
import ProgramPlanner from "./pages/planner/ProgramPlanner";

/* ===== DASHBOARD ===== */
import Dashboard from "./dashboard/Dashboard";


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
          <Route path="/students" element={<StudentPage />} /> 
          
          {/* SEASONS */}
          <Route path="/seasons/create" element={<AcademicEventForm />} />
          <Route path="/seasons/edit" element={<AcademicEventForm />} />
          <Route path="/create" element={<AcademicEventForm />} />

          {/* BOOKINGS */}
          
         <Route path="/bookings" element={<BookingPage />} />

             {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* FUTURE ERP SCREENS */}
          <Route path="/programs" element={<Placeholder title="Programs" />} />
          <Route path="/locations" element={<Placeholder title="Locations" />} />
          <Route path="/products" element={<Placeholder title="Products" />} />
          <Route path="/analytics" element={<Placeholder title="Analytics" />} />
      
          {/* STUDENT DETAILS */}

          <Route path="/students" element={<StudentPage />} />
          <Route path="/students/:studentId" element={<StudentProfile />} /> 

            {/* COACH */}
          <Route path="/coach" element={<CoachDashboard />} />
          <Route path="/coach/students" element={<CoachStudentList />} />
          <Route path="/coach/attendance" element={<CoachAttendance />} />
          <Route path="/coach/skills" element={<CoachSkillEdit />} />
          <Route path="/coach/drills" element={<CoachDrillUpdate />} />
          <Route path="/coach/questions" element={<CoachQuestionReply />} />

             {/* CALENDAR */}
          <Route path="/calendar" component={CalendarPage} />
  
  

            
            

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
