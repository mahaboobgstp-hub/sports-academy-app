import { useState } from "react";
import "./ProductSales.css";

export default function ProductSales() {
  const sales = [
    {
      id: "ORD-101",
      date: "2026-01-09",
      product: "Academy Jersey",
      category: "Apparel",
      qty: 2,
      unitPrice: 1200,
      payment: "UPI",
      status: "Completed"
    },
    {
      id: "ORD-102",
      date: "2026-01-08",
      product: "Training Cone Set",
      category: "Equipment",
      qty: 1,
      unitPrice: 900,
      payment: "Cash",
      status: "Refunded"
    }
  ];

  return (
    <div className="product-sales-page">
      <h2>Product Sales</h2>

      {/* Summary */}
      <div className="summary-cards">
        <div className="card">Total Sales<br /><strong>₹3,300</strong></div>
        <div className="card">Orders<br /><strong>2</strong></div>
        <div className="card">Items Sold<br /><strong>3</strong></div>
        <div className="card">Net Revenue<br /><strong>₹2,400</strong></div>
      </div>

      {/* Filters */}
      <div className="filters">
        <input type="date" />
        <input type="date" />
        <select>
          <option>All Products</option>
        </select>
        <select>
          <option>All Payment Modes</option>
        </select>
        <input type="text" placeholder="Search Order ID" />
      </div>

      {/* Table */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Qty</th>
            <th>Unit ₹</th>
            <th>Total ₹</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(s => (
            <tr key={s.id}>
              <td>{s.date}</td>
              <td>{s.id}</td>
              <td>{s.product}</td>
              <td>{s.category}</td>
              <td>{s.qty}</td>
              <td>{s.unitPrice}</td>
              <td>{s.qty * s.unitPrice}</td>
              <td>{s.payment}</td>
              <td className={s.status === "Refunded" ? "refunded" : "completed"}>
                {s.status}
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
        }
