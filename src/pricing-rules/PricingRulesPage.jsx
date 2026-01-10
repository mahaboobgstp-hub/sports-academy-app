import PricingRulesTable from "./components/PricingRulesTable";
import CreatePricingRuleForm from "./components/CreatePricingRuleForm";

export default function PricingRulesPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Pricing Rules</h1>
      <PricingRulesTable />
      <CreatePricingRuleForm />
    </div>
  );
}
