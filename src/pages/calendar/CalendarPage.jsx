import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarFilters from "./CalendarFilters";
import CalendarWeekView from "./CalendarWeekView";
import "./calendar.css";

export default function CalendarPage() {
  // 🔒 REQUIRED STATE (DO NOT COMMENT)
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("week");

  // 🔧 Helpers
  const iso = (d) => d.toISOString().split("T")[0];

  // 🔧 Get Monday of visible week
  const monday = new Date(currentDate);
  const day = monday.getDay(); // 0 = Sun
  const diff = monday.getDate() - day + (day === 0 ? -6 : 1);
  monday.setDate(diff);
  monday.setHours(0, 0, 0, 0);

  // ✅ RELATIVE MOCK DATA (MOVES WITH WEEK)
  const sessions = [
    {
      id: 1,
      date: iso(monday), // Monday
      startTime: "06:00",
      endTime: "08:00",
      program: "Basketball Fundamentals",
      batch: "U-10",
      coach: "Arjun",
      color: "#2563eb"
    },
    {
      id: 2,
      date: iso(new Date(monday.getTime() + 1 * 86400000)), // Tuesday
      startTime: "08:30",
      endTime: "10:30",
      program: "Basketball Intermediate",
      batch: "U-14",
      coach: "Arjun",
      color: "#2563eb"
    },
    {
      id: 3,
      date: iso(new Date(monday.getTime() + 2 * 86400000)), // Wednesday
      startTime: "16:00",
      endTime: "18:00",
      program: "Basketball Advanced",
      batch: "U-18",
      coach: "Arjun",
      color: "#2563eb"
    }
  ];
console.log("CALENDAR SESSIONS:", sessions);

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
          sessions={sessions}
        />
      )}
    </div>
  );
}
