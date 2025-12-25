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

  async function loadLocations() {
    const { data } = await supabase
      .from("locations")
      .select("id,name,code,city,status");

    setLocations(data || []);
  }

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  function addCourt() {
    setCourts([...courts, { name: "", code: "", seats: "", type: "Indoor" }]);
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

    const payload = {
      ...form,
      max_capacity: form.max_capacity ? Number(form.max_capacity) : null,
      contract_start: form.contract_start || null,
      contract_end: form.contract_end || null
    };

    const { data: location, error } = await supabase
      .from("locations")
      .insert([payload])
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
        max_seats: c.seats ? Number(c.seats) : null,
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

      <input placeholder="Location Name" value={form.name} onChange={e => updateField("name", e.target.value)} />
      <input placeholder="Location Code" value={form.code} onChange={e => updateField("code", e.target.value)} />
      <input placeholder="City" value={form.city} onChange={e => updateField("city", e.target.value)} />

      <button onClick={addCourt}>+ Add Court</button>
      <button onClick={saveLocation}>Save Location</button>

      <h4>Courts</h4>
      {courts.map((c, i) => (
        <div key={i}>
          <input placeholder="Court Name" value={c.name} onChange={e => updateCourt(i, "name", e.target.value)} />
          <input placeholder="Court Code" value={c.code} onChange={e => updateCourt(i, "code", e.target.value)} />
          <input placeholder="Seats" value={c.seats} onChange={e => updateCourt(i, "seats", e.target.value)} />
          <select value={c.type} onChange={e => updateCourt(i, "type", e.target.value)}>
            <option>Indoor</option>
            <option>Outdoor</option>
          </select>
        </div>
      ))}

      <h3>Existing Locations</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>City</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {locations.map(l => (
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.code}</td>
              <td>{l.city}</td>
              <td>{l.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
