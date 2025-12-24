export default function Seasons() {
  return (
    <div>
      <h3>Seasons</h3>

      {/* Add Season */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 12
        }}
      >
        <input placeholder="Season Name" />
        <input placeholder="Season Code" />

        <input placeholder="Academic Year (e.g. 2025-26)" />

        <select>
          <option>Status: Active</option>
          <option>Status: Closed</option>
        </select>

        <label>
        Season Start Date
        <input type="date" />
        </label>

      <label>
      Season End Date
      <input type="date" />
      </label>


        <label>
          <input type="checkbox" /> Default Season
        </label>

        <label>
          <input type="checkbox" /> Planning Locked
        </label>

        <input
          placeholder="Notes"
          style={{ gridColumn: "span 3" }}
        />

        <button style={{ gridColumn: "span 1" }}>
          Add
        </button>
      </div>

      {/* Seasons Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Academic Year</th>
            <th>Start</th>
            <th>End</th>
            <th>Default</th>
            <th>Locked</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" align="center">
              No seasons yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
