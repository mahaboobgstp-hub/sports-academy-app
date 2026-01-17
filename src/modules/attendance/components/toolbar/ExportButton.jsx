export default function ExportButton({ data }) {
  const exportCSV = () => {
    const csv = JSON.stringify(data);
    const blob = new Blob([csv], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "attendance.txt";
    a.click();
  };

  return <button onClick={exportCSV}>Export</button>;
}
