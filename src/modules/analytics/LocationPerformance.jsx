import SectionCard from "./components/SectionCard";

export default function LocationPerformance() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Location Performance</h1>

      <SectionCard title="Location Profitability">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Revenue</th>
              <th className="p-2 border">Expenses</th>
              <th className="p-2 border">Profit</th>
              <th className="p-2 border">Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Center A</td>
              <td className="p-2 border">₹6,00,000</td>
              <td className="p-2 border">₹4,00,000</td>
              <td className="p-2 border">₹2,00,000</td>
              <td className="p-2 border">33%</td>
            </tr>
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}
