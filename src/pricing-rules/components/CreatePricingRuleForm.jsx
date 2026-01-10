import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default function CreatePricingRuleForm() {
  return (
    <Card className="rounded-2xl shadow">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-lg font-medium">Create Pricing Rule</h2>

        <div className="grid grid-cols-4 gap-4">
          <Input placeholder="Rule Name" />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Rule Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Discount">Discount</SelectItem>
              <SelectItem value="EarlyBird">Early Bird</SelectItem>
              <SelectItem value="Coupon">Coupon</SelectItem>
              <SelectItem value="Dynamic">Dynamic Pricing</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Value (e.g. 10% or 500)" />

          <Button className="rounded-xl">Add Rule</Button>
        </div>
      </CardContent>
    </Card>
  );
}
