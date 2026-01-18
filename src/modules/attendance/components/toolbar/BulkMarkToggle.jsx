export default function BulkMarkToggle({ bulkMode, setBulkMode }) {
  return (
    <button onClick={() => setBulkMode(!bulkMode)}>
      Bulk Mode: {bulkMode ? "ON" : "OFF"}
    </button>
  );
}
