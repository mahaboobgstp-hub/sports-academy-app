import SaveSettingsBar from "../components/SaveSettingsBar";

export default function TaxSettings() {
  return (
    <div className="space-y-4 max-w-xl">
      <Input label="GST Number" />
      <Input label="Default GST %" placeholder="18" />
      <Toggle label="Prices Inclusive of Tax" />
      <SaveSettingsBar />
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}

function Toggle({ label }) {
  return (
    <div className="flex items-center gap-3">
      <input type="checkbox" />
      <span>{label}</span>
    </div>
  );
}
