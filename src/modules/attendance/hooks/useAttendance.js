import { useState } from "react";
import { toggleStatus } from "../components/actions/AttendanceActions";
import { calculateSummary } from "../services/attendance.engine.client";

export default function useAttendance() {
  const [month, setMonth] = useState("2026-01");
  const [bulkMode, setBulkMode] = useState(false);
const [filters, setFilters] = useState({
  orgUnit: "All",
  department: "All",
  group: "All",
  role: "All"
});

  const [employees, setEmployees] = useState([
    { id: 1, name: "Employee 1", attendance: {} },
    { id: 2, name: "Employee 2", attendance: {} },
  ]);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const markAttendance = (empId, day) => {
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === empId
          ? {
              ...e,
              attendance: {
                ...e.attendance,
                [day]: toggleStatus(e.attendance[day]),
              },
            }
          : e
      )
    );
  };

  return {
     filters,
    setFilters,
    month,
    setMonth,
    bulkMode,
    setBulkMode,
    employees,
    days,
    markAttendance,
    summary: calculateSummary(employees),
    attendanceData: employees,
  };
}
