export default function DayCell({ status, onClick }) {
  return (
    <td className={`day-cell ${status}`} onClick={onClick}>
      {status || "-"}
    </td>
  );
}
