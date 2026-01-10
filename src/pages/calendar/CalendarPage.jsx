import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarFilters from "./CalendarFilters";
import CalendarWeekView from "./CalendarWeekView";
import "./calendar.css";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("week");

  const sessions = [
    {
      id: "s1",
      date: "2026-01-13",
      startTime: "07:00",
      endTime: "08:30",
      sport: "Basketball",
      batch: "U-12 Beginners",
      coach: "Arjun",
      location: "Court 1",
      status: "scheduled"
    },
    {
      id: "s2",
      date: "2026-01-14",
      startTime: "08:00",
      endTime: "09:00",
      sport: "Football",
      batch: "U-10",
      coach: "Rohit",
      location: "Ground A",
      status: "scheduled"
    }
  ];

  return (
  <div style={{ background: "yellow", padding: "20px" }}>
    <h1>CALENDAR PAGE LOADED</h1>
  
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
          sessions={sessions}
        />
      )}
    </div>
    </div>
  );
}
