export default function Seasons() {
  return (
    <div>
      <h3>Seasons</h3>

      {/* Add Season */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input placeholder="Season Name" />
        <input placeholder="Code" />
        <input type="date" />
        <input type="date" />
        <select>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button>Add</button>
      </div>

      {/* Seasons Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" align="center">No seasons yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
