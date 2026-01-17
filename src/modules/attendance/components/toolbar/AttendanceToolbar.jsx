import MonthSelector from "./MonthSelector";
import ExportButton from "./ExportButton";
import BulkMarkToggle from "./BulkMarkToggle";

export default function AttendanceToolbar(props) {
  return (
    <div className="attendance-toolbar">
      <MonthSelector
        month={props.month}
        setMonth={props.setMonth}
      />
      <BulkMarkToggle
        bulkMode={props.bulkMode}
        setBulkMode={props.setBulkMode}
      />
      <ExportButton data={props.attendanceData} />
    </div>
  );
}
