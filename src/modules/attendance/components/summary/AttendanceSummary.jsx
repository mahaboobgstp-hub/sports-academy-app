export default function AttendanceSummary() {
  const summary = {
    totalEmployees: 10,
    present: 120,
    absent: 5,
    halfDay: 8,
    lateLogin: 6,
    earlyLogout: 4,
    leave: 12,
    paidLeave: 7,
    unpaidLeave: 5,
    medicalLeave: 2,
    maternityLeave: 1,
    wfh: 9,
    holiday: 4,
    weeklyOff: 8
  };

  return (
    <div className="attendance-summary">
      <span>Total Employees: {summary.totalEmployees}</span>
      <span>Present: {summary.present}</span>
      <span>Absent: {summary.absent}</span>
      <span>Half Day: {summary.halfDay}</span>
      <span>Late Login: {summary.lateLogin}</span>
      <span>Early Logout: {summary.earlyLogout}</span>
      <span>Total Leave: {summary.leave}</span>
      <span>Paid Leave: {summary.paidLeave}</span>
      <span>Unpaid Leave: {summary.unpaidLeave}</span>
      <span>Medical Leave: {summary.medicalLeave}</span>
      <span>Maternity Leave: {summary.maternityLeave}</span>
      <span>Work From Home: {summary.wfh}</span>
      <span>Holidays: {summary.holiday}</span>
      <span>Weekly Off: {summary.weeklyOff}</span>
    </div>
  );
}
