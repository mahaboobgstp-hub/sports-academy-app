import { useState } from "react";
import StepSeason from "./StepSeason";
import StepLocation from "./StepLocation";
import StepProgram from "./StepProgram";
import StepClass from "./StepClass";
import StepStudent from "./StepStudent";
import StepProducts from "./StepProducts";

const steps = [
  "Season",
  "Location",
  "Program",
  "Class",
  "Student",
  "Products"
];

export default function BookingWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const update = (data) =>
    setFormData({ ...formData, ...data });

  return (
    <div className="wizard">
      <h2>Book Academy Class</h2>

      <div className="steps">
        {steps.map((s, i) => (
          <span
            key={i}
            className={i === step ? "active-step" : ""}
          >
            {s}
          </span>
        ))}
      </div>

      {step === 0 && <StepSeason onNext={next} onChange={update} />}
      {step === 1 && <StepLocation onNext={next} onBack={back} onChange={update} />}
      {step === 2 && <StepProgram onNext={next} onBack={back} onChange={update} />}
      {step === 3 && <StepClass onNext={next} onBack={back} onChange={update} />}
      {step === 4 && <StepStudent onNext={next} onBack={back} onChange={update} />}
      {step === 5 && <StepProducts data={formData} />}
    </div>
  );
}
