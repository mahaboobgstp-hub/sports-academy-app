export default function Products() {
  return (
    <div>
      <h3>Products</h3>

      {/* Add Product */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
          marginBottom: 12
        }}
      >
        {/* Core */}
        <input placeholder="Product Name" />
        <input placeholder="Product Code / SKU" />

        <select>
          <option>Product Type</option>
          <option>Program Fee</option>
          <option>Add-on</option>
          <option>Material</option>
        </select>

        <select>
          <option>Status: Active</option>
          <option>Status: Inactive</option>
        </select>

        <input type="number" placeholder="Price" />

        {/* Billing */}
        <select>
          <option>Recurring?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select>
          <option>Billing Frequency</option>
          <option>One-time</option>
          <option>Monthly</option>
          <option>Quarterly</option>
        </select>

        <input placeholder="Validity (days/months)" />

        {/* Tax */}
        <select>
          <option>Tax Category</option>
          <option>GST 0%</option>
          <option>GST 5%</option>
          <option>GST 12%</option>
          <option>GST 18%</option>
        </select>

        <select>
          <option>Tax Inclusive?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Program Linking */}
        <select>
          <option>Linked Program (optional)</option>
        </select>

        <select>
          <option>Mandatory for Program?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Finance */}
        <select>
          <option>Refundable?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        {/* Notes */}
        <input
          placeholder="Description / Notes"
          style={{ gridColumn: "span 3" }}
        />

        <button style={{ gridColumn: "span 1" }}>
          Add
        </button>
      </div>

      {/* Products Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Type</th>
            <th>Price</th>
            <th>Recurring</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" align="center">
              No products yet
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
