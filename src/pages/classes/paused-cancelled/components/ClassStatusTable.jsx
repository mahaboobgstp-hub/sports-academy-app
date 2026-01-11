import ClassStatusBadge from "./ClassStatusBadge";

export default function ClassStatusTable({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">

      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {[
              "Class",
              "Program",
              "Location",
              "Coach",
              "Status",
              "Effective From",
              "Reason",
              "Refund",
              "Make-Up",
              "Compliance"
            ].map((h) => (
              <th key={h} className="p-4 text-left font-semibold whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) => (
            <tr
              key={item.classId}
              className={`border-t ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50 transition`}
            >
              <td className="p-4 font-medium">{item.className}</td>
              
              <td className="p-4 bg-red-500 text-white"> {item.program} </td>

              <td className="p-4">{item.location}</td>
              <td className="p-4">{item.coach}</td>
              <td className="p-4">
                <ClassStatusBadge status={item.status} />
              </td>
              <td className="p-4 whitespace-nowrap">
                {item.pausedOrCancelledOn}
              </td>
              <td className="p-4 text-gray-600">{item.reason}</td>
              <td className="p-4">
                {item.refundRequired ? "Yes" : "No"}
              </td>
              <td className="p-4">
                {item.makeUpRequired ? "Yes" : "No"}
              </td>
              <td className="p-4">
                {item.complianceFlag ? (
                  <span className="text-red-600 font-semibold flex items-center gap-1">
                    ⚠ Action
                  </span>
                ) : (
                  "No"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
