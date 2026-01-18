import PayrollRow from "./PayrollRow";

export default function PayrollEmployeeTable({ employees, openDrawer }) {
  return (
    <table width="100%" border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Gross</th>
          <th>Deductions</th>
          <th>Net Pay</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <PayrollRow key={emp.id} emp={emp} openDrawer={openDrawer} />
        ))}
      </tbody>
    </table>
  );
}
