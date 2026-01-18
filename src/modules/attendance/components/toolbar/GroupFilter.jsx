const GROUPS = ["All", "Group A", "Group B", "Shift 1", "Shift 2"];

export default function GroupFilter({ filters, setFilters }) {
  return (
    <div className="toolbar-field">
      <label>Group</label>
      <select
        value={filters.group}
        onChange={(e) =>
          setFilters({ ...filters, group: e.target.value })
        }
      >
        {GROUPS.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}
