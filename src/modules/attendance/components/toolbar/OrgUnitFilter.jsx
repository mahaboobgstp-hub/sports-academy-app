const ORG_UNITS = ["All", "Head Office", "Branch A", "Branch B"];

export default function OrgUnitFilter({ filters, setFilters }) {
  return (
    <div className="toolbar-field">
      <label>Org Unit</label>
      <select
        value={filters.orgUnit}
        onChange={(e) =>
          setFilters({ ...filters, orgUnit: e.target.value })
        }
      >
        {ORG_UNITS.map((u) => (
          <option key={u} value={u}>{u}</option>
        ))}
      </select>
    </div>
  );
}
