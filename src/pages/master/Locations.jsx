export default function Locations() {
  return (
    <div>
      <h3>Locations</h3>

      {/* Add Location */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 12
        }}
      >
        {/* Core */}
        <input placeholder="Location Name" />
        <input placeholder="Location Code" />
        <input placeholder="City" />

        <select>
          <option>Status: Active</option>
          <option>Status: Inactive</option>
        </select>

        {/* Address */}
        <input
          placeholder="Full Address"
          style={{ gridColumn: "span 4" }}
        />

        <input placeholder="Timezone (e.g. IST)" />
        <input type="number" placeholder="Max Capacity" />

        {/* Contact Person */}
        <input placeholder="Contact Person Name" />
        <input placeholder="Contact Role" />
        <input placeholder="Contact Phone" />
        <input placeholder="Contact Email" />

        {/* Contractor */}
        <input placeholder="Vendor Name" />
        <input placeholder="Vendor Company" />
        <input placeholder="Vendor Phone" />

        <select>
          <option>Contract Type</option>
          <option>Owned</option>
          <option>Leased</option>
          <option>Managed</option>
        </select>

        {/* Notes */}
        <input
          placeholder="Notes"
          style={{ gridColumn: "span 3" }}
        />

        <button style={{ gridColumn: "span 1" }}>
          Add
        </button>
      </div>

      {/* Locations Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>City</th>
            <th>Contact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" align="center">
              No locations yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
