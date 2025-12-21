export default function StepLocation({ onNext, onBack, onChange }) {
  const locations = ["Abu Dhabi - Test School", "Dubai - Academy"];

  return (
    <>
      <h3>Select Location</h3>
      <select onChange={(e) => onChange({ location: e.target.value })}>
        <option>Select location</option>
        {locations.map(l => <option key={l}>{l}</option>)}
      </select>

      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </>
  );
}
