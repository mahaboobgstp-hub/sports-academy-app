import AttendanceToolbar from "../components/toolbar/AttendanceToolbar";
import AttendanceGrid from "../components/grid/AttendanceGrid";
import AttendanceSummary from "../components/summary/AttendanceSummary";
import useAttendance from "../hooks/useAttendance";

export default function AttendancePage() {
  const attendance = useAttendance();

  return (
    <div className="attendance-page">
      <AttendanceToolbar {...attendance} />
      <AttendanceGrid {...attendance} />
      <AttendanceSummary {...attendance} />
    </div>
  );
}
