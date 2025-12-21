export default function StepStudent({ onNext, onBack, onChange }) {
  return (
    <>
      <h3>Student Details</h3>

      <input placeholder="Student Name" onChange={e => onChange({ studentName: e.target.value })} />
      <input placeholder="Age" type="number" onChange={e => onChange({ age: e.target.value })} />

      <h4>Parent Details</h4>
      <input placeholder="Parent Name" onChange={e => onChange({ parentName: e.target.value })} />
      <input placeholder="Mobile" />
      <input placeholder="Email" />

      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </>
  );
}
