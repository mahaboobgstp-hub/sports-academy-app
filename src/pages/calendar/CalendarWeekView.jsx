import CalendarEvent from "./CalendarEvent";

const START_HOUR = 6;
const END_HOUR = 22;

export default function CalendarWeekView({ currentDate, sessions }) {
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);

  const days = [...Array(7)].map((_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  const hours = [];
  for (let i = START_HOUR; i <= END_HOUR; i++) {
    hours.push(i);
  }

  return (
    
    
   <div className="calendar-week">
  <div className="calendar-grid">
    <div className="time-column">
      {hours.map(h => (
        <div key={h} className="time-slot">
          {String(h).padStart(2, "0")}:00
        </div>
      ))}
    </div>

    {days.map(day => (
      <div key={day} className="day-column">
        <div className="day-header">{day}</div>
        <div className="day-body">
          {sessionsForDay.map(session => (
            <CalendarEvent key={session.id} session={session} />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

