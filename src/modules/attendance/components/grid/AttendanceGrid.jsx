import EmployeeRow from "./EmployeeRow";

export default function AttendanceGrid({ employees, days, markAttendance }) {
  return (
    <table className="attendance-grid">
      <thead>
        <tr>
          <th>Employee</th>
          {days.map((d) => (
            <th key={d}>{d}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <EmployeeRow
            key={emp.id}
            employee={emp}
            days={days}
            markAttendance={markAttendance}
          />
        ))}
      </tbody>
    </table>
  );
}
