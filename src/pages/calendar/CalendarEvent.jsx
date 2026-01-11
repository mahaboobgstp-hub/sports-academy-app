export default function CalendarEvent({ session }) {
  const toMinutes = (t) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const DAY_START = 6 * 60;
  const top = toMinutes(session.startTime) - DAY_START;
  const height = toMinutes(session.endTime) - toMinutes(session.startTime);

  return (
    <div
      className="calendar-event"
      style={{
        top,
        height,
        borderLeft: `4px solid ${session.color}`
      }}
    >
      <div className="event-title">{session.program}</div>
      <div className="event-sub">{session.batch}</div>
      <div className="event-sub">{session.coach}</div>
      <div className="event-time">
        {session.startTime} – {session.endTime}
      </div>
    </div>
  );
}
