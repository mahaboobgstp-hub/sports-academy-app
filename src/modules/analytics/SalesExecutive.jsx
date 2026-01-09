import SectionCard from "./components/SectionCard";

export default function SalesExecutive() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Sales Executive Performance</h1>

      <SectionCard title="Conversion Metrics">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Executive</th>
              <th className="p-2 border">Leads</th>
              <th className="p-2 border">Conversions</th>
              <th className="p-2 border">%</th>
              <th className="p-2 border">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Rahul</td>
              <td className="p-2 border">120</td>
              <td className="p-2 border">42</td>
              <td className="p-2 border">35%</td>
              <td className="p-2 border">₹3,10,000</td>
            </tr>
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}
