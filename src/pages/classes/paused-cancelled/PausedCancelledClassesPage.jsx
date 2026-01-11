import StatusFilter from "./components/StatusFilter";
import ClassStatusTable from "./components/ClassStatusTable";
import { pausedCancelledClasses } from "./mockData";

export default function PausedCancelledClassesPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
<div className="bg-green-500 text-white p-6">
  Tailwind Active
</div>
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Paused / Cancelled Classes
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Track paused batches, cancelled programs, refunds, make-ups & compliance
        </p>
      </div>

      {/* Filters */}
      <StatusFilter />

      {/* Table */}
      <ClassStatusTable data={pausedCancelledClasses} />

    </div>
  );
}
