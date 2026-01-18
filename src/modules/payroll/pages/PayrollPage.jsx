import PayrollPeriodSelector from "../components/period/PayrollPeriodSelector";
import PayrollEmployeeTable from "../components/table/PayrollEmployeeTable";
import PayrollSummary from "../components/summary/PayrollSummary";
import PayrollActions from "../components/actions/PayrollActions";
import { usePayroll } from "../hooks/usePayroll";

export default function PayrollPage() {
  const payroll = usePayroll();

  return (
    <div style={{ padding: 24 }}>
      <PayrollPeriodSelector {...payroll} />
      <PayrollSummary {...payroll} />
      <PayrollEmployeeTable {...payroll} />
      <PayrollActions {...payroll} />
    </div>
  );
}
