import CalendarEvent from './CalendarEvent';

export default function DayColumn({ events }) {
  return (
    <div className="day-column">
      {/* Hour grid */}
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="hour-cell" />
      ))}

      {/* Events */}
      {events.map(event => (
        <CalendarEvent key={event.id} event={event} />
      ))}
    </div>
  );
}
