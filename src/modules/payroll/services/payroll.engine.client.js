import { PF_PERCENT, TAX_PERCENT } from "../config/payroll.rules";

export function calculateSalary(emp) {
  const gross = emp.basic + emp.hra;
  const deductions = (gross * (PF_PERCENT + TAX_PERCENT)) / 100;
  return {
    ...emp,
    gross,
    deductions,
    net: gross - deductions
  };
}
