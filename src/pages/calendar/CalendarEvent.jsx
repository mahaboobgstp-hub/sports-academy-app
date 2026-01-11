/**
 * CalendarEvent
 * -------------
 * Renders a single scheduled session inside the calendar grid.
 * This component is intentionally defensive to avoid calendar crashes
 * due to malformed or missing data.
 */

export default function CalendarEvent({ session }) {
  // ===============================
  // SAFETY CHECK (MANDATORY)
  // ===============================
  if (
    !session ||
    !session.startTime ||
    !session.endTime ||
    !session.program
  ) {
    return null;
  }

  // ===============================
  // TIME HELPERS
  // ===============================
  const toMinutes = (time) => {
    const parts = time.split(":");
    if (parts.length !== 2) return 0;
    const [h, m] = parts.map(Number);
    return h * 60 + m;
  };

  const DAY_START_MINUTES = 6 * 60; // 06:00 baseline

  const startMinutes = toMinutes(session.startTime) - DAY_START_MINUTES;
  const endMinutes = toMinutes(session.endTime) - DAY_START_MINUTES;
  const height = Math.max(endMinutes - startMinutes, 20); // min height safety

  // ===============================
  // STYLE VALUES
  // ===============================
  const accentColor = session.color || "#2563eb";

  // ===============================
  // RENDER
  // ===============================
  return (
    <div
      className="calendar-event"
      style={{
        top: startMinutes,
        height: height,
        borderLeft: `4px solid ${accentColor}`
      }}
    >
      <div className="event-title">
        {session.program}
      </div>

      {session.batch && (
        <div className="event-sub">
          {session.batch}
        </div>
      )}

      {session.coach && (
        <div className="event-sub">
          {session.coach}
        </div>
      )}

      <div className="event-time">
        {session.startTime} – {session.endTime}
      </div>
    </div>
  );
}
