import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarFilters from "./CalendarFilters";
import CalendarWeekView from "./CalendarWeekView";
import { calendarSessions } from "./mockCalendarData";
import "./calendar.css";

export default function CalendarPage() {
  //const [currentDate, setCurrentDate] = useState(new Date());
  //const [view, setView] = useState("week");

  const iso = (d) => d.toISOString().split("T")[0];

const monday = new Date(currentDate);
monday.setDate(currentDate.getDate() - currentDate.getDay() + 1);

const sessions = [
  {
    id: 1,
    date: iso(monday), // Monday of visible week
    startTime: "06:00",
    endTime: "08:00",
    program: "Basketball Fundamentals",
    batch: "U-10",
    coach: "Arjun",
    color: "#2563eb"
  },
  {
    id: 2,
    date: iso(new Date(monday.getTime() + 86400000)), // Tuesday
    startTime: "08:30",
    endTime: "10:30",
    program: "Basketball Intermediate",
    batch: "U-14",
    coach: "Arjun",
    color: "#2563eb"
  }
];


  
  return (
  
  
    <div className="calendar-page">
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        view={view}
        setView={setView}
      />

      <CalendarFilters />

      {view === "week" && (
        <CalendarWeekView
          currentDate={currentDate}
          sessions={calendarSessions}
        />
      )}
    </div>
   
  );
}
