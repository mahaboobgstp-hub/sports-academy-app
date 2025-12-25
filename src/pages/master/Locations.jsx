import { useState } from "react";
//import { supabase } from "../lib/supabase";

export default function Locations() {
  // ===============================
  // LOCATION STATE
  // ===============================
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
    company_name: "",
    vendor_phone: "",
    vendor_email: "",
    contract_start_date: "",
    contract_end_date: "",

    notes: ""
  });

  // ===============================
  // COURTS STATE
  // ===============================
  const [courts, setCourts] = useState([]);

  // ===============================
  // HELPERS
  // ===============================
  function updateLocation(field, value) {
    setLocation(prev => ({ ...prev, [field]: value }));
  }

  function addCourt() {
    setCourts([
      ...courts,
      { name: "", code: "", seats: "", type: "Indoor" }
    ]);
  }

  function updateCourt(index, field, value) {
    const updated = [...courts];
    updated[index][field] = value;
    setCourts(updated);
  }

  // ===============================
  // SAVE LOCATION + VENDOR + COURTS
  // ===============================
  async function saveLocation() {
    if (!location.name || !location.code) {
      alert("Location Name and Code are required");
      return;
    }

    // 1️⃣ Insert Location
    const { data: loc, error } = await supabase
      .from("locations")
      .insert([{
        name: location.name,
        code: location.code,
        city: location.city,
        status: location.status,
        full_address: location.full_address,
        timezone: location.timezone,
        max_capacity: location.max_capacity || null,
        contact_name: location.contact_name,
        contact_role: location.contact_role,
        contact_phone: location.contact_phone,
        contact_email: location.contact_email,
        notes: location.notes
      }])
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    const locationId = loc.id;

    // 2️⃣ Insert Vendor (optional)
    if (location.vendor_name) {
      await supabase.from("location_vendors").insert([{
        location_id: locationId,
        vendor_name: location.vendor_name,
        vendor_type: location.vendor_type,
        company_name: location.company_name,
        phone: location.vendor_phone,
        email: location.vendor_email,
        contract_start_date: location.contract_start_date || null,
        contract_end_date: location.contract_end_date || null
      }]);
    }

    // 3️⃣ Insert Courts
    for (const court of courts) {
      if (!court.name) continue;

      await supabase.from("courts").insert([{
        location_id: locationId,
        name: court.name,
        code: court.code,
        capacity: court.seats || null,
        indoor: court.type === "Indoor"
      }]);
    }

    alert("Location created successfully");

    // Reset
    setCourts([]);
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
      company_name: "",
      vendor_phone: "",
      vendor_email: "",
      contract_start_date: "",
      contract_end_date: "",
      notes: ""
    });
  }

  // ===============================
  // UI
  // ===============================
  return (
    <div>
      <h3>Locations</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>

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

        <input placeholder="Full Address"
          style={{ gridColumn: "span 4" }}
          value={location.full_address}
          onChange={e => updateLocation("full_address", e.target.value)} />

        <input placeholder="Timezone (e.g. IST)"
          value={location.timezone}
          onChange={e => updateLocation("timezone", e.target.value)} />

        <input type="number" placeholder="Max Capacity"
          value={location.max_capacity}
          onChange={e => updateLocation("max_capacity", e.target.value)} />

        <h4 style={{ gridColumn: "span 4" }}>Contact Person</h4>

        <input placeholder="Contact Person Name"
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

        <input placeholder="Vendor Company Name"
          value={location.company_name}
          onChange={e => updateLocation("company_name", e.target.value)} />

        <input placeholder="Vendor Phone"
          value={location.vendor_phone}
          onChange={e => updateLocation("vendor_phone", e.target.value)} />

        <input placeholder="Vendor Email"
          value={location.vendor_email}
          onChange={e => updateLocation("vendor_email", e.target.value)} />

        <label>
          Contract Start Date
          <input type="date"
            value={location.contract_start_date}
            onChange={e => updateLocation("contract_start_date", e.target.value)} />
        </label>

        <label>
          Contract End Date
          <input type="date"
            value={location.contract_end_date}
            onChange={e => updateLocation("contract_end_date", e.target.value)} />
        </label>

        <input placeholder="Notes"
          style={{ gridColumn: "span 3" }}
          value={location.notes}
          onChange={e => updateLocation("notes", e.target.value)} />

        <button onClick={saveLocation}>Add Location</button>
      </div>

      <h4>Courts</h4>

      {courts.map((court, index) => (
        <div key={index}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 8 }}>
          <input placeholder="Court Name"
            value={court.name}
            onChange={e => updateCourt(index, "name", e.target.value)} />
          <input placeholder="Court Code"
            value={court.code}
            onChange={e => updateCourt(index, "code", e.target.value)} />
          <input type="number" placeholder="Max Seats"
            value={court.seats}
            onChange={e => updateCourt(index, "seats", e.target.value)} />
          <select value={court.type}
            onChange={e => updateCourt(index, "type", e.target.value)}>
            <option>Indoor</option>
            <option>Outdoor</option>
          </select>
        </div>
      ))}

      <button onClick={addCourt}>+ Add Court</button>
    </div>
  );
}
