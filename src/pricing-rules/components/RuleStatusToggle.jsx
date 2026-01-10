import { Switch } from "@/components/ui/switch";

export default function RuleStatusToggle({ active }) {
  return (
    <div className="flex items-center gap-2">
      <Switch checked={active} />
      <span className={active ? "text-green-600" : "text-gray-400"}>
        {active ? "Active" : "Inactive"}
      </span>
    </div>
  );
}
