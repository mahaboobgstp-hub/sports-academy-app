export default function LocationMetricsModal({ location, onClose }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "#fff",
        padding: "20px",
        margin: "50px auto",
        width: "400px"
      }}>
        <h3>{location.name}</h3>

        <p>Configure courts, days, hours here (next step).</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
