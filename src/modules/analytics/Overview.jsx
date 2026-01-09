import KPICard from "./components/KPICard";
import SectionCard from "./components/SectionCard";
import PlaceholderChart from "./components/PlaceholderChart";

export default function Overview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
        <select className="border rounded px-3 py-1">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Today</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard title="Total Revenue" value="₹12,40,000" trend="↑ 8%" />
        <KPICard title="Active Students" value="320" />
        <KPICard title="Utilization %" value="74%" />
        <KPICard title="Outstanding Dues" value="₹1,10,000" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <SectionCard title="Revenue Trend">
          <PlaceholderChart label="Revenue Line Chart" />
        </SectionCard>

        <SectionCard title="Enrollment Trend">
          <PlaceholderChart label="Enrollment Bar Chart" />
        </SectionCard>
      </div>
    </div>
  );
}
