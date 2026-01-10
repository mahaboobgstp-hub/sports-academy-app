import SaveSettingsBar from "../components/SaveSettingsBar";

export default function PaymentSettings() {
  return (
    <div className="space-y-4 max-w-xl">
      <Select label="Payment Gateway">
        <option>Razorpay</option>
        <option>Stripe</option>
      </Select>

      <Input label="Public Key" />
      <Input label="Secret Key" />
      <Toggle label="Enable Online Payments" />

      <SaveSettingsBar />
    </div>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input className="w-full border rounded px-3 py-2" />
    </div>
  );
}

function Select({ label, children }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <select className="w-full border rounded px-3 py-2">{children}</select>
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
