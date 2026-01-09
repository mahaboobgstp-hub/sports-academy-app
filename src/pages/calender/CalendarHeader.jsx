export default function CalendarHeader({
  currentDate,
  setCurrentDate,
  view,
  setView
}) {
  const changeWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar-header">
      <div>
        <button onClick={() => changeWeek(-1)}>◀</button>
        <button onClick={() => setCurrentDate(new Date())}>Today</button>
        <button onClick={() => changeWeek(1)}>▶</button>
      </div>

      <div className="view-switch">
        <button
          className={view === "day" ? "active" : ""}
          onClick={() => setView("day")}
        >
          Day
        </button>
        <button
          className={view === "week" ? "active" : ""}
          onClick={() => setView("week")}
        >
          Week
        </button>
        <button
          className={view === "month" ? "active" : ""}
          onClick={() => setView("month")}
        >
          Month
        </button>
      </div>
    </div>
  );
}
