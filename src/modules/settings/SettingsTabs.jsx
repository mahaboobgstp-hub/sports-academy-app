import { useState } from "react";
import GeneralSettings from "./pages/GeneralSettings";
import PaymentSettings from "./pages/PaymentSettings";
import TaxSettings from "./pages/TaxSettings";

export default function SettingsTabs() {
  const [tab, setTab] = useState("general");

  return (
    <>
      <div className="flex gap-4 border-b mb-6">
        {["general", "payment", "tax"].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-2 ${tab === t ? "border-b-2 border-black font-medium" : ""}`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {tab === "general" && <GeneralSettings />}
      {tab === "payment" && <PaymentSettings />}
      {tab === "tax" && <TaxSettings />}
    </>
  );
}
