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
      <div className="time-column">
        {hours.map((h) => (
          <div key={h} className="time-slot">
            {h}:00
          </div>
        ))}
      </div>

      {days.map((day) => {
        const dayStr = day.toISOString().split("T")[0];
        const daySessions = sessions.filter(
          (s) => s.date === dayStr
        );

        return (
          <div key={dayStr} className="day-column">
            <div className="day-header">
              {day.toDateString()}
            </div>

            <div className="day-body">
              {daySessions.map((session) => (
                <CalendarEvent key={session.id} session={session} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
     
  );
}
