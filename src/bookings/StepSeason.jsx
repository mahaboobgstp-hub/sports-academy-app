export default function StepSeason({ onNext, onChange }) {
  const seasons = [
    "Basketball Season 1 2025–26",
    "Basketball Summer Camp"
  ];

  return (
    <>
      <h3>Select Season</h3>
      <select onChange={(e) => onChange({ season: e.target.value })}>
        <option>Select season</option>
        {seasons.map(s => <option key={s}>{s}</option>)}
      </select>

      <button onClick={onNext}>Next</button>
    </>
  );
}
