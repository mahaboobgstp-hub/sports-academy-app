export default function PayrollRow({ emp, openDrawer }) {
  return (
    <tr onClick={() => openDrawer(emp)}>
      <td>{emp.name}</td>
      <td>{emp.gross}</td>
      <td>{emp.deductions}</td>
      <td>{emp.net}</td>
    </tr>
  );
}
