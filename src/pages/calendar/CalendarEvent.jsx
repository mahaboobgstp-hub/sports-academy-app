export default function CalendarEvent({ session }) {
  const startHour = parseInt(session.startTime.split(":")[0], 10);
  const endHour = parseInt(session.endTime.split(":")[0], 10);

  const top = (startHour - 6) * 60;
  const height = (endHour - startHour) * 60;

  return (
    <div
      className="calendar-event"
      style={{ top, height }}
    >
      <strong>{session.sport}</strong>
      <div>{session.batch}</div>
      <div>{session.coach}</div>
      <div>{session.location}</div>
      <div>
        {session.startTime} - {session.endTime}
      </div>
    </div>
  );
}
