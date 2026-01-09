export default function CalendarFilters() {
  return (
    <div className="calendar-filters">
      <select>
        <option>All Coaches</option>
        <option>Arjun</option>
        <option>Rohit</option>
      </select>

      <select>
        <option>All Sports</option>
        <option>Basketball</option>
        <option>Football</option>
      </select>

      <select>
        <option>All Locations</option>
        <option>Court 1</option>
        <option>Ground A</option>
      </select>
    </div>
  );
}
