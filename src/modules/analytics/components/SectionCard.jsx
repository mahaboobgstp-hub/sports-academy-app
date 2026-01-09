export default function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
