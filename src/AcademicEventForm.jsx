export default function AcademicEventForm() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Academic Season</h2>

      <label>Sport</label><br />
      <select>
        <option>Basketball</option>
        <option>Badminton</option>
      </select>

      <br /><br />

      <label>Year</label><br />
      <input placeholder="2025-26" />

      <br /><br />

      <label>Season</label><br />
      <select>
        <option>Season 1</option>
        <option>Season 2</option>
        <option>Season 3</option>
        <option>Summer Camp</option>
      </select>

      <br /><br />

      <label>Emirate</label><br />
      <select>
        <option>Abu Dhabi</option>
        <option>Dubai</option>
        <option>Sharjah</option>
        <option>Ajman</option>
        <option>Fujairah</option>
        <option>Ras Al Khaimah</option>
        <option>Umm Al Quwain</option>
      </select>

      <br /><br />

      <button>Create Season</button>
    </div>
  );
}
