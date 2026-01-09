export default function SearchPanel() {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        placeholder="Enter Parent Mobile Number"
        style={{ padding: 8, width: 260 }}
      />
      <button>Search</button>
    </div>
  );
}
