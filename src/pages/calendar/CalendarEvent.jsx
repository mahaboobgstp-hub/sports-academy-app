// src/modules/calendar/CalendarEvent.jsx

const HOUR_HEIGHT = 60; // must match grid row height

export default function CalendarEvent({ event }) {
  // Example event.startTime = "06:30"
  const [startHour, startMinute] = event.startTime.split(':').map(Number);
  const [endHour, endMinute] = event.endTime.split(':').map(Number);

  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  const top = (startMinutes / 60) * HOUR_HEIGHT;
  const height = ((endMinutes - startMinutes) / 60) * HOUR_HEIGHT;

  return (
    <div
      className="calendar-event"
      style={{
        top: `${top}px`,
        height: `${height}px`
      }}
    >
      <div className="event-title">{event.title}</div>
      <div className="event-meta">
        {event.ageGroup} <br />
        {event.coach}
      </div>
      <div className="event-time">
        {event.startTime} – {event.endTime}
      </div>
    </div>
  );
}
