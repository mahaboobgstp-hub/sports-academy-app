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
        {/* ===== TIME COLUMN ===== */}
        <div className="time-column">
  {/* Header spacer – MUST match day-header */}
  <div className="time-header"></div>

  {/* Time body – MUST match day-body */}
  <div className="time-body">
    {hours.map((hour) => (
      <div key={hour} className="time-slot">
        {String(hour).padStart(2, "0")}:00
      </div>
    ))}
  </div>
</div>


        {/* ===== DAY COLUMNS ===== */}
        {days.map((day) => {
          const dayISO = toISODate(day);
          const daySessions = sessions.filter(
            (s) => s.date === dayISO
          );

          return (
            <div key={dayISO} className="day-column">
              <div className="day-header">
                {formatDayHeader(day)}
              </div>

              <div className="day-body">
                {daySessions.map((session) => (
                  <CalendarEvent
                    key={session.id}
                    session={session}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
