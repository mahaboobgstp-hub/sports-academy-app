import DayCell from "./DayCell";

export default function EmployeeRow({ employee, days, markAttendance }) {
  return (
    <tr>
      <td>{employee.name}</td>
      {days.map((day) => (
        <DayCell
          key={day}
          status={employee.attendance[day]}
          onClick={() => markAttendance(employee.id, day)}
        />
      ))}
    </tr>
  );
}
