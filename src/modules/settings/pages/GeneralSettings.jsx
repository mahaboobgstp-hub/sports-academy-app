import SaveSettingsBar from "../components/SaveSettingsBar";

export default function GeneralSettings() {
  return (
    <div className="space-y-4 max-w-xl">
      <Input label="Academy Name" />
      <Input label="Default Currency" placeholder="INR" />
      <Input label="Timezone" placeholder="Asia/Kolkata" />
      <Input label="Support Email" />
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
