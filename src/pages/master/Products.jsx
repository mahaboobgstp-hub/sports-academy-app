export default function Products() {
  return (
    <div>
      <h3>Products</h3>

      {/* Add Product */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input placeholder="Product Name" />
        <input placeholder="Code / SKU" />
        <input type="number" placeholder="Price" />

        <select>
          <option>Mandatory</option>
          <option>Optional</option>
        </select>

        <select>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button>Add</button>
      </div>

      {/* Products Table */}
      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Price</th>
            <th>Mandatory</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" align="center">No products yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
