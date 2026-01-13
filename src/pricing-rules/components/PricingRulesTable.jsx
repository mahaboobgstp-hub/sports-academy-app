import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";

import PricingRuleRow from "./PricingRuleRow";

export default function PricingRulesTable() {
  const [rules, setRules] = useState([
    {
      id: "1",
      name: "Early Bird 10%",
      type: "EarlyBird",
      value: "10%",
      active: true
    },
    {
      id: "2",
      name: "WELCOME500",
      type: "Coupon",
      value: "₹500",
      active: false
    }
  ]);

  const toggleRule = (id) => {
    setRules((prev) =>
      prev.map((rule) =>
        rule.id === id ? { ...rule, active: !rule.active } : rule
      )
    );
  };

  return (
    <Card className="rounded-2xl shadow">
      <CardContent className="p-6 space-y-3">
        <div className="grid grid-cols-5 text-sm font-medium text-gray-500">
          <div>Rule Name</div>
          <div>Type</div>
          <div>Value</div>
          <div>Status</div>
          <div>Action</div>
        </div>

        {rules.map((rule) => (
          <PricingRuleRow
            key={rule.id}
            rule={rule}
            onToggle={toggleRule}
          />
        ))}
      </CardContent>
    </Card>
  );
}
