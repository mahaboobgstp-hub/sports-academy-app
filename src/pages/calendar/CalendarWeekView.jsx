import { Fragment } from "react";
import CalendarEvent from "./CalendarEvent";

/**
 * Calendar configuration
 */
const START_HOUR = 6;   // 06:00
const END_HOUR = 22;    // 22:00
const TOTAL_HOURS = END_HOUR - START_HOUR;

export default function CalendarWeekView({ currentDate, sessions }) {
  /**
   * Get Monday of the current week
   */
  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay(); // 0 (Sun) - 6 (Sat)
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const startOfWeek = getStartOfWeek(currentDate);

  /**
   * Generate 7 days (Mon → Sun)
   */
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  /**
   * Generate hour labels
   */
  const hours = Array.from(
    { length: TOTAL_HOURS },
    (_, i) => START_HOUR + i
  );

  /**
   * Format helpers
   */
  const formatDayHeader = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

  const toISODate = (date) => date.toISOString().split("T")[0];

  return (
   <div className="calendar-week">
  <div className="calendar-grid">

    {/* Top-left empty cell */}
    <div></div>

    {/* Day headers */}
    {days.map((day) => (
      <div key={day.toISOString()} className="day-header">
        {formatDayHeader(day)}
      </div>
    ))}

    {/* Time rows + day cells */}
    {hours.map((hour) => (
      <Fragment key={hour}>
        {/* Time column */}
        <div className="time-slot">
          {String(hour).padStart(2, "0")}:00
        </div>

        {/* Day cells */}
        {days.map((day) => {
          const dayISO = toISODate(day);
          const daySessions = sessions.filter(
            (s) => s.date === dayISO && s.startHour === hour
          );

          return (
            <div key={`${dayISO}-${hour}`} className="day-cell">
              {daySessions.map((session) => (
                <CalendarEvent
                  key={session.id}
                  sessions={sessions}
                />
              ))}
            </div>
          );
        })}
      </Fragment>
    ))}

  </div>
</div>

  );
}
