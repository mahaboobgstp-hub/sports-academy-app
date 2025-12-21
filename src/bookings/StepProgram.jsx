export default function StepProgram({ onNext, onBack, onChange }) {
  const programs = ["ballsnbabies", "jr", "midlevel"];

  return (
    <>
      <h3>Select Program</h3>
      <select onChange={(e) => onChange({ program: e.target.value })}>
        <option>Select program</option>
        {programs.map(p => <option key={p}>{p}</option>)}
      </select>

      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </>
  );
}
