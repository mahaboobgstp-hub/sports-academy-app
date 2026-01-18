import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/payroll.api";
import { calculateSalary } from "../services/payroll.engine.client";

export function usePayroll() {
  const [period, setPeriod] = useState("");
  const [employees, setEmployees] = useState([]);
  const [drawerEmp, setDrawerEmp] = useState(null);

  useEffect(() => {
    fetchEmployees().then(data => {
      setEmployees(data.map(calculateSalary));
    });
  }, []);

  const summary = {
    count: employees.length,
    total: employees.reduce((a, b) => a + b.net, 0)
  };

  return {
    period,
    setPeriod,
    employees,
    summary,
    openDrawer: setDrawerEmp,
    closeDrawer: () => setDrawerEmp(null),
    processPayroll: () => alert("Payroll processed")
  };
}
