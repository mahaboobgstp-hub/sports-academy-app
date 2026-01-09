import StatusFilter from "./components/StatusFilter";
import ClassStatusTable from "./components/ClassStatusTable";
import { pausedCancelledClasses } from "./mockData";

export default function PausedCancelledClassesPage() {
  return (
    <div className="p-6 space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Paused / Cancelled Classes</h1>
        <p className="text-sm text-gray-500">
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
