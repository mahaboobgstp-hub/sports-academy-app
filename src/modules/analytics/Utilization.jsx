import SectionCard from "./components/SectionCard";

export default function Utilization() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Utilization Analytics</h1>

      <SectionCard title="Utilization Summary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>Total Slots: 480</div>
          <div>Used Slots: 355</div>
          <div>Utilization %: 74%</div>
          <div>Idle Slots: 125</div>
        </div>
      </SectionCard>

      <SectionCard title="Slot Utilization">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Court</th>
              <th className="p-2 border">Time</th>
              <th className="p-2 border">Capacity</th>
              <th className="p-2 border">Booked</th>
              <th className="p-2 border">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Center A</td>
              <td className="p-2 border">Court 1</td>
              <td className="p-2 border">6–7 PM</td>
              <td className="p-2 border">20</td>
              <td className="p-2 border">12</td>
              <td className="p-2 border">60%</td>
            </tr>
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}
