import AttendanceToolbar from "../components/toolbar/AttendanceToolbar";
import AttendanceSummary from "../components/summary/AttendanceSummary";
import useAttendance from "../hooks/useAttendance";

export default function AttendancePage() {
  const attendance = useAttendance();

  return (
    <>
      <AttendanceToolbar
        period={attendance.period}
        setPeriod={attendance.setPeriod}
        filters={attendance.filters}
        setFilters={attendance.setFilters}
        bulkMode={attendance.bulkMode}
        setBulkMode={attendance.setBulkMode}
        attendanceData={attendance.attendanceData}
      />

      <AttendanceSummary summary={attendance.summary} />
    </>
  );
}
