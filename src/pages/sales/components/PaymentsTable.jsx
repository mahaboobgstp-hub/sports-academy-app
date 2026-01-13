import PaymentActions from "./PaymentActions";

export default function PaymentsTable() {
  return (
    <div className="payments-table-wrapper">
      <table className="payments-table">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Student</th>
            <th>Program</th>
            <th>Amount</th>
            <th>Paid</th>
            <th>Mode</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PAY001</td>
            <td>Arjun Kumar</td>
            <td>Basketball U-12</td>
            <td>₹12000</td>
            <td>₹8000</td>
            <td>UPI</td>
            <td>10-Jan-2026</td>
            <td className="status-partial">Partial</td>
            <td><PaymentActions /></td>
          </tr>

          <tr>
            <td>PAY002</td>
            <td>Rohan Singh</td>
            <td>Football Beginner</td>
            <td>₹6000</td>
            <td>₹6000</td>
            <td>Cash</td>
            <td>10-Jan-2026</td>
            <td className="status-paid">Paid</td>
            <td><PaymentActions /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
