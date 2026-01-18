export default function ExportButton({ data }) {
  const handleExport = () => {
    console.log("Export attendance:", data);
    alert("Export will support CSV / Excel / API");
  };

  return <button className="export-btn">Export</button>;
}
