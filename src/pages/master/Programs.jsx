export default function Programs() {
  return (
    <div>
      <h3>Programs</h3>

      {/* Add Program */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 12
        }}
      >
        <input placeholder="Program Name" />
        <input placeholder="Program Code" />

        <select>
          <option>Select Sport</option>
          <option>Basketball</option>
          <option>Football</option>
        </select>

        <select>
          <option>Program Type</option>
          <option>Group</option>
          <option>1-on-1</option>
        </select>

        <input type="number" placeholder="Duration (minutes)" />
        <input type="number" placeholder="Default Seats" />

        <select>
          <option>Skill Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <select>
          <option>Gender</option>
          <option>Mixed</option>
          <option>Boys</option>
          <option>Girls</option>
        </select>

        <input type="number" placeholder="Age Min" />
        <input type="number" placeholder="Age Max" />

        <input type="number" placeholder="Default Price" />

        <select>
          <option>Status: Active</option>
          <option>Status: Inactive</option>
        </select>

        <input
          placeholder="Description"
          style={{ gridColumn: "span 3" }}
        />

        <button style={{ gridColumn: "span 1" }}>
          Add
        </button>
      </div>

      {/* Programs Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Sport</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Seats</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" align="center">
              No programs yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
