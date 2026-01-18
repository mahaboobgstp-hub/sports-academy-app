import PeriodSelector from "./PeriodSelector";
import OrgUnitFilter from "./OrgUnitFilter";
import DepartmentFilter from "./DepartmentFilter";
import GroupFilter from "./GroupFilter";
import RoleFilter from "./RoleFilter";
import BulkMarkToggle from "./BulkMarkToggle";
import ExportButton from "./ExportButton";

export default function AttendanceToolbar({
  period,
  setPeriod,
  filters,
  setFilters,
  bulkMode,
  setBulkMode,
  attendanceData
}) {
  return (
    <div className="attendance-toolbar">
      <div className="toolbar-left">
        <PeriodSelector period={period} setPeriod={setPeriod} />
        <OrgUnitFilter filters={filters} setFilters={setFilters} />
        <DepartmentFilter filters={filters} setFilters={setFilters} />
        <GroupFilter filters={filters} setFilters={setFilters} />
        <RoleFilter filters={filters} setFilters={setFilters} />
      </div>

      <div className="toolbar-right">
        <BulkMarkToggle bulkMode={bulkMode} setBulkMode={setBulkMode} />
        <ExportButton data={attendanceData} />
      </div>
    </div>
  );
}
