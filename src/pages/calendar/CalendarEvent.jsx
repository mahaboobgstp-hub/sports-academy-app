const sportColors = {
  Basketball: "#2563eb",
  Football: "#16a34a",
  Cricket: "#dc2626"
};

export default function CalendarEvent({ session }) {
  const toMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const DAY_START = 6 * 60; // 06:00
  const startMinutes = toMinutes(session.startTime) - DAY_START;
  const endMinutes = toMinutes(session.endTime) - DAY_START;

  const top = startMinutes;
  const height = endMinutes - startMinutes;

  return (
    <div
      className="calendar-event"
      style={{
        top,
        height,
        background: session.color
      }}
    >
      <strong>{session.program}</strong>
      <div>{session.batch}</div>
      <div>{session.coach}</div>
      <div className="event-time">
        {session.startTime} – {session.endTime}
      </div>
    </div>
  );
}
