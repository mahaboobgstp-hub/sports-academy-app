import ClassStatusBadge from "./ClassStatusBadge";

export default function ClassStatusTable({ data }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="p-3 text-left">Class</th>
            <th className="p-3">Program</th>
            <th className="p-3">Location</th>
            <th className="p-3">Coach</th>
            <th className="p-3">Status</th>
            <th className="p-3">Effective From</th>
            <th className="p-3">Reason</th>
            <th className="p-3">Refund</th>
            <th className="p-3">Make-Up</th>
            <th className="p-3">Compliance</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.classId} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{item.className}</td>
              <td className="p-3">{item.program}</td>
              <td className="p-3">{item.location}</td>
              <td className="p-3">{item.coach}</td>
              <td className="p-3">
                <ClassStatusBadge status={item.status} />
              </td>
              <td className="p-3">{item.pausedOrCancelledOn}</td>
              <td className="p-3 text-gray-500">{item.reason}</td>
              <td className="p-3">{item.refundRequired ? "Yes" : "No"}</td>
              <td className="p-3">{item.makeUpRequired ? "Yes" : "No"}</td>
              <td className="p-3">
                {item.complianceFlag ? "⚠️ Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
