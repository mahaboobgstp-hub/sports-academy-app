import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("PROGRAM_FEE");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setProducts(data || []);
  }

  async function saveProduct() {
    if (!name || !code || !price) {
      alert("Name, Code and Price are required");
      return;
    }

    const { error } = await supabase.from("products").insert([
      {
        name,
        code,
        price,
        product_type: productType
      }
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    setName("");
    setCode("");
    setPrice("");
    setProductType("PROGRAM_FEE");

    loadProducts();
  }

  return (
    <div>
      <h3>Products</h3>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Code"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <select
          value={productType}
          onChange={e => setProductType(e.target.value)}
        >
          <option value="PROGRAM_FEE">Program Fee</option>
          <option value="ADDON">Add-on</option>
          <option value="MATERIAL">Material</option>
        </select>

        <button onClick={saveProduct}>Add</button>
      </div>

      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.code}</td>
              <td>{p.product_type}</td>
              <td>{p.price}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
