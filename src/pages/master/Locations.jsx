import { useState } from "react";
//import { supabase } from "../supabaseClient";

export default function Locations() {
  const [saving, setSaving] = useState(false);

  const [location, setLocation] = useState({
    name: "",
    code: "",
    city: "",
    status: "ACTIVE",
    full_address: "",
    timezone: "",
    max_capacity: "",
    contact_name: "",
    contact_role: "",
    contact_phone: "",
    contact_email: "",
    vendor_name: "",
    vendor_type: "",
    vendor_company: "",
    vendor_phone: "",
    vendor_email: "",
    contract_start_date: "",
    contract_end_date: "",
    notes: ""
  });

  const [courts, setCourts] = useState([]);

  /* =============================
     HELPERS
  ============================== */

  function updateLocation(field, value) {
    setLocation({ ...location, [field]: value });
  }

  function addCourt() {
    setCourts([
      ...courts,
      { name: "", code: "", capacity: "", indoor: true }
    ]);
  }

  function updateCourt(index, field, value) {
    const updated = [...courts];
    updated[index][field] = value;
    setCourts(updated);
  }

  /* =============================
     SAVE LOCATION + COURTS
  ============================== */

  async function saveLocation() {
    if (!location.name || !location.code) {
      alert("Location Name and Code are required");
      return;
    }

    if (courts.length === 0) {
      alert("Please add at least one court");
      return;
    }

    setSaving(true);

    try {
      // 1️⃣ Insert Location
      const { data: loc, error: locError } = await supabase
        .from("locations")
        .insert([{
          ...location,
          max_capacity: location.max_capacity
            ? Number(location.max_capacity)
            : null
        }])
        .select()
        .single();

      if (locError) throw locError;

      // 2️⃣ Insert Courts (child)
      const courtsPayload = courts.map(c => ({
        location_id: loc.id,
        name: c.name,
        code: c.code,
        capacity: c.capacity ? Number(c.capacity) : null,
        indoor: c.indoor
      }));

      const { error: courtError } = await supabase
        .from("courts")
        .insert(courtsPayload);

      if (courtError) throw courtError;

      alert("Location & Courts saved successfully");

      // Reset form
      setLocation({
        name: "",
        code: "",
        city: "",
        status: "ACTIVE",
        full_address: "",
        timezone: "",
        max_capacity: "",
        contact_name: "",
        contact_role: "",
        contact_phone: "",
        contact_email: "",
        vendor_name: "",
        vendor_type: "",
        vendor_company: "",
        vendor_phone: "",
        vendor_email: "",
        contract_start_date: "",
        contract_end_date: "",
        notes: ""
      });

      setCourts([]);

    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setSaving(false);
    }
  }

  /* =============================
     UI
  ============================== */

  return (
    <div>
      <h3>Locations</h3>

      <div className="form-grid">
        <input placeholder="Location Name" value={location.name}
          onChange={e => updateLocation("name", e.target.value)} />

        <input placeholder="Location Code" value={location.code}
          onChange={e => updateLocation("code", e.target.value)} />

        <input placeholder="City" value={location.city}
          onChange={e => updateLocation("city", e.target.value)} />

        <select value={location.status}
          onChange={e => updateLocation("status", e.target.value)}>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <input placeholder="Full Address" style={{ gridColumn: "span 4" }}
          value={location.full_address}
          onChange={e => updateLocation("full_address", e.target.value)} />

        <input placeholder="Timezone (e.g. IST)" value={location.timezone}
          onChange={e => updateLocation("timezone", e.target.value)} />

        <input type="number" placeholder="Max Capacity"
          value={location.max_capacity}
          onChange={e => updateLocation("max_capacity", e.target.value)} />

        <h4 style={{ gridColumn: "span 4" }}>Contact Person</h4>

        <input placeholder="Contact Name"
          value={location.contact_name}
          onChange={e => updateLocation("contact_name", e.target.value)} />

        <input placeholder="Contact Role"
          value={location.contact_role}
          onChange={e => updateLocation("contact_role", e.target.value)} />

        <input placeholder="Contact Phone"
          value={location.contact_phone}
          onChange={e => updateLocation("contact_phone", e.target.value)} />

        <input placeholder="Contact Email"
          value={location.contact_email}
          onChange={e => updateLocation("contact_email", e.target.value)} />

        <h4 style={{ gridColumn: "span 4" }}>Vendor / Contractor</h4>

        <input placeholder="Vendor Name"
          value={location.vendor_name}
          onChange={e => updateLocation("vendor_name", e.target.value)} />

        <input placeholder="Vendor Type"
          value={location.vendor_type}
          onChange={e => updateLocation("vendor_type", e.target.value)} />

        <input placeholder="Vendor Company"
          value={location.vendor_company}
          onChange={e => updateLocation("vendor_company", e.target.value)} />

        <input placeholder="Vendor Phone"
          value={location.vendor_phone}
          onChange={e => updateLocation("vendor_phone", e.target.value)} />

        <input placeholder="Vendor Email"
          value={location.vendor_email}
          onChange={e => updateLocation("vendor_email", e.target.value)} />

        <input type="date"
          onChange={e => updateLocation("contract_start_date", e.target.value)} />

        <input type="date"
          onChange={e => updateLocation("contract_end_date", e.target.value)} />

        <input placeholder="Notes" style={{ gridColumn: "span 4" }}
          value={location.notes}
          onChange={e => updateLocation("notes", e.target.value)} />
      </div>

      <h4>Courts</h4>

      {courts.map((c, i) => (
        <div key={i} className="form-grid">
          <input placeholder="Court Name"
            value={c.name}
            onChange={e => updateCourt(i, "name", e.target.value)} />

          <input placeholder="Court Code"
            value={c.code}
            onChange={e => updateCourt(i, "code", e.target.value)} />

          <input type="number" placeholder="Max Seats"
            value={c.capacity}
            onChange={e => updateCourt(i, "capacity", e.target.value)} />

          <select value={c.indoor ? "Indoor" : "Outdoor"}
            onChange={e => updateCourt(i, "indoor", e.target.value === "Indoor")}>
            <option>Indoor</option>
            <option>Outdoor</option>
          </select>
        </div>
      ))}

      <button onClick={addCourt}>+ Add Court</button>

      <br /><br />

      <button onClick={saveLocation} disabled={saving}>
        {saving ? "Saving..." : "Save Location"}
      </button>
    </div>
  );
}
