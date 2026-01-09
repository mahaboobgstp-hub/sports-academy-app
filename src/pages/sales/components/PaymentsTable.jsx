import PaymentActions from "./PaymentActions";

export default function PaymentsTable() {
  const payments = [
    {
      id: "PAY001",
      student: "Arjun Kumar",
      program: "Basketball U-12",
      amount: 12000,
      paid: 8000,
      mode: "UPI",
      date: "10-Jan-2026",
      status: "Partial"
    },
    {
      id: "PAY002",
      student: "Rohan Singh",
      program: "Football Beginner",
      amount: 6000,
      paid: 6000,
      mode: "Cash",
      date: "10-Jan-2026",
      status: "Paid"
    }
  ];

  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Payment ID</th>
            <th className="p-3 text-left">Student</th>
            <th className="p-3 text-left">Program</th>
            <th className="p-3 text-right">Amount</th>
            <th className="p-3 text-right">Paid</th>
            <th className="p-3 text-left">Mode</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.id}</td>
              <td className="p-3">{p.student}</td>
              <td className="p-3">{p.program}</td>
              <td className="p-3 text-right">₹{p.amount}</td>
              <td className="p-3 text-right">₹{p.paid}</td>
              <td className="p-3">{p.mode}</td>
              <td className="p-3">{p.date}</td>
              <td className="p-3 font-medium">{p.status}</td>
              <td className="p-3 text-center">
                <PaymentActions />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
