import RuleStatusToggle from "./RuleStatusToggle";
import RuleTypeBadge from "./RuleTypeBadge";

export default function PricingRuleRow({ rule, onToggle }) {
  return (
    <div className="grid grid-cols-5 items-center border-t py-3">
      <div>{rule.name}</div>
      <RuleTypeBadge type={rule.type} />
      <div>{rule.value}</div>
      <RuleStatusToggle active={rule.active} />
      <button
        className="text-sm text-blue-600"
        onClick={() => onToggle(rule.id)}
      >
        Toggle
      </button>
    </div>
  );
}
