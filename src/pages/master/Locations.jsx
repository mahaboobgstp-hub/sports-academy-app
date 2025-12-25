import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [courts, setCourts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    code: "",
    city: "",
    status: "ACTIVE",
    address: "",
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
    contract_start: "",
    contract_end: "",
    notes: ""
  });

  useEffect(() => {
    loadLocations();
  }, []);

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  async function loadLocations() {
    const { data } = await supabase
      .from("locations")
      .select("*, courts(*)")
      .order("created_at", { ascending: false });

    setLocations(data || []);
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

  async function saveLocation() {
    if (!form.name || !form.code) {
      alert("Location name and code are required");
      return;
    }

    const { data: location, error } = await supabase
      .from("locations")
      .insert([form])
      .select()
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    if (courts.length > 0) {
      const courtRows = courts.map(c => ({
        location_id: location.id,
        name: c.name,
        code: c.code,
        max_seats: c.seats,
        type: c.type
      }));

      const { error: courtError } = await supabase
        .from("courts")
        .insert(courtRows);

      if (courtError) {
        alert(courtError.message);
        return;
      }
    }

    alert("Location saved successfully");

    setForm({
      name: "",
      code: "",
      city: "",
      status: "ACTIVE",
      address: "",
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
      contract_start: "",
      contract_end: "",
      notes: ""
    });

    setCourts([]);
    loadLocations();
  }

  return (
    <div>
      <h3>Locations</h3>

      <div className="form-grid">
        <input placeholder="Location Name" value={form.name} onChange={e => updateField("name", e.target.value)} />
        <input placeholder="Location Code" value={form.code} onChange={e => updateField("code", e.target.value)} />
        <input placeholder="City" value={form.city} onChange={e => updateField("city", e.target.value)} />

        <select value={form.status} onChange={e => updateField("status", e.target.value)}>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <input placeholder="Full Address" value={form.address} onChange={e => updateField("address", e.target.value)} />
        <input placeholder="Timezone" value={form.timezone} onChange={e => updateField("timezone", e.target.value)} />
        <input type="number" placeholder="Max Capacity" value={form.max_capacity} onChange={e => updateField("max_capacity", e.target.value)} />

        <h4>Contact Person</h4>
        <input placeholder="Name" value={form.contact_name} onChange={e => updateField("contact_name", e.target.value)} />
        <input placeholder="Role" value={form.contact_role} onChange={e => updateField("contact_role", e.target.value)} />
        <input placeholder="Phone" value={form.contact_phone} onChange={e => updateField("contact_phone", e.target.value)} />
        <input placeholder="Email" value={form.contact_email} onChange={e => updateField("contact_email", e.target.value)} />

        <h4>Vendor / Contractor</h4>
        <input placeholder="Vendor Name" value={form.vendor_name} onChange={e => updateField("vendor_name", e.target.value)} />
        <input placeholder="Vendor Type" value={form.vendor_type} onChange={e => updateField("vendor_type", e.target.value)} />
        <input placeholder="Company" value={form.vendor_company} onChange={e => updateField("vendor_company", e.target.value)} />
        <input placeholder="Phone" value={form.vendor_phone} onChange={e => updateField("vendor_phone", e.target.value)} />
        <input placeholder="Email" value={form.vendor_email} onChange={e => updateField("vendor_email", e.target.value)} />
        <input type="date" value={form.contract_start} onChange={e => updateField("contract_start", e.target.value)} />
        <input type="date" value={form.contract_end} onChange={e => updateField("contract_end", e.target.value)} />
        <input placeholder="Notes" value={form.notes} onChange={e => updateField("notes", e.target.value)} />

        <h4>Courts</h4>

        {courts.map((c, i) => (
          <div key={i}>
            <input placeholder="Court Name" value={c.name} onChange={e => updateCourt(i, "name", e.target.value)} />
            <input placeholder="Court Code" value={c.code} onChange={e => updateCourt(i, "code", e.target.value)} />
            <input type="number" placeholder="Seats" value={c.seats} onChange={e => updateCourt(i, "seats", e.target.value)} />
            <select value={c.type} onChange={e => updateCourt(i, "type", e.target.value)}>
              <option>Indoor</option>
              <option>Outdoor</option>
            </select>
          </div>
        ))}

        <button onClick={addCourt}>+ Add Court</button>/
        <button onClick={saveLocation}>Save Location</button>
      </div>

      <h3>Existing Locations</h3>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>City</th>
            <th>Courts</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(l => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.code}</td>
              <td>{l.city}</td>
              <td>{l.courts?.length || 0}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
