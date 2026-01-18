export default function RoleFilter({ filters, setFilters }) {
  return (
    <div className="toolbar-field">
      <label>Role</label>
      <select
        value={filters.role}
        onChange={(e) =>
          setFilters({ ...filters, role: e.target.value })
        }
      >
        <option value="All">All</option>
        <option value="Staff">Staff</option>
        <option value="Supervisor">Supervisor</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
}
