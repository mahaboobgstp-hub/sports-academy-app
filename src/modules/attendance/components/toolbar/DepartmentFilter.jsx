const DEPARTMENTS = ["All", "Operations", "Sales", "HR", "Support"];

export default function DepartmentFilter({ filters, setFilters }) {
  return (
    <div className="toolbar-field">
      <label>Department</label>
      <select
        value={filters.department}
        onChange={(e) =>
          setFilters({ ...filters, department: e.target.value })
        }
      >
        {DEPARTMENTS.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
    </div>
  );
}
