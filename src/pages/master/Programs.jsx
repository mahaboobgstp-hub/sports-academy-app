export default function Programs() {
  return (
    <div>
      <h3>Programs</h3>

      {/* Add Program */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input placeholder="Program Name" />
        <input placeholder="Code" />

        <select>
          <option>Select Sport</option>
          <option>Basketball</option>
          <option>Football</option>
        </select>

        <input placeholder="Age Group (e.g. 7-10)" />

        <select>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button>Add</button>
      </div>

      {/* Programs Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Sport</th>
            <th>Age Group</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" align="center">No programs yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
