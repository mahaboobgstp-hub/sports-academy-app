export default function Locations() {
  return (
    <div>
      <h3>Locations</h3>

      {/* Add Location */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input placeholder="Location Name" />
        <input placeholder="Code" />
        <input placeholder="City" />

        <select>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button>Add</button>
      </div>

      {/* Locations Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>City</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" align="center">No locations yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
