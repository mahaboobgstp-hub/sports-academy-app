import SectionCard from "./components/SectionCard";

export default function ProgramPerformance() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Program Performance</h1>

      <SectionCard title="Program ROI">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Program</th>
              <th className="p-2 border">Level</th>
              <th className="p-2 border">Revenue</th>
              <th className="p-2 border">Cost</th>
              <th className="p-2 border">Profit</th>
              <th className="p-2 border">Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Basketball</td>
              <td className="p-2 border">Beginner</td>
              <td className="p-2 border">₹4,00,000</td>
              <td className="p-2 border">₹2,50,000</td>
              <td className="p-2 border">₹1,50,000</td>
              <td className="p-2 border">37%</td>
            </tr>
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}
