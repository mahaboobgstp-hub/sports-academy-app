import AppLayout from "../layout/AppLayout";

export default function Placeholder({ title }) {
  return (
    <AppLayout>
      <h2>{title}</h2>
      <div className="placeholder">
        UI will be implemented in next phase.
      </div>
    </AppLayout>
  );
}

