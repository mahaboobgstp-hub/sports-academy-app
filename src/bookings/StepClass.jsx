export default function StepClass({ onNext, onBack, onChange }) {
  const classes = [
    "12-Jan-26 | 6–7 AM | Court A",
    "14-Jan-26 | 7–8 AM | Court B"
  ];

  return (
    <>
      <h3>Select Class</h3>
      <select onChange={(e) => onChange({ class: e.target.value })}>
        <option>Select class</option>
        {classes.map(c => <option key={c}>{c}</option>)}
      </select>

      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </>
  );
}
