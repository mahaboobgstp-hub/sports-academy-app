import SettingsTabs from "./SettingsTabs";

export default function SettingsLayout() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <SettingsTabs />
    </div>
  );
}
